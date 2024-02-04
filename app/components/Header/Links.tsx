import { LinkedinLink, NavMenu, NavMenuProps } from '..';
import { GithubLink } from '../Links/GithubLink';

export interface LinksProps extends Omit<NavMenuProps, 'children'> {}

export function Links(props: LinksProps) {
  return (
    <NavMenu {...props}>
      <li>
        <GithubLink />
      </li>
      <li>
        <LinkedinLink />
      </li>
    </NavMenu>
  );
}
