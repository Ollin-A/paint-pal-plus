'use client';

import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { aboutCopy } from '@/lib/about-copy';

export default function FamilyPhotoSection() {
  const { alt, caption, placeholderLabel } = aboutCopy.familyPhoto;

  const wrapRef = useGsapReveal<HTMLElement>(() => {
    gsap.fromTo(
      '[data-anim="family"]',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-anim="family"]',
          start: 'top 80%',
          once: true,
        },
      }
    );
  });

  return (
    <section
      ref={wrapRef}
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
    >
      <figure data-anim="family">
        <div
          role="img"
          aria-label={alt}
          className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-md bg-fog border border-evergreen/15 flex items-center justify-center px-6 overflow-hidden"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-evergreen/60 text-center leading-relaxed">
            {placeholderLabel}
            <br />
            To be replaced
          </span>
        </div>
        <figcaption className="mt-4 text-center font-mono text-xs uppercase tracking-wider opacity-60">
          {caption}
        </figcaption>
      </figure>
    </section>
  );
}
