import PullQuote from '@/components/ui/PullQuote';
import { homeCopy } from '@/lib/copy';

export default function TestimonialSection() {
  return (
    <section
      style={{
        background: 'var(--color-ochre)',
        color: 'var(--color-ochre-text)',
      }}
    >
      <PullQuote
        quote={homeCopy.testimonial.quote}
        underlinePhrase={homeCopy.testimonial.underlinePhrase}
        attribution={homeCopy.testimonial.attribution}
        project={homeCopy.testimonial.project}
        underlineColorVar="--color-clay"
      />
    </section>
  );
}
