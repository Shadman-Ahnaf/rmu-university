
import { ArrowUpRight, CalendarDays, FileText } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import SectionReveal from "../components/SectionReveal";

const notices = [
  {
    id: 1,
    category: "Academic",
    date: "04 November 2026",
    title: "Academic Notice — Sample Announcement",
    reference: "RMU/DEMO/001",
  },
  {
    id: 2,
    category: "Administration",
    date: "02 November 2026",
    title: "Administrative Circular — Sample Announcement",
    reference: "RMU/DEMO/002",
  },
  {
    id: 3,
    category: "Examination",
    date: "29 October 2026",
    title: "Examination Related Notice — Sample Announcement",
    reference: "RMU/DEMO/003",
  },
  {
    id: 4,
    category: "General",
    date: "25 October 2026",
    title: "General University Announcement — Sample Notice",
    reference: "RMU/DEMO/004",
  },
];

export default function NoticeSection() {
  return (
    <section
      id="notice-board"
      className="relative overflow-hidden bg-[#F5F4F0] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full border border-[#B38A49]/15" />
      <div className="pointer-events-none absolute -right-20 top-12 h-72 w-72 rounded-full border border-[#B38A49]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionReveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Official Information"
              title="Notices & Announcements"
              description="Stay informed about academic updates, administrative circulars, examination information and important university announcements."
            />

            <div className="flex shrink-0 items-center gap-3 text-sm font-semibold text-[#A27C3D]">
              <span className="h-px w-10 bg-[#B38A49]" />
              University Notice Board
            </div>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.6fr]">
          {/* Notice board introduction */}
          <SectionReveal direction="right">
            <div className="relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-[#142B46] p-8 text-white shadow-xl sm:p-10">
              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-[#D5A64A]/20" />
              <div className="pointer-events-none absolute -bottom-16 -right-12 h-52 w-52 rounded-full border border-[#D5A64A]/15" />

              <div className="relative">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#D5A64A]/40 bg-[#D5A64A]/10 text-[#E5C786]">
                  <FileText size={26} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5C786]">
                  Stay Informed
                </p>

                <h3 className="mt-4 max-w-sm font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                  Important Updates from RMU
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
                  Find important university announcements and academic
                  information in one convenient place.
                </p>
              </div>

              <div className="relative mt-10 flex items-center gap-3 border-t border-white/15 pt-6">
                <CalendarDays size={18} className="text-[#E5C786]" />
                <span className="text-xs font-medium tracking-wide text-white/70">
                  Latest university updates
                </span>
              </div>
            </div>
          </SectionReveal>

          {/* Notice list */}
          <div className="flex flex-col">
            {notices.map((notice, index) => (
              <SectionReveal
                key={notice.id}
                direction="left"
                delay={index * 0.08}
              >
                <article className="group border-b border-[#142B46]/10 py-6 first:pt-2 last:border-b-0">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-[76px] w-[76px] shrink-0 flex-col items-center justify-center rounded-xl border border-[#B38A49]/25 bg-white text-center shadow-sm transition-colors duration-300 group-hover:bg-[#142B46]">
                      <CalendarDays
                        size={17}
                        className="mb-1 text-[#A27C3D] transition-colors group-hover:text-[#E5C786]"
                      />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#142B46] transition-colors group-hover:text-white">
                        {notice.date.split(" ")[0]}
                      </span>
                      <span className="text-[10px] text-[#647184] transition-colors group-hover:text-white/60">
                        {notice.date.split(" ").slice(1).join(" ")}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A27C3D]">
                          {notice.category}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-[#B38A49]" />
                        <span className="text-[10px] text-[#8490A0]">
                          {notice.reference}
                        </span>
                        <span className="rounded-full bg-[#E9E3D5] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#80632F]">
                          Demo
                        </span>
                      </div>

                      <h3 className="text-base font-semibold leading-relaxed text-[#142B46] transition-colors duration-300 group-hover:text-[#A27C3D] sm:text-lg">
                        {notice.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="hidden shrink-0 text-[#A27C3D] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
                    />
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-[#8490A0]">
          Demonstration entries for the website preview. Replace these with
          verified university notices and their official documents.
        </p>
      </div>
    </section>
  );
}
