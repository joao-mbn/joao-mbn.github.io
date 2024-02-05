import { LinkedinLink } from '..';
import { GithubLink } from '../Links/GithubLink';
import { NavMenu } from './NavMenu';

export function Links() {
  return (
    <NavMenu className="-translate-y-[0.4rem]">
      <li className="lg:translate-x-[0.6rem]">
        <GithubLink />
      </li>
      <li className="-translate-x-[0.35rem] lg:translate-x-0">
        <LinkedinLink />
      </li>
    </NavMenu>
  );
}
