export interface WorkExperienceItem {
  company: string;
  position: string;
  duration: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export interface CertificationItem {
  name: string;
  credential: string;
  link: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  credential?: string;
  certifyingBody?: string;
  link?: string;
}

export interface ResumeContent {
  summary: {
    title: string;
    description: string;
  };
  workExperience: {
    title: string;
    items: WorkExperienceItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  certifications: {
    title: string;
    items: CertificationItem[];
  };
  languages: {
    title: string;
    items: LanguageItem[];
  };
}
