import { Card } from '@/components/ui/Card';

interface AuditModuleCardProps {
  name: string;
  score: number;
}

export function AuditModuleCard({
  name,
  score,
}: AuditModuleCardProps) {
  return (
    <Card title={name}>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">
          Module Score
        </span>
        <span className="text-xl font-bold text-gray-900">
          {score}
        </span>
      </div>
    </Card>
  );
}