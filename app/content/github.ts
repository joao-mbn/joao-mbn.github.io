import { createAppAuth } from '@octokit/auth-app';
import { graphql } from '@octokit/graphql';
import { GithubRepository } from '../types';
import { GITHUB_USERNAME } from '../utils/constants';

interface PinnedItemsResponse {
  user: {
    pinnedItems: {
      nodes: GithubRepository[];
    };
  };
}

export async function getGithubRepos(): Promise<GithubRepository[]> {
  try {
    const appId = process.env.GITHUB_APP_ID;
    const privateKey = process.env.GITHUB_APP_PRIVATE_KEY;
    const installationId = process.env.GITHUB_APP_INSTALLATION_ID;
    if (!appId || isNaN(Number(appId)) || !privateKey || !installationId) {
      return [];
    }

    const auth = createAppAuth({
      appId: Number(appId),
      privateKey,
      installationId,
    });

    const graphqlWithAuth = graphql.defaults({
      request: {
        hook: auth.hook,
      },
    });

    const pinnedQuery = `
      query($username: String!) {
        user(login: $username) {
          pinnedItems(first: 10, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                homepageUrl
                stargazerCount
                forkCount
                repositoryTopics(first: 5) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                languages(first: 5) {
                  nodes {
                    name
                    color
                  }
                }
                owner {
                  login
                  avatarUrl
                }
              }
            }
          }
        }
      }
    `;

    const pinnedResponse = await graphqlWithAuth<PinnedItemsResponse>(pinnedQuery, {
      username: GITHUB_USERNAME,
    });

    const pinnedRepos = pinnedResponse.user.pinnedItems.nodes || [];

    return pinnedRepos.sort((a, b) => b.stargazerCount - a.stargazerCount);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

