
import { ArrowUpRight, CalendarDays } from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const newsItems = [
  {
    category: "University News",
    date: "15 October 2026",
    title: "Advancing Medical Education Through Academic Excellence",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Research",
    date: "10 October 2026",
    title: "New Opportunities for Medical Research and Collaboration",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Events",
    date: "05 October 2026",
    title: "Academic Activities and Events at RMU",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=85",
  },
];

export default function NewsSection() {
  const featured = newsItems[0];
  const otherNews = newsItems.slice(1);

  return (
    <section
      id="news"
      className="relative overflow-hidden bg-[#142B46] py-20 md:py-28"
    >
      {/* Background photograph on the right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full md:w-[65%]">
        <img
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1800&q=85"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#142B46] via-[#142B46]/80 to-[#142B46]/40" />
      </div>

      {/* Decorative gold circles */}
      <div className="pointer-events-none absolute -right-28 top-10 h-96 w-96 rounded-full border-2 border-[#D5A64A]/25" />
      <div className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full border border-white/15" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <SectionReveal>
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D5A64A]">
                Stay Connected
              </span>

              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                Latest News
                <span className="text-[#D5A64A]"> & Events</span>
              </h2>
            </div>

            <a
              href="#news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-4"
            >
              View All Updates
              <ArrowUpRight size={17} />
            </a>
          </div>
        </SectionReveal>

        {/* News cards */}
        <div className="grid gap-6 lg:grid-cols-5">

          {/* Featured story */}
          <div className="lg:col-span-3">
            <SectionReveal direction="up">
              <article className="group overflow-hidden rounded-2xl bg-white shadow-xl">

                <div className="relative h-64 overflow-hidden md:h-[360px]">
                  <img
                    src={featured.image}
                    alt="Medical academic activities"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-[#D5A64A] px-4 py-2 text-xs font-semibold text-[#142B46]">
                    {featured.category}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-3 flex items-center gap-2 text-xs text-[#8490A0]">
                    <CalendarDays size={14} />
                    {featured.date}
                  </div>

                  <h3 className="mb-5 max-w-xl text-xl font-semibold leading-snug text-[#142B46] md:text-2xl">
                    {featured.title}
                  </h3>

                  <a
                    href="#news"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#174A70] transition-all hover:gap-4"
                  >
                    Read More
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            </SectionReveal>
          </div>

          {/* Smaller stories */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {otherNews.map((item, index) => (
              <SectionReveal
                key={item.title}
                direction="left"
                delay={index * 0.12}
              >
                <article className="group flex min-h-[180px] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#D5A64A]">

                  <div className="w-[40%] shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center p-4 sm:p-5">
                    <span className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#A77A32]">
                      {item.category}
                    </span>

                    <h3 className="mb-3 text-sm font-semibold leading-snug text-[#142B46] sm:text-base">
                      {item.title}
                    </h3>

                    <span className="flex items-center gap-2 text-[11px] text-[#8490A0]">
                      <CalendarDays size={13} />
                      {item.date}
                    </span>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
