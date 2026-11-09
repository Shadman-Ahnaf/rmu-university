
import { useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  facultyDepartments,
  facultyMembers,
} from "../data/facultyData";
import { Link } from "react-router-dom";
const ITEMS_PER_PAGE = 20;

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center border border-[#DCE3EB] bg-white text-[#142B46] transition hover:border-[#B38A49] hover:bg-[#F8F5EF] disabled:cursor-not-allowed disabled:opacity-35"
      >
        <ChevronLeft size={17} />
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={`h-9 min-w-9 px-3 text-xs font-bold transition ${
              currentPage === page
                ? "bg-[#142B46] text-white shadow-md shadow-[#142B46]/20"
                : "border border-[#DCE3EB] bg-white text-[#526176] hover:border-[#B38A49] hover:text-[#A27C3D]"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center border border-[#DCE3EB] bg-white text-[#142B46] transition hover:border-[#B38A49] hover:bg-[#F8F5EF] disabled:cursor-not-allowed disabled:opacity-35"
      >
        <ChevronRight size={17} />
      </button>
    </div>
  );
}

export default function FacultyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredFaculty = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return facultyMembers.filter((faculty) => {
      const matchesDepartment =
        !selectedDepartment ||
        faculty.department === selectedDepartment;

      const matchesSearch =
        !query ||
        faculty.name.toLowerCase().includes(query) ||
        faculty.designation.toLowerCase().includes(query) ||
        faculty.degree.toLowerCase().includes(query);

      return matchesDepartment && matchesSearch;
    });
  }, [searchTerm, selectedDepartment]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredFaculty.length / ITEMS_PER_PAGE)
  );

  const safePage = Math.min(currentPage, totalPages);

  const visibleFaculty = filteredFaculty.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  const changeSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const changeDepartment = (value: string) => {
    setSelectedDepartment(value);
    setCurrentPage(1);
  };

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-16 pt-28 sm:pt-32">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-10">

        {/* Centered page heading */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-semibold text-[#142B46] sm:text-4xl">
            Faculty Directory
          </h1>

          <div className="mx-auto mt-4 h-[2px] w-14 bg-[#B38A49]" />
        </div>

        {/* Search and department selection */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#0B2036] via-[#173B5D] to-[#245477] p-4 shadow-[0_12px_35px_rgba(11,32,54,0.16)] sm:p-6">
          <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-[#D5B46A]/10 blur-[75px]" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-56 w-56 rounded-full bg-[#70A6C9]/10 blur-[70px]" />

          <div className="relative grid gap-3 md:grid-cols-[1.5fr_1fr]">

            {/* Search */}
            <div className="relative">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A27C3D]"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => changeSearch(event.target.value)}
                placeholder="Search faculty by name, designation or degree..."
                aria-label="Search faculty"
                className="h-12 w-full border border-white/15 bg-white px-11 pr-4 text-sm text-[#142B46] outline-none transition placeholder:text-[#8995A4] focus:border-[#E5C786] focus:ring-2 focus:ring-[#E5C786]/20"
              />
            </div>

            {/* Department selection */}
            <div className="relative">
              <select
                value={selectedDepartment}
                onChange={(event) => changeDepartment(event.target.value)}
                aria-label="Select Department"
                className="h-12 w-full appearance-none border border-white/15 bg-white px-4 pr-11 text-sm text-[#142B46] outline-none transition focus:border-[#E5C786] focus:ring-2 focus:ring-[#E5C786]/20"
              >
                <option value="">Select Department</option>

                {facultyDepartments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={17}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#A27C3D]"
              />
            </div>
          </div>
        </section>

        {/* Faculty list */}
        <div className="mt-8">
          {visibleFaculty.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {visibleFaculty.map((faculty) => (
                <Link
  key={faculty.id}
  to={`/faculty/${faculty.id}`}
  aria-label={`View profile of ${faculty.name}`}
  className="group flex min-h-[155px] min-w-0 overflow-hidden border border-[#E1E6EC] bg-white transition-all duration-300 hover:border-[#C5A66A] hover:shadow-[0_8px_22px_rgba(20,43,70,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B38A49]"
>
                  {/* Faculty photo */}
                  <div className="relative h-[155px] w-[125px] shrink-0 overflow-hidden bg-[#E8EDF2] sm:h-[170px] sm:w-[145px]">
                    <img
                      src={faculty.image}
                      alt={`Demonstration portrait of ${faculty.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0B2036]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Faculty details */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center px-5 py-4 sm:px-7">
                    <h2 className="text-xs font-bold leading-5 text-[#142B46] transition-colors group-hover:text-[#A27C3D] sm:text-sm">
                      {faculty.name}
                    </h2>

                    <p className="mt-1 text-[10px] font-semibold leading-4 text-[#A27C3D] sm:text-xs">
                      {faculty.designation}
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-[#788597] sm:text-xs">
                      {faculty.degree}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[280px] flex-col items-center justify-center border border-dashed border-[#CBD4DE] bg-white px-5 text-center">
              <Search size={28} className="text-[#B38A49]" />

              <h2 className="mt-4 text-base font-semibold text-[#142B46]">
                No faculty found
              </h2>

              <button
                type="button"
                onClick={() => {
                  changeSearch("");
                  changeDepartment("");
                }}
                className="mt-4 text-xs font-bold text-[#A27C3D] underline underline-offset-4 hover:text-[#142B46]"
              >
                Clear search and department
              </button>
            </div>
          )}
        </div>

        {/* Bottom pagination only */}
        {filteredFaculty.length > 0 && (
          <div className="mt-9 flex flex-col items-center gap-4 border-t border-[#E0E5EB] pt-7">
            <Pagination
              currentPage={safePage}
              totalPages={totalPages}
              onPageChange={changePage}
            />

            <p className="text-[11px] text-[#8995A4]">
              Showing {(safePage - 1) * ITEMS_PER_PAGE + 1}–
              {Math.min(safePage * ITEMS_PER_PAGE, filteredFaculty.length)} of{" "}
              {filteredFaculty.length} faculty members
            </p>
          </div>
        )}

        <p className="mt-10 text-center text-[10px] text-[#9AA4B0]">
          Faculty profiles and photographs are demonstration content.
        </p>
      </div>
    </main>
  );
}
