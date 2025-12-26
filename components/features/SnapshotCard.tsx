import { Card } from '@/components/ui/Card';
import { Metric } from '@/components/ui/Metric';

interface SnapshotCardProps {
  title: string;
  value: number | string;
}

export function SnapshotCard({
  title,
  value,
}: SnapshotCardProps) {
  return (
    <Card>
      <Metric label={title} value={value} />
    </Card>
  );
}