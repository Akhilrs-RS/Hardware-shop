import { ArrowUpRight, Layers, Square, Hammer, Wrench, Paintbrush } from 'lucide-react';
import { categories } from '../../data/categories';

const categoryImages = {
  plywood: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
  'mdf-hdf': 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80',
  'screws-fasteners': 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=600&q=80',
  'hardware-fittings': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
  'adhesives-finishes': 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80'
};

const iconMap = {
  plywood: Layers,
  'mdf-hdf': Square,
  'screws-fasteners': Hammer,
  'hardware-fittings': Wrench,
  'adhesives-finishes': Paintbrush
};

export default function CategoryGrid({ setSelectedCategory, setActiveTab }) {
  const displayCats = categories.filter((c) => c.id !== 'all');

  const handleSelect = (id) => {
    setActiveTab('catalog');
    setSelectedCategory(id);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
            Shop by Category
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Source high-grade materials and interior hardware by application
          </p>
        </div>
        <button
          onClick={() => {
            setActiveTab('catalog');
            setSelectedCategory('all');
          }}
          className="text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>View All Inventory</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {displayCats.map((cat) => {
          const Icon = iconMap[cat.id] || Layers;
          const bgImg = categoryImages[cat.id];

          return (
            <button
              key={cat.id}
              onClick={() => handleSelect(cat.id)}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] p-4 text-left hover:border-amber-600 dark:hover:border-amber-400 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between min-h-[160px]"
            >
              {/* Subtle background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-all duration-500 scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${bgImg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#1A1D24] dark:via-[#1A1D24]/80 dark:to-transparent" />

              {/* Icon & Count */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-[#222630] border border-zinc-200 dark:border-[#2E333F] flex items-center justify-center text-zinc-800 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white dark:group-hover:bg-amber-500 dark:group-hover:text-zinc-950 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-[#222630] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#2E333F]">
                  {cat.count} items
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="relative z-10 pt-4">
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                  {cat.subcategories?.[0]} & more
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
