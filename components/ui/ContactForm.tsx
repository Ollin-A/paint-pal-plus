'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { contactCopy } from '@/lib/contact-copy';
import { submitLead, type LeadProjectType, type LeadSource } from '@/lib/leads';

type Status = 'idle' | 'submitting' | 'success' | 'error';

function FieldShell({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block font-mono text-[11px] uppercase tracking-wider opacity-60"
      >
        {label}
      </label>
      <div className="relative mt-2">
        {children}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-full block h-[2px] origin-left scale-x-0 transition-transform duration-300 peer-focus:scale-x-100"
          style={{ background: 'var(--color-ochre)' }}
        />
      </div>
    </div>
  );
}

const fieldInputClass =
  'peer block w-full bg-transparent border-0 border-b border-fog/30 focus:border-fog focus:outline-none focus:ring-0 py-3 px-0 text-base text-fog placeholder:text-fog/40 transition-colors duration-300';

type ContactFormProps = {
  source: LeadSource;
  variant?: 'inline' | 'full';
  defaultProjectType?: LeadProjectType;
};

export default function ContactForm({
  source,
  variant = 'inline',
  defaultProjectType,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = new FormData(e.currentTarget);
    const projectTypeRaw = String(form.get('projectType') ?? '');
    const projectLocation =
      variant === 'full'
        ? String(form.get('projectLocation') ?? '').trim() || undefined
        : undefined;

    const result = await submitLead(source, {
      name: String(form.get('name') ?? '').trim(),
      phone: String(form.get('phone') ?? '').trim(),
      email: String(form.get('email') ?? '').trim() || undefined,
      projectType: (projectTypeRaw || undefined) as LeadProjectType | undefined,
      projectLocation,
      message: String(form.get('message') ?? '').trim(),
    });

    if (result.ok) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMsg(result.error);
    }
  }

  const copy = contactCopy.form;
  const submitting = status === 'submitting';

  if (status === 'success') {
    return (
      <div className="py-8" aria-live="polite">
        <p
          className="font-display mb-3"
          style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.1 }}
        >
          {copy.success.heading}
        </p>
        <p className="opacity-80 max-w-prose">{copy.success.body}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <FieldShell label={copy.fieldLabels.name} htmlFor="contact-name">
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={fieldInputClass}
        />
      </FieldShell>

      <FieldShell label={copy.fieldLabels.phone} htmlFor="contact-phone">
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder={copy.placeholders.phone}
          required
          className={fieldInputClass}
        />
      </FieldShell>

      <FieldShell label={copy.fieldLabels.email} htmlFor="contact-email">
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required={variant === 'full'}
          className={fieldInputClass}
        />
      </FieldShell>

      <FieldShell
        label={copy.fieldLabels.projectType}
        htmlFor="contact-project-type"
      >
        <select
          id="contact-project-type"
          name="projectType"
          defaultValue={defaultProjectType ?? ''}
          className={`${fieldInputClass} appearance-none pr-8`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none' stroke='%23F5EFE3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='1 1.5 6 6.5 11 1.5'/></svg>\")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 4px center',
            backgroundSize: '12px 8px',
          }}
        >
          {copy.projectTypes.map((opt) => (
            <option
              key={opt.value || 'placeholder'}
              value={opt.value}
              disabled={opt.value === ''}
              style={{ background: 'var(--color-evergreen)', color: 'var(--color-fog)' }}
            >
              {opt.label}
            </option>
          ))}
        </select>
      </FieldShell>

      {variant === 'full' && (
        <FieldShell
          label={copy.fieldLabels.projectLocation}
          htmlFor="contact-project-location"
        >
          <input
            id="contact-project-location"
            name="projectLocation"
            type="text"
            autoComplete="address-level2"
            placeholder={copy.placeholders.projectLocation}
            className={fieldInputClass}
          />
        </FieldShell>
      )}

      <FieldShell label={copy.fieldLabels.message} htmlFor="contact-message">
        <textarea
          id="contact-message"
          name="message"
          rows={variant === 'full' ? 6 : 5}
          required
          placeholder={copy.placeholders.message}
          className={`${fieldInputClass} resize-y leading-relaxed`}
        />
      </FieldShell>

      {status === 'error' && (
        <p
          role="alert"
          className="text-sm"
          style={{ color: 'var(--color-clay)' }}
        >
          {copy.errorPrefix} {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="font-display text-lg px-6 py-3 rounded-sm w-full md:w-fit disabled:opacity-50 disabled:cursor-wait transition-opacity"
        style={{
          background: 'var(--color-ochre)',
          color: 'var(--color-evergreen)',
        }}
      >
        {submitting ? copy.submitting : copy.cta}
      </button>
    </form>
  );
}
