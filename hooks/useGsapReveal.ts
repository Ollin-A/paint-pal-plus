'use client';

import { useEffect, useRef, type DependencyList } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapReveal<T extends HTMLElement = HTMLElement>(
  callback: (ctx: gsap.Context) => void,
  deps: DependencyList = []
) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(callback, ref.current);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}
