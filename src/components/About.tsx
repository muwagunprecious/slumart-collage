import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-white py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="/images/slumart-15.jpg"
              alt="Slum Art Foundation PET Bottle classroom and community gallery in Ijora Badia"
              className="h-[440px] w-full object-cover lg:h-[560px]"
            />
            {/* Floating badge */}
            <div className="absolute -left-4 bottom-8 bg-tertiary border border-black/10 p-5 hidden sm:block">
              <p className="text-[37px] font-bold leading-none text-primary">100%</p>
              <p className="mt-1.5 text-[12px] font-normal uppercase tracking-wider text-black/60">
                Proceeds Fund Children's Education
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
              Art as a Catalyst for Change
            </p>
            <h2 className="text-[37px] font-bold leading-[1.1] text-black sm:text-[47px]">
              Empowering Youth Through Creativity & Upcycling
            </h2>
            <div className="mt-6 space-y-5 text-[20px] font-normal leading-[1.6] text-black/70">
              <p>
                Founded by 4-time Guinness World Record-holding Nigerian artist Adetunwase Adenle,
                Slum Art Foundation provides children living in vulnerable settlements like Ijora Badia
                and Makoko with free education, mentorship, and creative skills.
              </p>
              <p>
                From constructing an entire school and learning center using thousands of recycled plastic
                PET bottles to crafting museum-worthy paper mosaic portraits from discarded magazines,
                we turn environmental waste into life-changing opportunities.
              </p>
              <p>
                When you commission an artwork, you are directly paying a child's school fees,
                funding their nutrition, and giving them the tools to build a dignified future.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-[20px] font-bold tracking-wide text-primary transition-colors hover:text-secondary"
            >
              Support our mission
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
