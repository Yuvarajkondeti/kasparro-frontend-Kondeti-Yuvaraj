import { AuditModule } from '@/types/audit';

interface AuditModuleListProps {
  modules: AuditModule[];
  selectedModuleId: string;
  onSelect: (id: string) => void;
}

export function AuditModuleList({
  modules,
  selectedModuleId,
  onSelect,
}: AuditModuleListProps) {
  return (
    <div className="space-y-2">
      {modules.map((module) => {
        const isActive = module.id === selectedModuleId;

        return (
          <button
            key={module.id}
            onClick={() => onSelect(module.id)}
            className={`w-full rounded-md px-4 py-2 text-left text-sm ${
              isActive
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex justify-between">
              <span>{module.name}</span>
              <span className="font-medium">
                {module.score}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}