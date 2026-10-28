import { useState } from 'react';
import {
  UtensilsCrossed,
  Layers,
  Tv,
  Sparkles,
  CheckCircle2,
  ShoppingCart,
  ShieldCheck,
  Info
} from 'lucide-react';
import { estimatorProjects } from '../../data/estimatorRules';
import { useCart } from '../../context/CartContext';

const iconMap = {
  UtensilsCrossed,
  Layers,
  Tv
};

export default function InteriorEstimator({ setActiveTab }) {
  const { addBundleToCart } = useCart();
  const [selectedProjectId, setSelectedProjectId] = useState('kitchen');
  const [projectParam, setProjectParam] = useState(12);
  const [selectedItems, setSelectedItems] = useState({});

  const activeProject =
    estimatorProjects.find((p) => p.id === selectedProjectId) ||
    estimatorProjects[0];

  // Calculate items
  const generatedItems = activeProject.calculate(projectParam);

  // Group items by category for clear presentation
  const grouped = generatedItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleToggleItem = (index) => {
    setSelectedItems((prev) => ({
      ...prev,
      [index]: prev[index] === undefined ? false : !prev[index]
    }));
  };

  // Determine active bundle items
  const activeBundleItems = generatedItems.filter(
    (_, idx) => selectedItems[idx] !== false
  );

  const bundleTotal = activeBundleItems.reduce(
    (acc, it) => acc + it.unitPrice * it.quantity,
    0
  );

  const handleAddBundleToCart = () => {
    addBundleToCart(activeBundleItems);
  };

  return (
    <div className="text-left space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Interior Materials Calculator</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Interior Work Project Material Estimator
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl mt-2 leading-relaxed">
          Planning an interior carpentry job? Select your project to automatically calculate all required sheet boards (Plywood, HDHMR), matching screws & fasteners, soft-close hardware, and adhesives.
        </p>

        {/* 1. Project Type Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {estimatorProjects.map((proj) => {
            const Icon = iconMap[proj.icon] || Layers;
            const isSelected = selectedProjectId === proj.id;

            return (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setProjectParam(proj.defaultValue);
                  setSelectedItems({});
                }}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-950/80 border-amber-400 shadow-xl shadow-amber-500/10 ring-2 ring-amber-400/30'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                        Selected
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-base text-white">{proj.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Interactive Input Slider */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <label className="text-base font-bold text-white block">
              {activeProject.inputLabel}
            </label>
            <p className="text-xs text-slate-400">
              Adjust size to dynamically re-calculate sheet boards, screws, and hardware.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="text-3xl font-black text-amber-400">
              {projectParam}
            </span>
            <span className="text-sm font-semibold text-slate-400 uppercase">
              {activeProject.unit}
            </span>
          </div>
        </div>

        <input
          type="range"
          min={activeProject.min}
          max={activeProject.max}
          step={1}
          value={projectParam}
          onChange={(e) => setProjectParam(Number(e.target.value))}
          className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
          <span>Min: {activeProject.min} {activeProject.unit}</span>
          <span>Max: {activeProject.max} {activeProject.unit}</span>
        </div>
      </div>

      {/* 3. Generated Bill of Materials / Bundle Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Recommended Materials & Screws Bundle</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Includes matching fasteners, boards, and fittings. Uncheck any item you already have.
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400 uppercase font-semibold">
              Estimated Bundle Cost:
            </div>
            <div className="text-2xl font-black text-amber-400">
              ₹{bundleTotal.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Grouped Table */}
        <div className="space-y-6">
          {Object.entries(grouped).map(([categoryName, items]) => (
            <div key={categoryName} className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-indigo-400 bg-indigo-950/40 px-3 py-1.5 rounded-lg border border-indigo-500/20 inline-block">
                {categoryName}
              </h3>

              <div className="divide-y divide-slate-800/80 border border-slate-800 rounded-xl overflow-hidden bg-slate-950/60">
                {items.map((item, localIdx) => {
                  const globalIdx = generatedItems.indexOf(item);
                  const isChecked = selectedItems[globalIdx] !== false;

                  return (
                    <div
                      key={localIdx}
                      className={`p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                        isChecked ? 'hover:bg-slate-900/60' : 'opacity-40 bg-slate-950'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleItem(globalIdx)}
                          className="mt-1 w-4 h-4 rounded bg-slate-800 border-slate-700 text-amber-500 focus:ring-amber-400 cursor-pointer"
                        />
                        <div>
                          <div className="font-bold text-sm text-slate-100">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                            <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                            <span>{item.reason}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 pl-7 sm:pl-0">
                        <div className="text-right">
                          <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                            {item.quantity} {item.unit}
                          </span>
                        </div>
                        <div className="text-right min-w-[90px]">
                          <div className="text-sm font-bold text-white">
                            ₹{(item.unitPrice * item.quantity).toLocaleString()}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            (₹{item.unitPrice} / {item.unit.toLowerCase()})
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 4. Action Banner */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Includes 100% genuine calibrated boards & tested screws.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('catalog')}
              className="w-1/2 sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
            >
              Back to Catalog
            </button>
            <button
              onClick={handleAddBundleToCart}
              className="w-1/2 sm:w-auto flex-1 flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm shadow-xl shadow-orange-500/25 active:scale-98 transition-all cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add Complete Kit to Cart ({activeBundleItems.length} items)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
