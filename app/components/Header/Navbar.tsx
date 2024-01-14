import Link from 'next/link';

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
