'use client';

import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';

type Step = {
  number: string;
  title: string;
  body: string;
};

type ProcessStripProps = {
  steps: Step[];
};

export default function ProcessStrip({ steps }: ProcessStripProps) {
  const containerRef = useGsapReveal<HTMLDivElement>(() => {
    gsap.fromTo(
      '[data-anim="process-step"]',
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-anim="process-strip"]',
          start: 'top 75%',
          once: true,
        },
      }
    );
  });

  return (
    <div
      ref={containerRef}
      data-anim="process-strip"
      className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
    >
      {steps.map((step) => (
        <div
          key={step.number}
          data-anim="process-step"
          className="lg:border-l lg:border-sage/30 lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
        >
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(72px, 9vw, 120px)',
              lineHeight: 0.9,
              fontWeight: 300,
              color: 'var(--color-evergreen)',
              opacity: 0.95,
            }}
          >
            {step.number}
          </p>
          <h3 className="mt-4 font-sans font-medium text-lg">{step.title}</h3>
          <p className="mt-2 font-sans text-[15px] leading-relaxed opacity-75">
            {step.body}
          </p>
        </div>
      ))}
    </div>
  );
}
