import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Brand Story */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-maroon-700 text-sm tracking-wider uppercase">
              <span className="w-8 h-[2px] bg-maroon-700" />
              Our Heritage
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-maroon-900">
              Rooted in Jaipur.<br />Woven for Generations.
            </h2>
            <p className="text-royal-600 leading-relaxed">
              At Trading Deals, we bring you the finest printed sarees crafted by skilled artisans of Jaipur. 
              Each piece reflects our rich heritage, vibrant culture, and unmatched craftsmanship. 
              We believe in preserving traditional techniques while embracing contemporary designs 
              that resonate with the modern woman.
            </p>
            <p className="text-royal-600 leading-relaxed">
              Every saree tells a story of dedication, artistry, and the royal legacy of Rajasthan. 
              From the bustling markets of Johari Bazaar to your wardrobe, we ensure authenticity 
              and quality in every drape.
            </p>
          </div>

          {/* Right: Testimonial */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-royal-100 relative">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-gold-200" />

            <div className="relative z-10 pt-6">
              <p className="text-royal-700 text-lg italic leading-relaxed mb-6">
                &quot;Absolutely loved the saree! The print is so vibrant and the fabric feels so luxurious. 
                Perfect for weddings and festive occasions. Truly a royal experience.&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                    alt="Neha Sharma"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-medium text-royal-900">Neha Sharma</p>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
