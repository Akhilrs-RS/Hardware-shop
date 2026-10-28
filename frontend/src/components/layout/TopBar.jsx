import { Phone, Truck, ShieldCheck, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-900 border-b border-slate-800 text-xs text-slate-300 py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Highlights */}
        <div className="flex items-center flex-wrap gap-4 text-center md:text-left justify-center md:justify-start">
          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <Truck className="w-3.5 h-3.5" />
            <span>Direct Site Delivery | Free over ₹10,000</span>
          </div>
          <span className="hidden sm:inline text-slate-700">|</span>
          <div className="flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Calibrated & Genuine Brands (GST Input Credit)</span>
          </div>
        </div>

        {/* Right: Contact & Location */}
        <div className="flex items-center gap-4 text-slate-400">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            <span>Main Timber Yard & Warehouse</span>
          </div>
          <span className="text-slate-700">|</span>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-400" />
            <span>Contractor Desk: +91 98765 43210</span>
          </a>
        </div>
      </div>
    </div>
  );
}
