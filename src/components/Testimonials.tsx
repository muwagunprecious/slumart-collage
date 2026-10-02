import { useState, useRef } from 'react';
import { Quote, Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { testimonials } from '@/data';

function VideoCard({ item }: { item: (typeof testimonials)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <figure className="flex w-[300px] sm:w-[340px] md:w-[380px] shrink-0 snap-start flex-col justify-between border border-black/10 bg-tertiary p-6 transition-shadow duration-400 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      {/* Video Container with Play Button */}
      <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden border border-black/10 bg-black">
        <video
          ref={videoRef}
          src={item.videoSrc}
          preload="metadata"
          playsInline
          controls={isPlaying}
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          className="h-full w-full object-cover"
        />

        {/* Play Button Overlay (when paused) */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/35 transition-colors duration-300 hover:bg-black/20"
          >
            <button
              type="button"
              aria-label="Play video"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              <Play className="ml-1 h-7 w-7 fill-white" />
            </button>
            <span className="absolute bottom-4 left-4 rounded-sm bg-black/75 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
              {item.role.includes('CNN') ? 'CNN Feature' : 'Community Story'}
            </span>
          </div>
        )}

        {/* Quick controls when playing */}
        {isPlaying && (
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <button
              type="button"
              onClick={toggleMute}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs transition hover:bg-black/80"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs transition hover:bg-black/80"
              aria-label="Pause"
            >
              <Pause className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Quote & details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Quote className="h-7 w-7 text-primary" strokeWidth={1.5} />
          <blockquote className="mt-3 text-[15px] font-normal leading-[1.5] text-black/70">
            "{item.quote}"
          </blockquote>
        </div>

        <figcaption className="mt-6 border-t border-black/10 pt-4">
          <p className="text-[14px] font-bold text-black">{item.author}</p>
          <p className="mt-0.5 text-[12px] font-medium text-primary">{item.role}</p>
          <p className="mt-0.5 text-[12px] font-normal uppercase tracking-wider text-black/50">
            {item.location}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonies" className="bg-white py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-3xl text-left">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
              Community & Beneficiary Voices
            </p>
            <h2 className="text-[37px] font-bold leading-[1.1] text-black sm:text-[47px]">
              What Our Community Says
            </h2>
            <p className="mt-4 text-[16px] font-normal text-black/60">
              Listen to the young artists, mentors, and international collectors whose lives have been
              touched by Slum Art.
            </p>
          </div>

          {/* Scroll Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center border border-black/20 bg-white text-black transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center border border-black/20 bg-white text-black transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Video Container */}
        <div
          ref={scrollRef}
          className="no-scrollbar mt-12 flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth"
        >
          {testimonials.map((t, i) => (
            <VideoCard key={i} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
