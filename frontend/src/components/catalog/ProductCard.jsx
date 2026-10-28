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
    <div className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:shadow-slate-950/60 transition-all flex flex-col justify-between overflow-hidden">
      {/* 1. Image & Badges */}
      <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <button
          onClick={() => setQuickViewProduct(product)}
          className="absolute right-2.5 bottom-2.5 p-2 rounded-xl bg-slate-900/90 hover:bg-amber-500 text-slate-300 hover:text-slate-950 border border-slate-700 text-xs font-semibold shadow-lg transition-all flex items-center gap-1 cursor-pointer opacity-90 group-hover:opacity-100"
        >
          <Eye className="w-3.5 h-3.5" />
          <span className="text-[11px] hidden sm:inline">Specs</span>
        </button>
      </div>

      {/* 2. Body & Information */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span className="font-semibold text-amber-400/90 truncate max-w-[150px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-bold text-slate-200">{product.rating}</span>
              <span className="text-slate-500 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-bold text-sm text-slate-100 hover:text-amber-300 transition-colors line-clamp-2 cursor-pointer leading-snug mb-2"
          >
            {product.name}
          </h3>

          {/* Interactive Variant Pills (Thickness, Sizes, Crank, Weights) */}
          <div className="mb-3">
            <div className="text-[11px] text-slate-400 font-medium mb-1.5 flex items-center justify-between">
              <span>Select Variant:</span>
              <span className="text-slate-300 font-bold">{selectedVariant.label}</span>
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
                        ? 'bg-amber-500 text-slate-950 shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/60'
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
        <div className="pt-3 border-t border-slate-800">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-black text-white">
                  ₹{selectedVariant.price.toLocaleString()}
                </span>
                {selectedVariant.originalPrice && (
                  <span className="text-xs text-slate-500 line-through">
                    ₹{selectedVariant.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-slate-400 font-medium">
                per {product.defaultUnit}
              </span>
            </div>

            {/* Quantity Stepper */}
            <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-1 hover:text-white text-slate-400 transition-colors cursor-pointer"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-6 text-center text-xs font-bold text-white">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-1 hover:text-white text-slate-400 transition-colors cursor-pointer"
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
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 active:scale-98'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Cart!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
