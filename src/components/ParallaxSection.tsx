import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../data/assets';
import { weddingConfig } from '../wedding.config';

gsap.registerPlugin(ScrollTrigger);

export const ParallaxSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.parallax-img',
        { yPercent: -6, scale: 1.15 },
        {
          yPercent: 6,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const { banner } = weddingConfig;

  return (
    <div ref={containerRef} className="relative h-[32vh] min-h-[220px] overflow-hidden bg-[#24080e] sm:h-[40vh]">
      <img
        src={banner.image || '/assets/mandap-parallax.jpg'}
        alt={banner.alt || 'Wedding ceremony quote banner'}
        loading="lazy"
        width={1200}
        height={800}
        className="parallax-img absolute -top-[15%] left-0 h-[130%] w-full object-cover object-center will-change-transform"
      />
      <div className="absolute inset-0 bg-black/45 sm:bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#24080e]/70 via-transparent to-[#24080e]/60" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p className="max-w-2xl text-center font-display text-xl leading-relaxed text-paper sm:text-3xl md:text-4xl drop-shadow-md">
          {banner.quote}
        </p>
      </div>
    </div>
  );
};
