'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavMenu } from './NavMenu';

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
          <Link href={path} className={'p-2 lg:p-3 ' + (path === activePath ? 'text-link-active' : 'text-link')}>
            {value}
          </Link>
        </li>
      ))}
    </NavMenu>
  );
}
