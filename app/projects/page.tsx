import { GithubRepositoryCard, Masonry, Page } from '../components';
import { getProjectsContent } from '../content';

export default async function Projects() {
  const { githubRepositories: repositories } = await getProjectsContent();
  return (
    <Page>
      <Masonry>
        {repositories.map(repository => (
          <GithubRepositoryCard key={repository.id} repository={repository} className="[&&]:mt-0 [&&]:lg:mt-0" />
        ))}
      </Masonry>
    </Page>
  );
}

