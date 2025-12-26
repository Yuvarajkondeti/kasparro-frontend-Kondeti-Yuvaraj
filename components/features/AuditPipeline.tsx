interface AuditPipelineProps {
  steps: string[];
}

export function AuditPipeline({ steps }: AuditPipelineProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl">
        <h3 className="mb-8 text-center text-lg font-semibold">
          AI Audit Pipeline
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-md border bg-white px-4 py-2 text-sm"
            >
              {index + 1}. {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}