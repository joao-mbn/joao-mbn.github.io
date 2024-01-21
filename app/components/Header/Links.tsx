import { GITHUB, LINKEDIN } from '@/app/utils/constants';
import { ExternalLink, NavMenu } from '..';

export function Links() {
  return (
    <NavMenu>
      <li>
        <ExternalLink href={GITHUB}>Github 🔗</ExternalLink>
      </li>
      <li>
        <ExternalLink href={LINKEDIN}>Linkedin 🔗</ExternalLink>
      </li>
    </NavMenu>
  );
}
