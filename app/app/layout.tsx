import { ReactNode } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';

export default function AppRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}