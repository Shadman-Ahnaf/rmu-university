
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  FileText,
  Newspaper,
  CalendarRange,
} from "lucide-react";
import { Link } from "react-router-dom";

import SectionReveal from "../components/SectionReveal";
import { newsArticles } from "../data/newsData";
import { eventsData } from "../data/eventsData";

type UpdateTab = "Notice" | "News" | "Events";

const tabs: {
  label: UpdateTab;
  description: string;
  icon: typeof FileText;
}[] = [
  {
    label: "Notice",
    description: "Official announcements",
    icon: FileText,
  },
  {
    label: "News",
    description: "University updates",
    icon: Newspaper,
  },
  {
    label: "Events",
    description: "Activities & gatherings",
    icon: CalendarRange,
  },
];

const notices = [
  {
    id: 1,
    category: "Academic",
    title: "Academic Notice — Sample University Announcement",
    date: "2026-11-04",
    reference: "RMU/DEMO/001",
  },
  {
    id: 2,
    category: "Administration",
    title: "Administrative Circular — Sample Announcement",
    date: "2026-11-02",
    reference: "RMU/DEMO/002",
  },
  {
    id: 3,
    category: "Examination",
    title: "Examination Related Notice — Sample Announcement",
    date: "2026-10-29",
    reference: "RMU/DEMO/003",
  },
  {
    id: 4,
    category: "General",
    title: "General University Announcement — Sample Notice",
    date: "2026-10-25",
    reference: "RMU/DEMO/004",
  },
];

function formatDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);

  return {
    day: date.toLocaleDateString("en-GB", { day: "2-digit" }),
    month: date.toLocaleDateString("en-GB", { month: "short" }),
    year: date.toLocaleDateString("en-GB", { year: "numeric" }),
    full: date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}

export default function UpdatesSection() {
  const [activeTab, setActiveTab] = useState<UpdateTab>("Notice");

  const sortedNews = useMemo(
    () =>
      [...newsArticles].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const sortedEvents = useMemo(
    () => [...eventsData].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );

  const activeItems = {
    Notice: notices,
    News: sortedNews,
    Events: sortedEvents,
  };

  const viewAllLinks: Record<UpdateTab, string> = {
    Notice: "#notice-board",
    News: "/news",
    Events: "/events",
  };

  const currentItems = activeItems[activeTab];

  return (
    <section
      id="university-updates"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#E8EDF2] via-[#F7F5EF] to-[#E8E2D5] py-20 sm:py-24 lg:py-28"
    >
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#B38A49]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full border border-[#B38A49]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#DCE4EA]/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <SectionReveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#A27C3D]">
                What's Happening at RMU
              </p>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#142B46] sm:text-4xl lg:text-5xl">
                University <span className="text-[#A27C3D]">Updates</span>
              </h2>

              <div className="my-5 h-[2px] w-14 bg-[#B38A49]" />

            </div>

            <div className="hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A27C3D] md:flex">
              <span className="h-px w-10 bg-[#B38A49]" />
              Information & Activities
            </div>
          </div>
        </SectionReveal>

        {/* Main updates layout */}
        <div className="grid gap-7 lg:grid-cols-[270px_1fr] lg:gap-10">
          {/* Category selector */}
          <SectionReveal direction="right">
            <div className="relative h-full overflow-hidden rounded-2xl bg-[#142B46] p-5 shadow-xl shadow-[#142B46]/10 sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full border border-[#D5B46A]/20"
              />

              <div className="relative">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#E5C786]">
                  Explore
                </p>

                <h3 className="mb-7 font-serif text-2xl font-semibold text-white">
                  What's New
                </h3>

                <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.label;

                    return (
                      <button
                        key={tab.label}
                        type="button"
                        onClick={() => setActiveTab(tab.label)}
                        aria-pressed={isActive}
                        className={`group flex min-w-[150px] flex-1 items-center gap-3 rounded-xl border p-4 text-left transition-all duration-300 lg:min-w-0 lg:flex-none ${
                          isActive
                            ? "border-[#D5B46A]/70 bg-[#D5B46A] text-[#142B46] shadow-lg shadow-black/10"
                            : "border-white/10 bg-white/[0.04] text-white hover:border-[#D5B46A]/50 hover:bg-white/[0.10]"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                            isActive
                              ? "bg-[#142B46]/10 text-[#142B46]"
                              : "bg-white/10 text-[#E5C786] group-hover:bg-[#D5B46A]/15"
                          }`}
                        >
                          <Icon size={19} />
                        </span>

                        <span className="min-w-0">
                          <span className="block text-sm font-bold">
                            {tab.label}
                          </span>
                          <span
                            className={`mt-1 block whitespace-nowrap text-[10px] ${
                              isActive ? "text-[#142B46]/65" : "text-white/50"
                            }`}
                          >
                            {tab.description}
                          </span>
                        </span>

                        {isActive && (
                          <ArrowRight
                            size={16}
                            className="ml-auto hidden shrink-0 lg:block"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 hidden border-t border-white/15 pt-6 lg:block">
                  <p className="text-xs leading-6 text-white/55">
                    Your central place for important university information
                    and activities.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Dynamic content panel */}
          <SectionReveal direction="left" delay={0.1}>
            <div className="min-w-0">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A27C3D]">
                    Browse Updates
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-[#142B46]">
                    {activeTab === "Notice"
                      ? "Latest Notices"
                      : activeTab === "News"
                        ? "Latest News"
                        : "Upcoming & Recent Events"}
                  </h3>
                </div>

                <span className="hidden rounded-full border border-[#B38A49]/30 bg-white/70 px-4 py-2 text-xs font-semibold text-[#647184] sm:inline-flex">
                  {currentItems.length} updates
                </span>
              </div>

              <div className="relative min-h-[440px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-3"
                  >
                    {activeTab === "Notice" &&
                      notices.map((notice, index) => {
                        const date = formatDate(notice.date);

                        return (
                          <article
                            key={notice.id}
                            className="group flex flex-col gap-4 rounded-xl border border-[#142B46]/[0.07] bg-white/75 backdrop-blur-md p-4 shadow-sm shadow-[#142B46]/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-[#B38A49]/50 hover:bg-white hover:shadow-lg hover:shadow-[#142B46]/[0.08] sm:flex-row sm:items-center sm:p-5"
                          >
                            <div className="flex h-[76px] w-[76px] shrink-0 flex-col items-center justify-center rounded-lg bg-[#142B46] text-white transition-colors duration-300 group-hover:bg-[#A27C3D]">
                              <span className="text-[11px] font-semibold text-[#E5C786] group-hover:text-white">
                                {date.day} {date.month}
                              </span>
                              <span className="mt-0.5 text-2xl font-bold">
                                {date.year}
                              </span>
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="mb-2 flex flex-wrap items-center gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A27C3D]">
                                  {notice.category}
                                </span>
                                <span className="h-1 w-1 rounded-full bg-[#B38A49]" />
                                <span className="text-[10px] text-[#8490A0]">
                                  {notice.reference}
                                </span>
                                <span className="rounded-full bg-[#F2EBDD] px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#8B6A35]">
                                  Demo
                                </span>
                              </div>

                              <h4 className="text-sm font-semibold leading-6 text-[#142B46] transition-colors group-hover:text-[#A27C3D] sm:text-base">
                                {notice.title}
                              </h4>

                              <p className="mt-1 text-[11px] text-[#8490A0]">
                                Published {date.full}
                              </p>
                            </div>

                            <ArrowUpRight
                              size={19}
                              className="hidden shrink-0 text-[#A27C3D] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
                            />
                          </article>
                        );
                      })}

                    {activeTab === "News" &&
                      sortedNews.slice(0, 4).map((article) => (
                        <Link
                          to="/news"
                          key={article.id}
                          className="group flex flex-col gap-4 rounded-xl border border-[#142B46]/[0.07] bg-white/85 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B38A49]/50 hover:bg-white hover:shadow-lg sm:flex-row sm:items-center sm:p-4"
                        >
                          <div className="h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-[88px] sm:w-32">
                            <img
                              src={article.image}
                              alt=""
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A27C3D]">
                                {article.category}
                              </span>
                              <span className="h-1 w-1 rounded-full bg-[#B38A49]" />
                              <span className="text-[10px] text-[#8490A0]">
                                {article.date}
                              </span>
                              <span className="rounded-full bg-[#F2EBDD] px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#8B6A35]">
                                Demo
                              </span>
                            </div>

                            <h4 className="text-sm font-semibold leading-6 text-[#142B46] transition-colors group-hover:text-[#A27C3D] sm:text-base">
                              {article.title}
                            </h4>
                          </div>

                          <ArrowUpRight
                            size={19}
                            className="hidden shrink-0 text-[#A27C3D] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
                          />
                        </Link>
                      ))}

                    {activeTab === "Events" &&
                      sortedEvents.slice(0, 4).map((event) => {
                        const date = formatDate(event.date);

                        return (
                          <Link
                            to="/events"
                            key={event.id}
                            className="group flex flex-col gap-4 rounded-xl border border-[#142B46]/[0.07] bg-white/85 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B38A49]/50 hover:bg-white hover:shadow-lg sm:flex-row sm:items-center sm:p-4"
                          >
                            <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-[88px] sm:w-32">
                              <img
                                src={event.image}
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="mb-2 flex flex-wrap items-center gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A27C3D]">
                                  {event.category}
                                </span>
                                <span className="h-1 w-1 rounded-full bg-[#B38A49]" />
                                <span className="text-[10px] text-[#8490A0]">
                                  {date.full}
                                </span>
                                <span className="rounded-full bg-[#F2EBDD] px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#8B6A35]">
                                  Demo
                                </span>
                              </div>

                              <h4 className="text-sm font-semibold leading-6 text-[#142B46] transition-colors group-hover:text-[#A27C3D] sm:text-base">
                                {event.title}
                              </h4>

                              <p className="mt-1 text-[11px] text-[#8490A0]">
                                {event.time} · {event.location}
                              </p>
                            </div>

                            <ArrowUpRight
                              size={19}
                              className="hidden shrink-0 text-[#A27C3D] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
                            />
                          </Link>
                        );
                      })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* View all link */}
              <div className="mt-6 flex justify-end">
                {activeTab === "Notice" ? (
                  <a
                    href="#university-updates"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#A27C3D] transition-all hover:gap-4"
                  >
                    View All Notices
                    <ArrowRight size={17} />
                  </a>
                ) : (
                  <Link
                    to={viewAllLinks[activeTab]}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#A27C3D] transition-all hover:gap-4"
                  >
                    View All {activeTab}
                    <ArrowRight size={17} />
                  </Link>
                )}
              </div>
            </div>
          </SectionReveal>
        </div>

        <p className="mt-10 text-center text-[10px] leading-5 text-[#8490A0]">
          News, events and notice entries currently include demonstration
          content. Replace them with verified RMU information before launch.
        </p>
      </div>
    </section>
  );
}
