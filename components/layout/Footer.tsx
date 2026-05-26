import Link from 'next/link';
import { Facebook, Instagram, Youtube, PinIcon, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-royal-100">
      {/* Trust badges */}
      <div className="bg-royal-800 border-y border-royal-700">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: 'truck', title: 'PAN INDIA', subtitle: 'SHIPPING' },
              { icon: 'lock', title: 'SECURE', subtitle: 'PAYMENTS' },
              { icon: 'refresh', title: '7 DAYS EASY', subtitle: 'RETURNS' },
              { icon: 'award', title: 'PREMIUM', subtitle: 'QUALITY' },
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-gold-500/30 flex items-center justify-center">
                  <span className="text-gold-400 text-xl">
                    {badge.icon === 'truck' && '🚚'}
                    {badge.icon === 'lock' && '🔒'}
                    {badge.icon === 'refresh' && '↩️'}
                    {badge.icon === 'award' && '✨'}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gold-200 tracking-wider">{badge.title}</p>
                  <p className="text-[10px] text-royal-300 tracking-wider">{badge.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center">
                <span className="text-maroon-900 font-serif text-lg font-bold">JK</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-gold-100">Trading Deals</h3>
              </div>
            </div>
            <p className="text-sm text-royal-300 leading-relaxed">
              Bringing Jaipur&apos;s timeless textile heritage to your wardrobe. Handcrafted with love, woven with tradition.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, PinIcon, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-royal-800 flex items-center justify-center hover:bg-gold-600 hover:text-maroon-900 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-300 font-medium mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Catalog', 'Jaipur Printed Sarees', 'Festive Collection', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-royal-300 hover:text-gold-300 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-gold-300 font-medium mb-4 text-sm tracking-wider uppercase">Customer Care</h4>
            <ul className="space-y-2">
              {[
                { label: 'Shipping Policy', href: '/policies/delivery' },
                { label: 'Return & Exchange', href: '/policies/refund' },
                { label: 'Terms & Conditions', href: '/policies/terms' },
                { label: 'Privacy Policy', href: '/policies/privacy' },
                { label: "FAQ's", href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-royal-300 hover:text-gold-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-300 font-medium mb-4 text-sm tracking-wider uppercase">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-royal-300">
                <Phone className="w-4 h-4 mt-0.5 text-gold-500" />
                <span>+91 90012 34567</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-royal-300">
                <Mail className="w-4 h-4 mt-0.5 text-gold-500" />
                <span>support@tradingdeals.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-royal-300">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-500" />
                <span>B-45, Textile Market, Johari Bazaar,<br />Jaipur, Rajasthan - 302003</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-royal-300">
                <Clock className="w-4 h-4 mt-0.5 text-gold-500" />
                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-xs text-gold-400 mb-2">Subscribe for special offers & updates</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-royal-800 border border-royal-600 rounded text-sm text-royal-100 placeholder:text-royal-500 focus:outline-none focus:border-gold-500"
                />
                <button className="px-4 py-2 bg-gold-600 text-maroon-900 text-sm font-medium rounded hover:bg-gold-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-royal-800">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-royal-400">
          <p>&copy; 2024 Trading Deals. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Proudly Made in India <span className="text-lg">🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
