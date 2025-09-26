import { EMAIL, GITHUB, LINKEDIN } from '@/app/utils/constants';
import { GrLinkedin } from 'react-icons/gr';
import { RiMailLine } from 'react-icons/ri';
import { VscGithub } from 'react-icons/vsc';
import { ExternalLink } from '..';

export function Links() {
  return (
    <nav className="hidden gap-4 sm:flex lg:gap-6">
      <ExternalLink href={'mailto:' + EMAIL}>
        <RiMailLine className="h-10 w-10" viewBox="2 1.5 21 21" />
      </ExternalLink>
      <ExternalLink href={GITHUB}>
        <VscGithub className="h-10 w-10" />
      </ExternalLink>
      <ExternalLink href={LINKEDIN}>
        <GrLinkedin className="h-10 w-10" />
      </ExternalLink>
    </nav>
  );
}
