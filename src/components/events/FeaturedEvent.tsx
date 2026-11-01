
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";
import type { UniversityEvent } from "../../types/event";

interface FeaturedEventProps {
  event: UniversityEvent;
}

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function FeaturedEvent({ event }: FeaturedEventProps) {
  const date = new Date(`${event.date}T12:00:00`);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75 }}
      className="group grid overflow-hidden rounded-xl border border-[#D9B66F]/30 bg-[#142B46] shadow-lg lg:grid-cols-2"
    >
      {/* Image */}
      <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px]">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07182B]/65 via-transparent to-[#07182B]/15" />

        <span className="absolute left-6 top-6 border border-[#E5C786]/40 bg-[#E5C786] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#142B46]">
          Upcoming Highlight
        </span>

        {/* Date panel */}
        <div className="absolute bottom-6 left-6 flex min-w-[105px] flex-col items-center rounded-lg bg-[#142B46]/95 px-5 py-4 text-center text-white shadow-xl backdrop-blur-md">
          <span className="text-3xl font-bold leading-none text-[#E5C786]">
            {date.getDate()}
          </span>
          <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em]">
            {date.toLocaleDateString("en-US", { month: "short" })}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#193653] via-[#142B46] to-[#0D2036] px-7 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#D9B66F]/10 transition-transform duration-700 group-hover:scale-125" />

        <span className="relative text-xs font-bold uppercase tracking-[0.2em] text-[#E5C786]">
          {event.category}
        </span>

        <h2 className="relative mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          {event.title}
        </h2>

        <p className="relative mt-5 text-sm leading-8 text-[#D7E1EA]/75">
          {event.description}
        </p>

        <div className="relative mt-7 space-y-4 border-t border-white/15 pt-6">
          <div className="flex items-center gap-3 text-sm text-[#D7E1EA]">
            <CalendarDays size={17} className="shrink-0 text-[#E5C786]" />
            {formatDate(event.date)}
          </div>

          <div className="flex items-center gap-3 text-sm text-[#D7E1EA]">
            <Clock3 size={17} className="shrink-0 text-[#E5C786]" />
            {event.time}
          </div>

          <div className="flex items-center gap-3 text-sm text-[#D7E1EA]">
            <MapPin size={17} className="shrink-0 text-[#E5C786]" />
            {event.location}
          </div>
        </div>

        <a
          href="#all-events"
          className="relative mt-9 inline-flex w-fit items-center gap-3 border-b border-[#E5C786] pb-2 text-sm font-semibold text-[#E5C786] transition-all duration-300 hover:gap-5 hover:text-white"
        >
          Explore all events
          <ArrowRight size={18} />
        </a>
      </div>
    </motion.article>
  );
}
