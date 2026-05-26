import { CheckCircle, Sparkles, Gift, ShieldCheck, Truck } from 'lucide-react';

const badges = [
  { icon: CheckCircle, title: 'PREMIUM', subtitle: 'QUALITY' },
  { icon: Sparkles, title: 'FESTIVE', subtitle: 'WEAR' },
  { icon: Gift, title: 'LIMITED', subtitle: 'STOCK' },
  { icon: ShieldCheck, title: 'SECURE', subtitle: 'CHECKOUT' },
  { icon: Truck, title: 'PAN INDIA', subtitle: 'SHIPPING' },
];

export default function TrustBadges() {
  return (
    <section className="bg-white border-y border-royal-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-royal-100">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 py-6 px-4 justify-center">
              <badge.icon className="w-6 h-6 text-maroon-700 flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs font-bold text-royal-900 tracking-wider">{badge.title}</p>
                <p className="text-[10px] text-royal-500 tracking-wider">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
