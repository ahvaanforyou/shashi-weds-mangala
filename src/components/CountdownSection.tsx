import React, { useEffect, useState } from 'react';
import { weddingConfig } from '../wedding.config';
import { Ornament } from './Ornaments';
import { RevealOnScroll } from './RevealOnScroll';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  // Target date: Reception 25 October 2026 at 9:00 AM IST
  const targetDateStr = weddingConfig.date.targetCountdownDate || '2026-10-25T09:00:00+05:30';

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => {
    const target = new Date(targetDateStr).getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, target - now);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  });

  useEffect(() => {
    const target = new Date(targetDateStr).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateStr]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const formatNum = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <section id="countdown" className="relative overflow-hidden px-5 py-14 sm:py-20 text-center">
      <Ornament variant="gold" className="-left-10 top-1/2 w-28 -translate-y-1/2 rotate-12 opacity-40 sm:w-40" />
      <Ornament variant="gold" className="-right-10 top-1/2 w-28 -translate-y-1/2 -rotate-12 opacity-40 sm:w-40" />

      <RevealOnScroll className="relative mx-auto max-w-4xl">
        <p className="eyebrow tracking-[0.3em]">The countdown to forever</p>
        <h2 className="mt-3 font-display text-3xl sm:text-5xl">
          Counting Down the Auspicious Moments
        </h2>
        <div className="rule-gold mx-auto mt-6 w-28" />

        {/* Live Timer Grid */}
        <div className="mt-10 grid grid-cols-4 gap-2.5 sm:gap-6 max-w-2xl mx-auto">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="paper-card relative flex flex-col items-center justify-center p-3 sm:p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="pointer-events-none absolute inset-1.5 border border-gold/30" />
              <span className="font-display text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl text-gold-deep font-semibold tracking-tight">
                {formatNum(unit.value)}
              </span>
              <span className="mt-2 font-title text-[0.62rem] sm:text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 font-title text-xs sm:text-sm tracking-[0.2em] uppercase text-muted-foreground">
          24 & 25 October 2026 · Hanuru, Karnataka
        </p>
      </RevealOnScroll>
    </section>
  );
};