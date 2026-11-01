
import type { UniversityEvent, EventCategory } from "../types/event";

export const eventsData: UniversityEvent[] = [
  {
    id: 1,
    slug: "national-medical-research-conference",
    title: "National Medical Research Conference 2026",
    description:
      "An academic gathering for sharing research findings, discussing healthcare challenges, and encouraging collaboration among medical professionals and researchers.",
    category: "Conference",
    date: "2026-11-20",
    time: "9:00 AM – 4:00 PM",
    location: "University Auditorium",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85",
    featured: true,
  },
  {
    id: 2,
    slug: "advances-in-public-health",
    title: "Advances in Public Health and Community Care",
    description:
      "A seminar exploring public health awareness, community healthcare and the importance of preventive medicine.",
    category: "Seminar",
    date: "2026-11-26",
    time: "10:00 AM – 1:00 PM",
    location: "Academic Conference Hall",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    slug: "clinical-skills-workshop",
    title: "Clinical Skills Development Workshop",
    description:
      "An interactive learning session focused on clinical knowledge, practical skills and professional development.",
    category: "Workshop",
    date: "2026-12-03",
    time: "9:30 AM – 2:00 PM",
    location: "Medical Skills Laboratory",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    slug: "research-methodology-seminar",
    title: "Research Methodology and Scientific Writing",
    description:
      "A knowledge-sharing session on research planning, scientific writing and academic publication.",
    category: "Academic",
    date: "2026-12-10",
    time: "11:00 AM – 2:00 PM",
    location: "Seminar Room",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    slug: "health-awareness-program",
    title: "Community Health Awareness Programme",
    description:
      "A community-focused initiative highlighting the value of health education and preventive care.",
    category: "Community",
    date: "2026-12-16",
    time: "9:00 AM – 12:30 PM",
    location: "University Campus",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    slug: "academic-year-opening",
    title: "Academic Year Opening Ceremony",
    description:
      "A formal academic gathering celebrating the beginning of a new academic session.",
    category: "Ceremony",
    date: "2026-10-15",
    time: "10:00 AM – 12:00 PM",
    location: "University Auditorium",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    slug: "medical-education-symposium",
    title: "Symposium on Modern Medical Education",
    description:
      "An academic discussion on evolving approaches to medical education and professional learning.",
    category: "Conference",
    date: "2026-10-08",
    time: "9:30 AM – 3:00 PM",
    location: "Academic Conference Hall",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    slug: "healthcare-research-workshop",
    title: "Healthcare Research and Innovation Workshop",
    description:
      "A practical academic session exploring research collaboration and innovation in healthcare.",
    category: "Workshop",
    date: "2026-09-22",
    time: "10:00 AM – 1:00 PM",
    location: "Research Centre",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85",
  },
];

export const eventCategories: EventCategory[] = [
  "Conference",
  "Seminar",
  "Workshop",
  "Ceremony",
  "Academic",
  "Community",
];
