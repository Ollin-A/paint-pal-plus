'use client';

import { Suspense, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import GalleryHero from '@/components/sections/gallery/GalleryHero';
import GalleryFilter from '@/components/sections/gallery/GalleryFilter';
import ProjectGrid from '@/components/sections/gallery/ProjectGrid';
import Lightbox from '@/components/sections/gallery/Lightbox';
import EmptyState from '@/components/ui/EmptyState';
import ClosingCta from '@/components/ui/ClosingCta';
import { homeCopy } from '@/lib/copy';
import {
  getProjectsByCategory,
  type Project,
  type ProjectCategory,
} from '@/lib/projects';

type LightboxState = { projects: Project[]; index: number } | null;

function FilteredGallery({
  onOpen,
}: {
  onOpen: (projects: Project[], index: number) => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = (searchParams.get('category') ?? 'all') as
    | ProjectCategory
    | 'all';
  const filtered = useMemo(() => getProjectsByCategory(active), [active]);

  if (filtered.length === 0) {
    return (
      <EmptyState
        heading={homeCopy.gallery.emptyState.heading}
        subhead={homeCopy.gallery.emptyState.subhead}
        actionLabel={homeCopy.gallery.emptyState.actionLabel}
        onAction={() => router.replace('/gallery', { scroll: false })}
      />
    );
  }

  return (
    <ProjectGrid
      projects={filtered}
      onProjectClick={(i) => onOpen(filtered, i)}
    />
  );
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  return (
    <>
      <GalleryHero />

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <Suspense fallback={<div className="h-10" />}>
          <GalleryFilter />
        </Suspense>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <Suspense fallback={<div className="min-h-[40vh]" />}>
          <FilteredGallery
            onOpen={(projects, index) => setLightbox({ projects, index })}
          />
        </Suspense>
      </section>

      <ClosingCta
        heading={homeCopy.gallery.closing.heading}
        cta={homeCopy.gallery.closing.cta}
        href={homeCopy.gallery.closing.href}
      />

      {lightbox && (
        <Lightbox
          projects={lightbox.projects}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
