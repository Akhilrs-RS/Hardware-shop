import { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, ShieldCheck, Truck, FileText, CheckCircle2, Star } from 'lucide-react';

const featuredMaterials = [
  {
    id: 'plywood',
    categoryTarget: 'plywood',
    name: 'IS:710 Marine Plywood',
    subtitle: 'Calibrated BWP Hardwood Core',
    price: 'From ₹1,450 / 8x4 sheet',
    rating: '4.9',
    badge: 'IS:710 Certified Marine',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80',
    specs: ['72h Boiling Waterproof', 'Zero Core Gaps', 'Calibrated Uniformity']
  },
  {
    id: 'mdf-hdf',
    categoryTarget: 'mdf-hdf',
    name: 'HDHMR Green Board',
    subtitle: 'High Density Fiberboard >850 kg/m³',
    price: 'From ₹880 / 8x4 sheet',
    rating: '4.88',
    badge: 'Moisture Resistant Core',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80',
    specs: ['CNC Routing Ready', 'Zero Edge Chipping', 'PU Paint Smooth']
  },
  {
    id: 'screws-fasteners',
    categoryTarget: 'screws-fasteners',
    name: 'Contractor Fastener Packs',
    subtitle: 'Bugle-Head Drywall & Star Screws',
    price: 'From ₹210 / 500 pcs box',
    rating: '4.92',
    badge: 'Tested 50,000 Cycles',
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1000&q=80',
    specs: ['Deep-Thread Grip', 'Corrosion Resistant', 'Magnetic Bit Head']
  }
];

export default function HeroBanner({ setSelectedCategory, setActiveTab }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredMaterials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = featuredMaterials[activeIndex];

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-10 text-left">
      <div className="rounded-3xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Direct Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/30 mb-4 w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Mill Supply & Wholesale Pricing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight mb-3">
              Wholesale Plywood, Boards & Fasteners Direct to Site
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              Source genuine IS:710 Marine Plywood, HDHMR green panels, and interior hardware at direct mill rates. Same-day flatbed delivery across Delhi NCR with GST input invoices.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={scrollToCatalog}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 font-bold text-sm shadow-md transition-all cursor-pointer active:scale-95"
              >
                <span>Browse Materials</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('estimator')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-[#222630] dark:hover:bg-[#2A303D] dark:text-zinc-200 border border-zinc-200 dark:border-[#2E333F] text-sm font-semibold transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Interior Work Estimator</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-zinc-100 dark:border-[#272A34] text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Flatbed Site Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>100% Calibrated IS:710</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>GST 18% Input Credit</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Material Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div
              onClick={() => {
                setActiveTab('catalog');
                setSelectedCategory(current.categoryTarget);
                scrollToCatalog();
              }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-[#272A34] shadow-md group cursor-pointer"
            >
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

              {/* Floating Top Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-black/75 text-white backdrop-blur-md border border-white/20">
                  {current.badge}
                </span>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold bg-amber-500 text-zinc-950">
                  <Star className="w-3 h-3 fill-zinc-950" />
                  <span>{current.rating}</span>
                </div>
              </div>

              {/* Bottom Info & Specs */}
              <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                <div className="text-base font-bold leading-tight drop-shadow-sm">
                  {current.name}
                </div>
                <div className="text-xs text-amber-300 font-semibold mb-2">
                  {current.price}
                </div>

                <div className="flex flex-wrap gap-1">
                  {current.specs.map((sp, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-black/60 text-zinc-200 backdrop-blur-md border border-white/10"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      <span>{sp}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Material Switcher Tabs */}
            <div className="grid grid-cols-3 gap-2">
              {featuredMaterials.map((mat, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={mat.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`py-2 px-2.5 rounded-xl text-left border transition-all cursor-pointer text-xs ${
                      isSelected
                        ? 'bg-amber-500 text-zinc-950 font-bold border-amber-500 shadow-sm'
                        : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-[#16181F] dark:hover:bg-[#1E212B] dark:text-zinc-300 dark:border-[#272A34]'
                    }`}
                  >
                    <div className="truncate font-semibold">{mat.name.split(' ')[0]} {mat.name.split(' ')[1]}</div>
                    <div className={`text-[10px] truncate ${isSelected ? 'text-zinc-900' : 'text-zinc-400 dark:text-zinc-500'}`}>
                      {mat.price.split(' / ')[0]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
