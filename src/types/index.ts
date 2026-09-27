export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  isPrivate: boolean;
  isFeatured: boolean;
  tech: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  overview: string;
  architecturePoints: string[];
  mockupType: 'teamsync' | 'waxwire' | 'icrs' | 'gidy' | 'compact';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  tag: string;
  description: string;
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  iconType: 'verified' | 'master' | 'gov' | 'tech';
}

export interface SkillGroup {
  category: string;
  label: string;
  iconName: string;
  skills: string[];
}
