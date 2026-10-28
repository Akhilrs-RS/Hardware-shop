import { useState, useMemo } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import CategoryBar from './components/layout/CategoryBar';
import Footer from './components/layout/Footer';
import HeroBanner from './components/home/HeroBanner';
import CategoryGrid from './components/home/CategoryGrid';
import ProductCard from './components/catalog/ProductCard';
import FilterSidebar from './components/catalog/FilterSidebar';
import QuickViewModal from './components/catalog/QuickViewModal';
import InteriorEstimator from './components/estimator/InteriorEstimator';
import CartDrawer from './components/cart/CartDrawer';
import CheckoutModal from './components/cart/CheckoutModal';
import { products } from './data/products';
import { categories } from './data/categories';
import { Sparkles, PackageSearch } from 'lucide-react';

function MainShopContent() {
  const [activeTab, setActiveTab] = useState('catalog'); // 'catalog' | 'estimator'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThickness, setSelectedThickness] = useState(null);
  const [selectedScrewSize, setSelectedScrewSize] = useState(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const { toastMessage } = useCart();

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedThickness(null);
    setSelectedScrewSize(null);
    setInStockOnly(false);
    setSearchQuery('');
    setSortBy('featured');
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
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
    searchQuery,
    selectedThickness,
    selectedScrewSize,
    inStockOnly,
    sortBy
  ]);

  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* 1. Global Announcement TopBar */}
      <TopBar />

      {/* 2. Main E-Commerce Header with Live Search & Cart */}
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
        <div className="fixed bottom-6 right-6 z-50 bg-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom duration-200 text-xs sm:text-sm">
          <Sparkles className="w-4 h-4 text-slate-950" />
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
            {/* Hero Carousel */}
            <HeroBanner
              setSelectedCategory={setSelectedCategory}
              setActiveTab={setActiveTab}
            />

            {/* Shop by Category Tiles */}
            <CategoryGrid
              setSelectedCategory={setSelectedCategory}
              setActiveTab={setActiveTab}
            />

            {/* Catalog Grid Section with Filter Sidebar */}
            <section id="catalog-section" className="mt-8">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Left Filter Sidebar */}
                <div className="w-full lg:w-64 shrink-0 lg:sticky lg:top-20">
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
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2 mb-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {activeCategoryObj?.name || 'All Inventory'}
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {activeCategoryObj?.description || 'Browse all products'}
                      </p>
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      Showing{' '}
                      <strong className="text-amber-400 font-bold">
                        {filteredProducts.length}
                      </strong>{' '}
                      available items
                    </div>
                  </div>

                  {/* Products Grid */}
                  {filteredProducts.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-800 p-12 text-center space-y-3 bg-slate-900/40">
                      <PackageSearch className="w-12 h-12 text-slate-600 mx-auto" />
                      <h3 className="font-bold text-base text-white">
                        No matching materials found
                      </h3>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto">
                        Try adjusting your filters, searching for a different thickness or screw size, or reset filters to browse all inventory.
                      </p>
                      <button
                        onClick={resetFilters}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold text-xs cursor-pointer"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProducts.map((prod) => (
                        <ProductCard key={prod.id} product={prod} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* 5. Modals & Drawers */}
      <CartDrawer />
      <CheckoutModal />
      <QuickViewModal />

      {/* 6. Comprehensive E-Commerce Footer */}
      <Footer
        setSelectedCategory={setSelectedCategory}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainShopContent />
    </CartProvider>
  );
}
