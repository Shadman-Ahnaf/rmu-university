
export type EventCategory =
  | "Conference"
  | "Seminar"
  | "Workshop"
  | "Ceremony"
  | "Academic"
  | "Community";

export type EventCardVariant = "portrait" | "landscape" | "square";

export interface UniversityEvent {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: EventCategory;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  image: string;
  featured?: boolean;
}
