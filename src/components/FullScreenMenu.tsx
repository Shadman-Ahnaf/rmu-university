
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronDown,
  ArrowUpRight,
  Languages,
} from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
}

interface MenuGroup {
  title: string;
  href: string;
  items: MenuItem[];
}

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  language: "en" | "bn";
  onLanguageChange: (language: "en" | "bn") => void;
}

const menuGroups: MenuGroup[] = [
  {
    title: "About RMU",
    href: "#about",
    items: [
      { label: "University Overview", href: "#about" },
      { label: "Mission & Vision", href: "#about" },
      { label: "History & Background", href: "#about" },
      { label: "Campus & Facilities", href: "#about" },
    ],
  },
  {
    title: "Administration",
    href: "#administration",
    items: [
      { label: "Vice-Chancellor", href: "#administration" },
      { label: "University Authorities", href: "#administration" },
      { label: "Academic Council", href: "#administration" },
      { label: "Administrative Offices", href: "#administration" },
    ],
  },
  {
    title: "Academics",
    href: "#academics",
    items: [
      { label: "Academic Programs", href: "#academics" },
      { label: "Medical Education", href: "#academics" },
      { label: "Dental Education", href: "#academics" },
      { label: "Academic Calendar", href: "#academics" },
    ],
  },
  {
    title: "Admission",
    href: "#admission",
    items: [
      { label: "Undergraduate Admission", href: "#admission" },
      { label: "Postgraduate Admission", href: "#admission" },
      { label: "Admission Notices", href: "#admission" },
      { label: "How to Apply", href: "#admission" },
    ],
  },
  {
    title: "Research",
    href: "#research",
    items: [
      { label: "Research Overview", href: "#research" },
      { label: "Research Activities", href: "#research" },
      { label: "Research Collaboration", href: "#research" },
      { label: "Publications", href: "#research" },
    ],
  },
  {
    title: "News & Events",
    href: "#news",
    items: [
      { label: "Latest News", href: "#news" },
      { label: "Events", href: "#news" },
      { label: "Notices", href: "#news" },
      { label: "Announcements", href: "#news" },
    ],
  },
  {
    title: "Services & Resources",
    href: "#services",
    items: [
      { label: "Library", href: "#services" },
      { label: "Forms & Downloads", href: "#services" },
      { label: "Student Services", href: "#services" },
      { label: "Citizen Charter", href: "#services" },
    ],
  },
  {
    title: "Publications & More",
    href: "#publications",
    items: [
      { label: "Journal & Publications", href: "#publications" },
      { label: "Gallery", href: "#publications" },
      { label: "Affiliated Institutions", href: "#institutions" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Quick Access",
    href: "#news",
    items: [
      { label: "Latest Notices", href: "#news" },
      { label: "Academic Programs", href: "#academics" },
      { label: "Affiliated Institutions", href: "#institutions" },
      { label: "Contact RMU", href: "#contact" },
    ],
  },
];

export default function FullScreenMenu({
  isOpen,
  onClose,
  language,
  onLanguageChange,
}: FullScreenMenuProps) {
  const [activeGroup, setActiveGroup] = useState<number>(-1);

  const closeAndNavigate = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col overflow-hidden bg-[#0B2036] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
        >
          {/* Subtle decorative background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-40 top-20 h-[550px] w-[550px] rounded-full border border-[#D5B46A]/10" />
            <div className="absolute -right-20 top-40 h-[400px] w-[400px] rounded-full border border-white/5" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#174A70]/10 blur-3xl" />
          </div>

          {/* Top Bar */}
          <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-5 sm:px-10 lg:px-16">
            {/* University Branding */}
            <a
              href="#home"
              onClick={closeAndNavigate}
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5B46A] bg-white/5 sm:h-12 sm:w-12">
                <span className="font-serif text-sm font-bold text-[#E5C786] sm:text-base">
                  RMU
                </span>
              </div>

              <div>
                <p className="font-serif text-sm font-bold tracking-wide text-white sm:text-base">
                  RAJSHAHI MEDICAL UNIVERSITY
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#D5B46A]">
                  Bangladesh
                </p>
              </div>
            </a>

            {/* Language and Close */}
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 sm:flex">
                <Languages
                  size={15}
                  className="ml-2 text-[#D5B46A]"
                />

                {(["en", "bn"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => onLanguageChange(lang)}
                    aria-pressed={language === lang}
                    className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                      language === lang
                        ? "bg-[#D5B46A] text-[#0B2036]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {lang === "en" ? "EN" : "বাংলা"}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="group flex items-center gap-3 text-sm text-white/80 transition hover:text-[#E5C786]"
                aria-label="Close menu"
              >
                <span className="hidden sm:inline">Close</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 transition group-hover:border-[#D5B46A] group-hover:bg-[#D5B46A] group-hover:text-[#0B2036]">
                  <X size={21} />
                </span>
              </button>
            </div>
          </div>

          {/* Main Navigation - Left Aligned */}
          <div className="relative z-10 mx-auto w-full max-w-[1500px] flex-1 overflow-y-auto px-5 py-8 sm:px-10 lg:px-16 lg:py-10">
            <div className="max-w-3xl">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D5B46A]">
                Explore the University
              </p>

              <div className="space-y-1">
                {menuGroups.map((group, index) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + index * 0.04,
                      duration: 0.35,
                    }}
                    className="border-b border-white/10"
                  >
                    {/* Main Category */}
                    <div className="flex items-center justify-between gap-3">
                      <a
                        href={group.href}
                        onClick={closeAndNavigate}
                        className={`flex-1 py-3.5 text-lg font-medium transition-colors sm:py-4 sm:text-xl lg:text-[22px] ${
                          activeGroup === index
                            ? "text-[#E5C786]"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        {group.title}
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveGroup(
                            activeGroup === index ? -1 : index
                          )
                        }
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-[#E5C786]"
                        aria-label={`Toggle ${group.title} submenu`}
                        aria-expanded={activeGroup === index}
                      >
                        <motion.span
                          animate={{
                            rotate: activeGroup === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronDown size={20} />
                        </motion.span>
                      </button>
                    </div>

                    {/* Expandable Submenu */}
                    <AnimatePresence initial={false}>
                      {activeGroup === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 gap-x-5 gap-y-2 pb-5 pl-3 sm:grid-cols-2">
                            {group.items.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                onClick={closeAndNavigate}
                                className="group/link flex items-center gap-2 py-1.5 text-sm text-white/55 transition hover:text-[#E5C786]"
                              >
                                <span className="h-1 w-1 rounded-full bg-[#D5B46A]/70" />

                                {item.label}

                                <ArrowUpRight
                                  size={13}
                                  className="opacity-0 transition group-hover/link:translate-x-1 group-hover/link:opacity-100"
                                />
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Information Bar */}
          <div className="relative z-10 flex shrink-0 flex-col gap-2 border-t border-white/10 px-5 py-4 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
            <span>
              RAJSHAHI MEDICAL UNIVERSITY · BANGLADESH
            </span>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href="#news"
                onClick={closeAndNavigate}
                className="transition hover:text-[#E5C786]"
              >
                Notices
              </a>

              <a
                href="#institutions"
                onClick={closeAndNavigate}
                className="transition hover:text-[#E5C786]"
              >
                Affiliations
              </a>

              <a
                href="#contact"
                onClick={closeAndNavigate}
                className="transition hover:text-[#E5C786]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Language Selector */}
          <div className="absolute right-5 top-[76px] z-20 flex items-center gap-1 rounded-full border border-white/15 bg-[#0B2036] p-1 sm:hidden">
            {(["en", "bn"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onLanguageChange(lang)}
                aria-pressed={language === lang}
                className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${
                  language === lang
                    ? "bg-[#D5B46A] text-[#0B2036]"
                    : "text-white/70"
                }`}
              >
                {lang === "en" ? "EN" : "বাংলা"}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
