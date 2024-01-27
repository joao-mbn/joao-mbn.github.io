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
              'rounded-sm p-3 pb-3 underline-offset-8 transition-all duration-300 ' +
              (path === activePath ? 'bg-slate-800 text-slate-50' : 'text-link')
            }>
            {value}
          </Link>
        </li>
      ))}
    </NavMenu>
  );
}
