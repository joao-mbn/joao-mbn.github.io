import { LinkedinLink } from '..';
import { GithubLink } from '../Links/GithubLink';
import { NavMenu } from './NavMenu';

export function Links() {
  return (
    <NavMenu className="hidden -translate-y-[0.6rem] sm:flex">
      <li className="lg:translate-x-[0.5rem]">
        <GithubLink />
      </li>
      <li className="-translate-x-[0.3rem] lg:translate-x-0">
        <LinkedinLink />
      </li>
    </NavMenu>
  );
}
