interface DifferenceBlock {
  title: string;
  points: string[];
}

interface AiSeoDifferenceProps {
  blocks: DifferenceBlock[];
}

export function AiSeoDifference({ blocks }: AiSeoDifferenceProps) {
  return (
    <section className="mx-auto grid max-w-4xl grid-cols-1 gap-8 py-16 md:grid-cols-2">
      {blocks.map((block) => (
        <div key={block.title} className="rounded-lg border p-6">
          <h3 className="mb-4 text-lg font-semibold">
            {block.title}
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600">
            {block.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}