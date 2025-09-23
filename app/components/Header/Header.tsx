import { Navbar } from '..';
import { Links } from './Links';

export function Header() {
  return (
    <header className="flex flex-wrap justify-between align-baseline">
      <Navbar />
      <Links />
    </header>
  );
}
