interface Principle {
  title: string;
  text: string;
}

interface AboutContentProps {
  title: string;
  description: string;
  principles: Principle[];
}

export function AboutContent({
  title,
  description,
  principles,
}: AboutContentProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-4 text-3xl font-bold text-black-900">
        {title}
      </h1>

      <p className="mb-12 text-lg text-black-600">
        {description}
      </p>

      <div className="space-y-6">
        {principles.map((p) => (
          <div key={p.title} className="rounded-lg border p-6">
            <h3 className="mb-2 text-lg font-semibold">
              {p.title}
            </h3>
            <p className="text-sm text-black-600">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}