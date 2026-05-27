import { MongoClient, Db } from 'mongodb';
import { Product, Order } from '@/types';

const uri = process.env.MONGODB_URI_DIRECT || (process.env.MONGODB_URI as string);
const dbName = process.env.MONGODB_DB || 'trading-deals';

if (!uri) {
  throw new Error('Please define the MONGODB_URI or MONGODB_URI_DIRECT environment variable inside .env');
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (uri.startsWith('mongodb+srv://') && message.includes('querySrv')) {
      throw new Error(
        `MongoDB SRV lookup failed for ${uri.replace(/^mongodb\+srv:\/\//, '')}. ` +
          'This usually means local DNS cannot resolve the SRV record. ' +
          'Either fix DNS/SRV support for MongoDB Atlas or use a standard mongodb:// connection string via MONGODB_URI_DIRECT.'
      );
    }
    throw error;
  }

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export async function getDb() {
  const { db } = await connectToDatabase();
  return db;
}

export interface ProductFilters {
  category?: string;
  categories?: string[];
  colors?: string[];
  fabrics?: string[];
  occasions?: string[];
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
}

export async function getProducts(filters: ProductFilters = {}, limit = 0, sortBy = 'created_at', sortOrder: 'asc' | 'desc' = 'desc'): Promise<Product[]> {
  const db = await getDb();
  const query: Record<string, any> = {};

  if (filters.categories?.length) {
    query.category = { $in: filters.categories };
  } else if (filters.category) {
    query.category = filters.category;
  }

  if (filters.colors?.length) {
    query.color = { $in: filters.colors };
  }

  if (filters.fabrics?.length) {
    query.fabric = { $in: filters.fabrics };
  }

  if (filters.occasions?.length) {
    query.occasion = { $in: filters.occasions.map((occasion) => new RegExp(`^${escapeRegExp(occasion)}$`, 'i')) };
  }

  if (filters.inStock) {
    query.in_stock = true;
  }

  if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
    query.price = {};
    if (filters.minPrice !== undefined) query.price.$gte = filters.minPrice;
    if (filters.maxPrice !== undefined) query.price.$lte = filters.maxPrice;
  }

  if (filters.search) {
    query.name = { $regex: new RegExp(escapeRegExp(filters.search), 'i') };
  }

  const sort: Record<string, 1 | -1> = {};
  sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

  const cursor = db.collection<Product>('products').find(query).sort(sort);
  if (limit > 0) cursor.limit(limit);

  return cursor.toArray();
}

export async function getProductById(id: string): Promise<Product | null> {
  const db = await getDb();
  return db.collection<Product>('products').findOne({ id });
}

export async function createPendingOrder(order: Partial<Order> & { txn_id: string; items: any[] }): Promise<Order> {
  const db = await getDb();
  const now = new Date().toISOString();

  const orderRecord: Order = {
    id: order.id || crypto.randomUUID(),
    user_id: order.user_id || '',
    status: order.status || 'pending',
    payment_status: order.payment_status || 'pending',
    payment_method: order.payment_method || 'payu',
    total_amount: order.total_amount || 0,
    shipping_address: order.shipping_address as any,
    items: order.items || [],
    txn_id: order.txn_id,
    created_at: now,
    updated_at: now,
  } as Order;

  await db.collection<Order>('orders').insertOne(orderRecord);
  return orderRecord;
}

export async function updateOrderByTxnId(txnId: string, updateFields: Partial<Order>) {
  const db = await getDb();
  await db.collection<Order>('orders').updateOne(
    { txn_id: txnId },
    { $set: { ...updateFields, updated_at: new Date().toISOString() } }
  );
}
