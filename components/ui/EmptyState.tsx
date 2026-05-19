type EmptyStateProps = {
  heading: string;
  subhead: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({
  heading,
  subhead,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="py-32 md:py-48 text-center max-w-md mx-auto">
      <h3
        className="font-display mb-4"
        style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1 }}
      >
        {heading}
      </h3>
      <p className="opacity-70 leading-relaxed">{subhead}</p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-8 font-mono text-xs uppercase tracking-wider underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
