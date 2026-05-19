'use client';

import { type ReactNode } from 'react';
import gsap from 'gsap';
import HandDrawnUnderline from '@/components/ui/HandDrawnUnderline';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { aboutCopy } from '@/lib/about-copy';

function renderBody(body: string, phrase?: string, colorVar?: string): ReactNode {
  if (!phrase) return body;
  const idx = body.indexOf(phrase);
  if (idx === -1) return body;
  if (body.indexOf(phrase, idx + phrase.length) !== -1) return body;
  const before = body.slice(0, idx);
  const after = body.slice(idx + phrase.length);
  return (
    <>
      {before}
      <HandDrawnUnderline colorVar={colorVar}>{phrase}</HandDrawnUnderline>
      {after}
    </>
  );
}

export default function ValuesGrid() {
  const { eyebrow, heading, blocks } = aboutCopy.values;

  const wrapRef = useGsapReveal<HTMLElement>(() => {
    gsap.fromTo(
      '[data-anim="value-block"]',
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '[data-anim="value-block"]',
          start: 'top 80%',
          once: true,
        },
      }
    );
  });

  return (
    <section
      ref={wrapRef}
      className="bg-[var(--color-ochre)] text-[var(--color-ochre-text)] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="font-mono text-xs uppercase tracking-wider opacity-70 mb-3">
          {eyebrow}
        </p>
        <h2
          className="font-display mb-16 md:mb-20"
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.05,
            fontWeight: 400,
          }}
        >
          {heading}
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {blocks.map((block) => (
            <div key={block.number} data-anim="value-block">
              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(48px, 6vw, 80px)',
                  lineHeight: 0.9,
                  fontWeight: 300,
                  opacity: 0.85,
                }}
              >
                {block.number}
              </p>
              <h3
                className="font-display mt-4"
                style={{
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  lineHeight: 1.2,
                  fontWeight: 400,
                }}
              >
                {block.title}
              </h3>
              <p
                className="mt-4 text-[16px] leading-[1.6]"
                style={{ maxWidth: '42ch' }}
              >
                {renderBody(block.body, block.underlinePhrase, '--color-clay')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
