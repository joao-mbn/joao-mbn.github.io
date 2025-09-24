import { GITHUB, LINKEDIN } from '@/app/utils/constants';
import { GrLinkedin } from 'react-icons/gr';
import { VscGithub } from 'react-icons/vsc';
import { ExternalLink } from '..';

export function Links() {
  return (
    <nav className="hidden gap-4 sm:flex lg:gap-6">
      <ExternalLink href={GITHUB}>
        <VscGithub className="h-10 w-10" />
      </ExternalLink>
      <ExternalLink href={LINKEDIN}>
        <GrLinkedin className="h-10 w-10" />
      </ExternalLink>
    </nav>
  );
}
