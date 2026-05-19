'use client';

import { type ReactNode } from 'react';
import gsap from 'gsap';
import HandDrawnUnderline from '@/components/ui/HandDrawnUnderline';
import { useGsapReveal } from '@/hooks/useGsapReveal';

type PullQuoteProps = {
  quote: string;
  underlinePhrase?: string;
  attribution: string;
  project: string;
  underlineColorVar?: string;
};

function renderQuote(quote: string, phrase?: string, colorVar?: string): ReactNode {
  if (!phrase) return quote;
  const idx = quote.indexOf(phrase);
  if (idx === -1) return quote;
  if (quote.indexOf(phrase, idx + phrase.length) !== -1) return quote;
  const before = quote.slice(0, idx);
  const after = quote.slice(idx + phrase.length);
  return (
    <>
      {before}
      <HandDrawnUnderline colorVar={colorVar}>{phrase}</HandDrawnUnderline>
      {after}
    </>
  );
}

export default function PullQuote({
  quote,
  underlinePhrase,
  attribution,
  project,
  underlineColorVar,
}: PullQuoteProps) {
  const wrapRef = useGsapReveal<HTMLDivElement>(() => {
    gsap.fromTo(
      '[data-anim="pullquote-text"]',
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '[data-anim="pullquote-text"]',
          start: 'top 75%',
          once: true,
        },
      }
    );
  });

  return (
    <div
      ref={wrapRef}
      className="relative max-w-4xl mx-auto px-6 md:px-12 py-32 md:py-48"
    >
      <span
        aria-hidden="true"
        className="absolute left-2 md:left-6 top-16 md:top-24 font-display select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(120px, 14vw, 200px)', opacity: 0.4 }}
      >
        “
      </span>

      <blockquote className="relative">
        <p
          data-anim="pullquote-text"
          className="font-display"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.25 }}
        >
          {renderQuote(quote, underlinePhrase, underlineColorVar)}
        </p>
        <footer className="mt-12 space-y-2 font-mono text-xs uppercase tracking-wider opacity-80">
          <p>{attribution}</p>
          <p className="opacity-70">{project}</p>
        </footer>
      </blockquote>
    </div>
  );
}
