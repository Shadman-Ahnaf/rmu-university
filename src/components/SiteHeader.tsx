
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, Languages } from "lucide-react";

import FullScreenMenu from "./FullScreenMenu";
import SearchOverlay from "./SearchOverlay";

type Language = "en" | "bn";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

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
  };

  const openMenu = () => {
    setSearchOpen(false);
    setMenuOpen(true);
  };

  const openSearch = () => {
    setMenuOpen(false);
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

  // Escape key closes the active overlay.
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
          <a
            href="#home"
            onClick={closeOverlays}
            aria-label="Rajshahi Medical University home"
            className="group flex min-w-0 flex-1 items-center gap-3 px-4 sm:px-7 lg:px-12"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#E5C786] bg-[#142B46]/80 transition-transform duration-300 group-hover:rotate-6 sm:h-14 sm:w-14">
              <span className="font-serif text-lg font-bold text-[#E5C786] sm:text-xl">
                RMU
              </span>
            </div>

            <div className="min-w-0">
              <h1 className="truncate font-serif text-base font-bold leading-tight text-white sm:text-xl lg:text-[27px]">
                Rajshahi Medical University
              </h1>

              <p className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.2em] text-white/80 sm:block sm:text-[10px] lg:text-[11px]">
                Excellence in Medical Education
              </p>
            </div>
          </a>

          {/* Modern Header Controls */}
          <div className="flex h-full shrink-0 items-center gap-3 px-3 text-white sm:gap-5 sm:px-5 lg:gap-7 lg:px-10">

            {/* Language Selector */}
            <div className="hidden items-center gap-2 lg:flex">
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
              className="flex items-center text-xs font-semibold text-white transition hover:text-[#E5C786] lg:hidden"
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
