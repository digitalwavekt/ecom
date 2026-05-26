'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, ArrowRight, Check, Sparkles } from 'lucide-react';

export default function FeaturedProduct() {
  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl overflow-hidden shadow-lg border border-royal-100">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1610030469628-555d966e6e71?w=800&q=80"
              alt="Featured Saree"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-maroon-700 text-white px-3 py-1 text-xs font-bold tracking-wider rounded">
              FEATURED SAREE
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-2 text-gold-600">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Premium Collection</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-maroon-900">
              Traditional Elegance with a Royal Touch
            </h2>

            <div className="inline-block bg-royal-800 text-white px-4 py-1.5 text-sm font-medium rounded">
              PREMIUM KANJIVARAM COTTON SAREE
            </div>

            <ul className="space-y-3">
              {[
                'Rich Jari Weaving | Heavy Jacquard Woven Border',
                'Beautiful Patola Style Digital Print with Full Saree Jari Work',
                'Includes Matching Digital Print Blouse Piece',
                'Premium Quality • Rich Finish • Elegant Look',
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-royal-700">
                  <Check className="w-4 h-4 text-maroon-600 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 py-4 border-y border-royal-100">
              <div className="text-2xl font-bold text-maroon-800">
                Price Only ₹1,780/-
                <span className="text-sm font-normal text-royal-500 ml-2">+ Shipping</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-royal-600">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span>Perfect For Festive Wear, Functions & Wedding Collection</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-maroon-700 font-medium">
                <Clock className="w-4 h-4" />
                <span>Limited Stock Available — Order Fast!</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/product/featured" className="btn-primary justify-center">
                Add to Cart
              </Link>
              <Link href="/catalog" className="btn-secondary justify-center">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-sm text-royal-500">
              Brand: <span className="font-medium text-royal-800">Kapaskala Trends</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
