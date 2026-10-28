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
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Shop by Category
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Source high-grade materials and interior hardware by application
          </p>
        </div>
        <button
          onClick={() => {
            setActiveTab('catalog');
            setSelectedCategory('all');
          }}
          className="text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
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
              className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-4 text-left hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all cursor-pointer flex flex-col justify-between min-h-[160px]"
            >
              {/* Background image subtle preview */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-500"
                style={{ backgroundImage: `url(${bgImg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

              {/* Icon & Count */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {cat.count} items
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="relative z-10 pt-4">
                <h3 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
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
