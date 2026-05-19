'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import type { Project } from '@/lib/projects';

type LightboxProps = {
  projects: Project[];
  initialIndex: number;
  onClose: () => void;
};

const SWIPE_THRESHOLD = 50;

export default function Lightbox({
  projects,
  initialIndex,
  onClose,
}: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [showBefore, setShowBefore] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const project = projects[index];
  const cover = project?.images[0];
  const hasBefore = !!cover?.before;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % projects.length);
    setShowBefore(false);
  }, [projects.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + projects.length) % projects.length);
    setShowBefore(false);
  }, [projects.length]);

  // Mount: remember trigger, lock body scroll, focus close button, bind keys.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      triggerRef.current = document.activeElement as HTMLElement | null;
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    }
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      triggerRef.current?.focus?.();
    };
  }, [onClose, next, prev]);

  const rootRef = useGsapReveal<HTMLDivElement>(() => {
    gsap.fromTo(
      '[data-anim="lightbox-root"]',
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: 'power1.out' }
    );
  });

  if (!project || !cover) return null;

  const currentSrc = showBefore && cover.before ? cover.before : cover.src;

  return (
    <div ref={rootRef}>
      <div
        data-anim="lightbox-root"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} in ${project.location}`}
        onClick={onClose}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > SWIPE_THRESHOLD) {
            if (dx > 0) prev();
            else next();
          }
          touchStartX.current = null;
        }}
        className="fixed inset-0 z-1000 bg-evergreen/95 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative h-full max-w-6xl mx-auto flex flex-col justify-center px-6 md:px-12 py-16"
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 md:top-8 md:right-12 w-11 h-11 flex items-center justify-center text-fog hover:opacity-80 transition-opacity"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
            </svg>
          </button>

          {projects.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous project"
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center text-fog hover:opacity-80 transition-opacity"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    d="M15 18 L9 12 L15 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next project"
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center text-fog hover:opacity-80 transition-opacity"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    d="M9 18 L15 12 L9 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}

          <div className="relative w-full h-[70vh] md:h-[75vh]">
            <Image
              key={`${project.id}-${showBefore ? 'before' : 'after'}`}
              src={currentSrc}
              alt={cover.alt}
              fill
              sizes="(min-width: 768px) 80vw, 100vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-fog">
            <div>
              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(22px, 3vw, 32px)',
                  lineHeight: 1.15,
                }}
              >
                {project.title}
              </p>
              <p className="font-mono text-xs uppercase tracking-wider opacity-70 mt-2">
                {project.location} · {project.year}
              </p>
            </div>
            {hasBefore && (
              <button
                type="button"
                onClick={() => setShowBefore((b) => !b)}
                className="self-start md:self-end font-mono text-xs uppercase tracking-wider border border-fog/30 px-4 py-2 rounded-full hover:bg-fog/10 transition-colors"
              >
                {showBefore ? 'Show after' : 'Show before'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
