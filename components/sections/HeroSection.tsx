'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { homeCopy } from '@/lib/copy';

const HERO_VIDEO_PATH = '/video/hero_video.mp4';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const containerRef = useGsapReveal<HTMLElement>(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo(
      '[data-anim="eyebrow"]',
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        '[data-anim="headline"]',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.3'
      )
      .fromTo(
        '[data-anim="video"]',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.0 },
        '-=0.4'
      )
      .fromTo(
        '[data-anim="chips"] > *',
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
        '-=0.5'
      );
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24 md:pb-32"
    >
      <p
        data-anim="eyebrow"
        className="font-mono text-xs uppercase tracking-wider opacity-70 mb-6"
      >
        {homeCopy.hero.eyebrow}
      </p>

      <h1
        data-anim="headline"
        className="font-display max-w-[18ch] mb-10 md:mb-12"
        style={{ fontSize: 'var(--text-hero)', lineHeight: 1.05 }}
      >
        {homeCopy.hero.headline}
      </h1>

      <div
        data-anim="video"
        className="aspect-video w-full overflow-hidden rounded-lg bg-evergreen"
      >
        <video
          ref={videoRef}
          src={HERO_VIDEO_PATH}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          aria-label="Oscar and the Paint Pal Plus team during a painting project"
        />
      </div>

      <div
        data-anim="chips"
        className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3"
      >
        {homeCopy.heroChips.map((chip) => (
          <div
            key={chip.label}
            className="flex h-10 items-center px-4 rounded font-mono text-xs uppercase tracking-wider"
            style={{
              background: `var(${chip.swatchVar})`,
              color: `var(${chip.textVar})`,
            }}
          >
            {chip.label}
          </div>
        ))}
      </div>
    </section>
  );
}
