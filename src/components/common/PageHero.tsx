import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  currentPage: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  currentPage,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[540px] items-end overflow-hidden bg-[#0B2036] text-white sm:min-h-[600px] lg:min-h-[650px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#07182B]/95 via-[#0B2036]/70 to-[#0B2036]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07182B]/80 via-transparent to-[#07182B]/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-10 lg:px-16 lg:pb-24">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Breadcrumb"
          className="mb-10 flex items-center gap-2 text-xs font-medium tracking-wide text-white/70"
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 transition hover:text-[#E5C786]"
          >
            <Home size={14} />
            Home
          </Link>

          <ChevronRight size={13} />

          <span className="text-[#E5C786]">{currentPage}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C786] sm:text-sm">
            {eyebrow}
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-7xl">
            {title}
          </h1>

          <div className="my-7 h-[2px] w-16 bg-[#D9B66F]" />

          <p className="max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8 lg:text-lg">
            {description}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#A27C3D] via-[#E5C786] to-transparent" />
    </section>
  );
}