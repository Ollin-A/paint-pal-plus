import Link from 'next/link';
import clsx from 'clsx';

type PaintChipProps = {
  name: string;
  swatchVar: string;
  swatchTextVar: string;
  colorCode?: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  variant?: 'card' | 'toggle';
  className?: string;
};

export default function PaintChip({
  name,
  swatchVar,
  swatchTextVar,
  colorCode,
  description,
  href,
  onClick,
  active = false,
  variant = 'card',
  className,
}: PaintChipProps) {
  if (variant === 'toggle') {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={clsx(
          'inline-flex items-center px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider border transition-colors duration-200 whitespace-nowrap',
          active
            ? 'border-transparent'
            : 'border-evergreen/20 bg-transparent hover:border-evergreen/40',
          className
        )}
        style={
          active
            ? {
                background: `var(${swatchVar})`,
                color: `var(${swatchTextVar})`,
              }
            : { color: 'var(--color-evergreen)' }
        }
      >
        {name}
      </button>
    );
  }

  const rootClass = clsx(
    'block rounded-md overflow-hidden transition-transform duration-300 hover:-translate-y-1',
    className
  );

  const inner = (
    <>
      <div
        className="flex items-end h-[72px] md:h-[88px] px-4 pb-3 rounded-t-md"
        style={{
          background: `var(${swatchVar})`,
          color: `var(${swatchTextVar})`,
        }}
      >
        <span className="font-sans font-medium text-lg leading-tight">{name}</span>
      </div>
      <div className="bg-fog border border-evergreen/12 border-t-0 rounded-b-md p-4">
        {colorCode && (
          <p className="font-mono text-xs uppercase tracking-wider opacity-70 mb-2">
            {colorCode}
          </p>
        )}
        {description && (
          <p className="text-[15px] leading-snug">{description}</p>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={rootClass}>
        {inner}
      </Link>
    );
  }

  return <div className={rootClass}>{inner}</div>;
}
