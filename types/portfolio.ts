export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  impact: string;
}

export interface Project {
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies: string[];
  impact: string;
}

export interface Patent {
  title: string;
  number: string;
  publisher: string;
  summary: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}