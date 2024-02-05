import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface NavMenuProps extends ComponentPropsWithoutRef<'nav'> {
  children: ReactNode;
}

export function NavMenu({ children, ...props }: NavMenuProps) {
  return (
    <nav {...props}>
      <ul className="flex h-full flex-wrap items-baseline gap-4 lg:gap-6">{children}</ul>
    </nav>
  );
}
