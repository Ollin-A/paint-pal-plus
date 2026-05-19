'use client';

import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { aboutCopy } from '@/lib/about-copy';

export default function AboutHero() {
  const { headline, subhead, portrait } = aboutCopy.hero;

  const sectionRef = useGsapReveal<HTMLElement>(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo(
      '[data-anim="hero-headline"]',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        '[data-anim="hero-subhead"]',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.6'
      )
      .fromTo(
        '[data-anim="portrait"]',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.1 },
        '-=0.7'
      );

    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      gsap.to('[data-anim="portrait"]', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-anim="portrait"]',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  });

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-24"
    >
      <div className="flex flex-col-reverse gap-12 md:grid md:grid-cols-12 md:gap-16 md:items-end">
        <div className="md:col-span-7">
          <h1
            data-anim="hero-headline"
            className="font-display"
            style={{
              fontSize: 'var(--text-hero)',
              lineHeight: 1.05,
              fontWeight: 400,
              maxWidth: '16ch',
            }}
          >
            {headline}
          </h1>
          <p
            data-anim="hero-subhead"
            className="mt-6 text-[18px] md:text-[20px] leading-[1.6] opacity-75"
            style={{ maxWidth: '32ch' }}
          >
            {subhead}
          </p>
        </div>

        <div className="md:col-span-5">
          <div
            data-anim="portrait"
            role="img"
            aria-label={portrait.alt}
            className="relative aspect-[3/4] w-full rounded-md bg-fog border border-evergreen/15 flex items-center justify-center px-6 overflow-hidden"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-evergreen/60 text-center leading-relaxed">
              {portrait.placeholderLabel}
              <br />
              To be replaced
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
