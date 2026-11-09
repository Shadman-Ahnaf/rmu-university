
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import type { DepartmentResearchItem } from "../../data/departments/researchData";

type DepartmentResearchProps = {
  researches: DepartmentResearchItem[];
};

const ITEMS_PER_PAGE = 3;

export default function DepartmentResearch({
  researches,
}: DepartmentResearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredResearch = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return researches.filter((research) => {
      const matchesTitle = research.title.toLowerCase().includes(query);
      const matchesAuthor = research.authors.some((author) =>
        author.toLowerCase().includes(query)
      );

      return matchesTitle || matchesAuthor;
    });
  }, [researches, searchTerm]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredResearch.length / ITEMS_PER_PAGE)
  );

  const safePage = Math.min(currentPage, totalPages);

  const visibleResearch = filteredResearch.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  const changeSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="min-h-[500px] bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="font-serif text-2xl font-semibold text-[#142B46] sm:text-3xl">
            Researches and Publications
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-14 bg-[#B38A49]" />
        </div>

        {/* Search */}
        <div className="mx-auto mb-8 max-w-2xl sm:mb-10">
          <div className="relative">
            <Search
              size={20}
              strokeWidth={1.8}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8995A4]"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => changeSearch(event.target.value)}
              placeholder="Search by research title or author..."
              className="h-12 w-full border border-[#DCE3EB] bg-white pl-12 pr-4 text-sm text-[#142B46] outline-none transition-all duration-300 placeholder:text-[#9AA4B1] focus:border-[#B38A49] focus:ring-2 focus:ring-[#B38A49]/10 sm:h-14 sm:text-base"
            />
          </div>
        </div>

        {/* Research Cards */}
        {visibleResearch.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={safePage + searchTerm}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5 sm:gap-6"
            >
              {visibleResearch.map((research, index) => (
                <motion.article
                  key={research.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="group flex min-w-0 flex-row overflow-hidden border border-[#E2E7ED] bg-white transition-all duration-300 hover:border-[#C5A66A] hover:shadow-[0_10px_28px_rgba(20,43,70,0.09)]"
                >
                  {/* Small Image */}
                  <div className="relative w-[105px] shrink-0 overflow-hidden bg-[#E8EDF2] sm:w-[150px] md:w-[175px]">
                    <img
                      src={research.image}
                      alt={research.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Research Information */}
                  <div className="flex min-h-[145px] min-w-0 flex-1 flex-col justify-center p-4 sm:min-h-[160px] sm:p-6 md:p-7">
                    <h3 className="font-serif text-base font-semibold leading-snug text-[#142B46] transition-colors duration-300 group-hover:text-[#A27C3D] sm:text-lg md:text-xl">
                      {research.title}
                    </h3>

                    <div className="mt-3 border-t border-[#E9EDF1] pt-3 sm:mt-4 sm:pt-4">
                      <p className="text-sm leading-relaxed text-[#566477] sm:text-base md:text-lg">
                        <span className="font-semibold text-[#142B46]">
                          Authors:{" "}
                        </span>
                        {research.authors.join(", ")}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex min-h-[220px] items-center justify-center border border-dashed border-[#DCE3EB] px-4">
            <p className="text-base text-[#8995A4]">
              No research publications found.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredResearch.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12">
            <button
              type="button"
              onClick={() => changePage(safePage - 1)}
              disabled={safePage === 1}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center border border-[#DCE3EB] text-[#142B46] transition-colors hover:border-[#B38A49] hover:text-[#A27C3D] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={19} />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => changePage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={safePage === page ? "page" : undefined}
                  className={`h-10 min-w-10 border px-3 text-sm font-medium transition-colors ${
                    safePage === page
                      ? "border-[#142B46] bg-[#142B46] text-white"
                      : "border-[#DCE3EB] text-[#142B46] hover:border-[#B38A49] hover:text-[#A27C3D]"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => changePage(safePage + 1)}
              disabled={safePage === totalPages}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center border border-[#DCE3EB] text-[#142B46] transition-colors hover:border-[#B38A49] hover:text-[#A27C3D] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
