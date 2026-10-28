import { Phone, Truck, ShieldCheck, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-zinc-900 dark:bg-[#0D0E11] border-b border-zinc-800 dark:border-[#1E2129] text-xs text-zinc-300 py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Highlights */}
        <div className="flex items-center flex-wrap gap-4 text-center md:text-left justify-center md:justify-start">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Truck className="w-3.5 h-3.5" />
            <span>Direct Site Delivery | Free over ₹10,000</span>
          </div>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <div className="flex items-center gap-1 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Calibrated Boards & Verified Screws (GST Input Credit)</span>
          </div>
        </div>

        {/* Right: Contact & Location */}
        <div className="flex items-center gap-4 text-zinc-400 text-xs">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden lg:inline">Main Timber Yard & Warehouse</span>
          </div>
          <span className="hidden lg:inline text-zinc-700">|</span>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1 text-zinc-200 hover:text-white transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Contractor Desk: +91 98765 43210</span>
          </a>
        </div>
      </div>
    </div>
  );
}
