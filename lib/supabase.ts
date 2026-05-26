import { createClient } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Product, CartItem, Order, User } from '@/types';

// Client-side Supabase client
export const supabaseClient = createClientComponentClient();

// Server-side Supabase client (for API routes)
export const createServerClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
};

// Database helper functions
export async function getProducts(filters?: {
  category?: string;
  color?: string;
  fabric?: string;
  occasion?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
}): Promise<Product[]> {
  let query = supabaseClient.from('products').select('*');

  if (filters?.category) {
    query = query.eq('category', filters.category);
  }
  if (filters?.color) {
    query = query.eq('color', filters.color);
  }
  if (filters?.fabric) {
    query = query.eq('fabric', filters.fabric);
  }
  if (filters?.occasion) {
    query = query.contains('occasion', [filters.occasion]);
  }
  if (filters?.minPrice !== undefined) {
    query = query.gte('price', filters.minPrice);
  }
  if (filters?.maxPrice !== undefined) {
    query = query.lte('price', filters.maxPrice);
  }
  if (filters?.inStock) {
    query = query.eq('in_stock', true);
  }
  if (filters?.search) {
    query = query.ilike('name', `%${filters.search}%`);
  }

  const { data, error } = await query.order('created_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabaseClient
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data;
}

export async function getCartItems(userId?: string, sessionId?: string): Promise<CartItem[]> {
  let query = supabaseClient.from('cart_items').select('*, product:products(*)');

  if (userId) {
    query = query.eq('user_id', userId);
  } else if (sessionId) {
    query = query.eq('session_id', sessionId);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

export async function addToCart(productId: string, quantity: number, userId?: string, sessionId?: string) {
  const { data: existing } = await supabaseClient
    .from('cart_items')
    .select('*')
    .eq('product_id', productId)
    .eq(userId ? 'user_id' : 'session_id', userId || sessionId)
    .single();

  if (existing) {
    return await supabaseClient
      .from('cart_items')
      .update({ quantity: existing.quantity + quantity })
      .eq('id', existing.id);
  }

  return await supabaseClient.from('cart_items').insert({
    product_id: productId,
    quantity,
    user_id: userId || null,
    session_id: sessionId || null,
  });
}

export async function removeFromCart(cartItemId: string) {
  return await supabaseClient.from('cart_items').delete().eq('id', cartItemId);
}

export async function updateCartQuantity(cartItemId: string, quantity: number) {
  return await supabaseClient.from('cart_items').update({ quantity }).eq('id', cartItemId);
}

export async function createOrder(order: Partial<Order>): Promise<Order | null> {
  const { data, error } = await supabaseClient.from('orders').insert(order).select().single();
  if (error) throw error;
  return data;
}

export async function getOrders(userId: string): Promise<Order[]> {
  const { data, error } = await supabaseClient
    .from('orders')
    .select('*, items:order_items(*)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getUserProfile(userId: string): Promise<User | null> {
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) return null;
  return data;
}
