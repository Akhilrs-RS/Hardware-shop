import { useState } from 'react';
import { Star, ShoppingCart, Eye, Check, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, setQuickViewProduct } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const discountPercent = selectedVariant.originalPrice
    ? Math.round(
        ((selectedVariant.originalPrice - selectedVariant.price) /
          selectedVariant.originalPrice) *
          100
      )
    : 0;

  return (
    <div className="group rounded-2xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden shadow-sm">
      {/* 1. Image & Badges */}
      <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-zinc-900/90 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-sm">
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600/90 text-white shadow-sm">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Quick View Specs Button */}
        <button
          onClick={() => setQuickViewProduct(product)}
          className="absolute right-2.5 bottom-2.5 p-2 rounded-xl bg-white/90 hover:bg-zinc-900 hover:text-white dark:bg-[#1A1D24]/90 dark:hover:bg-amber-500 dark:text-zinc-200 dark:hover:text-zinc-950 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold shadow-md transition-all flex items-center gap-1 cursor-pointer text-zinc-800"
        >
          <Eye className="w-3.5 h-3.5" />
          <span className="text-[11px] hidden sm:inline">Specs</span>
        </button>
      </div>

      {/* 2. Body & Information */}
      <div className="p-4 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-1.5">
            <span className="font-semibold text-amber-700 dark:text-amber-400 truncate max-w-[150px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <span className="font-bold text-zinc-800 dark:text-zinc-200">{product.rating}</span>
              <span className="text-zinc-400 dark:text-zinc-500 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-bold text-sm text-zinc-900 dark:text-zinc-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors line-clamp-2 cursor-pointer leading-snug mb-2.5"
          >
            {product.name}
          </h3>

          {/* Interactive Variant Pills */}
          <div className="mb-3">
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mb-1.5 flex items-center justify-between">
              <span>Select Option:</span>
              <span className="text-zinc-800 dark:text-zinc-200 font-bold">{selectedVariant.label}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.variants.map((v) => {
                const isSelected = selectedVariant.id === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-zinc-900 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-sm'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-[#222630] dark:text-zinc-300 dark:hover:bg-[#2A303D] border border-zinc-200 dark:border-[#2E333F]'
                    }`}
                  >
                    {v.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Pricing & Quantity / Add to Cart */}
        <div className="pt-3 border-t border-zinc-100 dark:border-[#272A34]">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-black text-zinc-900 dark:text-white">
                  ₹{selectedVariant.price.toLocaleString()}
                </span>
                {selectedVariant.originalPrice && (
                  <span className="text-xs text-zinc-400 dark:text-zinc-500 line-through">
                    ₹{selectedVariant.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">
                per {product.defaultUnit}
              </span>
            </div>

            {/* Quantity Stepper */}
            <div className="flex items-center bg-zinc-100 dark:bg-[#222630] rounded-lg border border-zinc-200 dark:border-[#2E333F]">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-1 hover:text-zinc-900 text-zinc-500 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-6 text-center text-xs font-bold text-zinc-800 dark:text-white">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-1 hover:text-zinc-900 text-zinc-500 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
              justAdded
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 shadow-sm active:scale-98'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Cart!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 text-amber-400 dark:text-zinc-950" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
