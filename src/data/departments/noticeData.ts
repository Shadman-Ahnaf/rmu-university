
import demo1 from "../../assets/med1.jpg";
import demo2 from "../../assets/med2.jpg";
import demo3 from "../../assets/med3.jpg";
import demo4 from "../../assets/med4.jpg";

export type DepartmentNoticeItem = {
  id: number;
  title: string;
  date: string;
  image: string;
  department: string;
  pdfUrl?: string;
};

export const medicineNotices: DepartmentNoticeItem[] = [
  {
    id: 1,
    title: "Notice Regarding Upcoming Professional Examination",
    date: "07 November 2026",
    image: demo1,
    department: "Department of Medicine",
  },
  {
    id: 2,
    title: "Academic Schedule and Class Attendance Notice",
    date: "02 November 2026",
    image: demo2,
    department: "Department of Medicine",
  },
  {
    id: 3,
    title: "Clinical Training and Practical Session Schedule",
    date: "28 October 2026",
    image: demo3,
    department: "Department of Medicine",
  },
  {
    id: 4,
    title: "Important Instructions for Medical Students",
    date: "21 October 2026",
    image: demo4,
    department: "Department of Medicine",
  },
  {
    id: 5,
    title: "Departmental Academic Meeting Announcement",
    date: "15 October 2026",
    image: demo1,
    department: "Department of Medicine",
  },
  {
    id: 6,
    title: "Notice Regarding Clinical Placement",
    date: "09 October 2026",
    image: demo2,
    department: "Department of Medicine",
  },
  {
    id: 7,
    title: "Updated Departmental Academic Guidelines",
    date: "01 October 2026",
    image: demo3,
    department: "Department of Medicine",
  },
];
