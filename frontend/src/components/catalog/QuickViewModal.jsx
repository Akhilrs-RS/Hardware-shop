import { useState } from 'react';
import { X, Star, ShoppingCart, Check, Layers } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    quickViewProduct ? quickViewProduct.variants[0] : null
  );
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!quickViewProduct) return null;

  const activeVariant = selectedVariant || quickViewProduct.variants[0];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, activeVariant, qty);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#2E333F] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 relative bg-zinc-100 dark:bg-zinc-900 aspect-square md:aspect-auto">
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            className="w-full h-full object-cover"
          />
          {quickViewProduct.badge && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider bg-zinc-900 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-md">
                {quickViewProduct.badge}
              </span>
            </div>
          )}
        </div>

        {/* Right: Technical Specifications & Actions */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between text-left">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 mb-1">
                <span>{quickViewProduct.brand}</span>
                <span>•</span>
                <span className="text-zinc-500 capitalize">{quickViewProduct.category.replace('-', ' ')}</span>
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white leading-snug">
                {quickViewProduct.name}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span className="ml-1 text-xs font-bold text-zinc-800 dark:text-white">{quickViewProduct.rating}</span>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  ({quickViewProduct.reviewsCount} contractor reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {quickViewProduct.description}
            </p>

            {/* Sheet Size / Dimensions */}
            {quickViewProduct.sheetSize && (
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-[#15171D] p-2.5 rounded-xl border border-zinc-200 dark:border-[#272A34]">
                <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>
                  Standard Dimensions: <strong className="text-zinc-900 dark:text-white">{quickViewProduct.sheetSize}</strong>
                </span>
              </div>
            )}

            {/* Key Features */}
            {quickViewProduct.features && (
              <div>
                <div className="text-[11px] font-bold text-zinc-700 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                  Key Specifications:
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {quickViewProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Variant Selector */}
            <div>
              <div className="text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                Select Option / Thickness: <span className="text-amber-700 dark:text-amber-400">{activeVariant.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickViewProduct.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeVariant.id === v.id
                        ? 'bg-zinc-900 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-sm'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-[#222630] dark:text-zinc-300 dark:hover:bg-[#2A303D] border border-zinc-200 dark:border-[#2E333F]'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & Add to Cart */}
          <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-[#272A34]">
            <div className="flex items-baseline justify-between mb-3">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-zinc-900 dark:text-white">
                    ₹{activeVariant.price.toLocaleString()}
                  </span>
                  {activeVariant.originalPrice && (
                    <span className="text-sm text-zinc-400 dark:text-zinc-500 line-through">
                      ₹{activeVariant.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Rate per {quickViewProduct.defaultUnit}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center bg-zinc-100 dark:bg-[#222630] rounded-xl border border-zinc-200 dark:border-[#2E333F]">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-2.5 py-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  -
                </button>
                <span className="px-2 text-xs font-bold text-zinc-800 dark:text-white">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-2.5 py-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                justAdded
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 shadow-md'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Project Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 text-amber-400 dark:text-zinc-950" />
                  <span>Add to Cart / Bill of Materials</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
