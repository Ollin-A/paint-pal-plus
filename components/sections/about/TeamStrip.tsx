import Image from 'next/image';
import { aboutCopy } from '@/lib/about-copy';

export default function TeamStrip() {
  const { enabled, eyebrow, heading, members } = aboutCopy.team;
  if (!enabled || members.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
      <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-3">
        {eyebrow}
      </p>
      <h2
        className="font-display mb-12 md:mb-16"
        style={{ fontSize: 'var(--text-section)', lineHeight: 1.1 }}
      >
        {heading}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
        {members.map((m) => (
          <figure key={m.name}>
            <div className="relative aspect-[3/4] rounded-md overflow-hidden">
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-wider">
              <span className="opacity-90">{m.name}</span>
              <span className="opacity-50"> · {m.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
