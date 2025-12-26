'use client';

import { useState } from 'react';
import rawModules from '@/data/auditModules.json';
import { AuditModule } from '@/types/audit';
import { AuditModuleList } from '@/components/features/AuditModuleList';
import { AuditModuleDetails } from '@/components/features/AuditModuleDetails';

const modules = rawModules as AuditModule[];

export default function AuditPage() {
  const [selectedModuleId, setSelectedModuleId] = useState(
    modules[0].id
  );

  const selectedModule = modules.find(
    (m) => m.id === selectedModuleId
  );

  if (!selectedModule) return null;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <AuditModuleList
          modules={modules}
          selectedModuleId={selectedModuleId}
          onSelect={setSelectedModuleId}
        />
      </div>

      <div className="lg:col-span-2">
        <AuditModuleDetails module={selectedModule} />
      </div>
    </div>
  );
}