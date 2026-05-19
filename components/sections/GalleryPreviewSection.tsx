'use client';

import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { homeCopy } from '@/lib/copy';
import { getFeaturedProjects } from '@/lib/projects';

type Project = {
  src: string;
  alt: string;
  caption: string;
};

function ProjectCard({
  project,
  aspect,
  sizes,
}: {
  project: Project;
  aspect: string;
  sizes: string;
}) {
  return (
    <figure data-anim="gallery-card">
      <div className={`relative overflow-hidden rounded-md bg-evergreen/10 ${aspect}`}>
        <Image
          src={project.src}
          alt={project.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-wider opacity-70">
        {project.caption}
      </figcaption>
    </figure>
  );
}

export default function GalleryPreviewSection() {
  const containerRef = useGsapReveal<HTMLElement>(() => {
    gsap.fromTo(
      '[data-anim="gallery-card"]',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-anim="gallery-grid"]',
          start: 'top 80%',
          once: true,
        },
      }
    );
  });

  const projects: Project[] = getFeaturedProjects()
    .slice(0, 6)
    .map((p) => ({
      src: p.images[0].src,
      alt: p.images[0].alt,
      caption: `${p.location} · ${p.title} · ${p.year}`,
    }));

  return (
    <section
      ref={containerRef}
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32"
    >
      <div className="mb-12 md:mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-3">
            {homeCopy.galleryPreview.eyebrow}
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'var(--text-section)', lineHeight: 1.1 }}
          >
            {homeCopy.galleryPreview.heading}
          </h2>
        </div>
        <Link
          href="/gallery"
          className="group inline-flex items-center font-mono text-xs uppercase tracking-wider self-start md:self-end"
        >
          {homeCopy.galleryPreview.cta.replace(' →', '')}
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>

      <div
        data-anim="gallery-grid"
        className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4"
      >
        <div className="md:col-span-5">
          <ProjectCard
            project={projects[0]}
            aspect="aspect-[3/4]"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </div>

        <div className="md:col-span-7 grid grid-cols-1 gap-3 md:gap-4">
          <ProjectCard
            project={projects[1]}
            aspect="aspect-[16/9]"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
          <ProjectCard
            project={projects[2]}
            aspect="aspect-[16/9]"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
        </div>

        <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {projects.slice(3, 6).map((p) => (
            <ProjectCard
              key={p.src}
              project={p}
              aspect="aspect-square"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
