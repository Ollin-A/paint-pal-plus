'use client';

import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import PaintChip from '@/components/ui/PaintChip';
import {
  categoryColors,
  categoryLabels,
  type ProjectCategory,
} from '@/lib/projects';

type FilterValue = ProjectCategory | 'all';

type FilterDef = {
  value: FilterValue;
  name: string;
  swatchVar: string;
  textVar: string;
};

const filters: FilterDef[] = [
  {
    value: 'all',
    name: 'All',
    swatchVar: categoryColors.all.swatchVar,
    textVar: categoryColors.all.textVar,
  },
  ...(Object.keys(categoryLabels) as ProjectCategory[]).map((cat) => ({
    value: cat as FilterValue,
    name: categoryLabels[cat],
    swatchVar: categoryColors[cat].swatchVar,
    textVar: categoryColors[cat].textVar,
  })),
];

export default function GalleryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = (searchParams.get('category') ?? 'all') as FilterValue;

  function setFilter(value: FilterValue) {
    const next = new URLSearchParams(searchParams.toString());
    if (value === 'all') next.delete('category');
    else next.set('category', value);
    const query = next.toString();
    router.replace(`${pathname}${query ? `?${query}` : ''}`, { scroll: false });
  }

  // Auto-scroll active chip into view on mobile when filter changes.
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(
      `[data-filter-slug="${active}"]`
    );
    el?.scrollIntoView({
      inline: 'center',
      block: 'nearest',
      behavior: 'smooth',
    });
  }, [active]);

  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-nowrap gap-2 overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0 md:flex-wrap md:overflow-visible md:gap-3 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
    >
      {filters.map((f) => (
        <div
          key={f.value}
          data-filter-slug={f.value}
          className="snap-start shrink-0"
        >
          <PaintChip
            name={f.name}
            swatchVar={f.swatchVar}
            swatchTextVar={f.textVar}
            variant="toggle"
            active={active === f.value}
            onClick={() => setFilter(f.value)}
          />
        </div>
      ))}
    </div>
  );
}
