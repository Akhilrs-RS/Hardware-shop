import { Filter, RotateCcw, Check } from 'lucide-react';
import { categories } from '../../data/categories';

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedThickness,
  setSelectedThickness,
  selectedScrewSize,
  setSelectedScrewSize,
  inStockOnly,
  setInStockOnly,
  sortBy,
  setSortBy,
  resetFilters
}) {
  const thicknesses = ['6mm', '8mm', '12mm', '16mm', '18mm', '25mm'];
  const screwSizes = ['19mm (3/4")', '25mm (1")', '32mm (1.25")', '38mm (1.5")', '50mm (2")', '75mm (3")'];

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedThickness !== null ||
    selectedScrewSize !== null ||
    inStockOnly;

  return (
    <div className="bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] rounded-2xl p-4 sm:p-5 text-left space-y-6 shadow-sm transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-[#272A34]">
        <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-sm">
          <Filter className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>Filter Products</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* 1. Category Filter */}
      <div>
        <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2.5">
          Material Category
        </label>
        <div className="space-y-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors text-left cursor-pointer ${
                  isSelected
                    ? 'bg-amber-50 text-amber-800 border border-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30 font-semibold'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-[#222630] dark:hover:text-zinc-200'
                }`}
              >
                <span>{cat.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Sheet Thickness Filter (Plywood / MDF) */}
      {(selectedCategory === 'all' || selectedCategory === 'plywood' || selectedCategory === 'mdf-hdf') && (
        <div className="pt-3 border-t border-zinc-200 dark:border-[#272A34]">
          <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
            Board Thickness
          </label>
          <div className="flex flex-wrap gap-1.5">
            {thicknesses.map((th) => {
              const isSelected = selectedThickness === th;
              return (
                <button
                  key={th}
                  onClick={() => setSelectedThickness(isSelected ? null : th)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-sm'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-[#222630] dark:text-zinc-300 dark:hover:bg-[#2A303D] border border-zinc-200 dark:border-[#2E333F]'
                  }`}
                >
                  {th}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Screw Size / Length Filter */}
      {(selectedCategory === 'all' || selectedCategory === 'screws-fasteners') && (
        <div className="pt-3 border-t border-zinc-200 dark:border-[#272A34]">
          <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
            Screw Length / Size
          </label>
          <div className="space-y-1.5">
            {screwSizes.map((sz) => {
              const code = sz.split(' ')[0];
              const isSelected = selectedScrewSize === code;
              return (
                <button
                  key={sz}
                  onClick={() => setSelectedScrewSize(isSelected ? null : code)}
                  className={`w-full flex items-center justify-between px-2.5 py-1 rounded-md text-xs font-medium text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-amber-50 text-amber-800 border border-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30 font-semibold'
                      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-[#222630] dark:hover:text-zinc-200'
                  }`}
                >
                  <span>{sz}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Sort Options */}
      <div className="pt-3 border-t border-zinc-200 dark:border-[#272A34]">
        <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
          Sort Inventory By
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-zinc-50 dark:bg-[#15171D] border border-zinc-300 dark:border-[#2E333F] rounded-lg px-2.5 py-1.5 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 cursor-pointer"
        >
          <option value="featured">Featured / Best Sellers</option>
          <option value="rating">Highest Rated</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Product Name (A-Z)</option>
        </select>
      </div>

      {/* 5. In-Stock Filter */}
      <div className="pt-3 border-t border-zinc-200 dark:border-[#272A34]">
        <label className="flex items-center gap-2 cursor-pointer text-xs text-zinc-700 dark:text-zinc-300 font-medium select-none">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="w-4 h-4 rounded bg-zinc-100 dark:bg-[#222630] border-zinc-300 dark:border-[#2E333F] text-amber-600 focus:ring-amber-500 cursor-pointer"
          />
          <span>In-Stock / Ready for Site Dispatch</span>
        </label>
      </div>
    </div>
  );
}
