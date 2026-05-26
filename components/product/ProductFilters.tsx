'use client';

import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { useFilterStore } from '@/lib/store';
import { COLORS, FABRICS, OCCASIONS, CATEGORIES } from '@/lib/utils';

export default function ProductFilters() {
  const { filters, setFilters, resetFilters } = useFilterStore();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    category: true,
    color: true,
    occasion: true,
    price: true,
    fabric: true,
    availability: true,
  });

  const toggleSection = (section: string) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const hasActiveFilters = 
    filters.categories.length > 0 ||
    filters.colors.length > 0 ||
    filters.occasions.length > 0 ||
    filters.fabrics.length > 0 ||
    filters.availability;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-royal-900">Filters</h3>
        {hasActiveFilters && (
          <button onClick={resetFilters} className="text-xs text-maroon-700 hover:text-maroon-900 flex items-center gap-1">
            <X className="w-3 h-3" /> Clear All
          </button>
        )}
      </div>

      {/* Category */}
      <div className="border-b border-royal-100 pb-4">
        <button onClick={() => toggleSection('category')} className="flex items-center justify-between w-full mb-2">
          <span className="text-sm font-medium text-royal-800">Category</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded.category ? 'rotate-180' : ''}`} />
        </button>
        {expanded.category && (
          <div className="space-y-2">
            {CATEGORIES.map((cat) => (
              <label key={cat.slug} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat.slug)}
                  onChange={(e) => {
                    const newCats = e.target.checked
                      ? [...filters.categories, cat.slug]
                      : filters.categories.filter(c => c !== cat.slug);
                    setFilters({ categories: newCats });
                  }}
                  className="w-4 h-4 rounded border-royal-300 text-maroon-700 focus:ring-maroon-700"
                />
                <span className="text-sm text-royal-600">{cat.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Color */}
      <div className="border-b border-royal-100 pb-4">
        <button onClick={() => toggleSection('color')} className="flex items-center justify-between w-full mb-2">
          <span className="text-sm font-medium text-royal-800">Color</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded.color ? 'rotate-180' : ''}`} />
        </button>
        {expanded.color && (
          <div className="flex flex-wrap gap-2">
            {COLORS.map((color) => (
              <button
                key={color.name}
                onClick={() => {
                  const newColors = filters.colors.includes(color.name)
                    ? filters.colors.filter(c => c !== color.name)
                    : [...filters.colors, color.name];
                  setFilters({ colors: newColors });
                }}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  filters.colors.includes(color.name) ? 'border-maroon-700 scale-110' : 'border-transparent'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>

      {/* Occasion */}
      <div className="border-b border-royal-100 pb-4">
        <button onClick={() => toggleSection('occasion')} className="flex items-center justify-between w-full mb-2">
          <span className="text-sm font-medium text-royal-800">Occasion</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded.occasion ? 'rotate-180' : ''}`} />
        </button>
        {expanded.occasion && (
          <div className="space-y-2">
            {OCCASIONS.map((occ) => (
              <label key={occ} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.occasions.includes(occ)}
                  onChange={(e) => {
                    const newOcc = e.target.checked
                      ? [...filters.occasions, occ]
                      : filters.occasions.filter(o => o !== occ);
                    setFilters({ occasions: newOcc });
                  }}
                  className="w-4 h-4 rounded border-royal-300 text-maroon-700 focus:ring-maroon-700"
                />
                <span className="text-sm text-royal-600">{occ}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="border-b border-royal-100 pb-4">
        <button onClick={() => toggleSection('price')} className="flex items-center justify-between w-full mb-2">
          <span className="text-sm font-medium text-royal-800">Price</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded.price ? 'rotate-180' : ''}`} />
        </button>
        {expanded.price && (
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters({ priceRange: [0, parseInt(e.target.value)] })}
              className="w-full accent-maroon-700"
            />
            <div className="flex justify-between text-sm text-royal-600">
              <span>₹{filters.priceRange[0]}</span>
              <span>₹{filters.priceRange[1]}+</span>
            </div>
          </div>
        )}
      </div>

      {/* Fabric */}
      <div className="border-b border-royal-100 pb-4">
        <button onClick={() => toggleSection('fabric')} className="flex items-center justify-between w-full mb-2">
          <span className="text-sm font-medium text-royal-800">Fabric</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded.fabric ? 'rotate-180' : ''}`} />
        </button>
        {expanded.fabric && (
          <div className="space-y-2">
            {FABRICS.map((fab) => (
              <label key={fab} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.fabrics.includes(fab)}
                  onChange={(e) => {
                    const newFab = e.target.checked
                      ? [...filters.fabrics, fab]
                      : filters.fabrics.filter(f => f !== fab);
                    setFilters({ fabrics: newFab });
                  }}
                  className="w-4 h-4 rounded border-royal-300 text-maroon-700 focus:ring-maroon-700"
                />
                <span className="text-sm text-royal-600">{fab}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Availability */}
      <div className="pb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.availability}
            onChange={(e) => setFilters({ availability: e.target.checked })}
            className="w-4 h-4 rounded border-royal-300 text-maroon-700 focus:ring-maroon-700"
          />
          <span className="text-sm text-royal-600">In Stock Only</span>
        </label>
      </div>
    </div>
  );
}
