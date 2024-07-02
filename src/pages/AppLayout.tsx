import type { ReactNode } from "react";
import { Header } from "../features/ui/Header";
import { PageNav } from "../features/ui/PageNav";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <Header />
      <PageNav />
      {children}
    </div>
  );
}
