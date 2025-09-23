import { GithubRepositoryCard, Page } from '../components';
import { getProjectsContent } from '../content';

export default async function Projects() {
  const { githubRepositories: repositories } = await getProjectsContent();
  return (
    <Page>
      <div className="[&>:not(:last-child)]:mb-6 [&>:not(:last-child)]:border-b-2 [&>:not(:last-child)]:border-slate-800 [&>:not(:last-child)]:pb-6">
        {repositories.map(repository => (
          <GithubRepositoryCard key={repository.id} repository={repository} />
        ))}
      </div>
    </Page>
  );
}

