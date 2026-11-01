
import { useMemo, useRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  X,
  ArrowUpRight,
  CornerDownLeft,
} from "lucide-react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchablePages = [
  { title: "About Rajshahi Medical University", category: "University", href: "#about" },
  { title: "University Overview", category: "About RMU", href: "#about" },
  { title: "Mission and Vision", category: "About RMU", href: "#about" },
  { title: "Administration", category: "University", href: "#administration" },
  { title: "Vice-Chancellor", category: "Administration", href: "#administration" },
  { title: "Academic Programs", category: "Academics", href: "#academics" },
  { title: "Medical Education", category: "Academics", href: "#academics" },
  { title: "Dental Education", category: "Academics", href: "#academics" },
  { title: "Admission Information", category: "Admission", href: "#admission" },
  { title: "Admission Notices", category: "Admission", href: "#admission" },
  { title: "Research Activities", category: "Research", href: "#research" },
  { title: "Research Collaboration", category: "Research", href: "#research" },
  { title: "Latest News", category: "News & Events", href: "#news" },
  { title: "Events and Announcements", category: "News & Events", href: "#news" },
  { title: "Affiliated Institutions", category: "University", href: "#institutions" },
  { title: "Contact Information", category: "Contact", href: "#contact" },
];

export default function SearchOverlay({
  isOpen,
  onClose,
}: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timeout = window.setTimeout(() => inputRef.current?.focus(), 150);
      return () => window.clearTimeout(timeout);
    }

    setQuery("");
  }, [isOpen]);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return [];

    return searchablePages.filter(
      (page) =>
        page.title.toLowerCase().includes(normalizedQuery) ||
        page.category.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col bg-[#F7F6F2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Search the university website"
        >
          {/* Search header */}
          <div className="flex items-center justify-between border-b border-[#142B46]/10 px-5 py-5 sm:px-10 lg:px-16">
            <a
              href="#home"
              onClick={onClose}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#142B46]">
                <span className="font-serif text-xs font-bold text-[#E5C786]">
                  RMU
                </span>
              </div>
              <span className="font-serif text-sm font-bold tracking-wide text-[#142B46] sm:text-base">
                RAJSHAHI MEDICAL UNIVERSITY
              </span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-3 text-sm text-[#142B46]/70 transition hover:text-[#A27C3D]"
              aria-label="Close search"
            >
              <span className="hidden sm:inline">Close Search</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#142B46]/20 transition hover:border-[#A27C3D] hover:bg-[#142B46] hover:text-white">
                <X size={20} />
              </span>
            </button>
          </div>

          {/* Search content */}
          <div className="mx-auto w-full max-w-5xl flex-1 overflow-y-auto px-5 py-14 sm:px-10 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#A27C3D]">
                Search RMU
              </p>

              <h1 className="mb-8 font-serif text-3xl font-semibold text-[#142B46] sm:text-5xl">
                What are you looking for?
              </h1>

              <div className="flex items-center gap-4 border-b-2 border-[#142B46]/25 pb-4 transition-colors focus-within:border-[#A27C3D]">
                <Search size={25} className="shrink-0 text-[#A27C3D]" />

                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search programs, notices, research..."
                  className="w-full bg-transparent text-lg text-[#142B46] outline-none placeholder:text-[#142B46]/35 sm:text-2xl"
                  aria-label="Search university website"
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="text-xs font-medium text-[#142B46]/50 hover:text-[#A27C3D]"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-[#142B46]/45">
                <CornerDownLeft size={13} />
                <span>Type to search university sections and pages</span>
              </div>

              {/* Search results */}
              <div className="mt-12">
                {query.trim() && (
                  <>
                    <div className="mb-5 flex items-center justify-between">
                      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#142B46]/50">
                        Search Results
                      </h2>
                      <span className="text-xs text-[#142B46]/45">
                        {results.length} found
                      </span>
                    </div>

                    {results.length > 0 ? (
                      <div className="divide-y divide-[#142B46]/10">
                        {results.map((result, index) => (
                          <motion.a
                            key={result.title}
                            href={result.href}
                            onClick={onClose}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.035 }}
                            className="group flex items-center justify-between gap-4 py-5"
                          >
                            <div>
                              <p className="mb-1 text-xs text-[#A27C3D]">
                                {result.category}
                              </p>
                              <h3 className="text-base font-medium text-[#142B46] transition group-hover:text-[#A27C3D] sm:text-lg">
                                {result.title}
                              </h3>
                            </div>
                            <ArrowUpRight
                              size={20}
                              className="shrink-0 text-[#142B46]/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A27C3D]"
                            />
                          </motion.a>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-xl border border-[#142B46]/10 bg-white p-8 text-center">
                        <p className="font-medium text-[#142B46]">
                          No matching pages found.
                        </p>
                        <p className="mt-2 text-sm text-[#142B46]/50">
                          Try another keyword, such as academics, admission or research.
                        </p>
                      </div>
                    )}
                  </>
                )}

                {!query.trim() && (
                  <div>
                    <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#142B46]/50">
                      Popular Searches
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {["Academics", "Admission", "Research", "Notices", "Affiliated Institutions"].map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => setQuery(term)}
                          className="rounded-full border border-[#142B46]/15 bg-white px-5 py-3 text-sm text-[#142B46]/75 transition hover:border-[#A27C3D] hover:bg-[#142B46] hover:text-white"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          <div className="border-t border-[#142B46]/10 px-5 py-4 text-center text-[10px] tracking-wide text-[#142B46]/45 sm:px-10">
            RAJSHAHI MEDICAL UNIVERSITY · BANGLADESH
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
