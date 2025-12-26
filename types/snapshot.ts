export interface AuditSnapshot {
  brandId: string;
  aiVisibilityScore: number;
  trustScore: number;
  nonBrandedCoverage: number;
  lastAuditAt: string;
}