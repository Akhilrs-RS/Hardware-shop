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
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 text-slate-100 flex flex-col justify-between shadow-2xl">
          {/* 1. Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="font-bold text-base text-white">
                Project Cart / BOM ({totalItems})
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-rose-400 hover:text-rose-300 font-semibold px-2 py-1 rounded hover:bg-rose-950/40"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-slate-950/80 px-5 py-2.5 border-b border-slate-800 text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <Truck className="w-4 h-4" />
                <span>You qualify for <strong>FREE Site Delivery</strong>!</span>
              </div>
            ) : (
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Add <strong>₹{(10000 - subtotal).toLocaleString()}</strong> more for Free Delivery</span>
                  <span className="font-bold">{Math.round((subtotal / 10000) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / 10000) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* 2. Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-slate-800/80">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Your cart is empty</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
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
                    className="w-14 h-14 rounded-xl object-cover bg-slate-950 border border-slate-800 shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <h4 className="text-xs font-bold text-slate-100 line-clamp-1">
                      {item.name}
                    </h4>
                    <div className="text-[11px] text-amber-400 font-semibold mt-0.5">
                      Option: {item.variantLabel}
                    </div>
                    <div className="text-xs font-bold text-slate-300 mt-1">
                      ₹{item.unitPrice.toLocaleString()}{' '}
                      <span className="text-[10px] text-slate-500 font-normal">
                        / {item.unit}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700">
                        <button
                          onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-white">
                          ₹{(item.unitPrice * item.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.itemKey)}
                          className="p-1 text-slate-500 hover:text-rose-400"
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
            <div className="p-5 border-t border-slate-800 bg-slate-950/70 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Materials Subtotal:</span>
                  <span className="text-slate-200 font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18% B2B Credit):</span>
                  <span className="text-slate-200 font-medium">₹{gstTax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Job-site Transport:</span>
                  <span className="text-slate-200 font-medium">
                    {isFreeShipping ? (
                      <span className="text-emerald-400 font-bold uppercase">Free</span>
                    ) : (
                      `₹${shippingCharge.toLocaleString()}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-white pt-2 border-t border-slate-800">
                  <span>Estimated Total:</span>
                  <span className="text-amber-400">₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleCheckoutClick}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
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

