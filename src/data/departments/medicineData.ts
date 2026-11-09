
import demo1 from "../../assets/med1.jpg";
import demo2 from "../../assets/med2.jpg";
import demo3 from "../../assets/med3.jpg";
import demo4 from "../../assets/med4.jpg";

export type DepartmentTab =
  | "Overview"
  | "Research"
  | "Gallery"
  | "Notices"
  | "News";

export const medicineDepartment = {
  name: "Department of Medicine",
  shortName: "Medicine",
  degree: "MBBS",
  faculty: "Faculty of Medicine",
  subtitle: "Advancing medical knowledge. Preparing tomorrow's physicians.",

  heroImages: [
    {
      src: demo1,
      alt: "Medical laboratory and practical learning",
    },
    {
      src: demo2,
      alt: "Medical students in an academic environment",
    },
    {
      src: demo3,
      alt: "Students participating in medical education",
    },
    {
      src: demo4,
      alt: "Classroom teaching and academic learning",
    },
  ],

  notices: [
    "Departmental notices and announcements will appear here.",
    "Students are advised to check this section regularly.",
    "Academic schedules and examination updates will be published here.",
  ],

  head: {
    name: "Department Head",
    designation: "Head of the Department",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=85",
    message:
      "Welcome to the Department of Medicine. Our commitment is to promote quality medical education, clinical knowledge and professional responsibility. We encourage our students to pursue learning with curiosity, compassion and dedication to patient care.",
  },

atGlance: [
  {
    label: "Program Duration",
    value: 5,
    suffix: "Years",
  },
  {
    label: "Internship",
    value: 1,
    suffix: "Year",
  },
  {
    label: "Research",
    value: 24,
    suffix: "+",
  },
  {
    label: "Students",
    value: 1250,
    suffix: "+",
  },
  {
    label: "Faculty Members",
    value: 18,
    suffix: "+",
  },
],

  contact: {
    office: "Department of Medicine",
    location: "Rajshahi Medical University, Rajshahi, Bangladesh",
    email: "medicine@rmu.example",
    phone: "+880 0000-000000",
    hours: "Sunday – Thursday, 9:00 AM – 5:00 PM",
  },
};

export const departmentTabs: DepartmentTab[] = [
  "Overview",
  "Research",
  "Gallery",
  "Notices",
  "News",
];
