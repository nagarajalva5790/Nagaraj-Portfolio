
export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillGroup {
  category: string;
  skills: (string | Skill)[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  achievements: string[];
  projects?: Project[];
}

export interface Project {
  title: string;
  stack: string;
  description: string[];
  impact?: string;
  highlights?: string[];
}

export interface Award {
  title: string;
  issuer: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string;
}
