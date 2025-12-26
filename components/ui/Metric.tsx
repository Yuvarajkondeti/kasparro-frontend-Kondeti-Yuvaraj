interface MetricProps {
  label: string;
  value: number | string;
}

export function Metric({ label, value }: MetricProps) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-gray-900">{value}</span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );
}