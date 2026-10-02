import { Check } from 'lucide-react';

const features = [
  'Handcrafted from upcycled magazines & newspapers',
  'Custom dimensions from personal portraits to large murals',
  'Archival protective coating on durable stretched canvas',
  'Full sponsor report showing which child your order funds',
  'Insured worldwide delivery with tracking',
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-tertiary py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — image */}
          <div className="relative">
            <img
              src="/images/slumart-3.jpg"
              alt="Intricate paper mosaic portrait handcrafted by Slum Art Foundation"
              className="h-[440px] w-full object-cover lg:h-[520px]"
            />
          </div>

          {/* Right — content */}
          <div>
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
              Commissions & Social Impact
            </p>
            <h2 className="text-[37px] font-bold leading-[1.1] text-black sm:text-[47px]">
              Starting at
            </h2>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[56px] font-bold leading-none text-black lg:text-[64px]">
                $450
              </span>
              <span className="text-[20px] font-normal text-black/50">USD</span>
            </div>
            <p className="mt-6 max-w-md text-[20px] font-normal leading-[1.6] text-black/70">
              Pricing depends on <span className="font-bold text-black">size, subject count, and
              complexity</span>. 100% of proceeds go directly to children's tuition, meals, and mentorship.
            </p>

            <ul className="mt-10 space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-primary bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-[18px] sm:text-[20px] font-normal leading-[1.4] text-black/80">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex min-h-[70px] min-w-[280px] items-center justify-center border-2 border-black bg-black px-10 text-[20px] font-bold tracking-wide text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              Request a Commission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
