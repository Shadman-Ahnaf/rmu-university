import type { NewsArticle, NewsCategory } from "../types/news";

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "medical-education-development",
    category: "University",
    title: "Strengthening the Future of Medical Education",
    excerpt:
      "An overview of academic development and institutional initiatives supporting medical education and professional learning.",
    date: "October 28, 2026",
    author: "RMU News Desk",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    featured: true,
  },
  {
    id: 2,
    slug: "academic-research-initiative",
    category: "Research",
    title: "Encouraging Research and Innovation in Health Sciences",
    excerpt:
      "Exploring the importance of research, collaboration, and innovation in advancing healthcare knowledge.",
    date: "October 24, 2026",
    author: "RMU News Desk",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    slug: "healthcare-professional-development",
    category: "Academic",
    title: "Building Skills for the Next Generation of Healthcare Professionals",
    excerpt:
      "Professional development and academic learning remain central to preparing future healthcare practitioners.",
    date: "October 20, 2026",
    author: "RMU News Desk",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    slug: "medical-science-seminar",
    category: "Events",
    title: "Academic Seminar Highlights Emerging Topics in Medical Science",
    excerpt:
      "An academic gathering focused on knowledge sharing and discussion of emerging developments in medical science.",
    date: "October 16, 2026",
    author: "RMU News Desk",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    slug: "public-health-awareness",
    category: "Healthcare",
    title: "The Importance of Public Health Awareness and Education",
    excerpt:
      "Public health awareness and education play an important role in building healthier communities.",
    date: "October 12, 2026",
    author: "RMU News Desk",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    slug: "medical-research-collaboration",
    category: "Research",
    title: "Collaboration as a Foundation for Medical Research",
    excerpt:
      "Academic collaboration can help researchers exchange ideas and address important healthcare challenges.",
    date: "October 08, 2026",
    author: "RMU News Desk",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    slug: "academic-community-engagement",
    category: "University",
    title: "Connecting Academic Knowledge with Community Needs",
    excerpt:
      "The relationship between academic institutions and communities is important for sustainable healthcare development.",
    date: "October 04, 2026",
    author: "RMU News Desk",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    slug: "future-of-medical-learning",
    category: "Academic",
    title: "New Perspectives on the Future of Medical Learning",
    excerpt:
      "Modern learning approaches continue to influence how healthcare professionals develop knowledge and skills.",
    date: "September 29, 2026",
    author: "RMU News Desk",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=85",
  },
];

export const newsCategories: NewsCategory[] = [
  "All",
  "University",
  "Academic",
  "Research",
  "Events",
  "Healthcare",
];