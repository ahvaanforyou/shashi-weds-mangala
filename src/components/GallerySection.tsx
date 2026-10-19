import React from 'react';
import { assets } from '../data/assets';
import { weddingConfig } from '../wedding.config';
import { Ornament, SpinningMandala } from './Ornaments';
import { RevealOnScroll } from './RevealOnScroll';

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="relative overflow-hidden px-5 py-24 sm:py-32">
      <SpinningMandala reverse className="-right-20 top-1/3 w-48 sm:w-64" />
      <Ornament className="-left-10 top-16 w-40 rotate-12 sm:w-56" />
      <Ornament variant="small" className="-right-6 bottom-10 w-28 -rotate-12 sm:w-40" />
      <Ornament variant="gold" className="right-4 top-6 w-24 rotate-6 sm:w-36" />

      <div className="relative mx-auto max-w-5xl">
        <RevealOnScroll className="text-center">
          <p className="eyebrow">Moments</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl">Photo Dump</h2>
          <div className="rule-gold mx-auto mt-8 w-32" />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {weddingConfig.gallery.map((item, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.12}>
              <figure className="group relative aspect-[3/4] overflow-hidden border border-gold/40 bg-muted shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-xl">
                <img
                  src={item.image}
                  alt={item.alt || `Photo moment ${idx + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-3 border border-paper/30" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-5 text-center">
                  <p className="font-title text-xs uppercase tracking-[0.22em] text-paper/90">
                    {item.caption || item.alt}
                  </p>
                </div>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
