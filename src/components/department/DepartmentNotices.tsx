
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";

import type { DepartmentNoticeItem } from "../../data/departments/noticeData";

type DepartmentNoticesProps = {
  notices: DepartmentNoticeItem[];
};

const ITEMS_PER_PAGE = 5;

export default function DepartmentNotices({
  notices,
}: DepartmentNoticesProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNotices = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return notices.filter((notice) =>
      notice.title.toLowerCase().includes(query)
    );
  }, [notices, searchTerm]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredNotices.length / ITEMS_PER_PAGE)
  );

  const safePage = Math.min(currentPage, totalPages);

  const visibleNotices = filteredNotices.slice(
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
            Notices
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-14 bg-[#B38A49]" />
        </div>

        {/* Search */}
        <div className="mx-auto mb-8 max-w-2xl sm:mb-10">
          <div className="relative">
            <Search
              size={19}
              strokeWidth={1.8}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8995A4]"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => changeSearch(event.target.value)}
              placeholder="Search notices..."
              className="h-12 w-full rounded-md border border-[#DCE3EB] bg-white pl-12 pr-4 text-sm text-[#142B46] outline-none transition-all duration-300 placeholder:text-[#9AA4B1] focus:border-[#B38A49] focus:ring-2 focus:ring-[#B38A49]/10 sm:h-14 sm:text-base"
            />
          </div>
        </div>

        {/* Notice Cards */}
        {visibleNotices.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={safePage + searchTerm}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              {visibleNotices.map((notice, index) => (
                <motion.article
                  key={notice.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -2 }}
                  className="group flex min-h-[105px] min-w-0 overflow-hidden rounded-lg border border-[#E4E9EF] bg-white shadow-[0_2px_10px_rgba(20,43,70,0.025)] transition-all duration-300 hover:border-[#C5A66A] hover:shadow-[0_7px_20px_rgba(20,43,70,0.08)] sm:min-h-[115px]"
                >
                  {/* Image */}
                  <div className="relative w-[82px] shrink-0 overflow-hidden bg-[#E8EDF2] sm:w-[115px] md:w-[130px]">
                    <img
                      src={notice.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Notice Information */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:px-5 sm:py-4 md:px-6">
                    <div className="min-w-0">
                      <h3 className="font-serif text-sm font-semibold leading-snug text-[#142B46] transition-colors duration-300 group-hover:text-[#A27C3D] sm:text-base md:text-lg">
                        {notice.title}
                      </h3>

                      <p className="mt-2 text-xs font-medium text-[#718096] sm:text-sm">
                        {notice.date}
                      </p>
                    </div>

                    {/* PDF Option */}
                    {notice.pdfUrl ? (
                      <a
                        href={notice.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit shrink-0 items-center gap-2 rounded-md border border-[#DCE3EB] px-3 py-2 text-xs font-semibold text-[#142B46] transition-all hover:border-[#B38A49] hover:bg-[#F8F5EF] hover:text-[#A27C3D] sm:px-4 sm:py-2.5 sm:text-sm"
                        aria-label={`View PDF for ${notice.title}`}
                      >
                        <FileText size={16} />
                        View PDF
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        title="PDF not available yet"
                        className="inline-flex w-fit shrink-0 cursor-not-allowed items-center gap-2 rounded-md border border-[#E8EBEF] bg-[#F8F9FA] px-3 py-2 text-xs font-medium text-[#A6AFBA] sm:px-4 sm:py-2.5 sm:text-sm"
                      >
                        <FileText size={16} />
                        PDF
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-dashed border-[#DCE3EB] px-4">
            <p className="text-sm text-[#8995A4] sm:text-base">
              No notices found.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredNotices.length > 0 && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2 sm:mt-11">
            <button
              type="button"
              onClick={() => changePage(safePage - 1)}
              disabled={safePage === 1}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCE3EB] text-[#142B46] transition-colors hover:border-[#B38A49] hover:text-[#A27C3D] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={19} />
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => changePage(page)}
                aria-label={`Go to page ${page}`}
                aria-current={safePage === page ? "page" : undefined}
                className={`h-10 min-w-10 rounded-md border px-3 text-sm font-medium transition-colors ${
                  safePage === page
                    ? "border-[#142B46] bg-[#142B46] text-white"
                    : "border-[#DCE3EB] text-[#142B46] hover:border-[#B38A49] hover:text-[#A27C3D]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => changePage(safePage + 1)}
              disabled={safePage === totalPages}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCE3EB] text-[#142B46] transition-colors hover:border-[#B38A49] hover:text-[#A27C3D] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
