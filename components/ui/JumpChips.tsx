'use client';

import { useEffect, useState } from 'react';

type JumpChip = {
  label: string;
  anchor: string;
};

type JumpChipsProps = {
  chips: JumpChip[];
  className?: string;
};

export default function JumpChips({ chips, className }: JumpChipsProps) {
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const update = () => setActiveHash(window.location.hash);
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  return (
    <div
      className={`flex gap-2 md:gap-3 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap ${className ?? ''}`}
    >
      {chips.map((chip) => {
        const isActive = activeHash === chip.anchor;
        return (
          <a
            key={chip.anchor}
            href={chip.anchor}
            className={`inline-flex items-center px-4 py-2 rounded-full border border-evergreen/20 font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
              isActive
                ? 'bg-[var(--color-sage)] text-[var(--color-evergreen)] border-transparent'
                : 'hover:bg-[var(--color-sage)]/30'
            }`}
          >
            {chip.label}
          </a>
        );
      })}
    </div>
  );
}
