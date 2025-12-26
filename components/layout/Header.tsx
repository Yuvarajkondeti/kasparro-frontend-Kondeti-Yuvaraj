import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold text-gray-900">
          Kasparro
        </span>

        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/platform">Platform</Link>
          <Link href="/about">About</Link>
          <Link
            href="/app/dashboard"
            className="font-medium text-gray-900"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}