import { VscGithub } from 'react-icons/vsc';
import { ExternalLink } from '..';
import { GITHUB } from '../../utils/constants';

export function GithubLink() {
  return (
    <ExternalLink href={GITHUB}>
      <VscGithub className="h-10 w-10" />
    </ExternalLink>
  );
}
