import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface NavMenuProps extends ComponentPropsWithoutRef<'nav'> {
  children: ReactNode;
}

export function NavMenu({ children, ...props }: NavMenuProps) {
  return (
    <nav {...props}>
      <ul className="flex gap-1">{children}</ul>
    </nav>
  );
}
