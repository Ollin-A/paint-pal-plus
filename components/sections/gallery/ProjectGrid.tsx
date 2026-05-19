'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import type { Project } from '@/lib/projects';

type ProjectGridProps = {
  projects: Project[];
  onProjectClick: (index: number) => void;
};

function chunk<T>(arr: T[], size: number): T[][] {
  return arr.reduce<T[][]>(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    []
  );
}

function ProjectCard({
  project,
  aspect,
  sizes,
  onClick,
}: {
  project: Project;
  aspect: string;
  sizes: string;
  onClick: () => void;
}) {
  const cover = project.images[0];
  return (
    <figure data-anim="grid-card">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Open ${project.title} in ${project.location}`}
        className={clsx(
          'relative block w-full overflow-hidden rounded-md bg-evergreen/10 group cursor-pointer',
          aspect
        )}
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </button>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-wider opacity-70">
        {project.location} · {project.title} · {project.year}
      </figcaption>
    </figure>
  );
}

function GalleryRow({
  items,
  startIndex,
  onProjectClick,
}: {
  items: Project[];
  startIndex: number;
  onProjectClick: (index: number) => void;
}) {
  const click = (offset: number) => () => onProjectClick(startIndex + offset);

  switch (items.length) {
    case 6:
      return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          <div className="md:col-span-5">
            <ProjectCard
              project={items[0]}
              aspect="aspect-[3/4]"
              sizes="(min-width: 768px) 42vw, 100vw"
              onClick={click(0)}
            />
          </div>
          <div className="md:col-span-7 grid grid-cols-1 gap-3 md:gap-4">
            <ProjectCard
              project={items[1]}
              aspect="aspect-[16/9]"
              sizes="(min-width: 768px) 58vw, 100vw"
              onClick={click(1)}
            />
            <ProjectCard
              project={items[2]}
              aspect="aspect-[16/9]"
              sizes="(min-width: 768px) 58vw, 100vw"
              onClick={click(2)}
            />
          </div>
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {items.slice(3, 6).map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                aspect="aspect-square"
                sizes="(min-width: 768px) 33vw, 100vw"
                onClick={click(3 + i)}
              />
            ))}
          </div>
        </div>
      );

    case 5:
      return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          <div className="md:col-span-5">
            <ProjectCard
              project={items[0]}
              aspect="aspect-[3/4]"
              sizes="(min-width: 768px) 42vw, 100vw"
              onClick={click(0)}
            />
          </div>
          <div className="md:col-span-7">
            <ProjectCard
              project={items[1]}
              aspect="aspect-[16/9]"
              sizes="(min-width: 768px) 58vw, 100vw"
              onClick={click(1)}
            />
          </div>
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {items.slice(2, 5).map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                aspect="aspect-square"
                sizes="(min-width: 768px) 33vw, 100vw"
                onClick={click(2 + i)}
              />
            ))}
          </div>
        </div>
      );

    case 4:
      return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          <div className="md:col-span-5">
            <ProjectCard
              project={items[0]}
              aspect="aspect-[3/4]"
              sizes="(min-width: 768px) 42vw, 100vw"
              onClick={click(0)}
            />
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {items.slice(1, 4).map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                aspect="aspect-square"
                sizes="(min-width: 768px) 20vw, 100vw"
                onClick={click(1 + i)}
              />
            ))}
          </div>
        </div>
      );

    case 3:
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {items.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              aspect="aspect-square"
              sizes="(min-width: 768px) 33vw, 100vw"
              onClick={click(i)}
            />
          ))}
        </div>
      );

    case 2:
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {items.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              aspect="aspect-[4/5]"
              sizes="(min-width: 768px) 50vw, 100vw"
              onClick={click(i)}
            />
          ))}
        </div>
      );

    case 1:
      return (
        <ProjectCard
          project={items[0]}
          aspect="aspect-[16/9]"
          sizes="100vw"
          onClick={click(0)}
        />
      );

    default:
      return null;
  }
}

export default function ProjectGrid({
  projects,
  onProjectClick,
}: ProjectGridProps) {
  const [displayed, setDisplayed] = useState(projects);
  const gridRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // Crossfade when the upstream projects array changes (filter swap)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      setDisplayed(projects);
      return;
    }
    if (!gridRef.current) {
      setDisplayed(projects);
      return;
    }
    const tl = gsap.timeline();
    tl.to(gridRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
    })
      .call(() => setDisplayed(projects))
      .to(gridRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    return () => {
      tl.kill();
    };
  }, [projects]);

  // Stagger reveal on first scroll-in only
  const containerRef = useGsapReveal<HTMLDivElement>(() => {
    gsap.fromTo(
      '[data-anim="grid-card"]',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-anim="grid-container"]',
          start: 'top 80%',
          once: true,
        },
      }
    );
  });

  const groups = chunk(displayed, 6);

  return (
    <div ref={containerRef} data-anim="grid-container">
      <div ref={gridRef} className="flex flex-col gap-8 md:gap-12">
        {groups.map((group, gi) => (
          <GalleryRow
            key={gi}
            items={group}
            startIndex={gi * 6}
            onProjectClick={onProjectClick}
          />
        ))}
      </div>
    </div>
  );
}
