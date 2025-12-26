interface MetricProps {
  label: string;
  value: number | string;
}

export function Metric({ label, value }: MetricProps) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-black">
        {value}
      </span>
      <span className="text-sm text-black">
        {label}
      </span>
    </div>
  );
}