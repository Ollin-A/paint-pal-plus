'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type ColorMarqueeProps = {
  items: string[];
  bgVar?: string;
  textVar?: string;
  speedSeconds?: number;
  className?: string;
};

export default function ColorMarquee({
  items,
  bgVar = '--color-sage',
  textVar = '--color-evergreen',
  speedSeconds = 40,
  className,
}: ColorMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const tween = gsap.to(track, {
      xPercent: -50,
      duration: speedSeconds,
      ease: 'none',
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, [speedSeconds]);

  return (
    <div
      className={`overflow-hidden py-12 md:py-16 ${className ?? ''}`}
      style={{
        background: `var(${bgVar})`,
        color: `var(${textVar})`,
      }}
    >
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-mono uppercase tracking-wider text-[clamp(28px,5vw,56px)] px-12"
          >
            {item} ·
          </span>
        ))}
      </div>
    </div>
  );
}
