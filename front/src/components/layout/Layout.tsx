import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../header/Header'), {
  loading: () => <div>Loading header...</div>,
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
