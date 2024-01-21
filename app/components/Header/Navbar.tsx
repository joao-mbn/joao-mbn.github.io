import Link from 'next/link';
import { NavMenu } from '..';

export function Navbar() {
  return (
    <NavMenu>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/resume">Resume</Link>
      </li>
    </NavMenu>
  );
}
