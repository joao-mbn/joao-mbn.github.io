import { ReactNode } from 'react';

export function Masonry({ children }: { children: ReactNode }) {
  return <div className="columns-1 sm:columns-2 sm:gap-4 lg:gap-8">{children}</div>;
}
