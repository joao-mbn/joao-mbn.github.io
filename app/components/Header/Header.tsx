import { Navbar } from '..';
import { Links } from './Links';

export function Header() {
  return (
    <header className="text-big flex flex-wrap justify-between gap-8 align-middle lg:gap-6">
      <Navbar />
      <Links />
    </header>
  );
}
