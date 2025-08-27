import { Navbar } from '..';
import { Links } from './Links';

export function Header() {
  return (
    <header className="text-big flex translate-y-3 flex-wrap justify-between gap-8 align-baseline lg:gap-6">
      <Navbar />
      <Links />
    </header>
  );
}
