'use client';

import gsap from 'gsap';
import PaintChip from '@/components/ui/PaintChip';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { homeCopy } from '@/lib/copy';

export default function ServicesChipsSection() {
  const containerRef = useGsapReveal<HTMLElement>(() => {
    gsap.fromTo(
      '[data-anim="service-chip"]',
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '[data-anim="services-grid"]',
          start: 'top 80%',
          once: true,
        },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32"
    >
      <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-3">
        What we do
      </p>
      <h2
        className="font-display mb-12 md:mb-16"
        style={{ fontSize: 'var(--text-section)', lineHeight: 1.1 }}
      >
        Four kinds of careful work.
      </h2>

      <div
        data-anim="services-grid"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
      >
        {homeCopy.services.map((service) => (
          <div key={service.slug} data-anim="service-chip">
            <PaintChip
              name={service.name}
              swatchVar={service.swatchVar}
              swatchTextVar={service.swatchTextVar}
              colorCode={service.colorCode}
              description={service.description}
              href={service.anchor}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
