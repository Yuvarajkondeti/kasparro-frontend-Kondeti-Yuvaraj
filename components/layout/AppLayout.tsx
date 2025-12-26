import { ReactNode } from 'react';
import Link from 'next/link';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <aside className="w-64 border-r border-gray-300 bg-white p-6">
        <h2 className="mb-6 text-lg font-bold text-black">
          Kasparro
        </h2>

        <nav className="flex flex-col gap-3 text-sm text-black">
          <Link href="/app/dashboard">Dashboard</Link>
          <Link href="/app/audit">Audit</Link>
          <Link href="/app/architecture">Architecture</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8 text-black">
        {children}
      </main>
    </div>
  );
}