export interface NewsArticle {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

export type NewsCategory =
  | "All"
  | "University"
  | "Academic"
  | "Research"
  | "Events"
  | "Healthcare";