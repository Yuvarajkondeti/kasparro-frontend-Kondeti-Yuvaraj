import architecture from '@/data/architecture.json';
import { ArchitectureSection } from '@/components/features/ArchitectureSection';

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">
        System Architecture
      </h1>

      <p className="max-w-2xl text-gray-600">
        Kasparro models AI perception as a structured pipeline —
        transforming raw brand inputs into explainable,
        actionable intelligence.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {architecture.sections.map((section) => (
          <ArchitectureSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
}