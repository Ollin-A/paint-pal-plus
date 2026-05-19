'use client';

import { useSearchParams } from 'next/navigation';
import ContactPageForm from './ContactPageForm';
import type { LeadProjectType } from '@/lib/leads';

const PROJECT_TYPES = [
  'interior',
  'exterior',
  'cabinet',
  'stain',
  'commercial',
  'unsure',
] as const satisfies readonly LeadProjectType[];

function parseProjectType(raw: string | null): LeadProjectType | undefined {
  if (!raw) return undefined;
  return (PROJECT_TYPES as readonly string[]).includes(raw)
    ? (raw as LeadProjectType)
    : undefined;
}

export default function ContactPageFormClient() {
  const searchParams = useSearchParams();
  const defaultProjectType = parseProjectType(searchParams.get('type'));
  return <ContactPageForm defaultProjectType={defaultProjectType} />;
}
