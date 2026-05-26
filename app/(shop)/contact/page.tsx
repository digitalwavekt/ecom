'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-maroon-900 mb-3">Get in Touch</h1>
          <p className="text-royal-600 max-w-xl mx-auto">We would love to hear from you. Reach out for queries, feedback, or bulk orders.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {[
              { icon: Phone, title: 'Phone', lines: ['+91 90012 34567', '+91 98290 12345'] },
              { icon: Mail, title: 'Email', lines: ['support@tradingdeals.com', 'orders@tradingdeals.com'] },
              { icon: MapPin, title: 'Address', lines: ['B-45, Textile Market, Johari Bazaar', 'Jaipur, Rajasthan - 302003'] },
              { icon: Clock, title: 'Business Hours', lines: ['Mon - Sat: 10:00 AM - 7:00 PM', 'Sunday: Closed'] },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-royal-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-maroon-50 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-maroon-700" />
                  </div>
                  <h3 className="font-medium text-royal-900">{item.title}</h3>
                </div>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-sm text-royal-600 ml-13">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl border border-royal-100">
              <h2 className="font-serif text-xl text-maroon-900 mb-6">Send us a Message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-royal-900 mb-2">Message Sent!</h3>
                  <p className="text-royal-500">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-royal-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-royal-200 rounded-lg focus:outline-none focus:border-maroon-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-royal-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-royal-200 rounded-lg focus:outline-none focus:border-maroon-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-royal-700 mb-1">Subject *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-royal-200 rounded-lg focus:outline-none focus:border-maroon-500 bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Order Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="return">Return/Exchange</option>
                      <option value="bulk">Bulk Order</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-royal-700 mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-royal-200 rounded-lg focus:outline-none focus:border-maroon-500 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
