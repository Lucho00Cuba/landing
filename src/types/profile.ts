export interface SocialLink {
  icon: string;
  link: string;
}

export interface Contact {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
}

export interface Portfolio {
  categories: string[];
  projects: Project[];
}

interface ResumeItem {
  title: string;
  date: string;
  description: string;
}

interface Skill {
  name: string;
  level: number;
}

interface Testimonial {
  name: string;
  avatar: string;
  text: string;
  date: string;
}

export interface Profile {
  name: string;
  avatar: string;
  job: string;
  email: string;
  socials: SocialLink[];
  contacts: Contact[];
  services: Service[];
  bio: string[];
  portfolio: Portfolio;
  education: ResumeItem[];
  experience: ResumeItem[];
  skills: Skill[];
  testimonials: Testimonial[];
}