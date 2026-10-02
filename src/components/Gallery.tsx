import { galleryImages } from '@/data';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-tertiary py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl text-left">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
            Selected Works & Installations
          </p>
          <h2 className="text-[37px] font-bold leading-[1.1] text-black sm:text-[47px]">
            From Discarded Paper to Fine Art Masterpieces
          </h2>
          <p className="mt-6 text-[20px] font-normal leading-[1.6] text-black/70">
            Each piece is meticulously composed by hand using hundreds of individual paper cuttings
            from upcycled magazines and newspapers — crafted by youth in Ijora Badia.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden break-inside-avoid border border-black/10 bg-white"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  img.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-block rounded-xs bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Recycled Paper Collage
                </span>
                <p className="mt-1.5 text-[13px] font-medium leading-[1.4] text-white">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
