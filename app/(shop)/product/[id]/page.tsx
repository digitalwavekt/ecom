'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Heart, Share2, Truck, ShieldCheck, RefreshCw, Minus, Plus, Check, ArrowLeft } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/lib/store';
import toast from 'react-hot-toast';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    fetchProduct();
  }, [params.id]);

  const fetchProduct = async () => {
    setLoading(true);
    const response = await fetch(`/api/products/${params.id}`);
    const data = await response.json();

    if (response.ok) {
      setProduct(data);
    }
    setLoading(false);
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      toast.success(`Added ${quantity} item(s) to cart!`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-maroon-700 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-medium text-royal-900 mb-2">Product not found</h2>
          <Link href="/catalog" className="text-maroon-700 hover:underline">Back to catalog</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, ...(product.images || [])];

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-8">
        <Link href="/catalog" className="inline-flex items-center gap-2 text-royal-600 hover:text-maroon-700 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white border border-royal-100">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-maroon-700 text-white px-3 py-1 text-xs font-bold tracking-wider rounded">
                  {product.badge}
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
                      selectedImage === idx ? 'border-maroon-700' : 'border-royal-200'
                    }`}
                  >
                    <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-royal-500 mb-2">
                <span className="px-2 py-0.5 bg-royal-100 rounded">{product.category}</span>
                <span className="px-2 py-0.5 bg-royal-100 rounded">{product.fabric}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl text-maroon-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-4 h-4 ${star <= Math.round(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-royal-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-royal-500">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="border-y border-royal-100 py-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-maroon-800">₹{product.price.toLocaleString('en-IN')}</span>
                {product.original_price && (
                  <>
                    <span className="text-lg text-royal-400 line-through">₹{product.original_price.toLocaleString('en-IN')}</span>
                    <span className="text-sm text-emerald-700 font-medium">
                      {Math.round((1 - product.price / product.original_price) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-royal-500 mt-1">Inclusive of all taxes</p>
            </div>

            <p className="text-royal-700 leading-relaxed">{product.description}</p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Truck, text: 'Free shipping over ₹1999' },
                { icon: ShieldCheck, text: 'Secure checkout' },
                { icon: RefreshCw, text: '7 days easy returns' },
                { icon: Check, text: 'Authentic handcrafted' },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-royal-600">
                  <feature.icon className="w-4 h-4 text-maroon-600" />
                  {feature.text}
                </div>
              ))}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-royal-700">Quantity:</span>
                <div className="flex items-center border border-royal-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-royal-50 text-royal-700"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-royal-900 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-royal-50 text-royal-700"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {product.stock_count < 10 && (
                  <span className="text-sm text-amber-600 font-medium">Only {product.stock_count} left!</span>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary justify-center py-4 text-base"
                >
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
                <button className="p-4 border border-royal-200 rounded-lg hover:bg-royal-50 text-royal-700 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-4 border border-royal-200 rounded-lg hover:bg-royal-50 text-royal-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white p-6 rounded-xl border border-royal-100 space-y-3">
              <h3 className="font-medium text-royal-900">Product Details</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <span className="text-royal-500">SKU:</span>
                <span className="text-royal-800">{product.sku}</span>
                <span className="text-royal-500">Fabric:</span>
                <span className="text-royal-800">{product.fabric}</span>
                <span className="text-royal-500">Color:</span>
                <span className="text-royal-800">{product.color}</span>
                <span className="text-royal-500">Weight:</span>
                <span className="text-royal-800">{product.weight || 'N/A'}</span>
                {product.care_instructions && (
                  <>
                    <span className="text-royal-500">Care:</span>
                    <span className="text-royal-800">{product.care_instructions}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
