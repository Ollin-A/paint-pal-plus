'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { contactCopy } from '@/lib/contact-copy';
import { useGsapReveal } from '@/hooks/useGsapReveal';

// TODO: refine outline against a traced Yamhill County silhouette
const COUNTY_PATH =
  'M 120,40 Q 200,30 280,50 Q 340,80 350,160 Q 360,260 340,360 Q 320,440 250,460 Q 180,470 130,440 Q 70,400 60,300 Q 50,200 70,120 Q 90,60 120,40 Z';

const SECTION_SELECTOR = '[data-section="service-area-map"]';

export default function ServiceAreaMap() {
  const pathRef = useRef<SVGPathElement>(null);

  const sectionRef = useGsapReveal<HTMLElement>(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: SECTION_SELECTOR,
          start: 'top 70%',
          once: true,
        },
      });
    }

    gsap.fromTo(
      '[data-map-dot]',
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out',
        delay: 0.8,
        transformOrigin: '50% 50%',
        scrollTrigger: {
          trigger: SECTION_SELECTOR,
          start: 'top 70%',
          once: true,
        },
      }
    );
  });

  return (
    <section
      ref={sectionRef}
      data-section="service-area-map"
      className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32"
    >
      <div className="relative aspect-4/5 mx-auto max-w-md">
        <svg
          viewBox="0 0 400 500"
          className="w-full h-full"
          role="img"
          aria-label="Map of Yamhill County, Oregon, showing the towns we serve"
        >
          <path
            ref={pathRef}
            d={COUNTY_PATH}
            fill="none"
            stroke="var(--color-evergreen)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />

          {contactCopy.map.towns.map(({ name, x, y, isHub }) => (
            <g key={name} data-map-dot>
              <circle
                cx={x}
                cy={y}
                r={isHub ? 5 : 3}
                fill="var(--color-ochre)"
              />
              <text
                x={x + 10}
                y={y + 4}
                fontSize={isHub ? 13 : 11}
                fontFamily="var(--font-mono)"
                fill="var(--color-evergreen)"
                style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
              >
                {name}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <p className="text-center mt-6 font-mono text-xs uppercase tracking-wider opacity-60">
        {contactCopy.map.caption}
      </p>
    </section>
  );
}
