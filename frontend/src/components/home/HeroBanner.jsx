import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    tag: 'Contractor & Wholesale Special',
    title: 'Calibrated Plywood & HDHMR Green Boards',
    subtitle: '100% Boiling Water Proof (IS:710) Marine Ply and High-Density Moisture Resistant boards for modular kitchens and designer cabinetry.',
    ctaText: 'Shop Sheet Materials',
    categoryTarget: 'plywood',
    accentColor: 'text-amber-400',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=80',
    badge: 'Up to 25% Off Full Bundles'
  },
  {
    tag: 'Interior Work Fasteners',
    title: 'Precision Screws, Star Screws & Drywall Fixings',
    subtitle: 'Bugle-head drywall screws, zinc wood screws, and SS 304 rustproof hinge screws in economic contractor boxes of 500 pcs.',
    ctaText: 'Browse Fasteners & Screws',
    categoryTarget: 'screws-fasteners',
    accentColor: 'text-amber-400',
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1200&q=80',
    badge: 'Pack of 500 Pcs from ₹210'
  },
  {
    tag: 'Smart Contractor Tool',
    title: 'Interior Work Material Estimator & Kit Builder',
    subtitle: 'Select your project (Modular Kitchen, Bedroom Wardrobe, TV Unit) and get automated sheet counts, matching screws, hinges, and adhesives instantly.',
    ctaText: 'Launch Project Estimator',
    isEstimator: true,
    accentColor: 'text-amber-400',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    badge: '1-Click Complete Bill of Materials'
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

  const handleCtaClick = () => {
    if (slide.isEstimator) {
      setActiveTab('estimator');
    } else {
      setActiveTab('catalog');
      setSelectedCategory(slide.categoryTarget);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-200 dark:border-[#272A34] shadow-lg transition-all mb-10">
      {/* Background Image with Authentic Workshop Tone Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-center opacity-30 filter grayscale-[20%] transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 sm:px-12 py-12 sm:py-16 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900/90 border border-zinc-700 text-zinc-200 mb-4 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>{slide.tag}</span>
          <span className="text-zinc-600">•</span>
          <span className={slide.accentColor}>{slide.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          {slide.title}
        </h1>

        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
          {slide.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={handleCtaClick}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-zinc-950 font-bold text-sm shadow-md transition-all cursor-pointer active:scale-98"
          >
            <span>{slide.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActiveTab('estimator')}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 border border-zinc-700 text-sm font-semibold transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Kitchen & Wardrobe Estimator</span>
          </button>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <div className="absolute right-4 bottom-4 z-20 flex items-center gap-2">
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-1.5 px-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-zinc-700'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
