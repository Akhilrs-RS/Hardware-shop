import { Flame, Star, PackageCheck, ShieldAlert, LayoutGrid } from 'lucide-react';

export default function CollectionTabs({ activeFilterTab, setActiveFilterTab }) {
  const tabs = [
    { id: 'all', label: 'All Inventory', icon: LayoutGrid },
    { id: 'best-sellers', label: 'Best Sellers', icon: Flame, badge: 'Hot' },
    { id: 'bulk-packs', label: 'Bulk Contractor Packs', icon: PackageCheck, badge: '500 Pcs' },
    { id: 'top-rated', label: 'Top Rated (4.8+)', icon: Star },
    { id: 'waterproof', label: 'Marine & Waterproof', icon: ShieldAlert, badge: 'IS:710' }
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 mb-6">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeFilterTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveFilterTab(tab.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              isActive
                ? 'bg-zinc-900 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-md'
                : 'bg-white dark:bg-[#1A1D24] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#222630] border border-zinc-200 dark:border-[#272A34]'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400 dark:text-zinc-950' : 'text-zinc-500 dark:text-zinc-400'}`} />
            <span>{tab.label}</span>
            {tab.badge && (
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full uppercase tracking-wider font-black ${
                  isActive
                    ? 'bg-amber-500 text-zinc-950 dark:bg-zinc-950 dark:text-amber-400'
                    : 'bg-zinc-100 dark:bg-[#222630] text-amber-700 dark:text-amber-400 border border-zinc-200 dark:border-[#2E333F]'
                }`}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
