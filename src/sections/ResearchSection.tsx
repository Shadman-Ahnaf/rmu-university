
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Microscope,
  Dna,
  HeartPulse,
} from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const researchAreas = [
  {
    title: "Medical Research",
    description: "Advancing medical knowledge through research.",
    icon: Microscope,
    color: "bg-[#DCEAF5]",
    iconColor: "text-[#174A70]",
  },
  {
    title: "Biomedical Science",
    description: "Exploring science behind better healthcare.",
    icon: Dna,
    color: "bg-[#F5E8D2]",
    iconColor: "text-[#9A692B]",
  },
  {
    title: "Public Health",
    description: "Building healthier communities through research.",
    icon: HeartPulse,
    color: "bg-[#DCEDE6]",
    iconColor: "text-[#28745B]",
  },
];

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-[#102B46] py-20 text-white md:py-28"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#D5A64A]/20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section heading */}
        <SectionReveal>
          <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D5A64A]">
                Research & Innovation
              </span>

              <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
                Research Today.
                <span className="block text-[#D5A64A]">
                  Better Healthcare Tomorrow.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/65">
              Supporting scientific discovery and research that contributes
              to better healthcare.
            </p>
          </div>
        </SectionReveal>

        {/* Main research feature */}
        <SectionReveal direction="up">
          <div className="group relative mb-12 h-[300px] overflow-hidden rounded-2xl md:h-[430px]">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=85"
              alt="Medical researchers working in a laboratory"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#071C30]/95 via-[#071C30]/55 to-transparent" />

            <div className="absolute bottom-0 left-0 max-w-xl p-7 sm:p-10 md:p-14">
              <span className="mb-4 inline-block rounded-full border border-[#D5A64A]/50 px-4 py-1.5 text-xs font-medium text-[#E6BD70]">
                DISCOVER & INNOVATE
              </span>

              <h3 className="mb-5 text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl">
                Turning scientific ideas into meaningful impact.
              </h3>

              <a
                href="#research-areas"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E6BD70] transition-all hover:gap-4"
              >
                Explore Research
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </SectionReveal>

        {/* Research focus areas */}
        <div id="research-areas">
          <SectionReveal>
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-xl font-semibold md:text-2xl">
                Research Focus Areas
              </h3>
              <span className="hidden text-xs uppercase tracking-widest text-white/40 sm:block">
                Explore our interests
              </span>
            </div>
          </SectionReveal>

          <div className="grid gap-4 md:grid-cols-3">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <SectionReveal key={area.title} delay={index * 0.12}>
                  <motion.div
                    whileHover={{ y: -7 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-full items-start gap-5 rounded-xl border border-white/10 bg-white/[0.06] p-6 transition-colors duration-300 hover:border-[#D5A64A]/50 hover:bg-white/[0.10] md:p-7"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${area.color}`}
                    >
                      <Icon size={23} className={area.iconColor} />
                    </div>

                    <div className="flex-1">
                      <h4 className="mb-2 text-lg font-semibold">
                        {area.title}
                      </h4>

                      <p className="text-sm leading-6 text-white/55">
                        {area.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-[#D5A64A]"
                    />
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
