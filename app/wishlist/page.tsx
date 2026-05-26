'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-royal-100 rounded-full flex items-center justify-center mx-auto">
            <Heart className="w-10 h-10 text-royal-400" />
          </div>
          <h2 className="font-serif text-2xl text-royal-900">Your wishlist is empty</h2>
          <p className="text-royal-500">Save your favorite sarees here</p>
          <Link href="/catalog" className="btn-primary inline-flex">
            Explore Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl text-maroon-900 mb-8">My Wishlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-royal-100 overflow-hidden">
              <div className="relative h-64">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-medium text-royal-900">{item.name}</h3>
                <p className="font-bold text-maroon-800">₹{item.price.toLocaleString('en-IN')}</p>
                <div className="flex gap-2">
                  <button className="flex-1 btn-primary text-sm py-2 justify-center">
                    <ShoppingBag className="w-3 h-3" /> Add to Cart
                  </button>
                  <button className="p-2 border border-red-200 text-red-600 rounded hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
