
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import { medicineResearch } from "../data/departments/researchData";

const featuredResearch = medicineResearch.slice(0, 3);

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-[#071C30] py-20 text-white md:py-28"
    >
      {/* Research Background Image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2000&q=85"
          alt=""
          className="h-full w-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-[#071C30]/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <SectionReveal>
          <div className="mb-12 md:mb-16">
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
              Research Today.
              <span className="block text-[#D5A64A]">
                Better Healthcare Tomorrow.
              </span>
            </h2>
          </div>
        </SectionReveal>

        {/* Featured Research Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResearch.map((research, index) => (
            <SectionReveal
              key={research.id}
              delay={index * 0.12}
              className="h-full"
            >
              <motion.a
                href="/research"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative block h-[300px] overflow-hidden rounded-xl border border-white/10 bg-[#142B46] shadow-lg shadow-black/10 sm:h-[340px] lg:h-[370px]"
              >
                {/* Research Image */}
                <img
                  src={research.image}
                  alt={research.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C30] via-[#071C30]/15 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Research Title */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#E5C786] sm:text-2xl">
                    {research.title}
                  </h3>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#E5C786] backdrop-blur-sm transition-all duration-300 group-hover:border-[#D5A64A] group-hover:bg-[#D5A64A] group-hover:text-[#142B46]">
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </motion.a>
            </SectionReveal>
          ))}
        </div>

        {/* Explore Research */}
        <SectionReveal delay={0.2}>
          <div className="mt-12 flex justify-start">
            <a
              href="/research"
              className="group inline-flex items-center gap-3 border-b border-[#D5A64A] pb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E5C786] transition-colors duration-300 hover:text-white"
            >
              Explore Research

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
