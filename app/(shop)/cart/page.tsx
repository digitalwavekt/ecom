'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import toast from 'react-hot-toast';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();
  const [couponCode, setCouponCode] = useState('');
  const total = getTotalPrice();
  const shipping = total > 1999 ? 0 : 99;
  const grandTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-royal-100 rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag className="w-10 h-10 text-royal-400" />
          </div>
          <h2 className="font-serif text-2xl text-royal-900">Your cart is empty</h2>
          <p className="text-royal-500">Discover our beautiful collection of Jaipur sarees</p>
          <Link href="/catalog" className="btn-primary inline-flex">
            Continue Shopping <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl text-maroon-900 mb-8">Shopping Cart ({items.length} items)</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="bg-white p-4 rounded-xl border border-royal-100 flex gap-4">
                <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-royal-900">{item.product.name}</h3>
                      <p className="text-sm text-royal-500">{item.product.fabric} • {item.product.color}</p>
                    </div>
                    <button
                      onClick={() => { removeItem(item.product.id); toast.success('Item removed'); }}
                      className="p-2 hover:bg-red-50 text-royal-400 hover:text-red-600 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-royal-200 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-royal-50 text-royal-700"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-royal-50 text-royal-700"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-maroon-800">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</p>
                      <p className="text-xs text-royal-400">₹{item.product.price.toLocaleString('en-IN')} each</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link href="/catalog" className="inline-flex items-center gap-2 text-maroon-700 hover:underline text-sm">
              <ArrowRight className="w-4 h-4 rotate-180" /> Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-royal-100 space-y-4">
              <h2 className="font-medium text-royal-900 text-lg">Order Summary</h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-royal-600">
                  <span>Subtotal</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-royal-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                {shipping === 0 && (
                  <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 p-2 rounded">
                    <Truck className="w-3 h-3" /> You got free shipping!
                  </div>
                )}
              </div>

              <div className="border-t border-royal-100 pt-4">
                <div className="flex justify-between font-bold text-lg text-maroon-900">
                  <span>Total</span>
                  <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-xs text-royal-500 mt-1">Including all taxes</p>
              </div>

              {/* Coupon */}
              <div className="pt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3 py-2 border border-royal-200 rounded-lg text-sm focus:outline-none focus:border-maroon-500"
                  />
                  <button className="px-4 py-2 bg-royal-100 text-royal-700 text-sm font-medium rounded-lg hover:bg-royal-200 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <Link href="/checkout" className="btn-primary w-full justify-center py-4 text-base">
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="bg-white p-4 rounded-xl border border-royal-100 space-y-3">
              {[
                { icon: Truck, text: 'Free delivery over ₹1999' },
                { icon: 'lock', text: 'Secure payment encryption' },
                { icon: 'refresh', text: '7-day easy returns' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-royal-600">
                  {typeof item.icon === 'string' ? (
                    <span className="text-lg">{item.icon === 'lock' ? '🔒' : '↩️'}</span>
                  ) : (
                    <item.icon className="w-4 h-4 text-maroon-600" />
                  )}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
