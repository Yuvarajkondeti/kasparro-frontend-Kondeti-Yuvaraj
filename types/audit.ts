export interface AuditInsight {
  title: string;
  description: string;
}

export interface AuditIssue {
  severity: 'low' | 'medium' | 'high';
  message: string;
}

export interface AuditRecommendation {
  action: string;
  impact: string;
}

export interface AuditModule {
  id: string;
  name: string;
  score: number;
  insights: AuditInsight[];
  issues: AuditIssue[];
  recommendations: AuditRecommendation[];
}