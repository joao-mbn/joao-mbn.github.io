export interface HomeContent {
  greeting: string;
  introduction: string;
  introductionSuffix: string;
  description: string;
  cta: string;
}

export interface ProjectContent {
  title: string;
  description: string;
}

export interface ProjectsContent {
  reactExtract: ProjectContent;
  typesHotParser: ProjectContent;
  reeOptimizations: ProjectContent;
  holydays: ProjectContent;
}

export interface WorkExperienceItem {
  title: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  title: string;
  achievements: string[];
  skills: string[];
}

export interface ResumeContent {
  summary: {
    title: string;
    description: string;
  };
  workExperience: {
    title: string;
    suger: WorkExperienceItem;
    radixDeveloperIV: WorkExperienceItem;
    radixDeveloperIII: WorkExperienceItem;
    radixDeveloperII: WorkExperienceItem;
    radixIntern: WorkExperienceItem;
  };
  education: {
    title: string;
    ufrj: EducationItem;
  };
  certifications: {
    title: string;
    azure: string;
  };
  languages: {
    title: string;
    portuguese: string;
    english: string;
    englishCredential: string;
    french: string;
  };
}
