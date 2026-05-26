'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/lib/store';
import toast from 'react-hot-toast';

interface ProductCollectionProps {
  products: Product[];
}

const badgeStyles: Record<string, string> = {
  'BEST SELLER': 'bg-emerald-700',
  'LIMITED STOCK': 'bg-amber-600',
  'NEW ARRIVAL': 'bg-sky-600',
  'FESTIVE PICK': 'bg-rose-600',
};

export default function ProductCollection({ products }: ProductCollectionProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-maroon-700 text-sm tracking-wider uppercase mb-3">
            <span className="w-8 h-[2px] bg-maroon-700" />
            Explore Our Range
            <span className="w-8 h-[2px] bg-maroon-700" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-maroon-900">
            Our Printed Saree Collection
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="group bg-cream rounded-xl overflow-hidden border border-royal-100 hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div className={`absolute top-3 left-3 ${badgeStyles[product.badge] || 'bg-maroon-700'} text-white px-2.5 py-1 text-[10px] font-bold tracking-wider rounded`}>
                    {product.badge}
                  </div>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-maroon-50">
                  <Heart className="w-4 h-4 text-maroon-700" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h3 className="font-medium text-royal-900 text-sm line-clamp-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-maroon-800">₹{product.price.toLocaleString('en-IN')}</span>
                  {product.original_price && (
                    <span className="text-sm text-royal-400 line-through">₹{product.original_price.toLocaleString('en-IN')}</span>
                  )}
                </div>
                <div className="flex gap-2 pt-1">
                  <Link
                    href={`/product/${product.id}`}
                    className="flex-1 py-2 border border-royal-300 text-royal-700 text-xs font-medium rounded hover:bg-royal-800 hover:text-white transition-colors text-center flex items-center justify-center gap-1"
                  >
                    View Details <ArrowRight className="w-3 h-3" />
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="py-2 px-3 border border-maroon-200 text-maroon-700 rounded hover:bg-maroon-700 hover:text-white transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/catalog" className="btn-secondary">
            View All Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
