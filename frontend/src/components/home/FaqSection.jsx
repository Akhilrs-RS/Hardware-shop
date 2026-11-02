import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What is the difference between BWP Marine Grade (IS:710) and Commercial MR (IS:303) Plywood?',
    a: 'BWP (Boiling Water Proof) IS:710 Marine Plywood is bonded with unextended phenol formaldehyde synthetic resin and is tested to withstand continuous boiling water for 72 hours without delaminating. It is essential for wet kitchen zones, bathroom vanities, and sink cabinets. Commercial MR (Moisture Resistant) IS:303 is bonded with melamine urea-formaldehyde and is ideal for dry indoor applications like bedroom wardrobes, TV consoles, and beds.'
  },
  {
    q: 'Why should I choose HDHMR green board over regular MDF for kitchen shutters and wall panelling?',
    a: 'HDHMR (High Density High Moisture Resistance) has a density exceeding 850 kg/m³, compared to 650–700 kg/m³ for standard MDF. It features a water-resistant green core, superior screw-holding strength, and zero core voids, allowing sharp CNC routing, fluted profiling, and smooth PU painting without fiber swelling.'
  },
  {
    q: 'Which screw lengths should I use for 18mm board carcasses vs hinge mounting?',
    a: 'For 18mm carcass frame joinery (edge-to-face corner joints), we recommend 1.5 inch (38mm) or 2 inch (50mm) wood/drywall screws with pilot countersinking. For mounting concealed auto hinges into 18mm shutters, strictly use 5/8 inch (16mm) or 3/4 inch (19mm) screws (preferably SS 304 in wet kitchens) to prevent the screw point from piercing the decorative front face.'
  },
  {
    q: 'How does job-site flatbed delivery and unloading work for heavy sheet orders?',
    a: 'Orders above ₹10,000 qualify for FREE local job-site delivery. Our flatbed transport vehicles deliver sheets stacked flat with moisture-proof wrapping. Our dispatch coordinator calls you prior to departure to ensure clear ground-floor or elevator unloading access at your construction or renovation site.'
  },
  {
    q: 'Can I obtain a GST B2B Tax Invoice to claim 18% Input Tax Credit?',
    a: 'Yes, absolutely. During checkout, simply enter your company or firm GSTIN number. All invoices are generated with proper HSN codes (4412 for Plywood, 4411 for MDF/HDF, 7318 for Screws, 8302 for Hardware) allowing full 18% input credit eligibility.'
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="mb-14 text-left">
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
          Technical Reference & Buying Guide
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <span>Frequently Asked Hardware & Material Questions</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
          Clear recommendations on board standards, screw sizing, and site logistics
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-sm text-zinc-900 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-amber-600 dark:text-amber-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-[#272A34]">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
