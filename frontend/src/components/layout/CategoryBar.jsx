import {
  Layers,
  Square,
  Hammer,
  Wrench,
  Paintbrush,
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
    <nav className="bg-white/80 dark:bg-[#161920]/80 backdrop-blur-sm border-b border-zinc-200 dark:border-[#272A34] text-sm overflow-x-auto scrollbar-none transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 py-2 min-w-max">
        {/* Category Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
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
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-[#1F232D]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white dark:text-zinc-950' : 'text-zinc-500 dark:text-zinc-400'}`} />
                <span>{cat.name}</span>
                {cat.badge && (
                  <span
                    className={`text-[9px] px-1 py-0.2 rounded font-bold uppercase tracking-wider ${
                      isSelected
                        ? 'bg-white/20 text-white dark:bg-zinc-950/20 dark:text-zinc-950'
                        : 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300'
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Quality Guarantee Mini-pill */}
        <div className="hidden lg:flex items-center text-[11px] font-medium text-zinc-500 dark:text-zinc-400 gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>IS:710 Certified & Wholesale Mill Rates</span>
        </div>
      </div>
    </nav>
  );
}
