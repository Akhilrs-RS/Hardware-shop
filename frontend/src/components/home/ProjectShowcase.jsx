import { UtensilsCrossed, Layers, Tv, Hammer, ArrowRight, Check } from 'lucide-react';

const projects = [
  {
    id: 'kitchen',
    title: 'Modular Kitchen (Carcass & Shutters)',
    tagline: 'Waterproof cabinetry for sink, cooktop, and cutlery drawers.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    icon: UtensilsCrossed,
    badge: 'Waterproof Spec',
    materials: [
      '18mm BWP Marine Plywood (IS:710)',
      '18mm HDHMR Green Shutter Board',
      'Soft-Close Auto Hydraulic Hinges',
      'SS 304 Rustproof Hinge Screws'
    ]
  },
  {
    id: 'wardrobe',
    title: 'Full-Height Wardrobe & Loft',
    tagline: 'Sturdy carcass boxes, dust-proof backing, and smooth sliding drawers.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    icon: Layers,
    badge: 'Heavy Load Spec',
    materials: [
      '18mm Commercial MR Plywood',
      '6mm MR Plywood Backing Wall',
      'Pre-Laminated Woodgrain MDF',
      '1.5" Carcass Joinery Screws'
    ]
  },
  {
    id: 'tv-unit',
    title: 'Modern TV Console & Fluted Panelling',
    tagline: 'Sleek acoustic fluted louvers, floating media drawers, and concealed wiring.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80',
    icon: Tv,
    badge: 'Designer Finish',
    materials: [
      'HDHMR 18mm CNC Routing Board',
      '12mm Commercial Base Framework',
      'Matte Black Aluminum J-Handles',
      'HeatX Quick Contact Adhesive'
    ]
  },
  {
    id: 'partition',
    title: 'Drywall & Ceiling Framing',
    tagline: 'High-expansion anchors, black phosphate drywall fasteners, and GI channels.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    icon: Hammer,
    badge: 'Fasteners Spec',
    materials: [
      'Black Drywall Screws (19mm–75mm)',
      'Heavy Duty 8mm Nylon Wall Plugs',
      'Self-Drilling Hex Washer Screws',
      'Neutral Cure Silicone Sealant'
    ]
  }
];

export default function ProjectShowcase({ setActiveTab, setSelectedCategory }) {
  const handleProjectClick = (projectId) => {
    if (projectId === 'partition') {
      setActiveTab('catalog');
      setSelectedCategory('screws-fasteners');
    } else {
      setActiveTab('estimator');
    }
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <section className="mb-14 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
            Interior Work Solutions
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
            Shop by Interior Project
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Select your woodwork project to view recommended sheet grades, matching screws, and fittings
          </p>
        </div>

        <button
          onClick={() => setActiveTab('estimator')}
          className="text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
        >
          <span>Open Full Project Calculator</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((proj) => {
          const Icon = proj.icon;

          return (
            <div
              key={proj.id}
              className="group rounded-3xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl transition-all flex flex-col justify-between shadow-sm"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-zinc-900/90 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-sm">
                    {proj.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-xl bg-white/90 dark:bg-zinc-900/90 flex items-center justify-center text-zinc-900 dark:text-amber-400 shadow-md">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-white leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {proj.tagline}
                  </p>

                  {/* Recommended Material Highlights */}
                  <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-[#272A34] space-y-1.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      Recommended Materials:
                    </div>
                    {proj.materials.map((m, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-zinc-700 dark:text-zinc-300">
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span className="truncate">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-[#272A34]">
                  <button
                    onClick={() => handleProjectClick(proj.id)}
                    className="w-full py-2.5 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#222630] dark:hover:bg-[#2A303D] text-zinc-800 dark:text-zinc-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-zinc-200 dark:border-[#2E333F]"
                  >
                    <span>{proj.id === 'partition' ? 'Shop Fasteners' : 'Calculate Materials'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
