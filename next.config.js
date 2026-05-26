/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'lh3.googleusercontent.com'],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    PAYU_MERCHANT_KEY: process.env.PAYU_MERCHANT_KEY,
    PAYU_MERCHANT_SALT: process.env.PAYU_MERCHANT_SALT,
    PAYU_BASE_URL: process.env.PAYU_BASE_URL || 'https://test.payu.in',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

module.exports = nextConfig;
