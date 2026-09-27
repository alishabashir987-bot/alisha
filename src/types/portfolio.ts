export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  cgpaOrGrade?: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'data' | 'tools' | 'dev' | 'soft';
  level: 'Advanced' | 'Intermediate' | 'Familiar' | 'Learning';
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  isPlaceholder?: boolean;
}

export interface PortfolioData {
  name: string;
  headline: string;
  shortBio: string;
  fullBio: string;
  location: string;
  email: string;
  phone: string;
  linkedInUrl: string;
  gitHubUrl: string;
  resumePdfUrl: string;
  education: EducationItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: {
    role: string;
    organization: string;
    period: string;
    points: string[];
  }[];
  customAvatarUrl?: string;
}
