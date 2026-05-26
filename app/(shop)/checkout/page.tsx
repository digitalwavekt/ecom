'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight, Truck, CreditCard, MapPin, Phone, Mail, User } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import toast from 'react-hot-toast';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
  });

  const total = getTotalPrice();
  const shipping = total > 1999 ? 0 : 99;
  const grandTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-royal-900 mb-2">Your cart is empty</h2>
          <button onClick={() => router.push('/catalog')} className="btn-primary">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/payu/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: grandTotal,
          productinfo: `Order from Trading Deals (${items.length} items)`,
          firstname: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          udf1: JSON.stringify({
            address: formData,
            items: items.map(i => ({ id: i.product.id, qty: i.quantity })),
          }),
        }),
      });

      const data = await response.json();

      if (data.success && data.paymentUrl) {
        // Create form and submit to PayU
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = data.paymentUrl;
        form.style.display = 'none';

        Object.entries(data.params).forEach(([key, value]) => {
          const input = document.createElement('input');
          input.name = key;
          input.value = String(value);
          form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
      } else {
        toast.error('Payment initiation failed. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 border border-royal-200 rounded-lg focus:outline-none focus:border-maroon-500 bg-white text-royal-900";

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl text-maroon-900 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-royal-100">
              <h2 className="font-medium text-royal-900 text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-maroon-600" /> Shipping Address
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-royal-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-royal-400" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`${inputClass} pl-10`}
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-royal-700 mb-1">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-royal-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`${inputClass} pl-10`}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-royal-700 mb-1">Phone *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-royal-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`${inputClass} pl-10`}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-royal-700 mb-1">Address Line 1 *</label>
                  <input
                    type="text"
                    required
                    value={formData.address1}
                    onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                    className={inputClass}
                    placeholder="House no, Street, Area"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-royal-700 mb-1">Address Line 2</label>
                  <input
                    type="text"
                    value={formData.address2}
                    onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                    className={inputClass}
                    placeholder="Apartment, Landmark (optional)"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-royal-700 mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={inputClass}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-royal-700 mb-1">State *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className={inputClass}
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-royal-700 mb-1">Pincode *</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className={inputClass}
                      placeholder="302001"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-royal-700 mb-1">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    disabled
                    className={`${inputClass} bg-royal-50`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary justify-center py-4 text-base disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" /> Pay ₹{grandTotal.toLocaleString('en-IN')} via PayU
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-royal-100">
              <h2 className="font-medium text-royal-900 text-lg mb-4">Order Items</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-royal-900 truncate">{item.product.name}</h4>
                      <p className="text-xs text-royal-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium text-maroon-800">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-royal-100 mt-4 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-royal-600">
                  <span>Subtotal</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-royal-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-maroon-900 pt-2 border-t border-royal-100">
                  <span>Total</span>
                  <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            <div className="bg-maroon-50 p-4 rounded-xl border border-maroon-100">
              <div className="flex items-center gap-2 text-sm text-maroon-800 mb-2">
                <Truck className="w-4 h-4" />
                <span className="font-medium">Delivery Information</span>
              </div>
              <p className="text-xs text-maroon-600">
                Free shipping on all prepaid orders above ₹1999. Cash on delivery available for selected pincodes.
                Estimated delivery: 5-7 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
