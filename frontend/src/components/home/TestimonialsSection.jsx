import { Star, ShieldCheck, MessageSquare, PhoneCall } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    role: 'Lead Interior Contractor',
    company: 'Vanguard Modular Kitchens',
    location: 'Bangalore East',
    rating: 5,
    project: '14-Villa Kitchen Project',
    quote: 'The 18mm BWP Marine Plywood was 100% calibrated with zero core gaps. Fasteners and hydraulic hinges arrived at our Whitefield job-site in under 3 hours with full GST tax input invoices.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Interior Designer & Architect',
    company: 'Studio Aesthetix',
    location: 'Indiranagar',
    rating: 5,
    project: 'Luxury Penthouse Wardrobes',
    quote: 'Their Action Tesa HDHMR green boards routed cleanly on our CNC machine without edge chipping. The pre-laminated walnut MDF saved us 4 days of manual laminate pasting labor.'
  },
  {
    id: 3,
    name: 'Senthil Nathan',
    role: 'Commercial Carpentry Contractor',
    company: 'Nathan & Sons Woodcraft',
    location: 'Hosur Industrial Hub',
    rating: 5,
    project: 'Office Drywall & Acoustic Panelling',
    quote: 'We order the 500-piece boxes of black drywall screws and SS 304 hinge fasteners in bulk. Consistent deep bite, zero stripped heads, and direct wholesale pricing.'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="mb-14 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
            Proven at Job-Sites
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
            Verified Contractor & Builder Reviews
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Real feedback from modular furniture workshops, carpenters, and commercial contractors
          </p>
        </div>

        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 rounded-xl self-start sm:self-auto">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500" />
            ))}
          </div>
          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
            4.9 / 5 Rating (2,500+ Orders)
          </span>
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="rounded-3xl bg-white dark:bg-[#1A1D24] border border-zinc-200 dark:border-[#272A34] p-6 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  Verified Contractor
                </span>
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 dark:border-[#272A34]">
              <div className="font-bold text-sm text-zinc-900 dark:text-white">
                {t.name}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                {t.role} • <strong className="text-zinc-700 dark:text-zinc-300">{t.company}</strong>
              </div>
              <div className="text-[11px] text-amber-700 dark:text-amber-400 mt-0.5 font-medium">
                Project: {t.project} ({t.location})
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contractor B2B Banner Callout */}
      <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-lg">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <MessageSquare className="w-4 h-4" />
            <span>Contractor & Architect Trade Desk</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold">
            Need Wholesale Pallet Rates or Full Truckload Dispatch?
          </h3>
          <p className="text-xs text-zinc-400 max-w-xl">
            Register your GSTIN for tiered contractor discounts, credit payment terms, and direct site delivery with dedicated unloading crews.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20a%20contractor%20looking%20for%20wholesale%20rates%20on%20Plywood%2C%20HDHMR%20and%20Screws."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Wholesale Desk</span>
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-200 border border-zinc-700 font-semibold text-xs sm:text-sm transition-all"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>+91 98765 43210</span>
          </a>
        </div>
      </div>
    </section>
  );
}
