import { IoStarOutline } from 'react-icons/io5';
import { VscGithub, VscLinkExternal, VscRepoForked } from 'react-icons/vsc';
import { ExternalLink } from '.';
import { GithubRepository } from '../types';
import { formatNumberToKNotation } from '../utils/format';

interface GithubRepositoryCardProps {
  repository: GithubRepository;
}

export function GithubRepositoryCard({ repository }: GithubRepositoryCardProps) {
  const { name, description, url, homepageUrl, stargazerCount, forkCount, languages, owner, repositoryTopics } =
    repository;

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <ExternalLink href={url}>
            <div className="flex items-center gap-2">
              <VscGithub className="h-6 w-6 shrink-0" />
              <span className="-translate-y-0.5 break-all text-base font-semibold sm:text-xl">
                @{owner.login}/{name}
              </span>
            </div>
          </ExternalLink>
          <div className="flex items-center gap-2">
            {forkCount > 0 && (
              <div className="flex items-center gap-1 border border-slate-800 bg-transparent px-2 py-1 text-slate-800">
                <VscRepoForked className="h-5 w-5" />
                <span className="text-sm">{formatNumberToKNotation(forkCount)}</span>
              </div>
            )}
            {stargazerCount > 0 && (
              <div className="flex items-center gap-1 border border-slate-800 bg-transparent px-2 py-1 text-slate-800">
                <IoStarOutline className="h-5 w-5" />
                <span className="text-sm">{formatNumberToKNotation(stargazerCount)}</span>
              </div>
            )}
          </div>
        </div>
        {homepageUrl && (
          <a href={homepageUrl} target="_blank" rel="noreferrer">
            <VscLinkExternal className="h-6 w-6 text-slate-800 transition-colors hover:text-slate-600" />
          </a>
        )}
      </div>

      {description && <p className="text-lg text-slate-700">{description}</p>}

      <div className="flex flex-col gap-1 text-base text-slate-700">
        {languages.nodes.length > 0 && (
          <div className="flex flex-wrap items-center gap-1">
            <span className="font-semibold">Written in: </span>
            {languages.nodes
              .slice(0, 5)
              .map(({ name: language }) => language)
              .join(', ')}
          </div>
        )}

        {repositoryTopics.nodes.length > 0 && (
          <div className="flex flex-wrap items-center gap-1 ">
            <span className="font-semibold">Topics: </span>
            {repositoryTopics.nodes
              .slice(0, 5)
              .map(({ topic: { name: topic } }) => topic)
              .join(', ')}
          </div>
        )}
      </div>
    </div>
  );
}

