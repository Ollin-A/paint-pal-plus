'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';

type ServiceBlockProps = {
  id: string;
  side: 'left' | 'right';
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  heroImage: { src: string; alt: string };
  detailImage: { src: string; alt: string };
};

export default function ServiceBlock({
  id,
  side,
  number,
  eyebrow,
  title,
  body,
  heroImage,
  detailImage,
}: ServiceBlockProps) {
  const sectionRef = useGsapReveal<HTMLElement>(() => {
    gsap.fromTo(
      '[data-anim="service-text"]',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-anim="service-text"]',
          start: 'top 80%',
          once: true,
        },
      }
    );
    gsap.fromTo(
      '[data-anim="service-images"]',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-anim="service-images"]',
          start: 'top 80%',
          once: true,
        },
      }
    );
  });

  const textColClass =
    side === 'left'
      ? 'md:col-span-5 md:col-start-1 md:row-start-1'
      : 'md:col-span-5 md:col-start-8 md:row-start-1';

  const imageColClass =
    side === 'left'
      ? 'md:col-span-6 md:col-start-7 md:row-start-1'
      : 'md:col-span-6 md:col-start-1 md:row-start-1';

  const detailAlignClass = side === 'left' ? 'ml-auto' : 'mr-auto';

  return (
    <section
      id={id}
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 items-center">
        <div data-anim="service-text" className={textColClass}>
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
          <p className="mt-6 text-[17px] leading-[1.7] max-w-[42ch]">{body}</p>
        </div>

        <div data-anim="service-images" className={`flex flex-col gap-4 ${imageColClass}`}>
          <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-evergreen/10">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div
            className={`relative w-2/3 aspect-square rounded-md overflow-hidden bg-evergreen/10 ${detailAlignClass}`}
          >
            <Image
              src={detailImage.src}
              alt={detailImage.alt}
              fill
              sizes="(min-width: 768px) 33vw, 66vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
