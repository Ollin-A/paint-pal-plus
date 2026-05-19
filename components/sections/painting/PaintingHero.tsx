'use client';

import Image from 'next/image';
import gsap from 'gsap';
import JumpChips from '@/components/ui/JumpChips';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { paintingCopy } from '@/lib/painting-copy';

export default function PaintingHero() {
  const containerRef = useGsapReveal<HTMLElement>(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } });
    tl.fromTo(
      '[data-anim="hero-eyebrow"]',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        '[data-anim="hero-headline"]',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0 },
        '-=0.3'
      )
      .fromTo(
        '[data-anim="hero-image"]',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.0 },
        '-=0.4'
      )
      .fromTo(
        '[data-anim="hero-chips"]',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.5'
      );
  });

  const { eyebrow, headline, image, chips } = paintingCopy.pageHero;

  return (
    <section
      ref={containerRef}
      className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-24"
    >
      <p
        data-anim="hero-eyebrow"
        className="font-mono text-xs uppercase tracking-wider opacity-70 mb-6"
      >
        {eyebrow}
      </p>
      <h1
        data-anim="hero-headline"
        className="font-display max-w-[14ch]"
        style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1.0 }}
      >
        {headline}
      </h1>
      <div
        data-anim="hero-image"
        className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mt-12 bg-evergreen/10"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>
      <div data-anim="hero-chips" className="mt-8">
        <JumpChips chips={chips} />
      </div>
    </section>
  );
}
