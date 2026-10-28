import { useState, useRef, useEffect } from 'react';
import {
  Search,
  ShoppingCart,
  Calculator,
  Layers,
  Menu,
  X,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

export default function Navbar({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  setSelectedCategory
}) {
  const { totalItems, subtotal, setIsCartOpen, setQuickViewProduct } = useCart();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);

  // Filter products for instant search dropdown
  const searchResults = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.variants.some((v) =>
              v.label.toLowerCase().includes(searchQuery.toLowerCase())
            )
        )
        .slice(0, 5)
    : [];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectProduct = (product) => {
    setQuickViewProduct(product);
    setIsSearchFocused(false);
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          {/* 1. Brand Logo */}
          <button
            onClick={() => {
              setActiveTab('catalog');
              setSelectedCategory('all');
            }}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white">
                  H<span className="text-amber-400">SHOP</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Hardware
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Plywood, MDF & Interior Screws
              </p>
            </div>
          </button>

          {/* 2. Global Search with Instant Suggestions */}
          <div ref={searchRef} className="relative flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search 18mm Marine Ply, HDHMR, Drywall Screws, Hinges..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-900 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Instant Search Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">
                <div className="p-2 border-b border-slate-800 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Products matching &ldquo;{searchQuery}&rdquo;
                </div>
                <div className="divide-y divide-slate-800">
                  {searchResults.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSelectProduct(p)}
                      className="w-full p-2.5 flex items-center justify-between text-left hover:bg-slate-800/80 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-9 h-9 rounded-lg object-cover bg-slate-800"
                        />
                        <div>
                          <div className="text-xs font-medium text-slate-200 line-clamp-1">
                            {p.name}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {p.variants[0]?.label} • Starts at ₹{p.variants[0]?.price}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Interior Work Estimator CTA */}
            <button
              onClick={() => setActiveTab('estimator')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'estimator'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 ring-2 ring-amber-400/50'
                  : 'bg-slate-900 text-amber-300 hover:bg-slate-800 border border-amber-500/30'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Interior Estimator</span>
              <span className="sm:hidden">Estimator</span>
            </button>

            {/* Cart / BOM Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all relative cursor-pointer group"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                    {totalItems}
                  </span>
                )}
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider leading-none">
                  Cart / BOM
                </div>
                <div className="text-xs font-bold text-slate-100">
                  ₹{subtotal.toLocaleString()}
                </div>
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white md:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search plywood, screws, hinges..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="mt-3 pt-3 border-t border-slate-800 md:hidden flex flex-col gap-2 pb-2">
            <button
              onClick={() => {
                setActiveTab('catalog');
                setSelectedCategory('all');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Shop All Products
            </button>
            <button
              onClick={() => {
                setActiveTab('catalog');
                setSelectedCategory('plywood');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Plywood & Marine Boards
            </button>
            <button
              onClick={() => {
                setActiveTab('catalog');
                setSelectedCategory('mdf-hdf');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              MDF & HDHMR Panels
            </button>
            <button
              onClick={() => {
                setActiveTab('catalog');
                setSelectedCategory('screws-fasteners');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Screws & Fasteners (Drywall/Wood)
            </button>
            <button
              onClick={() => {
                setActiveTab('catalog');
                setSelectedCategory('hardware-fittings');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Hardware & Hydraulic Hinges
            </button>
            <button
              onClick={() => {
                setActiveTab('estimator');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-left text-sm font-semibold text-amber-400 hover:bg-slate-800 rounded-lg flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              Interior Work Material Estimator
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
