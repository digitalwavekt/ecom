'use client';

export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function OrderSuccessPage() {
  const [txnid, setTxnid] = useState<string | null>(null);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTxnid(params.get('txnid'));
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center py-12">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>

        <h1 className="font-serif text-3xl text-maroon-900 mb-3">Order Confirmed!</h1>
        <p className="text-royal-600 mb-2">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        {txnid && (
          <p className="text-sm text-royal-500 mb-6">
            Transaction ID: <span className="font-mono font-medium">{txnid}</span>
          </p>
        )}

        <div className="bg-white p-6 rounded-xl border border-royal-100 mb-8 text-left space-y-3">
          <h3 className="font-medium text-royal-900">What happens next?</h3>
          <ul className="space-y-2 text-sm text-royal-600">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 bg-maroon-100 rounded-full flex items-center justify-center text-xs text-maroon-700 flex-shrink-0 mt-0.5">1</span>
              Order confirmation email sent to your registered email
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 bg-maroon-100 rounded-full flex items-center justify-center text-xs text-maroon-700 flex-shrink-0 mt-0.5">2</span>
              We will process your order within 24-48 hours
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 bg-maroon-100 rounded-full flex items-center justify-center text-xs text-maroon-700 flex-shrink-0 mt-0.5">3</span>
              Tracking details will be shared once shipped
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/catalog" className="btn-primary justify-center">
            <ShoppingBag className="w-4 h-4" /> Continue Shopping
          </Link>
          <Link href="/" className="btn-secondary justify-center">
            Go Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
