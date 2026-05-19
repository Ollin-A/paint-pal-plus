'use client';

import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';

type ClosingCtaProps = {
  heading: string;
  cta: string;
  href: string;
};

export default function ClosingCta({ heading, cta, href }: ClosingCtaProps) {
  const wrapRef = useGsapReveal<HTMLElement>(() => {
    gsap.fromTo(
      '[data-anim="closing-heading"]',
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-anim="closing-heading"]',
          start: 'top 75%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      '[data-anim="closing-button"]',
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-anim="closing-heading"]',
          start: 'top 75%',
          once: true,
        },
      }
    );
  });

  return (
    <section
      ref={wrapRef}
      className="max-w-4xl mx-auto px-6 md:px-12 py-32 md:py-48 text-center"
    >
      <h2
        data-anim="closing-heading"
        className="font-display"
        style={{ fontSize: 'var(--text-section)', lineHeight: 1.1 }}
      >
        {heading}
      </h2>
      <a
        href={href}
        data-anim="closing-button"
        className="group inline-flex items-center mt-10 px-8 py-4 rounded-sm bg-[var(--color-ochre)] text-[var(--color-evergreen)] font-display text-xl transition-opacity hover:opacity-90"
      >
        {cta}
      </a>
    </section>
  );
}
