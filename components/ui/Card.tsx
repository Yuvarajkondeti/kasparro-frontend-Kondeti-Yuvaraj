import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-4">
      {title && (
        <h3 className="mb-3 text-sm font-semibold text-black">
          {title}
        </h3>
      )}
      <div className="text-black">
        {children}
      </div>
    </div>
  );
}