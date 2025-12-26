import { ReactNode } from 'react';
import Link from 'next/link';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 border-r bg-white p-6">
        <h2 className="mb-6 text-lg font-bold">
          Kasparro
        </h2>

        <nav className="flex flex-col gap-3 text-sm text-gray-700">
          <Link href="/app/dashboard">Dashboard</Link>
          <Link href="/app/audit">Audit</Link>
          <Link href="/app/architecture">Architecture</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}