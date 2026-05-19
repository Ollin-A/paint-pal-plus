'use client';

import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';

type HandDrawnUnderlineProps = {
  children: ReactNode;
  colorVar?: string;
  className?: string;
};

export default function HandDrawnUnderline({
  children,
  colorVar = '--color-clay',
  className,
}: HandDrawnUnderlineProps) {
  const pathRef = useRef<SVGPathElement | null>(null);

  const wrapRef = useGsapReveal<HTMLSpanElement>(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut',
      scrollTrigger: { trigger: path, start: 'top 80%', once: true },
    });
  });

  return (
    <span
      ref={wrapRef}
      className={`relative inline-block${className ? ` ${className}` : ''}`}
    >
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden="true"
        className="absolute left-0 -bottom-2 w-full h-3"
        viewBox="0 0 300 12"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M2,8 Q40,2 80,6 T160,7 T240,5 T298,8"
          fill="none"
          stroke={`var(${colorVar})`}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
