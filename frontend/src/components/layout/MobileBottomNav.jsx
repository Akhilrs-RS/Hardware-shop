import { Home, Sparkles, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function MobileBottomNav({ activeTab, setActiveTab }) {
  const { totalItems, setIsCartOpen } = useCart();
  const { totalWishlistItems, setIsWishlistOpen } = useWishlist();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#121316]/95 backdrop-blur-md border-t border-zinc-200 dark:border-[#272A34] px-4 py-2 transition-colors">
      <div className="flex items-center justify-around">
        {/* Home / Catalog Tab */}
        <button
          onClick={() => {
            setActiveTab('catalog');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            activeTab === 'catalog'
              ? 'text-amber-600 dark:text-amber-400 font-bold'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">Shop</span>
        </button>

        {/* Interior Estimator */}
        <button
          onClick={() => {
            setActiveTab('estimator');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            activeTab === 'estimator'
              ? 'text-amber-600 dark:text-amber-400 font-bold'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px]">Estimator</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={() => setIsWishlistOpen(true)}
          className="flex flex-col items-center gap-1 relative cursor-pointer text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
        >
          <div className="relative">
            <Heart className={`w-5 h-5 ${totalWishlistItems > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
            {totalWishlistItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalWishlistItems}
              </span>
            )}
          </div>
          <span className="text-[10px]">Wishlist</span>
        </button>

        {/* Cart / BOM */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-1 relative cursor-pointer text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5 text-amber-500" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-amber-500 text-zinc-950 text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[10px]">Cart</span>
        </button>
      </div>
    </div>
  );
}
