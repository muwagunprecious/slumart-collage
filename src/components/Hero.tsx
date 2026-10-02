import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/slumart-16.jpg"
          alt="Slum Art Foundation monumental paper mosaic portrait wall in Lagos"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-6 text-[13px] font-semibold uppercase tracking-[0.25em] text-primary animate-fade-in-up">
            Slum Art Foundation · Recycled Paper Mosaic Portraits · Lagos, Nigeria
          </p>
          <h1 className="text-[28px] font-bold leading-[1.15] uppercase text-white animate-fade-in-up animation-delay-100 sm:text-[38px] lg:text-[44px]">
            Turning Recycled Paper Into World-Class Mosaic Portraits
          </h1>
          <p className="mt-5 max-w-xl text-[16px] font-normal leading-[1.6] text-white/85 animate-fade-in-up animation-delay-200 sm:text-[17px]">
            Handcrafted from discarded magazines and newsprint by youth in Ijora Badia. Every commissioned piece directly funds school fees, meals, and life skills.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-300">
            <a
              href="#contact"
              className="group inline-flex min-h-[56px] min-w-[240px] items-center justify-center gap-2 border-2 border-primary bg-primary px-8 text-[16px] font-bold tracking-wide text-white transition-all duration-300 hover:border-white hover:bg-transparent hover:text-white"
            >
              Commission a Portrait
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#gallery"
              className="inline-flex min-h-[56px] min-w-[180px] items-center justify-center border border-white/60 px-8 text-[16px] font-bold tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-fade-in-up animation-delay-500">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[12px] font-normal uppercase tracking-[0.2em] text-white/60">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
