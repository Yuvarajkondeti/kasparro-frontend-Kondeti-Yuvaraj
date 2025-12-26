'use client';

import { useState } from 'react';
import brands from '@/data/brands.json';
import snapshots from '@/data/auditSnapshots.json';
import { BrandSelector } from '@/components/features/BrandSelector';
import { SnapshotCard } from '@/components/features/SnapshotCard';

export default function DashboardPage() {
  const [selectedBrandId, setSelectedBrandId] = useState(
    brands[0].id
  );

  const snapshot = snapshots.find(
    (s) => s.brandId === selectedBrandId
  );

  if (!snapshot) return null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <BrandSelector
          brands={brands}
          selectedBrandId={selectedBrandId}
          onChange={setSelectedBrandId}
        />
      </div>

      {/* Snapshot cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <SnapshotCard
          title="AI Visibility Score"
          value={snapshot.aiVisibilityScore}
        />
        <SnapshotCard
          title="Trust / EEAT Score"
          value={snapshot.trustScore}
        />
        <SnapshotCard
          title="Non-branded Coverage"
          value={`${snapshot.nonBrandedCoverage}%`}
        />
        <SnapshotCard
          title="Last Audit"
          value={new Date(snapshot.lastAuditAt).toLocaleDateString()}
        />
      </div>
    </div>
  );
}