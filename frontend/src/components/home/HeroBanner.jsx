import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, ChevronLeft, ChevronRight, Hammer, Layers, Truck, Award, FileText, CheckCircle2, Star } from 'lucide-react';

const slides = [
  {
    id: 'plywood',
    tag: 'Contractor & Mill Direct',
    title: 'BWP Marine Plywood & Calibrated Boards',
    subtitle: '100% Boiling Water Proof (IS:710) Marine Ply made from selected hardwood veneers. Calibrated for uniform thickness, high screw retention, and zero core voids in modular kitchen carcasses.',
    ctaText: 'Explore Plywood Sheets',
    categoryTarget: 'plywood',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=300&q=80',
    tabLabel: 'BWP Marine Plywood',
    tabSub: 'IS:710 • 6mm to 25mm',
    priceLead: 'From ₹1,450 / 8x4 ft sheet',
    badge: 'IS:710 Certified Marine',
    rating: '4.9 (128 reviews)',
    specs: ['72h Boiling Proof', 'Zero Core Gaps', 'Calibrated Uniformity']
  },
  {
    id: 'mdf-hdf',
    tag: 'High Moisture Resistance',
    title: 'Action Tesa HDHMR Green Engineered Boards',
    subtitle: 'High-density (>850 kg/m³) moisture-resistant green core boards. Ideal alternative to standard plywood for sharp CNC routing, acoustic jaali cutting, and smooth PU painted shutters.',
    ctaText: 'View HDHMR Boards',
    categoryTarget: 'mdf-hdf',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=300&q=80',
    tabLabel: 'HDHMR Green Board',
    tabSub: 'Density >850 kg/m³',
    priceLead: 'From ₹880 / 8x4 ft sheet',
    badge: 'Moisture Resistant Core',
    rating: '4.88 (164 reviews)',
    specs: ['High Density Fiber', 'Zero Edge Chipping', 'PU Paint Ready']
  },
  {
    id: 'screws-fasteners',
    tag: 'Interior Work Fasteners',
    title: 'Precision Drywall Screws & Hydraulic Auto Hinges',
    subtitle: 'Bugle-head black phosphate screws, bright zinc wood screws, and SS 304 rustproof hinge fasteners packaged in economic contractor boxes of 500 pcs with guaranteed deep-thread grip.',
    ctaText: 'Shop Fasteners & Screws',
    categoryTarget: 'screws-fasteners',
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1000&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=300&q=80',
    tabLabel: 'Fasteners & Screws',
    tabSub: '500 Pcs Box Packs',
    priceLead: 'Boxes from ₹210 (500 pcs)',
    badge: 'Tested 50,000 Cycles',
    rating: '4.92 (312 reviews)',
    specs: ['Deep-Thread Bite', 'SS 304 Rustproof', 'Star Drive Head']
  }
];

export default function HeroBanner({ setSelectedCategory, setActiveTab }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="space-y-4 mb-10 text-left">
      {/* 1. Main Cover Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Two-Column Visual Hero Card (8 of 12 cols) */}
        <div className="lg:col-span-8 rounded-3xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          {/* Top Half: Content on left, Dedicated Product Photo on right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Copy Column (7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/30 mb-3 w-fit">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{slide.tag}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight mb-2.5">
                {slide.title}
              </h1>

              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                {slide.subtitle}
              </p>

              {/* Price Lead Tag */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Wholesale Rate:
                </span>
                <span className="text-sm sm:text-base font-black text-amber-700 dark:text-amber-400">
                  {slide.priceLead}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setActiveTab('catalog');
                    setSelectedCategory(slide.categoryTarget);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveTab('estimator')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-[#222630] dark:hover:bg-[#2A303D] dark:text-zinc-200 border border-zinc-200 dark:border-[#2E333F] text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Interior Estimator</span>
                </button>
              </div>
            </div>

            {/* Dedicated High-Clarity Image Showcase Column (5 cols) */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-[#272A34] shadow-md group">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Glassmorphic Floating Badges on the Image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-black/75 text-white backdrop-blur-md border border-white/20 shadow-md">
                    {slide.badge}
                  </span>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold bg-amber-500 text-zinc-950 shadow-md">
                    <Star className="w-3 h-3 fill-zinc-950" />
                    <span>{slide.rating.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Bottom Overlay Spec Pills */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1 pointer-events-none">
                  {slide.specs.map((sp, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/75 text-zinc-200 backdrop-blur-md border border-white/10"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      <span>{sp}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Half: Interactive Material Photo Thumbnails */}
          <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-[#272A34]">
            <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2.5 flex items-center justify-between">
              <span>Select Featured Material:</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="p-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
                  title="Previous"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="p-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
                  title="Next"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {slides.map((s, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-amber-50/70 border-amber-500 dark:bg-amber-500/10 dark:border-amber-400 shadow-sm ring-1 ring-amber-400/50'
                        : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100 dark:bg-[#15171D] dark:border-[#272A34] dark:hover:bg-[#1F232D]'
                    }`}
                  >
                    <img
                      src={s.thumbnail}
                      alt={s.tabLabel}
                      className="w-10 h-10 rounded-lg object-cover bg-zinc-200 dark:bg-zinc-800 shrink-0"
                    />
                    <div className="overflow-hidden">
                      <div className={`text-xs font-bold truncate ${isActive ? 'text-amber-800 dark:text-amber-400' : 'text-zinc-800 dark:text-zinc-200'}`}>
                        {s.tabLabel}
                      </div>
                      <div className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate">
                        {s.tabSub}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Stacked Promo Deal Cards with Clear Visuals (4 of 12 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Promo Card 1: Fasteners Flash Deal with Clear Product Image */}
          <div
            onClick={() => {
              setActiveTab('catalog');
              setSelectedCategory('screws-fasteners');
            }}
            className="group flex-1 rounded-3xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] p-5 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-500 text-zinc-950">
                  Bulk Fastener Deal
                </span>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white mt-1.5 leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  Drywall & Star Screws Box Packs
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-1">
                  Corrosion-resistant bugle head 500 pcs
                </p>
              </div>

              <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-[#222630] border border-zinc-200 dark:border-[#2E333F] flex items-center justify-center text-zinc-800 dark:text-amber-400 shrink-0">
                <Hammer className="w-4 h-4" />
              </div>
            </div>

            {/* Visual Photo Box with Price Pill */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-[#272A34] mb-3">
              <img
                src="https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=600&q=80"
                alt="Contractor Screws Box"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs">
                <span className="font-black bg-zinc-950/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                  500 pcs Box from ₹210
                </span>
                <span className="text-[10px] font-bold text-amber-400 bg-black/60 px-1.5 py-0.5 rounded">
                  In Stock
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400 group-hover:underline">
              <span>Shop All Screws & Fixings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Promo Card 2: Interactive Interior Estimator Teaser */}
          <div
            onClick={() => setActiveTab('estimator')}
            className="group flex-1 rounded-3xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] p-5 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-[#222630] dark:text-amber-400 dark:border-amber-500/20">
                  Project Estimator
                </span>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white mt-1.5 leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  Kitchen & Wardrobe Takeoff
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-1">
                  Automate sheet count, screws & hinges
                </p>
              </div>

              <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-[#222630] border border-zinc-200 dark:border-[#2E333F] flex items-center justify-center text-zinc-800 dark:text-amber-400 shrink-0">
                <Layers className="w-4 h-4" />
              </div>
            </div>

            {/* Visual Photo Box with Takeoff Callout */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-[#272A34] mb-3">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
                alt="Modular Kitchen Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs">
                <span className="font-black bg-zinc-950/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                  Instant Material Schedule
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-black/60 px-1.5 py-0.5 rounded">
                  1-Click BOM
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400 group-hover:underline">
              <span>Calculate Your Woodwork</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Trust & Credibility Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-1">
        <div className="bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] rounded-2xl p-3.5 flex items-center gap-3 shadow-sm transition-colors">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Truck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-900 dark:text-white">Direct Site Delivery</div>
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Free above ₹10,000</div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] rounded-2xl p-3.5 flex items-center gap-3 shadow-sm transition-colors">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-900 dark:text-white">100% Calibrated IS:710</div>
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Zero core gap guarantee</div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] rounded-2xl p-3.5 flex items-center gap-3 shadow-sm transition-colors">
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-900 dark:text-white">GST 18% Input Credit</div>
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">B2B invoice on all orders</div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] rounded-2xl p-3.5 flex items-center gap-3 shadow-sm transition-colors">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-900 dark:text-white">Wholesale Mill Rates</div>
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Bulk contractor pricing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
