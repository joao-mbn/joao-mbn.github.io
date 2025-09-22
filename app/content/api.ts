import { getGithubRepos } from './github';
import homeContentData from './home.json';
import projectsContentData from './projects.json';
import myResumeData from './resume.json';
import { HomeContent, ProjectsContent, ResumeContent } from './types';

export async function getHomeContent(): Promise<HomeContent> {
  return homeContentData as HomeContent;
}

export async function getProjectsContent(): Promise<ProjectsContent> {
  const githubRepositories = await getGithubRepos();
  return {
    ...projectsContentData,
    githubRepositories,
  };
}

export async function getResumeContent(): Promise<ResumeContent> {
  const resume = myResumeData;

  const workExperienceItems = resume.workExperience.map(experience => ({
    company: experience.company,
    position: experience.position,
    duration: experience.duration,
    achievements: experience.achievements || [],
    skills: experience.technologies || [],
  }));

  return {
    summary: {
      title: 'Summary',
      description: resume.personalInfo.summary,
    },
    workExperience: {
      title: 'Work Experience',
      items: workExperienceItems,
    },
    education: {
      title: 'Education',
      items: resume.education.map(education => ({
        institution: education.institution,
        degree: education.degree,
        duration: education.duration,
        location: education.location,
      })),
    },
    certifications: {
      title: 'Certifications',
      items: resume.certifications.map(certification => ({
        name: certification.name,
        credential: certification.credential,
        link: certification.link,
      })),
    },
    languages: {
      title: 'Languages',
      items: resume.languages.map(language => ({
        language: language.language,
        proficiency: language.proficiency,
        credential: language.credential,
        certifyingBody: language.certifyingBody,
        link: language.link,
      })),
    },
  };
}
