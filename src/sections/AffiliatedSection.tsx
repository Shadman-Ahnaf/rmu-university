
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Stethoscope,
  Building2,
} from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const institutions = [
  {
    title: "Medical Colleges",
    subtitle: "Medical Education",
    description: "Institutions dedicated to developing future medical professionals.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85",
    icon: Stethoscope,
    accent: "bg-[#DCEAF5] text-[#174A70]",
  },
  {
    title: "Dental Colleges",
    subtitle: "Dental Education",
    description: "Supporting professional education in dental healthcare.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85",
    icon: GraduationCap,
    accent: "bg-[#F5E8D2] text-[#9A692B]",
  },
  {
    title: "Postgraduate Institutes",
    subtitle: "Advanced Learning",
    description: "Encouraging advanced learning and professional development.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    icon: Building2,
    accent: "bg-[#DCEDE6] text-[#28745B]",
  },
];

export default function AffiliatedSection() {
  return (
    <section
      id="institutions"
      className="overflow-hidden bg-[#F7F6F2] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <SectionReveal>
          <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#A77A32]">
                Our Academic Network
              </span>

              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#142B46] md:text-5xl">
                A Network of
                <span className="block text-[#A77A32]">
                  Medical Excellence.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#647184]">
              Connecting institutions through medical education,
              professional development, and academic collaboration.
            </p>
          </div>
        </SectionReveal>

        {/* Institution cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {institutions.map((institution, index) => {
            const Icon = institution.icon;

            return (
              <SectionReveal
                key={institution.title}
                delay={index * 0.12}
              >
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(20,43,70,0.06)]"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={institution.image}
                      alt={institution.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#102B46]/75 via-transparent to-transparent" />

                    <div
                      className={`absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl ${institution.accent}`}
                    >
                      <Icon size={23} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A77A32]">
                      {institution.subtitle}
                    </span>

                    <h3 className="mb-3 text-xl font-semibold text-[#142B46]">
                      {institution.title}
                    </h3>

                    <p className="mb-6 text-sm leading-6 text-[#718096]">
                      {institution.description}
                    </p>

                    <a
                      href="#academics"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#174A70] transition-all duration-300 group-hover:gap-4"
                    >
                      Explore More
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </motion.article>
              </SectionReveal>
            );
          })}
        </div>

        {/* Bottom accent */}
        <SectionReveal>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#142B46] px-7 py-8 text-center sm:flex-row sm:text-left md:px-10">
            <div>
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                Explore the RMU academic network
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Discover academic opportunities and institutional connections.
              </p>
            </div>

            <a
              href="#academics"
              className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#D5A64A] px-6 py-3 text-sm font-semibold text-[#142B46] transition-colors hover:bg-[#E7BD70]"
            >
              Explore Academics
              <ArrowUpRight size={18} />
            </a>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
