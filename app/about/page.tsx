import about from '@/data/about.json';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AboutContent } from '@/components/features/AboutContent';

export default function AboutPage() {
  return (
    <PublicLayout>
      <AboutContent
        title={about.title}
        description={about.description}
        principles={about.principles}
      />
    </PublicLayout>
  );
}