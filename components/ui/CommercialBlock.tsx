'use client';

import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';

type CommercialBlockProps = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  ctaHref: string;
  images: { src: string; alt: string }[];
};

export default function CommercialBlock({
  id,
  number,
  eyebrow,
  title,
  body,
  cta,
  ctaHref,
  images,
}: CommercialBlockProps) {
  const sectionRef = useGsapReveal<HTMLElement>(() => {
    gsap.fromTo(
      '[data-anim="commercial"]',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-anim="commercial"]',
          start: 'top 75%',
          once: true,
        },
      }
    );
  });

  return (
    <section
      id={id}
      ref={sectionRef}
      style={{ background: 'var(--color-evergreen)', color: 'var(--color-fog)' }}
      className="py-24 md:py-32"
    >
      <div data-anim="commercial" className="max-w-7xl mx-auto px-6 md:px-12">
        <p
          className="font-display font-light opacity-95"
          style={{ fontSize: 'clamp(72px, 9vw, 120px)', lineHeight: 0.9 }}
        >
          {number}
        </p>
        <p className="font-mono text-xs uppercase tracking-wider mt-2 opacity-70">
          {eyebrow}
        </p>
        <h2
          className="font-display mt-6"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05 }}
        >
          {title}
        </h2>
        <p className="mt-6 text-[17px] leading-[1.7] max-w-[50ch]">{body}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-12 md:mt-16">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] rounded-md overflow-hidden bg-fog/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <Link
          href={ctaHref}
          className="font-display text-lg inline-flex items-center px-6 py-3 rounded-sm mt-12 transition-opacity hover:opacity-90"
          style={{ background: 'var(--color-ochre)', color: 'var(--color-evergreen)' }}
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
