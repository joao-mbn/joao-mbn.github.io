import { LinkedinLink } from '..';
import { GithubLink } from '../Links/GithubLink';

export function Links() {
  return (
    <nav className="hidden -translate-y-[0.6rem] sm:flex">
      <ul className="flex h-full flex-wrap items-baseline gap-4 lg:gap-6">
        <li className="lg:translate-x-[0.5rem]">
          <GithubLink />
        </li>
        <li className="-translate-x-[0.3rem] lg:translate-x-0">
          <LinkedinLink />
        </li>
      </ul>
    </nav>
  );
}
