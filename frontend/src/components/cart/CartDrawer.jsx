import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    totalItems,
    subtotal,
    gstTax,
    shippingCharge,
    isFreeShipping,
    grandTotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    setIsCheckoutOpen
  } = useCart();

  if (!isCartOpen) return null;

  // Build WhatsApp Quotation Text
  const handleWhatsAppQuote = () => {
    let message = `*Hardware Shop Material Inquiry / BOM Order*%0A`;
    message += `Date: ${new Date().toLocaleDateString()}%0A`;
    message += `--------------------------------------%0A`;
    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}* (${item.variantLabel})%0A`;
      message += `   Qty: ${item.quantity} ${item.unit} @ ₹${item.unitPrice.toLocaleString()}%0A`;
      message += `   Sub: ₹${(item.unitPrice * item.quantity).toLocaleString()}%0A`;
    });
    message += `--------------------------------------%0A`;
    message += `*Subtotal:* ₹${subtotal.toLocaleString()}%0A`;
    message += `*GST (18%):* ₹${gstTax.toLocaleString()}%0A`;
    message += `*Est. Delivery:* ${isFreeShipping ? 'FREE' : '₹' + shippingCharge}%0A`;
    message += `*Grand Total:* ₹${grandTotal.toLocaleString()}%0A%0A`;
    message += `Please provide delivery timeline and contractor wholesale quotation.`;

    const url = `https://wa.me/919876543210?text=${message}`;
    window.open(url, '_blank');
  };

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#1A1D24] border-l border-zinc-200 dark:border-[#272A34] text-zinc-900 dark:text-zinc-100 flex flex-col justify-between shadow-2xl transition-colors">
          {/* 1. Header */}
          <div className="p-5 border-b border-zinc-200 dark:border-[#272A34] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h2 className="font-bold text-base text-zinc-900 dark:text-white">
                Project Cart / BOM ({totalItems})
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-rose-600 dark:text-rose-400 hover:underline font-semibold px-2 py-1 rounded"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-800 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-zinc-50 dark:bg-[#15171D] px-5 py-2.5 border-b border-zinc-200 dark:border-[#272A34] text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold">
                <Truck className="w-4 h-4" />
                <span>You qualify for <strong>FREE Site Delivery</strong>!</span>
              </div>
            ) : (
              <div>
                <div className="flex justify-between text-zinc-600 dark:text-zinc-300 mb-1">
                  <span>Add <strong>₹{(10000 - subtotal).toLocaleString()}</strong> more for Free Delivery</span>
                  <span className="font-bold">{Math.round((subtotal / 10000) * 100)}%</span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-600 dark:bg-amber-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / 10000) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* 2. Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-zinc-100 dark:divide-[#272A34]">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-800 dark:text-white text-base">Your cart is empty</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-xs">
                    Browse sheet materials or use our Interior Estimator to generate your bill of materials.
                  </p>
                </div>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.itemKey} className="py-3.5 flex items-start gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-[#272A34] shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1">
                      {item.name}
                    </h4>
                    <div className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold mt-0.5">
                      Option: {item.variantLabel}
                    </div>
                    <div className="text-xs font-bold text-zinc-800 dark:text-zinc-300 mt-1">
                      ₹{item.unitPrice.toLocaleString()}{' '}
                      <span className="text-[10px] text-zinc-400 font-normal">
                        / {item.unit}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center bg-zinc-100 dark:bg-[#222630] rounded-lg border border-zinc-200 dark:border-[#2E333F]">
                        <button
                          onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                          className="p-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-zinc-800 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                          className="p-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-zinc-900 dark:text-white">
                          ₹{(item.unitPrice * item.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.itemKey)}
                          className="p-1 text-zinc-400 hover:text-rose-600"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* 3. Footer Totals & Action Buttons */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-zinc-200 dark:border-[#272A34] bg-zinc-50 dark:bg-[#15171D] space-y-3">
              <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex justify-between">
                  <span>Materials Subtotal:</span>
                  <span className="text-zinc-900 dark:text-zinc-200 font-semibold">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18% B2B Credit):</span>
                  <span className="text-zinc-900 dark:text-zinc-200 font-semibold">₹{gstTax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Job-site Transport:</span>
                  <span className="text-zinc-900 dark:text-zinc-200 font-semibold">
                    {isFreeShipping ? (
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold uppercase">Free</span>
                    ) : (
                      `₹${shippingCharge.toLocaleString()}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-zinc-900 dark:text-white pt-2 border-t border-zinc-200 dark:border-[#272A34]">
                  <span>Estimated Total:</span>
                  <span className="text-zinc-900 dark:text-amber-400">₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleCheckoutClick}
                  className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-500/30 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Send Bill of Materials to WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
