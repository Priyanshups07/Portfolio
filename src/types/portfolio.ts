export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  category: 'web' | 'mobile' | 'ai-ml' | 'automation';
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'database' | 'tools' | 'specialized';
  level: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
}

export interface SoftSkill {
  name: string;
}
