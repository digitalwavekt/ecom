import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FestiveBanner() {
  return (
    <section className="relative bg-royal-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center gap-4 text-gold-400 text-xs tracking-[0.3em] uppercase justify-center md:justify-start">
              <span>Handcrafted</span>
              <span className="w-2 h-2 bg-gold-400 rounded-full" />
              <span>Heritage Prints</span>
              <span className="w-2 h-2 bg-gold-400 rounded-full" />
              <span>Timeless Elegance</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Celebrate Every Occasion in Royal Style
            </h2>
            <p className="text-royal-200">
              Perfect for Festive Wear, Functions & Weddings
            </p>
          </div>

          <Link href="/catalog?occasion=festive" className="btn-gold whitespace-nowrap">
            Shop Festive Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
