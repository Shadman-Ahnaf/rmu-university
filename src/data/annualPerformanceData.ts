
import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  FileCheck,
  Lightbulb,
  MessageSquare,
  Info,
  ClipboardCheck,
} from "lucide-react";

export interface AnnualPerformanceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  linkLabel: string;
}

export const annualPerformanceData: AnnualPerformanceItem[] = [
  {
    id: 1,
    title: "National Integrity Strategy",
    description:
      "Promoting honesty, ethical practices, transparency and integrity throughout university administration.",
    icon: ShieldCheck,
    href: "#",
    linkLabel: "Explore documents",
  },
  {
    id: 2,
    title: "Annual Performance Agreement",
    description:
      "Reviewing institutional goals, performance indicators, achievements and annual commitments.",
    icon: FileCheck,
    href: "#",
    linkLabel: "View agreement",
  },
  {
    id: 3,
    title: "Innovative Activities",
    description:
      "Discovering initiatives and innovative practices that improve university services and academic excellence.",
    icon: Lightbulb,
    href: "#",
    linkLabel: "Explore activities",
  },
  {
    id: 4,
    title: "Grievance Redressal Management",
    description:
      "Providing a structured process for receiving, reviewing and resolving complaints and grievances.",
    icon: MessageSquare,
    href: "#",
    linkLabel: "View information",
  },
  {
    id: 5,
    title: "Right to Information",
    description:
      "Supporting transparency by providing access to institutional information in accordance with applicable regulations.",
    icon: Info,
    href: "#",
    linkLabel: "Access information",
  },
  {
    id: 6,
    title: "Service Delivery Commitment",
    description:
      "Outlining service standards, responsibilities and commitments to students, staff and the public.",
    icon: ClipboardCheck,
    href: "#",
    linkLabel: "View commitments",
  },
];
