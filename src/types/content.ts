export type ProjectStatus = "live" | "in-progress" | "research";

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  statusLine: string;
  bio: string;
  email: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

export interface Project {
  id: string;
  title: string;
  timeframe: string;
  status: ProjectStatus;
  stack: string[];
  description: string;
  links: {
    repo?: string;
    demo?: string;
  };
}

export interface ExperienceItem {
  type: "education" | "experience";
  title: string;
  organization: string;
  dateRange: string;
  description?: string;
}

export interface AchievementItem {
  year: string;
  title: string;
  issuer?: string;
  link?: string;
  description?: string;
  icon?: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}
