'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, Grid3X3, LayoutList, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import ProductFilters from '@/components/product/ProductFilters';
import { Product } from '@/types';
import { useFilterStore } from '@/lib/store';

export default function CatalogPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const { filters } = useFilterStore();

  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  const occasionParam = searchParams.get('occasion');

  useEffect(() => {
    fetchProducts();
  }, [filters, sortBy, categoryParam, searchQuery, occasionParam]);

  const fetchProducts = async () => {
    setLoading(true);

    const params = new URLSearchParams();

    if (categoryParam) {
      params.set('category', categoryParam.replace(/-/g, ' '));
    }
    if (searchQuery) {
      params.set('search', searchQuery);
    }
    if (occasionParam) {
      params.set('occasions', occasionParam);
    }
    if (filters.categories.length > 0) {
      params.set('categories', filters.categories.map((c) => c.replace(/-/g, ' ')).join(','));
    }
    if (filters.colors.length > 0) {
      params.set('colors', filters.colors.join(','));
    }
    if (filters.occasions.length > 0) {
      params.set('occasions', filters.occasions.join(','));
    }
    if (filters.fabrics.length > 0) {
      params.set('fabrics', filters.fabrics.join(','));
    }
    if (filters.availability) {
      params.set('inStock', 'true');
    }
    if (filters.priceRange[1] < 5000) {
      params.set('maxPrice', filters.priceRange[1].toString());
    }

    params.set('sortBy', sortBy === 'price-low' ? 'price' : sortBy === 'price-high' ? 'price' : sortBy === 'newest' ? 'created_at' : 'rating');
    params.set('sortOrder', sortBy === 'price-low' ? 'asc' : 'desc');

    const response = await fetch(`/api/products?${params.toString()}`);
    const data = await response.json();

    if (response.ok) {
      setProducts(data || []);
    }

    setLoading(false);
  };

  const tabs = [
    { id: 'all', label: 'All Sarees', icon: '✨' },
    { id: 'festive', label: 'Festive Wear', icon: '🪔' },
    { id: 'wedding', label: 'Wedding Picks', icon: '💒' },
    { id: 'new', label: 'New Arrivals', icon: '✨' },
    { id: 'bestseller', label: 'Best Sellers', icon: '👑' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-maroon-900 via-maroon-800 to-royal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-gold-300 text-sm mb-2">
            <span>COLLECTION</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl mb-4">Jaipur Printed Saree Collection</h1>
          <p className="text-royal-200 max-w-2xl">
            Discover the timeless beauty of Jaipur&apos;s royal heritage through our handcrafted printed sarees. 
            Each drape tells a story of tradition, artistry, and elegance.
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { icon: '🏛️', label: 'Royal Heritage', sub: 'Handcrafted' },
              { icon: '✨', label: 'Premium Quality', sub: 'Natural Fabrics' },
              { icon: '📦', label: 'Secure Packaging', sub: '& Fast Delivery' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-medium text-gold-200">{item.label}</p>
                  <p className="text-xs text-royal-300">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-royal-100 sticky top-[88px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {}}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-royal-200 text-sm font-medium text-royal-700 hover:bg-royal-50 hover:border-maroon-300 transition-colors whitespace-nowrap"
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-xl border border-royal-100 sticky top-[160px]">
              <ProductFilters />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl border border-royal-100">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 text-sm font-medium text-royal-700"
                >
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </button>
                <span className="text-sm text-royal-500">{products.length} products</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border border-royal-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-royal-100 text-maroon-700' : 'text-royal-400'}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-royal-100 text-maroon-700' : 'text-royal-400'}`}
                  >
                    <LayoutList className="w-4 h-4" />
                  </button>
                </div>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-royal-200 rounded-lg px-4 py-2 pr-8 text-sm text-royal-700 focus:outline-none focus:border-maroon-500"
                  >
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-royal-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Products */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-xl h-96 animate-pulse" />
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-royal-100">
                <p className="text-royal-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => useFilterStore.getState().resetFilters()}
                  className="mt-4 text-maroon-700 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
