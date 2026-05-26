import CryptoJS from 'crypto-js';

export interface PayUParams {
  key: string;
  txnid: string;
  amount: number;
  productinfo: string;
  firstname: string;
  email: string;
  phone: string;
  surl: string;
  furl: string;
  udf1?: string;
  udf2?: string;
  udf3?: string;
  udf4?: string;
  udf5?: string;
}

export function generatePayUHash(params: PayUParams, salt: string): string {
  const hashString = `${params.key}|${params.txnid}|${params.amount}|${params.productinfo}|${params.firstname}|${params.email}|${params.udf1 || ''}|${params.udf2 || ''}|${params.udf3 || ''}|${params.udf4 || ''}|${params.udf5 || ''}||||||${salt}`;
  return CryptoJS.SHA512(hashString).toString();
}

export function verifyPayUHash(
  key: string,
  txnid: string,
  amount: string,
  productinfo: string,
  firstname: string,
  email: string,
  status: string,
  udf1: string,
  udf2: string,
  udf3: string,
  udf4: string,
  udf5: string,
  salt: string
): string {
  const hashString = `${salt}|${status}||||||${udf5 || ''}|${udf4 || ''}|${udf3 || ''}|${udf2 || ''}|${udf1 || ''}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
  return CryptoJS.SHA512(hashString).toString();
}

export function generateTransactionId(): string {
  return 'TXN' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
}

export const PAYU_BASE_URL = process.env.PAYU_BASE_URL || 'https://test.payu.in';
