
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "../../types/news";

interface FeaturedNewsProps {
  article: NewsArticle;
}

export default function FeaturedNews({ article }: FeaturedNewsProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75 }}
      whileHover={{ y: -5 }}
      className="group relative grid overflow-hidden rounded-xl border border-[#D9B66F]/30 bg-[#142B46] shadow-lg transition-shadow duration-500 hover:shadow-2xl lg:grid-cols-2"
    >
      {/* Featured image */}
      <div className="relative min-h-[280px] overflow-hidden bg-[#0D2036] sm:min-h-[400px] lg:min-h-[480px]">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07182B]/60 via-transparent to-[#07182B]/10" />

        {/* Featured badge */}
        <span className="absolute left-6 top-6 border border-[#E5C786]/50 bg-[#E5C786] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#142B46] shadow-lg">
          Featured Story
        </span>

        {/* Bottom image accent */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D9B66F] transition-all duration-700 group-hover:w-full" />
      </div>

      {/* Content panel */}
      <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#193653] via-[#142B46] to-[#0D2036] px-7 py-10 text-white sm:px-10 sm:py-14 lg:px-14">

        {/* Decorative gold circle */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#D9B66F]/10 transition-transform duration-700 group-hover:scale-125" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#D9B66F]/10" />

        {/* Gold accent line */}
        <div className="mb-7 h-[3px] w-12 bg-[#D9B66F] transition-all duration-500 group-hover:w-20" />

        {/* Category and date */}
        <div className="relative flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#E5C786]">
          <span>{article.category}</span>
          <span className="h-1 w-1 rounded-full bg-[#E5C786]" />
          <time className="text-white/65">{article.date}</time>
        </div>

        {/* Title */}
        <h2 className="relative mt-7 font-serif text-3xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#F1D69B] sm:text-4xl lg:text-[42px]">
          {article.title}
        </h2>

        {/* Description */}
        <p className="relative mt-6 max-w-lg text-sm leading-8 text-[#D7E1EA]/75 sm:text-base">
          {article.excerpt}
        </p>

        {/* Explore link */}
        <div className="relative mt-9">
          <span className="inline-flex items-center gap-3 border-b border-[#D9B66F] pb-2 text-sm font-semibold text-[#E5C786] transition-all duration-300 group-hover:gap-5 group-hover:text-white">
            Explore this story
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>

        {/* Author */}
        <div className="relative mt-12 border-t border-white/15 pt-5 text-xs text-white/55">
          Published by <span className="font-semibold text-white/80">{article.author}</span>
        </div>
      </div>
    </motion.article>
  );
}
