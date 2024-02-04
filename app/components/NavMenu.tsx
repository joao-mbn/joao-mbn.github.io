import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface NavMenuProps extends ComponentPropsWithoutRef<'nav'> {
  children: ReactNode;
}

export function NavMenu({ children, ...props }: NavMenuProps) {
  return (
    <nav {...props}>
      <ul className="h-full items-baseline flex gap-4 lg:gap-6">{children}</ul>
    </nav>
  );
}
