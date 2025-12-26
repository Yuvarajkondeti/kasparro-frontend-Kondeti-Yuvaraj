interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
        {subtitle}
      </p>
    </section>
  );
}