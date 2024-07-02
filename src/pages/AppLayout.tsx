import type { ReactNode } from 'react';
import { Header } from '../features/ui/Header';
import { PageNav } from '../features/ui/PageNav';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className='font-spaceMono'>
      <Header />
      <PageNav />
      {children}
    </div>
  );
}
