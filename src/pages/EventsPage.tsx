
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  CalendarDays,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";


import SectionHeading from "../components/common/SectionHeading";
import SectionReveal from "../components/SectionReveal";

import FeaturedEvent from "../components/events/FeaturedEvent";
import EventCard from "../components/events/EventCard";

import { eventsData, eventCategories } from "../data/eventsData";
import type { EventCategory } from "../types/event";

type EventStatus = "All" | "Upcoming" | "Past";

const statusOptions: EventStatus[] = ["All", "Upcoming", "Past"];

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    EventCategory | "All"
  >("All");
  const [activeStatus, setActiveStatus] = useState<EventStatus>("All");

  const featuredEvent = eventsData.find((event) => event.featured);

  const filteredEvents = useMemo(() => {
    const today = getTodayDate();
    const query = searchTerm.trim().toLowerCase();

    return eventsData
      .filter((event) => !event.featured)
      .filter((event) => {
        const matchesSearch =
          !query ||
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.location.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query);

        const matchesCategory =
          activeCategory === "All" ||
          event.category === activeCategory;

        const matchesStatus =
          activeStatus === "All" ||
          (activeStatus === "Upcoming" && event.date >= today) ||
          (activeStatus === "Past" && event.date < today);

        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        if (activeStatus === "Past") {
          return b.date.localeCompare(a.date);
        }

        return a.date.localeCompare(b.date);
      });
  }, [searchTerm, activeCategory, activeStatus]);

  const clearFilters = () => {
    setSearchTerm("");
    setActiveCategory("All");
    setActiveStatus("All");
  };

  return (
    <>

      <main className="relative isolate min-h-screen overflow-hidden bg-[#E5EAF0]">
        {/* Full-page animated gradient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#DCE8F2] via-[#F0E9D9] to-[#D8E3EE]" />

          <motion.div
            animate={{
              x: [0, 180, -80, 0],
              y: [0, 120, 220, 0],
              scale: [1, 1.3, 0.9, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-0 h-[750px] w-[750px] rounded-full bg-[#7EA6CC]/60 blur-[130px]"
          />

          <motion.div
            animate={{
              x: [0, -180, 80, 0],
              y: [0, 180, -100, 0],
              scale: [1, 0.85, 1.25, 1],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 top-[20%] h-[750px] w-[750px] rounded-full bg-[#D9B66F]/45 blur-[140px]"
          />

          <motion.div
            animate={{
              x: [0, 150, -100, 0],
              y: [0, -160, 100, 0],
              scale: [1, 1.2, 0.85, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[15%] top-[45%] h-[800px] w-[800px] rounded-full bg-[#9AB6D1]/55 blur-[140px]"
          />

          <motion.div
            animate={{
              x: [0, -120, 100, 0],
              y: [0, 120, -80, 0],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 right-[5%] h-[700px] w-[700px] rounded-full bg-[#C6A66A]/35 blur-[130px]"
          />
        </div>

        <div className="relative z-10">
          {/* Featured event */}
          {featuredEvent && (
<section className="bg-transparent px-5 pt-28 pb-16 sm:px-8 lg:px-16 lg:pt-32 lg:pb-24">
              <div className="mx-auto max-w-7xl">
                <SectionReveal>
                  <SectionHeading
                    eyebrow="Don't Miss"
                    title="Featured Event"
                    description="A highlight from the university's upcoming event calendar."
                  />
                </SectionReveal>

                <div className="mt-10">
                  <FeaturedEvent event={featuredEvent} />
                </div>
              </div>
            </section>
          )}

          {/* Events listing */}
          <section
            id="all-events"
            className="bg-transparent px-5 py-16 sm:px-8 lg:px-16 lg:py-24"
          >
            <div className="mx-auto max-w-7xl">
              <SectionReveal>
                <SectionHeading
                  eyebrow="Explore & Participate"
                  title="University Events"
                  description="Find upcoming activities and explore past academic gatherings."
                />
              </SectionReveal>

              {/* Search and filters */}
              <SectionReveal delay={0.1}>
                <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/60 bg-white/30 p-5 shadow-xl shadow-[#142B46]/10 backdrop-blur-2xl sm:p-8">
                  {/* Decorative ambient accents */}
                  <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#D9B66F]/20 blur-[80px]" />

                  <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#8EB4D5]/25 blur-[80px]" />

                  <div className="relative z-10">
                    {/* Search input */}
                    <div className="relative">
                      <Search
                        size={19}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A27C3D]"
                      />

                      <input
                        type="search"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Search events by title, category or location..."
                        aria-label="Search university events"
                        className="w-full rounded-xl border border-[#A9BED2]/70 bg-white/55 py-4 pl-12 pr-4 text-sm text-[#142B46] shadow-sm shadow-[#142B46]/5 outline-none backdrop-blur-md transition-all placeholder:text-[#718096] focus:border-[#B99550] focus:bg-white/75 focus:ring-2 focus:ring-[#D9B66F]/30"
                      />
                    </div>

                    {/* Status filters */}
                    <div className="mt-6 flex flex-col gap-4 border-b border-[#A9BED2]/50 pb-6 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#294663]">
                        <SlidersHorizontal
                          size={15}
                          className="text-[#A27C3D]"
                        />
                        Event status
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {statusOptions.map((status) => (
                          <button
                            key={status}
                            type="button"
                            onClick={() => setActiveStatus(status)}
                            className={`rounded-lg border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                              activeStatus === status
                                ? "border-[#C5A15A] bg-[#D9B66F] text-[#142B46] shadow-md shadow-[#142B46]/10"
                                : "border-[#A9BED2]/60 bg-white/40 text-[#294663] hover:border-[#B99550] hover:bg-white/70"
                            }`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Category filters */}
                    <div className="mt-6">
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#294663]">
                        Browse by category
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveCategory("All")}
                          className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                            activeCategory === "All"
                              ? "border-[#C5A15A] bg-[#D9B66F] text-[#142B46]"
                              : "border-[#A9BED2]/60 bg-white/40 text-[#294663] hover:border-[#B99550] hover:bg-white/70"
                          }`}
                        >
                          All Categories
                        </button>

                        {eventCategories.map((category) => (
                          <button
                            key={category}
                            type="button"
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                              activeCategory === category
                                ? "border-[#C5A15A] bg-[#D9B66F] text-[#142B46]"
                                : "border-[#A9BED2]/60 bg-white/40 text-[#294663] hover:border-[#B99550] hover:bg-white/70"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Clear filters */}
                    {(searchTerm ||
                      activeCategory !== "All" ||
                      activeStatus !== "All") && (
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="mt-6 text-xs font-semibold text-[#8A672F] transition-colors hover:text-[#142B46]"
                      >
                        Clear all filters ×
                      </button>
                    )}
                  </div>
                </div>
              </SectionReveal>

              {/* Results heading */}
              <div className="mt-12 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A27C3D]">
                    Event Directory
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#142B46]">
                    {activeStatus === "All"
                      ? "All Events"
                      : `${activeStatus} Events`}
                  </h3>
                </div>

                <span className="flex items-center gap-2 text-sm text-[#536273]">
                  <CalendarDays size={16} className="text-[#A27C3D]" />
                  {filteredEvents.length}{" "}
                  {filteredEvents.length === 1 ? "event" : "events"} found
                </span>
              </div>

              {/* Event cards */}
              {filteredEvents.length > 0 ? (
                <motion.div
                  layout
                  className="mt-8 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                >
                  {filteredEvents.map((event, index) => {
                    const variants = [
                      "portrait",
                      "landscape",
                      "square",
                    ] as const;

                    return (
                      <EventCard
                        key={event.id}
                        event={event}
                        index={index}
                        variant={variants[index % variants.length]}
                      />
                    );
                  })}
                </motion.div>
              ) : (
                <div className="mt-8 rounded-2xl border border-white/60 bg-white/55 px-6 py-16 text-center shadow-lg shadow-[#142B46]/5 backdrop-blur-xl">
                  <Search
                    size={32}
                    className="mx-auto text-[#A27C3D]"
                  />

                  <h3 className="mt-5 font-serif text-xl font-semibold text-[#142B46]">
                    No events found
                  </h3>

                  <p className="mt-2 text-sm text-[#536273]">
                    Try another search term or select a different category.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A27C3D] transition-colors hover:text-[#142B46]"
                  >
                    Clear all filters
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Closing banner */}
          <section className="relative overflow-hidden bg-[#142B46] px-5 py-16 text-center sm:px-8 lg:py-20">
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#D9B66F]/10" />

            <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-[#D9B66F]/10" />

            <SectionReveal>
              <div className="relative mx-auto max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5C786]">
                  Stay Connected
                </p>

                <h2 className="mt-5 font-serif text-3xl font-semibold text-white sm:text-4xl">
                  Be Part of Our Academic Community
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#D7E1EA]/70">
                  Explore opportunities to learn, participate, collaborate and
                  connect through university activities.
                </p>

                <a
                  href="#all-events"
                  className="mt-8 inline-flex items-center gap-3 bg-[#D9B66F] px-6 py-3.5 text-sm font-bold text-[#142B46] transition-all duration-300 hover:gap-5 hover:bg-[#E5C786]"
                >
                  Explore Events
                  <ArrowRight size={17} />
                </a>
              </div>
            </SectionReveal>
          </section>
        </div>
      </main>
    </>
  );
}
