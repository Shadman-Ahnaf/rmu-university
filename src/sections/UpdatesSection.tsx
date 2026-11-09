
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Newspaper,
  CalendarRange,
} from "lucide-react";
import { Link } from "react-router-dom";

import SectionReveal from "../components/SectionReveal";
import { newsArticles } from "../data/newsData";
import { eventsData } from "../data/eventsData";

type UpdateTab = "Notice" | "News" | "Events";

type UpdateItem = {
  id: number | string;
  title: string;
  category: string;
  date: string;
  description?: string;
  image: string;
  link: string;
  reference?: string;
};

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

const fallbackImage =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85";

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
  const [slideIndex, setSlideIndex] = useState(0);

  const sortedNews = useMemo(
    () =>
      [...newsArticles].sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const sortedEvents = useMemo(
    () => [...eventsData].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );

  // Prepare featured slides for the selected category
  const featuredSlides = useMemo<UpdateItem[]>(() => {
    if (activeTab === "Notice") {
      return notices.map((notice, index) => ({
        id: notice.id,
        title: notice.title,
        category: notice.category,
        date: formatDate(notice.date).full,
        image:
          newsArticles[index % Math.max(newsArticles.length, 1)]?.image ??
          fallbackImage,
        link: "#university-updates",
        reference: notice.reference,
      }));
    }

    if (activeTab === "News") {
      return sortedNews.map((article) => ({
        id: article.id,
        title: article.title,
        category: article.category,
        date: article.date,
        image: article.image || fallbackImage,
        link: "/news",
      }));
    }

    return sortedEvents.map((event) => ({
      id: event.id,
      title: event.title,
      category: event.category,
      date: formatDate(event.date).full,
      description: `${event.time} · ${event.location}`,
      image: event.image || fallbackImage,
      link: "/events",
    }));
  }, [activeTab, sortedNews, sortedEvents]);

  const currentSlide =
    featuredSlides.length > 0
      ? featuredSlides[slideIndex % featuredSlides.length]
      : null;

  // Automatically rotate featured content
  useEffect(() => {
    if (featuredSlides.length <= 1) return;

    const interval = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % featuredSlides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [activeTab, featuredSlides.length]);

  const changeTab = (tab: UpdateTab) => {
    setActiveTab(tab);
    setSlideIndex(0);
  };

  const showPrevious = () => {
    setSlideIndex((current) =>
      current === 0 ? featuredSlides.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSlideIndex((current) => (current + 1) % featuredSlides.length);
  };

  // Compact list data
  const listItems: UpdateItem[] =
    activeTab === "Notice"
      ? notices.map((notice) => ({
          id: notice.id,
          title: notice.title,
          category: notice.category,
          date: formatDate(notice.date).full,
          image: fallbackImage,
          link: "#university-updates",
          reference: notice.reference,
        }))
      : activeTab === "News"
        ? sortedNews.map((article) => ({
            id: article.id,
            title: article.title,
            category: article.category,
            date: article.date,
            image: article.image || fallbackImage,
            link: "/news",
          }))
        : sortedEvents.map((event) => ({
            id: event.id,
            title: event.title,
            category: event.category,
            date: formatDate(event.date).full,
            description: `${event.time} · ${event.location}`,
            image: event.image || fallbackImage,
            link: "/events",
          }));

  const heading =
    activeTab === "Notice"
      ? "Latest Notices"
      : activeTab === "News"
        ? "Latest News"
        : "Upcoming & Recent Events";

  return (
    <section
      id="university-updates"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F3F5] py-14 sm:py-18 lg:py-24"
    >
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full border border-[#B38A49]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#DCE4EA]/40 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <SectionReveal>
          <div className="mb-8 sm:mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A27C3D] sm:text-xs sm:tracking-[0.25em]">
              What's Happening at RMU
            </p>

            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#142B46] sm:text-4xl lg:text-5xl">
              University <span className="text-[#A27C3D]">Updates</span>
            </h2>

            <div className="mt-4 h-[2px] w-14 bg-[#B38A49]" />
          </div>
        </SectionReveal>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">

          {/* LEFT: Updates and Category Switcher */}
          <SectionReveal direction="right">
            <div className="min-w-0">

              {/* Category Switcher */}
              <div className="mb-6 grid grid-cols-3 gap-2 rounded-xl border border-[#DCE4EC] bg-white p-2 shadow-sm">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.label;

                  return (
                    <button
                      key={tab.label}
                      type="button"
                      onClick={() => changeTab(tab.label)}
                      aria-pressed={isActive}
                      className={`flex min-w-0 flex-col items-center justify-center gap-2 rounded-lg px-2 py-3 text-center transition-colors duration-200 sm:flex-row sm:gap-2 sm:py-4 ${
                        isActive
                          ? "bg-[#142B46] text-white shadow-md"
                          : "bg-transparent text-[#64748B] hover:bg-[#EDF3F9] hover:text-[#142B46]"
                      }`}
                    >
                      <Icon size={18} />

                      <span className="text-xs font-bold sm:text-sm">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Updates List Heading */}
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A27C3D]">
                    Browse Updates
                  </p>

                  <h3 className="mt-1 font-serif text-xl font-semibold text-[#142B46] sm:text-2xl">
                    {heading}
                  </h3>
                </div>

                <span className="shrink-0 rounded-full border border-[#DCE4EC] bg-white px-3 py-1.5 text-[10px] font-semibold text-[#64748B] sm:text-xs">
                  {listItems.length} updates
                </span>
              </div>

              {/* Compact Update Rows */}
              <div className="min-h-[340px] space-y-2.5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    {listItems.slice(0, 4).map((item) => (
                      <article
                        key={item.id}
                        className="group flex items-center gap-3 rounded-lg border border-[#DCE4EC] bg-white px-3 py-3 shadow-sm transition-colors duration-200 hover:border-[#AFC3D8] hover:bg-[#F5F8FC] sm:gap-4 sm:px-4"
                      >
                        {/* Small date marker */}
                        <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-md bg-[#EDF3F9] text-[#142B46]">
                          <FileText size={17} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex flex-wrap items-center gap-2">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#A27C3D]">
                              {item.category}
                            </span>

                            <span className="h-1 w-1 rounded-full bg-[#B38A49]" />

                            <span className="text-[9px] text-[#8490A0]">
                              {item.date}
                            </span>

                            <span className="rounded-full bg-[#F2EBDD] px-1.5 py-0.5 text-[8px] font-semibold uppercase text-[#8B6A35]">
                              Demo
                            </span>
                          </div>

                          <h4 className="line-clamp-2 text-xs font-semibold leading-5 text-[#142B46] transition-colors group-hover:text-[#A27C3D] sm:text-sm">
                            {item.title}
                          </h4>

                          {item.description && (
                            <p className="mt-1 text-[10px] text-[#8490A0]">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <ArrowUpRight
                          size={17}
                          className="shrink-0 text-[#A27C3D] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </article>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* View All */}
              <div className="mt-5 flex justify-end">
                {activeTab === "Notice" ? (
                  <a
                    href="#university-updates"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#A27C3D] transition-colors hover:text-[#142B46] sm:text-sm"
                  >
                    View All Notices
                    <ArrowRight size={16} />
                  </a>
                ) : (
                  <Link
                    to={activeTab === "News" ? "/news" : "/events"}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#A27C3D] transition-colors hover:text-[#142B46] sm:text-sm"
                  >
                    View All {activeTab}
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          </SectionReveal>

          {/* RIGHT: Featured Content Showcase */}
          <SectionReveal direction="left" delay={0.1}>
            <div className="min-w-0">

              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A27C3D]">
                    Featured Update
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#142B46]">
                    From RMU
                  </h3>
                </div>

                <span className="text-xs font-medium text-[#8490A0]">
                  {String(slideIndex + 1).padStart(2, "0")} /{" "}
                  {String(featuredSlides.length).padStart(2, "0")}
                </span>
              </div>

              {currentSlide && (
                <div className="group relative mx-auto aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-2xl bg-[#142B46] shadow-xl shadow-[#142B46]/10">

                  {/* Featured Image */}
                  <img
                    key={currentSlide.id}
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09192B] via-[#09192B]/25 to-transparent" />

                  {/* Top Labels */}
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/25 bg-[#142B46]/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                      {activeTab}
                    </span>

                    <span className="rounded-full bg-[#D5B46A] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#142B46]">
                      Featured
                    </span>
                  </div>

                  {/* Featured Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E5C786]">
                      {currentSlide.category}
                    </p>

                    <h3 className="mb-3 font-serif text-2xl font-semibold leading-snug text-white sm:text-3xl">
                      {currentSlide.title}
                    </h3>

                    <p className="mb-5 text-xs text-white/70">
                      {currentSlide.date}
                    </p>

                    <div className="flex items-center justify-between gap-4 border-t border-white/20 pt-4">
                      {currentSlide.link.startsWith("/") ? (
                        <Link
                          to={currentSlide.link}
                          className="inline-flex items-center gap-2 text-xs font-bold text-white transition-colors hover:text-[#E5C786]"
                        >
                          Explore {activeTab}
                          <ArrowUpRight size={16} />
                        </Link>
                      ) : (
                        <a
                          href={currentSlide.link}
                          className="inline-flex items-center gap-2 text-xs font-bold text-white transition-colors hover:text-[#E5C786]"
                        >
                          Explore {activeTab}
                          <ArrowUpRight size={16} />
                        </a>
                      )}

                      {/* Slide Controls */}
                      {featuredSlides.length > 1 && (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={showPrevious}
                            aria-label="Previous featured update"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-[#142B46]"
                          >
                            <ChevronLeft size={18} />
                          </button>

                          <button
                            type="button"
                            onClick={showNext}
                            aria-label="Next featured update"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-[#142B46]"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Slide Indicators */}
              {featuredSlides.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {featuredSlides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setSlideIndex(index)}
                      aria-label={`Show featured update ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-200 ${
                        slideIndex === index
                          ? "w-8 bg-[#A27C3D]"
                          : "w-2 bg-[#C9D3DE] hover:bg-[#8DA4BC]"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </SectionReveal>
        </div>

        <p className="mt-8 text-center text-[9px] leading-5 text-[#8490A0] sm:mt-10 sm:text-[10px]">
          News, events and notice entries currently include demonstration
          content. Replace them with verified RMU information before launch.
        </p>
      </div>
    </section>
  );
}
