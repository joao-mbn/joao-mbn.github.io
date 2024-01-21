import { Navbar } from '..';
import { Links } from './Links';

export function Header() {
  return (
    <header className="flex justify-between flex-wrap gap-2 text-xl lg:text-2xl">
      <Navbar />
      <Links />
    </header>
  );
}
