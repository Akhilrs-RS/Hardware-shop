import {
  Layers,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CreditCard,
  FileText,
  Truck
} from 'lucide-react';

export default function Footer({ setSelectedCategory, setActiveTab }) {
  const navigateCategory = (catId) => {
    setActiveTab('catalog');
    setSelectedCategory(catId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-900 dark:bg-[#0D0E11] border-t border-zinc-800 dark:border-[#1E2129] text-zinc-300 text-sm mt-16 transition-colors">
      {/* 1. Value Proposition Banner */}
      <div className="border-b border-zinc-800 dark:border-[#1E2129] bg-zinc-950/40 dark:bg-[#12141A] py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Direct Site Delivery</div>
              <p className="text-xs text-zinc-400">Flatbed unloading at your site or workshop</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">100% Calibrated Boards</div>
              <p className="text-xs text-zinc-400">Zero core gaps, standard IS:710 & IS:303</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">GST Input Tax Credit</div>
              <p className="text-xs text-zinc-400">B2B Tax invoices for contractors & builders</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Transparent Wholesale Rates</div>
              <p className="text-xs text-zinc-400">No middlemen; volume discounts on full cartons</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-600 dark:bg-amber-500 flex items-center justify-center text-white dark:text-zinc-950 font-bold shadow-md">
                <Layers className="w-5 h-5 text-white dark:text-zinc-950" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                H<span className="text-amber-400">SHOP</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Your trusted regional supplier for premium plywood, HDHMR green moisture-resistant panels, interior drywall & wood screws, soft-close hardware fittings, and synthetic wood adhesives.
            </p>
          </div>

          {/* Column 2: Sheet Materials */}
          <div>
            <div className="text-amber-400 font-bold text-sm mb-3 uppercase tracking-wider">
              Boards & Panels
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button onClick={() => navigateCategory('plywood')} className="hover:text-amber-300 transition-colors">
                  BWP Marine Grade Plywood (IS:710)
                </button>
              </li>
              <li>
                <button onClick={() => navigateCategory('plywood')} className="hover:text-amber-300 transition-colors">
                  Commercial MR Plywood (IS:303)
                </button>
              </li>
              <li>
                <button onClick={() => navigateCategory('plywood')} className="hover:text-amber-300 transition-colors">
                  Russian Birch Calibrated Ply
                </button>
              </li>
              <li>
                <button onClick={() => navigateCategory('mdf-hdf')} className="hover:text-amber-300 transition-colors">
                  HDHMR Green Water-Resistant Board
                </button>
              </li>
              <li>
                <button onClick={() => navigateCategory('mdf-hdf')} className="hover:text-amber-300 transition-colors">
                  Pre-Laminated Woodgrain MDF
                </button>
              </li>
              <li>
                <button onClick={() => navigateCategory('mdf-hdf')} className="hover:text-amber-300 transition-colors">
                  Exterior HDF Hardboards (3.2mm/6mm)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Fasteners & Hardware */}
          <div>
            <div className="text-amber-400 font-bold text-sm mb-3 uppercase tracking-wider">
              Screws & Hardware
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button onClick={() => navigateCategory('screws-fasteners')} className="hover:text-amber-300 transition-colors">
                  Black Drywall Gypsum Screws (19mm–75mm)
                </button>
              </li>
              <li>
                <button onClick={() => navigateCategory('screws-fasteners')} className="hover:text-amber-300 transition-colors">
                  Zinc Star Head Wood Screws (500 pcs)
                </button>
              </li>
              <li>
                <button onClick={() => navigateCategory('screws-fasteners')} className="hover:text-amber-300 transition-colors">
                  SS 304 Rustproof Hinge Screws
                </button>
              </li>
              <li>
                <button onClick={() => navigateCategory('hardware-fittings')} className="hover:text-amber-300 transition-colors">
                  Soft-Close Auto Hydraulic Hinges
                </button>
              </li>
              <li>
                <button onClick={() => navigateCategory('hardware-fittings')} className="hover:text-amber-300 transition-colors">
                  Telescopic Ball-Bearing Drawer Slides
                </button>
              </li>
              <li>
                <button onClick={() => navigateCategory('adhesives-finishes')} className="hover:text-amber-300 transition-colors">
                  Fevicol Marine & HeatX Adhesives
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Warehouse & Contact Info */}
          <div>
            <div className="text-amber-400 font-bold text-sm mb-3 uppercase tracking-wider">
              Timber Yard & Store
            </div>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Plot #42, Industrial Timber & Hardware Market, Yard 3</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white font-medium">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:orders@hardwareshop.com" className="hover:text-white">
                  orders@hardwareshop.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon - Sat: 8:00 AM - 8:00 PM (Sun: Closed)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar: Copyright & Payment Badges */}
        <div className="border-t border-zinc-800 dark:border-[#1E2129] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} H-SHOP Hardware & Timber Supplies Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 font-medium">We Accept:</span>
            <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 font-semibold text-[10px]">UPI</span>
            <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 font-semibold text-[10px]">VISA</span>
            <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 font-semibold text-[10px]">MasterCard</span>
            <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 font-semibold text-[10px]">NetBanking</span>
            <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 font-semibold text-[10px]">NEFT/RTGS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
