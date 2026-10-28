import { useState } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cartItems, grandTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    siteAddress: '',
    pincode: '',
    gstin: '',
    paymentMethod: 'cod',
    unloadingNotes: 'Ground floor direct vehicle access'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = 'HSHOP-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderPlaced(true);
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setOrderPlaced(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#2E333F] rounded-3xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-zinc-800 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {orderPlaced ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-2xl font-black text-zinc-900 dark:text-white">Order Confirmed!</h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Your order <strong className="text-amber-700 dark:text-amber-400 font-mono">{orderId}</strong> has been logged. Our dispatch team will call you to confirm site delivery timing and unloading arrangements.
            </p>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#15171D] border border-zinc-200 dark:border-[#272A34] text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto text-left space-y-1.5">
              <div className="flex justify-between">
                <span>Contractor / Customer:</span>
                <span className="font-bold text-zinc-900 dark:text-white">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span>Contact Phone:</span>
                <span className="font-bold text-zinc-900 dark:text-white">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span>Site Location:</span>
                <span className="font-bold text-zinc-900 dark:text-white truncate max-w-[180px]">{formData.siteAddress}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Mode:</span>
                <span className="font-bold text-amber-700 dark:text-amber-400 uppercase">{formData.paymentMethod}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 font-bold text-xs transition-all cursor-pointer"
              >
                Back to Shop
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Job-Site Checkout & Delivery</h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Enter site address for plywood unloading and hardware delivery.
              </p>
            </div>

            {/* Customer info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Full Name / Contractor Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full bg-zinc-50 dark:bg-[#15171D] border border-zinc-300 dark:border-[#272A34] rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Contact Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 00000"
                  className="w-full bg-zinc-50 dark:bg-[#15171D] border border-zinc-300 dark:border-[#272A34] rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400"
                />
              </div>
            </div>

            {/* Site Address */}
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                Delivery Site Address (House/Plot/Apartment) *
              </label>
              <textarea
                required
                rows={2}
                value={formData.siteAddress}
                onChange={(e) => setFormData({ ...formData, siteAddress: e.target.value })}
                placeholder="Flat 402, Green Valley Apartments, Near Main Road..."
                className="w-full bg-zinc-50 dark:bg-[#15171D] border border-zinc-300 dark:border-[#272A34] rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Pin Code / Area Code *
                </label>
                <input
                  required
                  type="text"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  placeholder="560001"
                  className="w-full bg-zinc-50 dark:bg-[#15171D] border border-zinc-300 dark:border-[#272A34] rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  GSTIN (For 18% Input Credit, Optional)
                </label>
                <input
                  type="text"
                  value={formData.gstin}
                  onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                  placeholder="29AAAAA0000A1Z5"
                  className="w-full bg-zinc-50 dark:bg-[#15171D] border border-zinc-300 dark:border-[#272A34] rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                Select Payment Mode
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'cod', label: 'Cash on Site' },
                  { id: 'upi', label: 'UPI / QR Code' },
                  { id: 'neft', label: 'NEFT / RTGS' }
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                      formData.paymentMethod === m.id
                        ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-amber-500 dark:text-zinc-950 dark:border-amber-400 font-bold'
                        : 'bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-[#222630] dark:text-zinc-300 dark:border-[#2E333F]'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Order summary pill */}
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#15171D] border border-zinc-200 dark:border-[#272A34] flex items-center justify-between text-xs">
              <div>
                <span className="text-zinc-500 dark:text-zinc-400">{cartItems.length} items (Incl. 18% GST)</span>
                <div className="font-bold text-zinc-900 dark:text-white text-sm">
                  ₹{grandTotal.toLocaleString()}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Hardware</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 font-black text-sm shadow-md transition-all cursor-pointer"
            >
              Place Order (₹{grandTotal.toLocaleString()})
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
