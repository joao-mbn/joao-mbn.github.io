import { Navbar } from '..';
import { Links } from './Links';

export function Header() {
  return (
    <header className="flex align-middle justify-between flex-wrap gap-4 lg:gap-6 text-xl lg:text-2xl">
      <Navbar />
      <Links className="-translate-y-0.5" />
    </header>
  );
}
