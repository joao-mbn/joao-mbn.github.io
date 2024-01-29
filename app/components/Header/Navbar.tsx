'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavMenu } from '..';

const routes = [
  { path: '/', value: 'Home' },
  { path: '/projects', value: 'Projects' },
  { path: '/resume', value: 'Resume' },
];

export function Navbar() {
  const activePath = usePathname();

  return (
    <NavMenu>
      {routes.map(({ path, value }) => (
        <li key={path}>
          <Link
            href={path}
            className={
              'p-2 underline-offset-4 transition-all duration-300 lg:p-3 lg:underline-offset-8 ' +
              (path === activePath ? 'dark-bg-gradient' : 'text-link')
            }>
            {value}
          </Link>
        </li>
      ))}
    </NavMenu>
  );
}
