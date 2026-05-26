'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-cream via-royal-50 to-cream overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-maroon-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-200 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-maroon-700 font-medium text-sm tracking-wider uppercase">
              <span className="w-8 h-[2px] bg-maroon-700" />
              Royal Heritage. Handcrafted Beauty.
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-maroon-900 leading-tight">
              Printed Sarees<br />
              <span className="text-royal-700">Famous of Jaipur</span>
            </h1>

            <p className="text-royal-600 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Celebrate Jaipur&apos;s timeless artistry with our exquisite printed sarees—where tradition, color, and craftsmanship come together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link href="/catalog" className="btn-primary justify-center">
                Shop Sarees <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/catalog" className="btn-secondary justify-center">
                View Collection
              </Link>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative h-[500px] md:h-[600px] hidden lg:block">
            <div className="absolute right-0 top-0 w-3/4 h-4/5 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1610030469628-555d966e6e71?w=800&q=80"
                alt="Green Patola Heritage Saree"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute left-0 bottom-0 w-1/2 h-3/5 rounded-lg overflow-hidden shadow-xl border-4 border-white z-10">
              <Image
                src="https://images.unsplash.com/photo-1583391733951-4c03a8b1a1c0?w=800&q=80"
                alt="Lavender Heritage Printed Saree"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold-400 rounded-full opacity-50" />
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-maroon-100 rounded-full opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
