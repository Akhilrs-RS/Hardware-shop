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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 relative bg-slate-950 aspect-square md:aspect-auto">
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent md:hidden" />
          {quickViewProduct.badge && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
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
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1">
                <span>{quickViewProduct.brand}</span>
                <span>•</span>
                <span className="text-slate-400 capitalize">{quickViewProduct.category.replace('-', ' ')}</span>
              </div>
              <h2 className="text-xl font-bold text-white leading-snug">
                {quickViewProduct.name}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="ml-1 text-xs font-bold text-white">{quickViewProduct.rating}</span>
                </div>
                <span className="text-xs text-slate-500">
                  ({quickViewProduct.reviewsCount} contractor reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 leading-relaxed">
              {quickViewProduct.description}
            </p>

            {/* Sheet Size / Pack details if available */}
            {quickViewProduct.sheetSize && (
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  Standard Dimensions: <strong className="text-white">{quickViewProduct.sheetSize}</strong>
                </span>
              </div>
            )}

            {/* Key Features */}
            {quickViewProduct.features && (
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Key Specifications:
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {quickViewProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Variant Selector */}
            <div>
              <div className="text-xs font-bold text-slate-300 mb-1.5">
                Select Option / Thickness: <span className="text-amber-400">{activeVariant.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickViewProduct.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeVariant.id === v.id
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-750 border border-slate-700'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & Add to Cart */}
          <div className="pt-4 mt-4 border-t border-slate-800">
            <div className="flex items-baseline justify-between mb-3">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-white">
                    ₹{activeVariant.price.toLocaleString()}
                  </span>
                  {activeVariant.originalPrice && (
                    <span className="text-sm text-slate-500 line-through">
                      ₹{activeVariant.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400">
                  Rate per {quickViewProduct.defaultUnit}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-2.5 py-1 text-slate-400 hover:text-white"
                >
                  -
                </button>
                <span className="px-2 text-xs font-bold text-white">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-2.5 py-1 text-slate-400 hover:text-white"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                justAdded
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 shadow-lg shadow-orange-500/25'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Project Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
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
