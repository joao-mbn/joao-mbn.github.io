'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { path: '/', value: 'Home' },
  { path: '/projects', value: 'Projects' },
  { path: '/resume', value: 'Resume' },
];

export function Navbar() {
  const activePath = usePathname();

  return (
    <nav className="flex-grow sm:flex-grow-0">
      <ul className="flex h-full flex-wrap items-baseline justify-center gap-4 sm:justify-start lg:gap-6">
        {routes.map(({ path, value }) => (
          <li key={path}>
            <Link
              href={path}
              className={'p-2 text-base sm:text-lg lg:p-3 ' + (path === activePath ? 'text-link-active' : 'text-link')}>
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
