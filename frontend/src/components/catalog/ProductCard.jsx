import { useState } from 'react';
import { Star, ShoppingCart, Eye, Check, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function ProductCard({ product }) {
  const { addToCart, setQuickViewProduct } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [justAdded, setJustAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, 1);
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
    <div className="group rounded-2xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
      {/* 1. Product Image & Badges */}
      <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          {product.badge && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-zinc-900/90 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-sm backdrop-blur-sm">
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white shadow-sm">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Top Right: Wishlist Heart */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute top-2.5 right-2.5 p-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
            isFavorited
              ? 'bg-rose-500 text-white shadow-md scale-105'
              : 'bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-300 hover:text-rose-500 hover:bg-white dark:hover:bg-zinc-800'
          }`}
          title={isFavorited ? 'Remove from Wishlist' : 'Save to Wishlist'}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-white' : ''}`} />
        </button>

        {/* Specs / Quick View button */}
        <button
          onClick={() => setQuickViewProduct(product)}
          className="absolute right-2.5 bottom-2.5 py-1 px-2.5 rounded-lg bg-white/90 hover:bg-zinc-900 hover:text-white dark:bg-[#1A1D24]/90 dark:hover:bg-amber-500 dark:text-zinc-200 dark:hover:text-zinc-950 border border-zinc-200/80 dark:border-zinc-700/80 text-[11px] font-semibold shadow-sm transition-all flex items-center gap-1 cursor-pointer text-zinc-800 backdrop-blur-sm"
        >
          <Eye className="w-3 h-3" />
          <span>Specs</span>
        </button>
      </div>

      {/* 2. Body Details */}
      <div className="p-4 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Brand & Rating Row */}
          <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 mb-1">
            <span className="font-semibold text-amber-700 dark:text-amber-400 truncate max-w-[140px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3 h-3 fill-amber-500" />
              <span className="font-bold text-zinc-800 dark:text-zinc-200">{product.rating}</span>
              <span className="text-zinc-400 dark:text-zinc-500 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-bold text-sm text-zinc-900 dark:text-zinc-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors line-clamp-2 cursor-pointer leading-tight mb-2.5"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Compact Variant Selector */}
          {product.variants.length > 1 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {product.variants.slice(0, 4).map((v) => {
                  const isSelected = selectedVariant.id === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-900 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-xs font-bold'
                          : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-[#222630] dark:text-zinc-300 dark:hover:bg-[#2A303D] border border-zinc-200 dark:border-[#2E333F]'
                      }`}
                    >
                      {v.label}
                    </button>
                  );
                })}
                {product.variants.length > 4 && (
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="px-1.5 py-0.5 rounded-md text-[10px] font-semibold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                  >
                    +{product.variants.length - 4} more
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 3. Pricing & Clean CTA */}
        <div className="pt-2.5 border-t border-zinc-100 dark:border-[#272A34]">
          <div className="flex items-baseline justify-between mb-2.5">
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
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">
                <span>per {product.defaultUnit}</span>
                <span>•</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  In Stock
                </span>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              justAdded
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 shadow-sm active:scale-98'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added to Cart!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5 text-amber-400 dark:text-zinc-950" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
