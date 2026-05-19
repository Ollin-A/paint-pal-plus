'use client';

import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { aboutCopy } from '@/lib/about-copy';

export default function StoryBody() {
  const { paragraphs, inlineCaption, inlineImage } = aboutCopy.story;
  const [p1, p2, p3] = paragraphs;

  const wrapRef = useGsapReveal<HTMLElement>(() => {
    gsap.fromTo(
      '[data-anim="story-block"]',
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '[data-anim="story-block"]',
          start: 'top 80%',
          once: true,
        },
      }
    );
  });

  return (
    <section
      ref={wrapRef}
      className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32"
    >
      <div className="max-w-[62ch] mx-auto">
        <p
          data-anim="story-block"
          className="drop-cap text-[18px] leading-[1.7]"
        >
          {p1}
        </p>

        <p
          data-anim="story-block"
          className="text-center font-mono text-xs uppercase tracking-wider opacity-50 my-12"
        >
          {inlineCaption}
        </p>

        <p
          data-anim="story-block"
          className="text-[18px] leading-[1.7]"
        >
          {p2}
        </p>

        <figure data-anim="story-block" className="my-12">
          <div
            role="img"
            aria-label={inlineImage.alt}
            className="relative aspect-video w-full rounded-md bg-fog border border-evergreen/15 flex items-center justify-center px-6 overflow-hidden"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-evergreen/60 text-center leading-relaxed">
              {inlineImage.placeholderLabel}
              <br />
              To be replaced
            </span>
          </div>
        </figure>

        <p
          data-anim="story-block"
          className="text-[18px] leading-[1.7]"
        >
          {p3}
        </p>
      </div>
    </section>
  );
}
