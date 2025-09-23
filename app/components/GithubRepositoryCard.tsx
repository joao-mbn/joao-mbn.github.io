import { Card, ExternalLink } from '.';
import { GithubRepository } from '../types';

interface GithubRepositoryCardProps {
  repository: GithubRepository;
  className?: string;
}

export function GithubRepositoryCard({ repository, className }: GithubRepositoryCardProps) {
  const { name, description, url, homepageUrl, stargazerCount, forkCount, languages, owner, repositoryTopics } =
    repository;

  return (
    <Card className={className} image={undefined}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ExternalLink href={url} className="text-lg font-semibold transition-colors hover:text-blue-600">
            @{owner.login}/{name}
          </ExternalLink>
        </div>
        {homepageUrl && (
          <ExternalLink href={homepageUrl} className="text-sm text-gray-600 transition-colors hover:text-blue-600">
            Live Demo
          </ExternalLink>
        )}
      </div>

      {description && <p className="mb-3 line-clamp-2 text-gray-700">{description}</p>}

      <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-gray-600">
        {languages.nodes.map(language => (
          <div className="flex items-center gap-1" key={language.name}>
            <div className={`h-3 w-3 rounded-full`} style={{ backgroundColor: language.color }} />
            <span>{language.name}</span>
          </div>
        ))}

        {stargazerCount > 0 && (
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{stargazerCount}</span>
          </div>
        )}

        {forkCount > 0 && (
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{forkCount}</span>
          </div>
        )}
      </div>

      {repositoryTopics.nodes.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {repositoryTopics.nodes.slice(0, 5).map(({ topic: { name: topic } }) => (
            <span key={topic} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 transition-colors">
              {topic}
            </span>
          ))}
          {repositoryTopics.nodes.length > 5 && (
            <span className="px-2 py-1 text-xs text-gray-500">+{repositoryTopics.nodes.length - 5} more</span>
          )}
        </div>
      )}
    </Card>
  );
}

