interface BadgeProps {
  label: string;
  variant?: 'low' | 'medium' | 'high';
}

const colors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

export function Badge({ label, variant = 'low' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${colors[variant]}`}
    >
      {label}
    </span>
  );
}