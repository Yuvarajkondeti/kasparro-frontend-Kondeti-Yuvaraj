import { AuditModule } from '@/types/audit';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

interface AuditModuleDetailsProps {
  module: AuditModule;
}

export function AuditModuleDetails({
  module,
}: AuditModuleDetailsProps) {
  return (
    <div className="space-y-6">
      <Card title={`${module.name} — Score ${module.score}`}>
        <p className="text-sm text-gray-600">
          Key insights and findings from this audit module.
        </p>
      </Card>

      {module.insights.length > 0 && (
        <Card title="Insights">
          <ul className="space-y-2 text-sm">
            {module.insights.map((i) => (
              <li key={i.title}>
                <strong>{i.title}:</strong> {i.description}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {module.issues.length > 0 && (
        <Card title="Issues">
          <ul className="space-y-3 text-sm">
            {module.issues.map((issue, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2"
              >
                <Badge
                  label={issue.severity}
                  variant={issue.severity}
                />
                <span>{issue.message}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {module.recommendations.length > 0 && (
        <Card title="Recommendations">
          <ul className="space-y-2 text-sm">
            {module.recommendations.map((r, idx) => (
              <li key={idx}>
                <strong>{r.action}</strong> — {r.impact}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}