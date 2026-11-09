
export type FacultyMember = {
  id: number;
  name: string;
  designation: string;
  degree: string;
  department: string;
  image: string;

  // Individual profile information
  about?: string;
  education?: string[];
  email?: string;
  phone?: string;
  office?: string;
};

export const facultyDepartments = [
  "Faculty of Medicine",
  "Faculty of Dentistry",
  "Faculty of Nursing",
  "Faculty of Allied Medicine",
  "Faculty of Alternative Medicine",
  "Faculty of Medical Technology",
];

export const facultyMembers: FacultyMember[] = [
  // Faculty of Medicine
  {
    id: 1,
    name: "Dr. Mohammad Rahman",
    designation: "Professor",
    degree: "MBBS, FCPS (Medicine)",
    department: "Faculty of Medicine",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Dr. Nusrat Jahan",
    designation: "Professor",
    degree: "MBBS, MD (Internal Medicine)",
    department: "Faculty of Medicine",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 3,
    name: "Dr. Mahmudul Hasan",
    designation: "Associate Professor",
    degree: "MBBS, FCPS",
    department: "Faculty of Medicine",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 4,
    name: "Dr. Farzana Akter",
    designation: "Associate Professor",
    degree: "MBBS, MD",
    department: "Faculty of Medicine",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 5,
    name: "Dr. Saiful Islam",
    designation: "Assistant Professor",
    degree: "MBBS, FCPS (Medicine)",
    department: "Faculty of Medicine",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 6,
    name: "Dr. Samia Sultana",
    designation: "Assistant Professor",
    degree: "MBBS, MD",
    department: "Faculty of Medicine",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 7,
    name: "Dr. Tanvir Ahmed",
    designation: "Lecturer",
    degree: "MBBS",
    department: "Faculty of Medicine",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },

  // Faculty of Dentistry
  {
    id: 8,
    name: "Dr. Kamal Hossain",
    designation: "Professor",
    degree: "BDS, FCPS (OMS)",
    department: "Faculty of Dentistry",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 9,
    name: "Dr. Tania Islam",
    designation: "Professor",
    degree: "BDS, MS (Prosthodontics)",
    department: "Faculty of Dentistry",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 10,
    name: "Dr. Rashed Karim",
    designation: "Associate Professor",
    degree: "BDS, MS",
    department: "Faculty of Dentistry",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    id: 11,
    name: "Dr. Meherun Nahar",
    designation: "Associate Professor",
    degree: "BDS, FCPS",
    department: "Faculty of Dentistry",
   image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 12,
    name: "Dr. Arif Hossain",
    designation: "Assistant Professor",
    degree: "BDS, MS",
    department: "Faculty of Dentistry",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    id: 13,
    name: "Dr. Sadia Rahman",
    designation: "Lecturer",
    degree: "BDS",
    department: "Faculty of Dentistry",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },

  // Faculty of Nursing
  {
    id: 14,
    name: "Prof. Salma Begum",
    designation: "Professor",
    degree: "MSc in Nursing",
    department: "Faculty of Nursing",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 15,
    name: "Prof. Rezaul Karim",
    designation: "Professor",
    degree: "MSc in Nursing Management",
    department: "Faculty of Nursing",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    id: 16,
    name: "Dr. Shahana Akter",
    designation: "Associate Professor",
    degree: "MSc, PhD in Nursing",
    department: "Faculty of Nursing",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 17,
    name: "Ms. Ayesha Siddika",
    designation: "Associate Professor",
    degree: "MSc in Nursing",
    department: "Faculty of Nursing",
   image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 18,
    name: "Mr. Abdul Mannan",
    designation: "Assistant Professor",
    degree: "MSc in Nursing",
    department: "Faculty of Nursing",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    id: 19,
    name: "Ms. Roksana Parvin",
    designation: "Lecturer",
    degree: "BSc, MSc in Nursing",
    department: "Faculty of Nursing",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 20,
    name: "Ms. Nusrat Ara",
    designation: "Lecturer",
    degree: "MSc in Nursing",
    department: "Faculty of Nursing",
   image: "https://randomuser.me/api/portraits/men/31.jpg",
  },

  // Faculty of Allied Medicine
  {
    id: 21,
    name: "Dr. Imran Hossain",
    designation: "Professor",
    degree: "BSc, MSc, PhD",
    department: "Faculty of Allied Medicine",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: 22,
    name: "Dr. Jannatul Ferdous",
    designation: "Associate Professor",
    degree: "BSc in Physiotherapy, MSc",
    department: "Faculty of Allied Medicine",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 23,
    name: "Mr. Mahbub Alam",
    designation: "Associate Professor",
    degree: "BSc, MSc in Physiotherapy",
    department: "Faculty of Allied Medicine",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: 24,
    name: "Ms. Tahmina Yasmin",
    designation: "Assistant Professor",
    degree: "BSc, MSc",
    department: "Faculty of Allied Medicine",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    id: 25,
    name: "Mr. Shafiq Ahmed",
    designation: "Assistant Professor",
    degree: "BSc in Physiotherapy",
    department: "Faculty of Allied Medicine",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 26,
    name: "Ms. Laboni Akter",
    designation: "Lecturer",
    degree: "BSc in Physiotherapy",
    department: "Faculty of Allied Medicine",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
  },

  // Faculty of Alternative Medicine
  {
    id: 27,
    name: "Dr. Anwar Hossain",
    designation: "Professor",
    degree: "BUMS, MD (Unani)",
    department: "Faculty of Alternative Medicine",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: 28,
    name: "Dr. Mizanur Rahman",
    designation: "Associate Professor",
    degree: "BUMS, MSc",
    department: "Faculty of Alternative Medicine",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    id: 29,
    name: "Dr. Shirin Akter",
    designation: "Associate Professor",
    degree: "BUMS, MD",
    department: "Faculty of Alternative Medicine",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 30,
    name: "Dr. Saif Uddin",
    designation: "Assistant Professor",
    degree: "BUMS",
    department: "Faculty of Alternative Medicine",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    id: 31,
    name: "Dr. Nabila Sultana",
    designation: "Lecturer",
    degree: "BUMS",
    department: "Faculty of Alternative Medicine",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    id: 32,
    name: "Dr. Faisal Ahmed",
    designation: "Lecturer",
    degree: "BUMS",
    department: "Faculty of Alternative Medicine",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
  },

  // Faculty of Medical Technology
  {
    id: 33,
    name: "Dr. Zahirul Islam",
    designation: "Professor",
    degree: "BSc, MSc, PhD in Medical Technology",
    department: "Faculty of Medical Technology",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    id: 34,
    name: "Dr. Taslima Begum",
    designation: "Associate Professor",
    degree: "BSc, MSc in Optometry",
    department: "Faculty of Medical Technology",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    id: 35,
    name: "Mr. Saad Hasan",
    designation: "Associate Professor",
    degree: "BSc, MSc in Medical Technology",
    department: "Faculty of Medical Technology",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 36,
    name: "Ms. Farhana Kabir",
    designation: "Assistant Professor",
    degree: "BSc in Optometry, MSc",
    department: "Faculty of Medical Technology",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    id: 37,
    name: "Mr. Rakibul Hasan",
    designation: "Assistant Professor",
    degree: "BSc in Medical Technology",
    department: "Faculty of Medical Technology",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    id: 38,
    name: "Ms. Sharmin Akter",
    designation: "Lecturer",
    degree: "BSc in Optometry",
    department: "Faculty of Medical Technology",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    id: 39,
    name: "Mr. Ashraful Alam",
    designation: "Lecturer",
    degree: "BSc in Medical Technology",
    department: "Faculty of Medical Technology",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    id: 40,
    name: "Ms. Marium Islam",
    designation: "Lecturer",
    degree: "BSc in Optometry",
    department: "Faculty of Medical Technology",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
];
