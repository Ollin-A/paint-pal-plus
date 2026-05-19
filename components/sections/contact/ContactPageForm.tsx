import ContactForm from '@/components/ui/ContactForm';
import ContactSidebar from './ContactSidebar';
import type { LeadProjectType } from '@/lib/leads';

type ContactPageFormProps = {
  defaultProjectType?: LeadProjectType;
};

export default function ContactPageForm({
  defaultProjectType,
}: ContactPageFormProps) {
  return (
    <section
      style={{
        background: 'var(--color-evergreen)',
        color: 'var(--color-fog)',
      }}
      className="py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid gap-16 md:grid-cols-5 md:gap-20">
        <div className="md:col-span-3">
          <ContactForm
            source="contact-page"
            variant="full"
            defaultProjectType={defaultProjectType}
          />
        </div>
        <div className="md:col-span-2">
          <ContactSidebar />
        </div>
      </div>
    </section>
  );
}
