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
    <nav className="bg-zinc-100/70 dark:bg-[#161920] border-b border-zinc-200 dark:border-[#272A34] text-sm overflow-x-auto scrollbar-none transition-colors">
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
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-[#1F232D]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white dark:text-zinc-950' : 'text-zinc-500 dark:text-zinc-400'}`} />
                <span>{cat.name}</span>
                {cat.badge && (
                  <span
                    className={`text-[9px] px-1 py-0.2 rounded font-bold uppercase tracking-wider ${
                      isSelected
                        ? 'bg-white/20 text-white dark:bg-zinc-950/20 dark:text-zinc-950'
                        : 'bg-zinc-200 dark:bg-[#252936] text-zinc-700 dark:text-amber-400 border border-zinc-300 dark:border-amber-500/20'
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
        <div className="pl-4 border-l border-zinc-200 dark:border-[#272A34] hidden lg:block">
          <button
            onClick={() => setActiveTab('estimator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'estimator'
                ? 'bg-zinc-900 text-white dark:bg-zinc-800 dark:text-zinc-100 shadow-sm'
                : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-200/60 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-[#1F232D] border border-zinc-300 dark:border-zinc-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Smart Estimator (Kitchen / Wardrobe)</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
