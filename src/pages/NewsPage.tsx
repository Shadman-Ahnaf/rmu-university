import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Newspaper, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { NewsCategory } from "../types/news";
import SectionHeading from "../components/common/SectionHeading";
import SectionReveal from "../components/SectionReveal";

import FeaturedNews from "../components/news/FeaturedNews";
import NewsCard from "../components/news/NewsCard";

import { newsArticles, newsCategories } from "../data/newsData";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("All");

  const featuredArticle = newsArticles.find((article) => article.featured);

  const latestArticles = useMemo(() => {
    const articles = newsArticles.filter((article) => !article.featured);

    if (activeCategory === "All") {
      return articles;
    }

    return articles.filter(
      (article) => article.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* Page Hero */}

      {/* Featured Story */}
      {featuredArticle && (
        <section className="bg-[#F7F6F2] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionReveal>
              <div className="mb-10 flex items-end justify-between gap-5">
                <SectionHeading
                  eyebrow="The Latest"
                  title="Featured Story"
                  description="A closer look at an important development from the university."
                />

                <Newspaper
                  size={42}
                  strokeWidth={1}
                  className="mb-2 hidden text-[#B38A49] sm:block"
                />
              </div>
            </SectionReveal>

            <FeaturedNews article={featuredArticle} />
          </div>
        </section>
      )}

      {/* Latest News */}
      <section
        id="news-list"
        className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionReveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="From the University"
                title="Latest News & Updates"
                description="Stay informed about academic activities, university developments, research, and community initiatives."
              />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A27C3D]">
                Newsroom / RMU
              </p>
            </div>
          </SectionReveal>

          {/* Category filters */}
          <SectionReveal delay={0.1}>
            <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-[#E8E5DE] pb-6">
              {newsCategories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={`px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[#142B46] text-[#E5C786]"
                        : "border border-[#E5E0D5] bg-white text-[#647184] hover:border-[#B38A49] hover:text-[#142B46]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </SectionReveal>

          {/* News count */}
          <div className="mb-8 mt-8 flex items-center justify-between">
            <p className="text-sm text-[#748092]">
              Showing{" "}
              <span className="font-semibold text-[#142B46]">
                {latestArticles.length}
              </span>{" "}
              {latestArticles.length === 1 ? "story" : "stories"}
            </p>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A27C3D]">
              Latest first
            </span>
          </div>

          {/* News grid */}
          {latestArticles.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {latestArticles.map((article, index) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <div className="border border-dashed border-[#D8D2C5] py-20 text-center">
              <Newspaper
                size={35}
                className="mx-auto text-[#B38A49]"
                strokeWidth={1.3}
              />
              <h3 className="mt-5 font-serif text-2xl text-[#142B46]">
                No stories found
              </h3>
              <p className="mt-2 text-sm text-[#748092]">
                There are currently no stories in this category.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="mt-6 text-sm font-semibold text-[#A27C3D] hover:text-[#142B46]"
              >
                View all news
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Editorial CTA */}
      <section className="bg-[#F7F6F2] px-6 py-16 sm:px-10 lg:px-16">
        <SectionReveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border-l-2 border-[#B38A49] bg-white px-7 py-10 shadow-sm sm:flex-row sm:items-center sm:px-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A27C3D]">
                Explore More
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-[#142B46] sm:text-3xl">
                Discover What's Happening at RMU
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#748092]">
                Explore university events, academic activities, and research
                developments.
              </p>
            </div>

            <Link
              to="/events"
              className="group inline-flex shrink-0 items-center gap-3 bg-[#142B46] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#A27C3D]"
            >
              Explore Events
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}