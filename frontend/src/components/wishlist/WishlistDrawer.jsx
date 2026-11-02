import { X, Trash2, Heart, ShoppingCart, ArrowRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

export default function WishlistDrawer() {
  const { wishlistItems, totalWishlistItems, isWishlistOpen, setIsWishlistOpen, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart, showToast, setIsCartOpen } = useCart();

  if (!isWishlistOpen) return null;

  const handleAddSingleToCart = (item) => {
    // Construct product structure expected by addToCart
    const product = {
      id: item.id,
      name: item.name,
      category: item.category,
      brand: item.brand,
      defaultUnit: item.defaultUnit,
      image: item.image,
      variants: item.variants
    };
    addToCart(product, item.variants[0], 1);
  };

  const handleAddAllToCart = () => {
    wishlistItems.forEach((item) => {
      const product = {
        id: item.id,
        name: item.name,
        category: item.category,
        brand: item.brand,
        defaultUnit: item.defaultUnit,
        image: item.image,
        variants: item.variants
      };
      addToCart(product, item.variants[0], 1);
    });
    showToast(`Added ${wishlistItems.length} saved items to your cart!`);
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#1A1D24] border-l border-zinc-200 dark:border-[#272A34] text-zinc-900 dark:text-zinc-100 flex flex-col justify-between shadow-2xl transition-colors">
          {/* Header */}
          <div className="p-5 border-b border-zinc-200 dark:border-[#272A34] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h2 className="font-bold text-base text-zinc-900 dark:text-white">
                Saved Items ({totalWishlistItems})
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {wishlistItems.length > 0 && (
                <button
                  onClick={clearWishlist}
                  className="text-xs text-rose-600 dark:text-rose-400 hover:underline font-semibold px-2 py-1 rounded"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-800 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-zinc-100 dark:divide-[#272A34]">
            {wishlistItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-800 dark:text-white text-base">Your Wishlist is Empty</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-xs">
                    Click the heart icon on any plywood sheet, screw box, or hardware fitting to save it for later comparison.
                  </p>
                </div>
              </div>
            ) : (
              wishlistItems.map((item) => (
                <div key={item.id} className="py-4 flex items-start gap-3 text-left">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-[#272A34] shrink-0"
                  />
                  <div className="flex-1">
                    <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                      {item.brand}
                    </span>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1">
                      {item.name}
                    </h4>
                    <div className="text-xs font-black text-zinc-900 dark:text-white mt-1">
                      ₹{item.price.toLocaleString()}{' '}
                      <span className="text-[10px] text-zinc-400 font-normal">
                        / {item.defaultUnit}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <button
                        onClick={() => handleAddSingleToCart(item)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 font-bold text-xs shadow-sm transition-all cursor-pointer active:scale-95"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>

                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-1.5 text-zinc-400 hover:text-rose-600 transition-colors cursor-pointer"
                        title="Remove from Wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {wishlistItems.length > 0 && (
            <div className="p-5 border-t border-zinc-200 dark:border-[#272A34] bg-zinc-50 dark:bg-[#15171D]">
              <button
                onClick={handleAddAllToCart}
                className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Move All to Cart</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
