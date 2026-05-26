'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, User, Heart, ShoppingBag, Menu, X, LogOut } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { supabaseClient } from '@/lib/supabase';
import { useAuthStore } from '@/lib/store';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) => state.getTotalItems)();
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session?.user) {
        const { data: profile } = await supabaseClient
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setUser(profile || { id: session.user.id, email: session.user.email! });
      }
    };
    getUser();

    const { data: listener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({ id: session.user.id, email: session.user.email! });
      } else {
        setUser(null);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, [setUser]);

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    setUser(null);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/catalog', label: 'Catalog' },
    { href: '/catalog?category=printed-sarees', label: 'Jaipur Printed Sarees' },
    { href: '/catalog?occasion=festive', label: 'Festive Collection' },
    { href: '/contact', label: 'Contact' },
  ];

  const pathname = usePathname();

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream shadow-md' : 'bg-cream/95'} border-b border-royal-200`}>
      {/* Top bar */}
      <div className="bg-maroon-800 text-gold-100 text-xs py-2 text-center tracking-wide">
        <span className="font-medium">Free Shipping on Prepaid Orders Above ₹1999</span>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-maroon-700 rounded-full flex items-center justify-center group-hover:bg-maroon-600 transition-colors">
              <span className="text-gold-300 font-serif text-lg font-bold">JK</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-bold text-maroon-900 leading-tight">Trading Deals</h1>
              <p className="text-[10px] tracking-[0.2em] text-royal-600 uppercase">Crafting Royal Elegance</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-maroon-700 ${
                  pathname === link.href ? 'text-maroon-800 border-b-2 border-maroon-800' : 'text-royal-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-royal-100 rounded-full transition-colors text-royal-800"
            >
              <Search className="w-5 h-5" />
            </button>

            {user ? (
              <div className="hidden sm:flex items-center gap-2">
                <Link href="/profile" className="p-2 hover:bg-royal-100 rounded-full transition-colors text-royal-800">
                  <User className="w-5 h-5" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-royal-100 rounded-full transition-colors text-royal-800"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link href="/login" className="hidden sm:flex p-2 hover:bg-royal-100 rounded-full transition-colors text-royal-800">
                <User className="w-5 h-5" />
              </Link>
            )}

            <Link href="/wishlist" className="hidden sm:flex p-2 hover:bg-royal-100 rounded-full transition-colors text-royal-800">
              <Heart className="w-5 h-5" />
            </Link>

            <Link href="/cart" className="relative p-2 hover:bg-royal-100 rounded-full transition-colors text-royal-800">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-maroon-700 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-royal-100 rounded-full transition-colors text-royal-800"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-royal-200 p-4 animate-in slide-in-from-top-2">
          <div className="container mx-auto max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for sarees, fabrics, occasions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-royal-200 rounded-lg focus:border-maroon-600 focus:outline-none text-royal-900"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-royal-400" />
              <button
                onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-royal-500 hover:text-maroon-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {searchQuery && (
              <div className="mt-4">
                <Link
                  href={`/catalog?search=${encodeURIComponent(searchQuery)}`}
                  onClick={() => setIsSearchOpen(false)}
                  className="flex items-center gap-2 text-maroon-700 hover:text-maroon-900 font-medium"
                >
                  <Search className="w-4 h-4" />
                  Search for &quot;{searchQuery}&quot;
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-cream shadow-xl border-t border-royal-200">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium py-2 border-b border-royal-100 ${
                  pathname === link.href ? 'text-maroon-800' : 'text-royal-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-4">
              {user ? (
                <button onClick={handleLogout} className="flex items-center gap-2 text-maroon-700 font-medium">
                  <LogOut className="w-5 h-5" /> Logout
                </button>
              ) : (
                <Link href="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-maroon-700 font-medium">
                  <User className="w-5 h-5" /> Login
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
