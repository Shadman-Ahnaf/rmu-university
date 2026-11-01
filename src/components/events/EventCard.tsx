
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import type {
  UniversityEvent,
  EventCardVariant,
} from "../../types/event";

interface EventCardProps {
  event: UniversityEvent;
  index?: number;
  variant?: EventCardVariant;
}

const imageRatios: Record<EventCardVariant, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/9]",
  square: "aspect-square",
};

const categoryColors: Record<string, string> = {
  Conference: "bg-[#E5D5B5] text-[#142B46]",
  Seminar: "bg-[#E0EAF2] text-[#254D6B]",
  Workshop: "bg-[#E7E1EF] text-[#59466F]",
  Ceremony: "bg-[#F0DFD8] text-[#875442]",
  Academic: "bg-[#DFEADF] text-[#385D43]",
  Community: "bg-[#F2E6D0] text-[#80612F]",
};

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function EventCard({
  event,
  index = 0,
  variant = "portrait",
}: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.07 }}
      whileHover={{ y: -7 }}
      className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#E7E0D4] bg-[#F3F0E9] transition-all duration-300 hover:border-[#D9B66F] hover:shadow-xl"
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-[#E9E6DF] ${imageRatios[variant]}`}>
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07182B]/45 via-transparent to-transparent" />

        <span
          className={`absolute left-4 top-4 rounded-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${categoryColors[event.category]}`}
        >
          {event.category}
        </span>

        {/* Date overlay */}
        <div className="absolute bottom-4 right-4 flex flex-col items-center rounded-md bg-[#142B46]/95 px-3 py-2 text-white shadow-lg backdrop-blur-sm">
          <span className="text-xl font-bold leading-none text-[#E5C786]">
            {new Date(`${event.date}T12:00:00`).getDate()}
          </span>
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider">
            {new Date(`${event.date}T12:00:00`).toLocaleDateString("en-US", {
              month: "short",
            })}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#D9B66F] transition-all duration-500 group-hover:w-full" />

        <div className="flex items-center gap-2 text-xs font-medium text-[#8B7655]">
          <CalendarDays size={14} className="text-[#A27C3D]" />
          <time>{formatDate(event.date)}</time>
        </div>

        <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-[#142B46] transition-colors duration-300 group-hover:text-[#A27C3D]">
          {event.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#667085]">
          {event.description}
        </p>

        <div className="mt-5 flex items-start gap-2 text-xs text-[#7B8490]">
          <MapPin size={14} className="mt-0.5 shrink-0 text-[#A27C3D]" />
          <span>{event.location}</span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-[#DED7C9] pt-5 mt-5">
          <span className="text-xs font-medium text-[#8B7655]">
            {event.time}
          </span>

          <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#A27C3D] transition-all duration-300 group-hover:gap-2">
            Event details
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
