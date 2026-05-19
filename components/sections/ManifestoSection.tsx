'use client';

import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { homeCopy } from '@/lib/copy';

export default function ManifestoSection() {
  const containerRef = useGsapReveal<HTMLElement>(() => {
    gsap.fromTo(
      '[data-anim="manifesto"]',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-anim="manifesto"]',
          start: 'top 75%',
          once: true,
        },
      }
    );
  });

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-32 md:py-48">
      <p
        data-anim="manifesto"
        className="mx-auto max-w-[30ch] font-display text-center"
        style={{ fontSize: 'var(--text-manifesto)', lineHeight: 1.2 }}
      >
        {homeCopy.manifesto}
      </p>
    </section>
  );
}
