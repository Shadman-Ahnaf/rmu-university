export type DepartmentResearchItem = {
  id: number;
  title: string;
  authors: string[];
  department: string;
  researchArea: string;
  publicationDate: string;
  journal: string;
  abstract: string;
  image: string;
};

export const medicineResearch: DepartmentResearchItem[] = [
  {
    id: 1,
    title: "Emerging Trends in Cardiovascular Disease Research",
    authors: [
      "Dr. A. Rahman",
      "Dr. S. Ahmed",
      "Dr. M. Hasan",
    ],
    department: "Department of Medicine",
    researchArea: "Cardiovascular Medicine",
    publicationDate: "15 October 2026",
    journal: "Journal of Medical Research",
    abstract:
      "An illustrative research study exploring current approaches to cardiovascular disease prevention, clinical assessment, and patient care.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    title: "Advances in Diabetes Management and Patient Outcomes",
    authors: [
      "Dr. N. Islam",
      "Dr. T. Hossain",
    ],
    department: "Department of Medicine",
    researchArea: "Endocrinology",
    publicationDate: "22 September 2026",
    journal: "International Medical Review",
    abstract:
      "An illustrative study examining approaches to diabetes management, patient monitoring, and improving long-term clinical outcomes.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 3,
    title: "Antimicrobial Resistance: Challenges in Clinical Practice",
    authors: [
      "Dr. R. Karim",
      "Dr. F. Akter",
      "Dr. M. Chowdhury",
    ],
    department: "Department of Medicine",
    researchArea: "Infectious Diseases",
    publicationDate: "08 August 2026",
    journal: "Clinical Science and Research",
    abstract:
      "An illustrative research project focused on antimicrobial resistance and its implications for diagnosis, treatment, and clinical practice.",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 4,
    title: "Improving Early Detection Through Clinical Research",
    authors: [
      "Dr. K. Sultana",
      "Dr. P. Das",
    ],
    department: "Department of Medicine",
    researchArea: "Clinical Medicine",
    publicationDate: "12 July 2026",
    journal: "Medical Research Journal",
    abstract:
      "An illustrative study highlighting the role of clinical research in improving early disease detection and supporting evidence-based healthcare.",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1400&q=85",
  },
];