import { contactCopy } from '@/lib/contact-copy';

export default function ContactSidebar() {
  const { phone, email, hours, serviceArea } = contactCopy.sidebar;

  return (
    <div className="divide-y divide-fog/20">
      <div className="pb-10">
        <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">
          {phone.label}
        </p>
        <a
          href={phone.href}
          className="font-display text-3xl md:text-4xl block hover:opacity-90 transition-opacity"
        >
          {phone.display}
        </a>
        <p className="opacity-70 mt-2 text-sm">{phone.caption}</p>
      </div>

      <div className="py-10">
        <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">
          {email.label}
        </p>
        <a
          href={email.href}
          className="text-lg underline underline-offset-4 decoration-fog/30 hover:decoration-fog transition-colors"
        >
          {email.display}
        </a>
      </div>

      <div className="py-10">
        <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">
          {hours.label}
        </p>
        <ul className="space-y-2">
          {hours.lines.map((line) => (
            <li key={line} className="text-base opacity-90">
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-10">
        <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">
          {serviceArea.label}
        </p>
        <p className="text-base leading-relaxed opacity-90">
          {serviceArea.body}
        </p>
      </div>
    </div>
  );
}
