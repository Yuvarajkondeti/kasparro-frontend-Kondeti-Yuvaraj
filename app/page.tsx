import marketing from '@/data/marketing.json';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { HeroSection } from '@/components/features/HeroSection';
import { AiSeoDifference } from '@/components/features/AiSeoDifference';
import { AuditPipeline } from '@/components/features/AuditPipeline';

export default function HomePage() {
  return (
    <PublicLayout>
      <HeroSection
        title={marketing.hero.title}
        subtitle={marketing.hero.subtitle}
      />

      <AiSeoDifference blocks={marketing.aiSeoDifference} />

      <AuditPipeline steps={marketing.auditPipeline} />
    </PublicLayout>
  );
}