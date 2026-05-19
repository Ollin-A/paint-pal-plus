export type LeadProjectType =
  | 'interior'
  | 'exterior'
  | 'cabinet'
  | 'stain'
  | 'commercial'
  | 'unsure';

export type LeadFields = {
  name: string;
  phone: string;
  email?: string;
  projectType?: LeadProjectType;
  projectLocation?: string;
  message: string;
};

export type LeadSource = 'home-contact' | 'contact-page' | 'painting-page-contact';

export type LeadPayload = {
  tenantId: 'paint-pal-plus';
  source: LeadSource;
  fields: LeadFields;
  meta: {
    submittedAt: string;
    userAgent: string;
    referrer: string;
  };
};

export type LeadResult = { ok: true } | { ok: false; error: string };

const GATEWAY_URL = process.env.NEXT_PUBLIC_LEAD_GATEWAY_URL;

export async function submitLead(
  source: LeadSource,
  fields: LeadFields
): Promise<LeadResult> {
  if (!GATEWAY_URL) {
    return { ok: false, error: 'Lead gateway URL not configured' };
  }

  const payload: LeadPayload = {
    tenantId: 'paint-pal-plus',
    source,
    fields,
    meta: {
      submittedAt: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
    },
  };

  try {
    const res = await fetch(GATEWAY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false, error: `Gateway returned ${res.status}` };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Network error' };
  }
}
