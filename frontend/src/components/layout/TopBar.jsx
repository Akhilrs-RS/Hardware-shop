import { Phone, Truck, ShieldCheck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-zinc-900 dark:bg-[#0D0E11] border-b border-zinc-800 dark:border-[#1E2129] text-[11px] text-zinc-300 py-1.5 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Essential Logistics Guarantee */}
        <div className="flex items-center gap-2 truncate">
          <Truck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">
            <strong className="text-zinc-100 font-semibold">Direct Site Delivery</strong> • Free over ₹10,000 across Delhi NCR
          </span>
          <span className="hidden md:inline text-zinc-600">|</span>
          <span className="hidden md:inline-flex items-center gap-1 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Calibrated IS:710 & Verified Screws</span>
          </span>
        </div>

        {/* Right: Direct Contractor Hotline */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 text-zinc-200 hover:text-amber-400 transition-colors font-medium cursor-pointer"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span className="hidden sm:inline">Contractor Desk:</span>
            <span className="font-semibold text-white">+91 98765 43210</span>
          </a>
        </div>
      </div>
    </div>
  );
}
