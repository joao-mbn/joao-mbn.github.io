import homeContentData from './home.json';
import projectsContentData from './projects.json';
import resumeContentData from './resume.json';
import { HomeContent, ProjectsContent, ResumeContent } from './types';

export async function getHomeContent(): Promise<HomeContent> {
  return homeContentData as HomeContent;
}

export async function getProjectsContent(): Promise<ProjectsContent> {
  return projectsContentData as ProjectsContent;
}

export async function getResumeContent(): Promise<ResumeContent> {
  return resumeContentData as ResumeContent;
}
