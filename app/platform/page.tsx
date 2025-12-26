import auditModules from '@/data/auditModules.json';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AuditModuleCard } from '@/components/features/AuditModuleCard';

export default function PlatformPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Kasparro AI Audit Platform
        </h1>

        <p className="mb-12 max-w-3xl text-gray-600">
          Kasparro analyzes how AI-first search engines perceive,
          trust, and cite your brand — across visibility, authority,
          coverage, and context.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {auditModules.map((module) => (
            <AuditModuleCard
              key={module.id}
              name={module.name}
              score={module.score}
            />
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}