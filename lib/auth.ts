import { randomBytes, scryptSync, timingSafeEqual, randomUUID } from 'crypto';
import { getDb } from '@/lib/mongodb';
import { User } from '@/types';

const HASH_KEY_LEN = 64;
const SALT_BYTE_LENGTH = 16;

function hashPassword(password: string, salt?: string) {
  const actualSalt = salt || randomBytes(SALT_BYTE_LENGTH).toString('hex');
  const derivedKey = scryptSync(password, actualSalt, HASH_KEY_LEN) as Buffer;
  return {
    hash: derivedKey.toString('hex'),
    salt: actualSalt,
  };
}

function sanitizeUser(user: any): User {
  const { password_hash, password_salt, ...safeUser } = user;
  return safeUser as User;
}

export async function createUser({
  email,
  password,
  full_name,
  phone,
}: {
  email: string;
  password: string;
  full_name?: string;
  phone?: string;
}): Promise<User> {
  const db = await getDb();
  const normalizedEmail = email.trim().toLowerCase();

  const existing = await db.collection('users').findOne({ email: normalizedEmail });
  if (existing) {
    throw new Error('A user with that email already exists.');
  }

  const { hash, salt } = hashPassword(password);
  const newUser = {
    id: randomUUID(),
    email: normalizedEmail,
    full_name: full_name || '',
    phone: phone || '',
    created_at: new Date().toISOString(),
    password_hash: hash,
    password_salt: salt,
  };

  await db.collection('users').insertOne(newUser);
  return sanitizeUser(newUser);
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  const db = await getDb();
  const normalizedEmail = email.trim().toLowerCase();
  const user = await db.collection('users').findOne({ email: normalizedEmail });

  if (!user || !user.password_hash || !user.password_salt) {
    return null;
  }

  const { hash } = hashPassword(password, user.password_salt);
  const hashBuffer = Buffer.from(hash, 'hex');
  const storedBuffer = Buffer.from(user.password_hash, 'hex');

  if (hashBuffer.length !== storedBuffer.length) {
    return null;
  }

  if (!timingSafeEqual(hashBuffer, storedBuffer)) {
    return null;
  }

  return sanitizeUser(user);
}

export async function getUserById(id: string): Promise<User | null> {
  const db = await getDb();
  const user = await db.collection('users').findOne({ id });
  if (!user) return null;
  return sanitizeUser(user);
}
