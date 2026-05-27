import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const products = [
  {
    name: 'Green Patola Heritage Saree',
    description:
      'Rich Jari Weaving | Heavy Jacquard Woven Border. Beautiful Patola Style Digital Print with Full Saree Jari Work. Includes Matching Digital Print Blouse Piece. Premium Quality • Rich Finish • Elegant Look. Perfect For Festive Wear, Functions & Wedding Collection.',
    price: 1780,
    original_price: 2499,
    image: 'https://images.unsplash.com/photo-1610030469628-555d966e6e71?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1610030469628-555d966e6e71?w=800&q=80',
      'https://images.unsplash.com/photo-1609244723450-456e9f8dd4b9?w=800&q=80',
    ],
    category: 'Printed Sarees',
    subcategory: 'Patola',
    color: 'Green',
    fabric: 'Cotton',
    occasion: ['Festive', 'Wedding'],
    tags: ['heritage', 'patola', 'green', 'festive', 'bestseller'],
    badge: 'BEST SELLER',
    rating: 4.8,
    reviews: 124,
    in_stock: true,
    stock_count: 15,
    sku: 'TK-GPH-001',
    weight: '450g',
    care_instructions: 'Dry clean only. Do not bleach. Iron on low heat.',
  },
  {
    name: 'Green Patola Digital Print Saree',
    description:
      'Exclusive digital print Patola saree in vibrant green with traditional motifs. Crafted from premium cotton with rich finish. Comes with matching blouse piece.',
    price: 1780,
    original_price: 2299,
    image: 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=800&q=80'],
    category: 'Printed Sarees',
    subcategory: 'Patola',
    color: 'Green',
    fabric: 'Cotton',
    occasion: ['Festive', 'Party'],
    tags: ['patola', 'green', 'digital-print', 'limited'],
    badge: 'LIMITED STOCK',
    rating: 4.6,
    reviews: 89,
    in_stock: true,
    stock_count: 8,
    sku: 'TK-GPD-002',
    weight: '420g',
    care_instructions: 'Dry clean recommended. Wash separately in cold water.',
  },
  {
    name: 'Lavender Heritage Printed Saree',
    description:
      'Royal lavender saree with heritage prints and golden border work. Elegant design perfect for special occasions. Silk blend fabric with luxurious feel.',
    price: 1780,
    original_price: 2599,
    image: 'https://images.unsplash.com/photo-1583391733951-4c03a8b1a1c0?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583391733951-4c03a8b1a1c0?w=800&q=80',
      'https://images.unsplash.com/photo-1609244723450-456e9f8dd4b9?w=800&q=80',
    ],
    category: 'Printed Sarees',
    subcategory: 'Heritage',
    color: 'Purple',
    fabric: 'Silk Blend',
    occasion: ['Wedding', 'Festive'],
    tags: ['lavender', 'heritage', 'royal', 'new'],
    badge: 'NEW ARRIVAL',
    rating: 4.9,
    reviews: 56,
    in_stock: true,
    stock_count: 20,
    sku: 'TK-LHP-003',
    weight: '480g',
    care_instructions: 'Dry clean only. Store in cool dry place.',
  },
  {
    name: 'Lavender Royal Print Saree',
    description:
      'Stunning lavender saree with intricate royal prints and heavy border. Perfect for weddings and grand celebrations. Premium silk blend with rich zari work.',
    price: 1780,
    original_price: 2899,
    image: 'https://images.unsplash.com/photo-1623843702978-62e908840b06?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1623843702978-62e908840b06?w=800&q=80'],
    category: 'Printed Sarees',
    subcategory: 'Royal',
    color: 'Purple',
    fabric: 'Silk Blend',
    occasion: ['Wedding', 'Party'],
    tags: ['lavender', 'royal', 'wedding', 'festive'],
    badge: 'FESTIVE PICK',
    rating: 4.7,
    reviews: 78,
    in_stock: true,
    stock_count: 12,
    sku: 'TK-LRP-004',
    weight: '520g',
    care_instructions: 'Professional dry clean. Avoid direct sunlight.',
  },
  {
    name: 'Heritage Green Printed Saree',
    description:
      'Traditional green saree with heritage block prints and golden accents. Cotton fabric perfect for all-day wear. Includes contrast blouse piece.',
    price: 1780,
    original_price: 1999,
    image: 'https://images.unsplash.com/photo-1609244723450-456e9f8dd4b9?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1609244723450-456e9f8dd4b9?w=800&q=80'],
    category: 'Printed Sarees',
    subcategory: 'Heritage',
    color: 'Green',
    fabric: 'Cotton',
    occasion: ['Festive', 'Casual'],
    tags: ['green', 'heritage', 'cotton', 'festive-pick'],
    badge: 'FESTIVE PICK',
    rating: 4.5,
    reviews: 92,
    in_stock: true,
    stock_count: 18,
    sku: 'TK-HGP-005',
    weight: '400g',
    care_instructions: 'Machine wash gentle cycle. Do not wring.',
  },
  {
    name: 'Lavender Festive Wear Saree',
    description:
      'Elegant lavender saree designed for festive celebrations. Light chiffon fabric with beautiful print work. Perfect for parties and functions.',
    price: 1780,
    original_price: 2199,
    image: 'https://images.unsplash.com/photo-1598965402089-17c5e15d8c43?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1598965402089-17c5e15d8c43?w=800&q=80'],
    category: 'Festive Sarees',
    subcategory: 'Festive',
    color: 'Purple',
    fabric: 'Chiffon',
    occasion: ['Festive', 'Party'],
    tags: ['lavender', 'festive', 'chiffon', 'new'],
    badge: 'NEW ARRIVAL',
    rating: 4.6,
    reviews: 45,
    in_stock: true,
    stock_count: 10,
    sku: 'TK-LFW-006',
    weight: '350g',
    care_instructions: 'Hand wash recommended. Do not bleach.',
  },
  {
    name: 'Royal Patola Silk Blend Saree',
    description:
      'Luxurious Patola saree in royal green with silk blend fabric. Heavy border work with traditional motifs. Perfect for wedding season.',
    price: 1780,
    original_price: 3299,
    image: 'https://images.unsplash.com/photo-1610030469628-555d966e6e71?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1610030469628-555d966e6e71?w=800&q=80'],
    category: 'Wedding Sarees',
    subcategory: 'Patola',
    color: 'Green',
    fabric: 'Silk Blend',
    occasion: ['Wedding', 'Festive'],
    tags: ['royal', 'patola', 'silk', 'bestseller'],
    badge: 'BEST SELLER',
    rating: 4.9,
    reviews: 156,
    in_stock: true,
    stock_count: 6,
    sku: 'TK-RPS-007',
    weight: '550g',
    care_instructions: 'Dry clean only. Handle with care.',
  },
  {
    name: 'Lavender Floral Printed Saree',
    description:
      'Beautiful lavender saree with delicate floral prints. Georgette fabric with elegant drape. Perfect for casual parties and daytime events.',
    price: 1780,
    original_price: 1899,
    image: 'https://images.unsplash.com/photo-1583391733951-4c03a8b1a1c0?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1583391733951-4c03a8b1a1c0?w=800&q=80'],
    category: 'Printed Sarees',
    subcategory: 'Floral',
    color: 'Purple',
    fabric: 'Georgette',
    occasion: ['Party', 'Casual'],
    tags: ['lavender', 'floral', 'georgette', 'limited'],
    badge: 'LIMITED STOCK',
    rating: 4.4,
    reviews: 67,
    in_stock: true,
    stock_count: 5,
    sku: 'TK-LFP-008',
    weight: '380g',
    care_instructions: 'Gentle hand wash. Iron on low heat.',
  },
  {
    name: 'Red Banarasi Heritage Saree',
    description:
      'Classic red Banarasi saree with gold zari work. Traditional heritage design perfect for weddings. Rich silk fabric with heavy pallu.',
    price: 1780,
    original_price: 3499,
    image: 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=800&q=80'],
    category: 'Wedding Sarees',
    subcategory: 'Banarasi',
    color: 'Red',
    fabric: 'Silk Blend',
    occasion: ['Wedding', 'Festive'],
    tags: ['red', 'banarasi', 'heritage', 'wedding'],
    badge: 'BEST SELLER',
    rating: 4.8,
    reviews: 203,
    in_stock: true,
    stock_count: 9,
    sku: 'TK-RBH-009',
    weight: '600g',
    care_instructions: 'Dry clean only. Store with moth repellent.',
  },
  {
    name: 'Orange Festive Cotton Saree',
    description:
      'Vibrant orange cotton saree with festive prints. Lightweight and comfortable for all-day celebrations. Includes matching blouse piece.',
    price: 1780,
    original_price: 1599,
    image: 'https://images.unsplash.com/photo-1609244723450-456e9f8dd4b9?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1609244723450-456e9f8dd4b9?w=800&q=80'],
    category: 'Festive Sarees',
    subcategory: 'Festive',
    color: 'Orange',
    fabric: 'Cotton',
    occasion: ['Festive', 'Casual'],
    tags: ['festive', 'cotton', 'new'],
    badge: 'NEW ARRIVAL',
    rating: 4.3,
    reviews: 34,
    in_stock: true,
    stock_count: 25,
    sku: 'TK-OFC-010',
    weight: '390g',
    care_instructions: 'Machine wash gentle. Use mild detergent.',
  },
  {
    name: 'Blue Royal Printed Saree',
    description:
      'Majestic blue saree with royal print patterns. Silk blend fabric with excellent drape. Perfect for formal functions and parties.',
    price: 1780,
    original_price: 2399,
    image: 'https://images.unsplash.com/photo-1623843702978-62e908840b06?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1623843702978-62e908840b06?w=800&q=80'],
    category: 'Printed Sarees',
    subcategory: 'Royal',
    color: 'Blue',
    fabric: 'Silk Blend',
    occasion: ['Formal', 'Party'],
    tags: ['blue', 'royal', 'silk', 'festive-pick'],
    badge: 'FESTIVE PICK',
    rating: 4.7,
    reviews: 88,
    in_stock: true,
    stock_count: 14,
    sku: 'TK-BRP-011',
    weight: '460g',
    care_instructions: 'Dry clean recommended. Avoid direct sunlight.',
  },
  {
    name: 'Pink Georgette Wedding Saree',
    description:
      'Elegant pink georgette saree with delicate embroidery. Perfect for wedding functions and receptions. Light weight with beautiful fall.',
    price: 1780,
    original_price: 2799,
    image: 'https://images.unsplash.com/photo-1598965402089-17c5e15d8c43?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1598965402089-17c5e15d8c43?w=800&q=80'],
    category: 'Wedding Sarees',
    subcategory: 'Wedding',
    color: 'Pink',
    fabric: 'Georgette',
    occasion: ['Wedding', 'Party'],
    tags: ['pink', 'georgette', 'wedding', 'limited'],
    badge: 'LIMITED STOCK',
    rating: 4.5,
    reviews: 72,
    in_stock: true,
    stock_count: 7,
    sku: 'TK-PGW-012',
    weight: '370g',
    care_instructions: 'Hand wash gently. Do not wring.',
  },
];

async function seed() {
  console.log('Seeding Supabase products...');
  const { error: insertError } = await supabase.from('products').insert(products);
  if (insertError) {
    console.error('Failed to insert products:', insertError.message);
    process.exit(1);
  }

  const { data: productData, error: productError } = await supabase
    .from('products')
    .select('id')
    .eq('name', 'Green Patola Heritage Saree')
    .single();

  if (productError || !productData) {
    console.error('Failed to find seeded product:', productError?.message ?? 'No product returned');
    process.exit(1);
  }

  console.log('Seeding sample review...');
  const { error: reviewError } = await supabase.from('reviews').insert([
    {
      product_id: productData.id,
      user_id: '00000000-0000-0000-0000-000000000000',
      user_name: 'Neha Sharma',
      rating: 5,
      comment:
        'Absolutely loved the saree! The print is so vibrant and the fabric feels so luxurious. Perfect for weddings and festive occasions. Truly a royal experience.',
    },
  ]);

  if (reviewError) {
    console.error('Failed to insert review:', reviewError.message);
    process.exit(1);
  }

  console.log('Supabase seed complete!');
}

seed().catch((error) => {
  console.error('Unexpected error during seed:', error);
  process.exit(1);
});
