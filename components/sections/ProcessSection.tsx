import ProcessStrip from '@/components/ui/ProcessStrip';
import { homeCopy } from '@/lib/copy';

export default function ProcessSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
      <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-3">
        {homeCopy.process.eyebrow}
      </p>
      <h2
        className="font-display mb-16 md:mb-20"
        style={{ fontSize: 'var(--text-section)', lineHeight: 1.1 }}
      >
        {homeCopy.process.heading}
      </h2>
      <ProcessStrip steps={homeCopy.process.steps} />
    </section>
  );
}
