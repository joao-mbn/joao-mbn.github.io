export interface GithubRepository {
  id: string;
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  languages: {
    nodes: { name: string; color: string }[];
  };
  owner: { login: string; avatarUrl: string };
  repositoryTopics: {
    nodes: { topic: { name: string } }[];
  };
}

export interface ProjectsContent {
  githubRepositories: GithubRepository[];
}
