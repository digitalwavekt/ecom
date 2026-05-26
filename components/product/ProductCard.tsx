'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, ArrowRight } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/lib/store';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const badgeStyles: Record<string, string> = {
  'BEST SELLER': 'bg-emerald-700',
  'LIMITED STOCK': 'bg-amber-600',
  'NEW ARRIVAL': 'bg-sky-600',
  'FESTIVE PICK': 'bg-rose-600',
};

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="group bg-cream rounded-xl overflow-hidden border border-royal-100 hover:shadow-xl transition-all duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-80 overflow-hidden">
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
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-maroon-50"
          >
            <Heart className="w-4 h-4 text-maroon-700" />
          </button>

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleAddToCart}
              className="w-full py-2.5 bg-white text-maroon-800 text-sm font-medium rounded hover:bg-maroon-50 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" /> Quick Add
            </button>
          </div>
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-royal-900 text-sm line-clamp-1">{product.name}</h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-royal-500">
          <span className="px-2 py-0.5 bg-royal-100 rounded">{product.fabric}</span>
          <span className="px-2 py-0.5 bg-royal-100 rounded">{product.color}</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="font-bold text-maroon-800 text-lg">₹{product.price.toLocaleString('en-IN')}</span>
            {product.original_price && (
              <span className="text-sm text-royal-400 line-through ml-2">₹{product.original_price.toLocaleString('en-IN')}</span>
            )}
          </div>
        </div>

        <div className="flex gap-2 pt-1">
          <Link
            href={`/product/${product.id}`}
            className="flex-1 py-2 border border-royal-300 text-royal-700 text-xs font-medium rounded hover:bg-royal-800 hover:text-white transition-colors text-center flex items-center justify-center gap-1"
          >
            View Details <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={handleAddToCart}
            className="py-2 px-3 border border-maroon-200 text-maroon-700 rounded hover:bg-maroon-700 hover:text-white transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
