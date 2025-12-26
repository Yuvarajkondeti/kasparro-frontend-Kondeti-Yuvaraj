import { Card } from '@/components/ui/Card';

interface ArchitectureSectionProps {
  title: string;
  items: string[];
}

export function ArchitectureSection({
  title,
  items,
}: ArchitectureSectionProps) {
  return (
    <Card title={title}>
      <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}