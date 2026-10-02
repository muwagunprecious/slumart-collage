import { Palette, Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm border-2 border-primary text-primary bg-primary/10">
                <Palette className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="text-base font-bold uppercase tracking-[0.15em] text-white">
                SLUMART
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[15px] font-normal leading-[1.5] text-white/60">
              Slum Art Foundation empowers children in underserved communities through creative education, mentorship, and paper mosaic portraits from recycled materials.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-primary">
                Explore
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: 'Process', href: '#process' },
                  { label: 'Pricing & Impact', href: '#pricing' },
                  { label: 'Gallery', href: '#gallery' },
                  { label: 'About Us', href: '#about' },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[15px] font-normal text-white/60 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-primary">
                Community
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: 'Testimonies', href: '#testimonies' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'Commission Art', href: '#contact' },
                  { label: 'PET Bottle School', href: '#about' },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[15px] font-normal text-white/60 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-primary">Center</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-[15px] font-normal text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                Ijora Badia, Lagos, Nigeria
              </li>
              <li>
                <a
                  href="mailto:info@slumart.org"
                  className="flex items-center gap-2.5 text-[15px] font-normal text-white/70 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  info@slumart.org
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/adetunwase360/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[15px] font-normal text-white/70 transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  @slumartfoundation / @adetunwase360
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[12px] font-normal text-white/50">
            © 2026 Slum Art Foundation. All Rights Reserved. Co-founded by Adetunwase Adenle.
          </p>
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-[12px] font-normal text-white/50 transition-colors hover:text-primary"
            >
              Our Mission
            </a>
            <a
              href="#contact"
              className="text-[12px] font-normal text-white/50 transition-colors hover:text-primary"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
