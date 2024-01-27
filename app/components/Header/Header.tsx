import { Navbar } from '..';
import { Links } from './Links';

export function Header() {
  return (
    <header className="text-big flex flex-wrap justify-between gap-4 align-middle lg:gap-6">
      <Navbar />
      <Links className="-translate-y-0.5" />
    </header>
  );
}
