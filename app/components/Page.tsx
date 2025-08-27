import { ReactNode } from 'react';

export interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return <main className="w-full">{children}</main>;
}
