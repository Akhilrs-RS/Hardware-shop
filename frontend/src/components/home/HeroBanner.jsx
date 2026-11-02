import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, ChevronLeft, ChevronRight, Hammer, Layers, Truck, Award, FileText } from 'lucide-react';

const slides = [
  {
    tag: 'Contractor & Mill Direct',
    title: 'BWP Marine Plywood & HDHMR Green Boards',
    subtitle: '100% Boiling Water Proof (IS:710) Marine Ply and High-Density Moisture Resistant boards engineered for zero-gap modular kitchens and designer cabinetry.',
    ctaText: 'Explore Sheet Materials',
    categoryTarget: 'plywood',
    accentColor: 'text-amber-400',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=80',
    badge: 'Direct Mill Wholesale Pricing'
  },
  {
    tag: 'Precision CNC & Cabinetry',
    title: 'Russian Birch Calibrated & Pre-Laminated MDF',
    subtitle: 'Multi-ply cross-banded void-free core with exposed aesthetic edge finish. Perfect for high-precision CNC routing and luxury wardrobes.',
    ctaText: 'View Engineered Panels',
    categoryTarget: 'mdf-hdf',
    accentColor: 'text-amber-400',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    badge: 'Zero Core Voids Certified'
  },
  {
    tag: 'Bulk Hardware & Screws',
    title: 'Drywall Screws, Star Screws & Hydraulic Hinges',
    subtitle: 'Deep-bite bugle head screws and 50,000-cycle tested soft-close auto hinges in economical contractor cartons of 500 pcs.',
    ctaText: 'Shop Fasteners & Fittings',
    categoryTarget: 'screws-fasteners',
    accentColor: 'text-amber-400',
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1200&q=80',
    badge: 'Boxes of 500 Pcs from ₹210'
  }
];

export default function HeroBanner({ setSelectedCategory, setActiveTab }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="space-y-4 mb-10 text-left">
      {/* 1. Main Split Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Flagship Carousel (8 of 12 cols) */}
        <div className="lg:col-span-8 relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-200 dark:border-[#272A34] shadow-lg flex flex-col justify-between min-h-[380px] sm:min-h-[440px]">
          {/* Background Image with Dark Contrast Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center opacity-35 filter grayscale-[15%] transition-all duration-1000 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-10 max-w-2xl flex-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900/90 border border-zinc-700 text-zinc-200 mb-4 shadow-sm w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{slide.tag}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-amber-400">{slide.badge}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-3">
              {slide.title}
            </h1>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-xl mb-6">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setActiveTab('catalog');
                  setSelectedCategory(slide.categoryTarget);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('estimator')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 border border-zinc-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Interior Estimator</span>
              </button>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="relative z-20 px-6 sm:px-10 pb-6 flex items-center justify-between">
            <div className="flex gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-zinc-700'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
                }
                className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Stacked Promo Deal Cards (4 of 12 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Promo Card 1: Fasteners Flash Deal */}
          <div
            onClick={() => {
              setActiveTab('catalog');
              setSelectedCategory('screws-fasteners');
            }}
            className="group flex-1 relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-200 dark:border-[#272A34] p-6 shadow-md hover:border-amber-500/50 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-105 group-hover:opacity-35 transition-all duration-500"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=600&q=80')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-500 text-zinc-950">
                Bulk Value Pack
              </span>
              <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-amber-400">
                <Hammer className="w-4 h-4" />
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <div className="text-xs text-amber-400 font-semibold mb-1">
                Drywall & Star Screws (500 pcs)
              </div>
              <h3 className="font-black text-lg text-white leading-snug group-hover:text-amber-300 transition-colors">
                Contractor Fastener Boxes from ₹210
              </h3>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                Zinc-plated, black phosphate drywall, and SS 304 hinge screws in stock.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:underline">
                <span>Browse All Fasteners</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Promo Card 2: Interactive Interior Estimator Teaser */}
          <div
            onClick={() => setActiveTab('estimator')}
            className="group flex-1 relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-200 dark:border-[#272A34] p-6 shadow-md hover:border-amber-500/50 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-105 group-hover:opacity-35 transition-all duration-500"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-zinc-800 text-amber-400 border border-amber-500/30">
                Contractor Tool
              </span>
              <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-amber-400">
                <Layers className="w-4 h-4" />
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <div className="text-xs text-amber-400 font-semibold mb-1">
                Room & Fixture Takeoff
              </div>
              <h3 className="font-black text-lg text-white leading-snug group-hover:text-amber-300 transition-colors">
                Kitchen & Wardrobe Estimator
              </h3>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                Calculate sheets, screw packs, hinges, and adhesives in 1 click.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:underline">
                <span>Open Material Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
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
