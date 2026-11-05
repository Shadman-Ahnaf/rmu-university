
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, Languages, ChevronDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import FullScreenMenu from "./FullScreenMenu";
import SearchOverlay from "./SearchOverlay";

type Language = "en" | "bn";
type DropdownName = "about" | "administration" | "academics" | "admission";

const navigation = [
  {
    label: "About",
    key: "about" as const,
    links: [
      { label: "University Overview", to: "/university-overview" },
      { label: "Mission & Vision", to: "/mission-vision" },
      { label: "History & Background", to: "/history" },
      { label: "Campus & Facilities", to: "/campus-facilities" },
    ],
  },
  {
    label: "Administration",
    key: "administration" as const,
    links: [
      { label: "Vice-Chancellor", to: "/#vice-chancellor" },
      { label: "University Authorities", to: "/#university-authorities" },
      { label: "Academic Council", to: "/#academic-council" },
      { label: "Administrative Offices", to: "/#administrative-offices" },
    ],
  },
  {
    label: "Academics",
    key: "academics" as const,
    links: [
      { label: "Academic Programs", to: "/#academic-programs" },
      { label: "Medical Education", to: "/#medical-education" },
      { label: "Dental Education", to: "/#dental-education" },
      { label: "Academic Calendar", to: "/#academic-calendar" },
    ],
  },
  {
    label: "Admission",
    key: "admission" as const,
    links: [
      { label: "Undergraduate Admission", to: "/#undergraduate-admission" },
      { label: "Postgraduate Admission", to: "/#postgraduate-admission" },
      { label: "Admission Notices", to: "/#admission-notices" },
      { label: "How to Apply", to: "/#how-to-apply" },
    ],
  },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] =
    useState<DropdownName | null>(null);

  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("rmu-language");
    return savedLanguage === "bn" ? "bn" : "en";
  });

  const previousScrollY = useRef(0);
  const overlayOpen = menuOpen || searchOpen;

  const changeLanguage = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    localStorage.setItem("rmu-language", selectedLanguage);
  };

  const closeOverlays = () => {
    setMenuOpen(false);
    setSearchOpen(false);
    setActiveDropdown(null);
  };

  const openMenu = () => {
    setSearchOpen(false);
    setActiveDropdown(null);
    setMenuOpen(true);
  };

  const openSearch = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setSearchOpen(true);
  };

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setHeaderVisible(true);
      } else if (currentScrollY < previousScrollY.current) {
        setHeaderVisible(true);
      } else if (currentScrollY > previousScrollY.current) {
        setHeaderVisible(false);
        setActiveDropdown(null);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scrolling while an overlay is open.
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [overlayOpen]);

  // Escape key closes the active overlay or dropdown.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlays();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -110 }}
        animate={{ y: headerVisible || overlayOpen ? 0 : -120 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/15 bg-[#142B46]/30 shadow-lg backdrop-blur-xl"
      >
        <div className="flex h-[82px] w-full items-center justify-between lg:h-[100px]">

          {/* RMU Branding */}
          <Link
            to="/"
            onClick={closeOverlays}
            aria-label="Rajshahi Medical University home"
            className="group flex min-w-0 flex-[1.1] items-center gap-3 px-4 sm:px-7 lg:px-10"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#E5C786] bg-[#142B46]/80 transition-transform duration-300 group-hover:rotate-6 sm:h-14 sm:w-14">
              <span className="font-serif text-lg font-bold text-[#E5C786] sm:text-xl">
                RMU
              </span>
            </div>

            <div className="min-w-0">
              <h1 className="truncate font-serif text-base font-bold leading-tight text-white sm:text-xl lg:text-[25px]">
                Rajshahi Medical University
              </h1>

              <p className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.2em] text-white/80 sm:block sm:text-[10px]">
                Excellence in Medical Education
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden flex-[1.6] items-center justify-center gap-4 xl:flex 2xl:gap-7"
          >
            {navigation.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.key)}
                onMouseLeave={() =>
                  setActiveDropdown((current) =>
                    current === item.key ? null : current
                  )
                }
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown((current) =>
                      current === item.key ? null : item.key
                    )
                  }
                  onFocus={() => setActiveDropdown(item.key)}
                  aria-expanded={activeDropdown === item.key}
                  aria-haspopup="true"
                  className={`group flex items-center gap-1.5 whitespace-nowrap py-3 text-[12px] font-semibold tracking-wide transition-colors duration-300 2xl:text-sm ${
                    activeDropdown === item.key
                      ? "text-[#E5C786]"
                      : "text-white hover:text-[#E5C786]"
                  }`}
                >
                  {item.label}

                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      activeDropdown === item.key ? "rotate-180" : ""
                    }`}
                  />

                  <span
                    className={`absolute bottom-1 left-0 h-[2px] bg-[#D5B46A] transition-all duration-300 ${
                      activeDropdown === item.key
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full z-[60] w-64 overflow-hidden rounded-xl border border-[#D5B46A]/25 bg-[#142B46]/95 py-2 shadow-2xl shadow-black/25 backdrop-blur-2xl"
                    >
                      <div className="mb-1 border-b border-white/10 px-5 py-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5C786]">
                          {item.label}
                        </p>
                      </div>

                      {item.links.map((link, index) => (
                        <Link
                          key={link.label}
                          to={link.to}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between gap-3 px-5 py-3 text-[13px] font-medium text-white/85 transition-all duration-200 hover:bg-white/[0.07] hover:pl-7 hover:text-[#E5C786]"
                        >
                          <span>{link.label}</span>

                          <ArrowUpRight
                            size={14}
                            className="shrink-0 text-[#D5B46A]/60 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                          />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Independent Contact link */}
            <Link
              to="/#contact"
              className="group relative whitespace-nowrap py-3 text-[12px] font-semibold tracking-wide text-white transition-colors duration-300 hover:text-[#E5C786] 2xl:text-sm"
              onClick={() => setActiveDropdown(null)}
            >
              Contact
              <span className="absolute bottom-1 left-0 h-[2px] w-0 bg-[#D5B46A] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Existing Header Controls */}
          <div className="flex h-full shrink-0 items-center gap-3 px-3 text-white sm:gap-5 sm:px-5 lg:gap-5 lg:px-8">

            {/* Language Selector */}
            <div className="hidden items-center gap-2 2xl:flex">
              <Languages size={17} className="text-white/80" />

              <button
                type="button"
                onClick={() =>
                  changeLanguage(language === "en" ? "bn" : "en")
                }
                className="flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#E5C786]"
                aria-label="Change language"
              >
                {language === "en" ? "English" : "বাংলা"}
                <span className="text-xs">⌄</span>
              </button>
            </div>

            {/* Search Button */}
            <button
              type="button"
              onClick={openSearch}
              aria-label="Search website"
              aria-expanded={searchOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:border-[#E5C786] hover:bg-white/10 hover:text-[#E5C786]"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>

            {/* Mobile Language Switch */}
            <button
              type="button"
              onClick={() =>
                changeLanguage(language === "en" ? "bn" : "en")
              }
              aria-label="Switch language"
              className="flex items-center text-xs font-semibold text-white transition hover:text-[#E5C786] 2xl:hidden"
            >
              {language === "en" ? "বাং" : "EN"}
            </button>

            {/* Explore Menu */}
            <button
              type="button"
              onClick={menuOpen ? closeOverlays : openMenu}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="group flex h-11 items-center gap-3 rounded-sm border border-white/60 px-4 text-white transition-all duration-300 hover:border-[#E5C786] hover:bg-[#E5C786] hover:text-[#142B46] sm:px-5"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
                {menuOpen ? "Close" : "Explore"}
              </span>

              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={19} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={19} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Navigation */}
      <FullScreenMenu
        isOpen={menuOpen}
        onClose={closeOverlays}
        language={language}
        onLanguageChange={changeLanguage}
      />

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={closeOverlays}
      />
    </>
  );
}
