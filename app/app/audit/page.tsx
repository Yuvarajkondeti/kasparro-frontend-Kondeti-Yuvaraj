'use client';

import { useState } from 'react';
import modules from '@/data/auditModules.json';
import { AuditModuleList } from '@/components/features/AuditModuleList';
import { AuditModuleDetails } from '@/components/features/AuditModuleDetails';

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
      {/* Left sidebar */}
      <div className="lg:col-span-1">
        <AuditModuleList
          modules={modules}
          selectedModuleId={selectedModuleId}
          onSelect={setSelectedModuleId}
        />
      </div>

      {/* Right panel */}
      <div className="lg:col-span-2">
        <AuditModuleDetails module={selectedModule} />
      </div>
    </div>
  );
}