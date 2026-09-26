export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  area?: number;
  location?: string;
  client?: string;
  description: string;
  tags: string[];
  coverImage: string;
  gallery?: string[];
}