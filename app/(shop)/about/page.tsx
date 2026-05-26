import Image from 'next/image';
import { Award, Users, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-gradient-to-r from-maroon-900 to-royal-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Our Story</h1>
          <p className="text-royal-200 max-w-2xl mx-auto text-lg">
            Preserving Jaipur&apos;s rich textile heritage, one saree at a time.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl space-y-16">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=800&q=80"
              alt="Jaipur Textile Market"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-maroon-900">Rooted in Tradition</h2>
            <p className="text-royal-700 leading-relaxed">
              Trading Deals was born from a deep love for Rajasthan&apos;s centuries-old textile traditions. 
              Founded in the heart of Jaipur&apos;s Johari Bazaar, we work directly with local artisans and weavers 
              who have inherited their craft through generations.
            </p>
            <p className="text-royal-700 leading-relaxed">
              Every saree in our collection is a testament to the skill, patience, and artistry of these 
              master craftspeople. From the intricate Patola prints to the delicate hand-block designs, 
              each piece carries the soul of Jaipur.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white p-10 rounded-2xl border border-royal-100">
          <h2 className="font-serif text-2xl text-maroon-900 text-center mb-10">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Handcrafted', desc: 'Every piece is made by skilled artisans using traditional techniques' },
              { icon: Award, title: 'Premium Quality', desc: 'We source only the finest fabrics and maintain strict quality standards' },
              { icon: Users, title: 'Artisan Support', desc: 'Fair wages and sustainable livelihoods for our craftspeople' },
              { icon: Globe, title: 'Pan India Reach', desc: 'Bringing Jaipur&apos;s heritage to every corner of the country' },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="w-14 h-14 bg-maroon-50 rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-7 h-7 text-maroon-700" />
                </div>
                <h3 className="font-medium text-royal-900">{item.title}</h3>
                <p className="text-sm text-royal-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl text-maroon-900 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Design', desc: 'Traditional motifs meet contemporary aesthetics' },
              { step: '02', title: 'Craft', desc: 'Artisans bring designs to life with precision' },
              { step: '03', title: 'Quality Check', desc: 'Rigorous inspection of every piece' },
              { step: '04', title: 'Deliver', desc: 'Carefully packaged and shipped to you' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-royal-100 text-center">
                <span className="text-3xl font-serif text-gold-500">{item.step}</span>
                <h3 className="font-medium text-royal-900 mt-2">{item.title}</h3>
                <p className="text-sm text-royal-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
