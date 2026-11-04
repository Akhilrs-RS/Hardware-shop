import { useState, useMemo } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import CategoryBar from './components/layout/CategoryBar';
import MobileBottomNav from './components/layout/MobileBottomNav';
import Footer from './components/layout/Footer';
import HeroBanner from './components/home/HeroBanner';
import CategoryGrid from './components/home/CategoryGrid';
import ProjectShowcase from './components/home/ProjectShowcase';
import TestimonialsSection from './components/home/TestimonialsSection';
import FaqSection from './components/home/FaqSection';
import ProductCard from './components/catalog/ProductCard';
import FilterSidebar from './components/catalog/FilterSidebar';
import CollectionTabs from './components/catalog/CollectionTabs';
import QuickViewModal from './components/catalog/QuickViewModal';
import WishlistDrawer from './components/wishlist/WishlistDrawer';
import InteriorEstimator from './components/estimator/InteriorEstimator';
import CartDrawer from './components/cart/CartDrawer';
import CheckoutModal from './components/cart/CheckoutModal';
import { products } from './data/products';
import { categories } from './data/categories';
import { Sparkles, PackageSearch } from 'lucide-react';

function MainShopContent() {
  const [activeTab, setActiveTab] = useState('catalog'); // 'catalog' | 'estimator'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeFilterTab, setActiveFilterTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThickness, setSelectedThickness] = useState(null);
  const [selectedScrewSize, setSelectedScrewSize] = useState(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const { toastMessage } = useCart();

  const resetFilters = () => {
    setSelectedCategory('all');
    setActiveFilterTab('all');
    setSelectedThickness(null);
    setSelectedScrewSize(null);
    setInStockOnly(false);
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedThickness !== null ||
    selectedScrewSize !== null ||
    inStockOnly ||
    activeFilterTab !== 'all' ||
    searchQuery.trim() !== '';

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }

        // Curated Collection Tab filter
        if (activeFilterTab === 'best-sellers') {
          const isBestSeller = product.badge?.includes('Best') || product.badge?.includes('Top') || product.reviewsCount >= 100;
          if (!isBestSeller) return false;
        } else if (activeFilterTab === 'bulk-packs') {
          const isBulk = product.category === 'screws-fasteners' || product.defaultUnit.includes('box') || product.defaultUnit.includes('roll') || product.badge?.includes('Bulk');
          if (!isBulk) return false;
        } else if (activeFilterTab === 'top-rated') {
          if (product.rating < 4.85) return false;
        } else if (activeFilterTab === 'waterproof') {
          const isWaterproof = product.badge?.includes('Marine') || product.badge?.includes('Rust') || product.name.includes('Marine') || product.id === 'adh-01';
          if (!isWaterproof) return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchCat = product.category.toLowerCase().includes(q);
          const matchDesc = product.description.toLowerCase().includes(q);
          const matchVar = product.variants.some((v) =>
            v.label.toLowerCase().includes(q)
          );
          if (!matchName && !matchCat && !matchDesc && !matchVar) return false;
        }

        // Thickness filter (for boards)
        if (selectedThickness) {
          const hasThickness = product.variants.some((v) =>
            v.label.toLowerCase().includes(selectedThickness.toLowerCase())
          );
          if (!hasThickness) return false;
        }

        // Screw size filter
        if (selectedScrewSize) {
          const hasScrewSize = product.variants.some((v) =>
            v.label.toLowerCase().includes(selectedScrewSize.toLowerCase())
          );
          if (!hasScrewSize) return false;
        }

        // In-stock
        if (inStockOnly && !product.inStock) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'price-asc') return a.variants[0].price - b.variants[0].price;
        if (sortBy === 'price-desc') return b.variants[0].price - a.variants[0].price;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0; // featured default
      });
  }, [
    selectedCategory,
    activeFilterTab,
    searchQuery,
    selectedThickness,
    selectedScrewSize,
    inStockOnly,
    sortBy
  ]);

  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen pb-16 md:pb-0 bg-[#F8F9FA] dark:bg-[#121316] text-zinc-900 dark:text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-zinc-950 transition-colors">
      {/* 1. Global Announcement TopBar */}
      <TopBar />

      {/* 2. Main E-Commerce Header with Live Search, Theme Switcher, Wishlist & Cart */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 3. Horizontal Category Navigation */}
      <CategoryBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 bg-zinc-900 text-white dark:bg-amber-500 dark:text-zinc-950 font-bold px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom duration-200 text-xs sm:text-sm">
          <Sparkles className="w-4 h-4 text-amber-400 dark:text-zinc-950" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 4. Main Page Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full">
        {activeTab === 'estimator' ? (
          /* Interior Work Material Estimator View */
          <InteriorEstimator setActiveTab={setActiveTab} />
        ) : (
          /* Standard E-Commerce Catalog View */
          <>
            {/* Streamlined Hero Banner & Instant Material Showcase */}
            <HeroBanner
              setSelectedCategory={setSelectedCategory}
              setActiveTab={setActiveTab}
            />

            {/* Shop by Category Visual Tiles */}
            <CategoryGrid
              setSelectedCategory={setSelectedCategory}
              setActiveTab={setActiveTab}
            />

            {/* Shop by Interior Project Showcase */}
            <ProjectShowcase
              setActiveTab={setActiveTab}
              setSelectedCategory={setSelectedCategory}
            />

            {/* Catalog Grid Section with Filter Sidebar */}
            <section id="catalog-section" className="mt-8 mb-16 scroll-mt-24">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Left Filter Sidebar */}
                <div className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24">
                  <FilterSidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedThickness={selectedThickness}
                    setSelectedThickness={setSelectedThickness}
                    selectedScrewSize={selectedScrewSize}
                    setSelectedScrewSize={setSelectedScrewSize}
                    inStockOnly={inStockOnly}
                    setInStockOnly={setInStockOnly}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    resetFilters={resetFilters}
                  />
                </div>

                {/* Right Product Grid */}
                <div className="flex-1 w-full text-left">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-200 dark:border-[#272A34] gap-2 mb-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                        {activeCategoryObj?.name || 'All Inventory'}
                      </h2>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {activeCategoryObj?.description || 'Browse all materials, screws, and fittings'}
                      </p>
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      Showing{' '}
                      <strong className="text-amber-700 dark:text-amber-400 font-bold">
                        {filteredProducts.length}
                      </strong>{' '}
                      available items
                    </div>
                  </div>

                  {/* Curated Collection Tabs */}
                  <CollectionTabs
                    activeFilterTab={activeFilterTab}
                    setActiveFilterTab={setActiveFilterTab}
                  />

                  {/* Active Filter Chips with 1-click removal */}
                  {hasActiveFilters && (
                    <div className="flex flex-wrap items-center gap-1.5 mb-4 text-left">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mr-1">Applied:</span>
                      {selectedCategory !== 'all' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-amber-50 dark:bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 font-medium">
                          Category: {activeCategoryObj?.name}
                          <button onClick={() => setSelectedCategory('all')} className="ml-1 text-amber-700 dark:text-amber-400 hover:text-black dark:hover:text-white cursor-pointer font-bold">✕</button>
                        </span>
                      )}
                      {activeFilterTab !== 'all' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-amber-50 dark:bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 font-medium">
                          Collection: {activeFilterTab}
                          <button onClick={() => setActiveFilterTab('all')} className="ml-1 text-amber-700 dark:text-amber-400 hover:text-black dark:hover:text-white cursor-pointer font-bold">✕</button>
                        </span>
                      )}
                      {selectedThickness && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-amber-50 dark:bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 font-medium">
                          Thickness: {selectedThickness}
                          <button onClick={() => setSelectedThickness(null)} className="ml-1 text-amber-700 dark:text-amber-400 hover:text-black dark:hover:text-white cursor-pointer font-bold">✕</button>
                        </span>
                      )}
                      {selectedScrewSize && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-amber-50 dark:bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 font-medium">
                          Size: {selectedScrewSize}
                          <button onClick={() => setSelectedScrewSize(null)} className="ml-1 text-amber-700 dark:text-amber-400 hover:text-black dark:hover:text-white cursor-pointer font-bold">✕</button>
                        </span>
                      )}
                      {inStockOnly && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 font-medium">
                          In-Stock
                          <button onClick={() => setInStockOnly(false)} className="ml-1 text-emerald-700 dark:text-emerald-400 hover:text-black dark:hover:text-white cursor-pointer font-bold">✕</button>
                        </span>
                      )}
                      {searchQuery.trim() !== '' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 font-medium">
                          &ldquo;{searchQuery}&rdquo;
                          <button onClick={() => setSearchQuery('')} className="ml-1 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer font-bold">✕</button>
                        </span>
                      )}
                      <button
                        onClick={resetFilters}
                        className="text-xs text-amber-600 dark:text-amber-400 hover:underline font-semibold ml-1 cursor-pointer"
                      >
                        Clear All
                      </button>
                    </div>
                  )}

                  {/* Products Grid */}
                  {filteredProducts.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-800 p-12 text-center space-y-3 bg-white dark:bg-[#1A1D24]/40">
                      <PackageSearch className="w-12 h-12 text-zinc-400 dark:text-zinc-600 mx-auto" />
                      <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                        No matching materials found
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                        Try adjusting your filters, searching for a different thickness or screw size, or reset filters to browse all inventory.
                      </p>
                      <button
                        onClick={resetFilters}
                        className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-amber-400 font-semibold text-xs cursor-pointer border border-zinc-300 dark:border-zinc-700"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {filteredProducts.map((prod) => (
                        <ProductCard key={prod.id} product={prod} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Verified Contractor Reviews Section */}
            <TestimonialsSection />

            {/* Hardware Buying Guide & FAQ Section */}
            <FaqSection />
          </>
        )}
      </main>

      {/* 5. Modals & Drawers */}
      <CartDrawer />
      <WishlistDrawer />
      <CheckoutModal />
      <QuickViewModal />

      {/* 6. Mobile Bottom Navigation */}
      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 7. Comprehensive E-Commerce Footer */}
      <Footer
        setSelectedCategory={setSelectedCategory}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <MainShopContent />
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
