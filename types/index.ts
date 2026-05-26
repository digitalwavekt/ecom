export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  original_price: number;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  color: string;
  fabric: string;
  occasion: string[];
  tags: string[];
  badge?: string;
  rating: number;
  reviews: number;
  in_stock: boolean;
  stock_count: number;
  sku: string;
  weight?: string;
  dimensions?: string;
  care_instructions?: string;
  created_at?: string;
}

export interface CartItem {
  id: string;
  product_id: string;
  user_id?: string;
  session_id?: string;
  quantity: number;
  product: Product;
  created_at?: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  address?: Address;
  avatar_url?: string;
  created_at?: string;
}

export interface Address {
  full_name: string;
  phone: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface Order {
  id: string;
  user_id: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded';
  payment_method: string;
  total_amount: number;
  shipping_address: Address;
  items: OrderItem[];
  tracking_number?: string;
  created_at?: string;
  updated_at?: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  product_image: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  image?: string;
}

export interface FilterState {
  categories: string[];
  colors: string[];
  occasions: string[];
  fabrics: string[];
  priceRange: [number, number];
  availability: boolean;
}
