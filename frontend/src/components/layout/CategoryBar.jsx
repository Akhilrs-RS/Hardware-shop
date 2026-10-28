import {
  Layers,
  Square,
  Hammer,
  Wrench,
  Paintbrush,
  Sparkles,
  LayoutGrid
} from 'lucide-react';
import { categories } from '../../data/categories';

const iconMap = {
  Layers,
  Square,
  Hammer,
  Wrench,
  Paintbrush,
  all: LayoutGrid
};

export default function CategoryBar({
  selectedCategory,
  setSelectedCategory,
  setActiveTab,
  activeTab
}) {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-sm overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-1 py-1.5 min-w-max">
        {/* Category Buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || iconMap[cat.id] || LayoutGrid;
            const isSelected = activeTab === 'catalog' && selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab('catalog');
                  setSelectedCategory(cat.id);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-slate-400'}`} />
                <span>{cat.name}</span>
                {cat.badge && (
                  <span
                    className={`text-[9px] px-1 py-0.2 rounded font-bold uppercase tracking-wider ${
                      isSelected
                        ? 'bg-slate-950 text-amber-400'
                        : 'bg-slate-800 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Highlighted Tool */}
        <div className="pl-4 border-l border-slate-800 hidden lg:block">
          <button
            onClick={() => setActiveTab('estimator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'estimator'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/40 border border-indigo-500/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Smart Estimator (Kitchen / Wardrobe)</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

