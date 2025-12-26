import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {title && (
        <h3 className="mb-3 text-sm font-semibold text-gray-700">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}