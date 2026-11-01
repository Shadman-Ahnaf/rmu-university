
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { NewsArticle } from "../../types/news";

interface NewsCardProps {
  article: NewsArticle;
  index?: number;
}

export default function NewsCard({
  article,
  index = 0,
}: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group min-w-0 overflow-hidden rounded-xl border border-[#E7E0D4] bg-[#F3F0E9] transition-all duration-300 hover:border-[#D9B66F] hover:shadow-xl"
    >
      {/* News image */}
      <div className="relative aspect-video overflow-hidden bg-[#E9E6DF]">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07182B]/45 via-transparent to-transparent opacity-70" />

        {/* Category badge */}
        <span className="absolute left-4 top-4 rounded-sm border border-[#E5C786]/40 bg-[#142B46]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E5C786]">
          {article.category}
        </span>
      </div>

      {/* Card content */}
      <div className="relative flex min-h-[245px] flex-col p-5 sm:p-6">

        {/* Gold accent */}
        <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#D9B66F] transition-all duration-500 group-hover:w-full" />

        {/* Date */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#8B7655]">
          <CalendarDays size={14} className="text-[#A27C3D]" />
          <time>{article.date}</time>
        </div>

        {/* Title */}
        <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-[#142B46] transition-colors duration-300 group-hover:text-[#A27C3D] sm:text-[22px]">
          {article.title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#667085]">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-[#DED7C9] pt-5">
          <span className="text-xs font-medium text-[#7B8490] transition-colors duration-300 group-hover:text-[#142B46]">
            {article.author}
          </span>

          <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#A27C3D] transition-all duration-300 group-hover:gap-2">
            Read story
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
