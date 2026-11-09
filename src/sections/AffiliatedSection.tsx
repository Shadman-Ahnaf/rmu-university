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
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85",
    icon: Stethoscope,
    accent: "bg-[#DCEAF5] text-[#174A70]",
  },
  {
    title: "Dental Colleges",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85",
    icon: GraduationCap,
    accent: "bg-[#F5E8D2] text-[#9A692B]",
  },
  {
    title: "Postgraduate Institutes",
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

        {/* Section Heading */}
        <SectionReveal>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#142B46] md:text-5xl">
            A Network of
            <span className="block text-[#A77A32]">
              Medical Excellence.
            </span>
          </h2>
        </SectionReveal>

        {/* Institution Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
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

                  {/* Card Content */}
                  <div className="flex items-center justify-between gap-4 p-6 md:p-7">
                    <h3 className="text-xl font-semibold text-[#142B46] transition-colors duration-300 group-hover:text-[#A77A32]">
                      {institution.title}
                    </h3>

                    <a
                      href="#academics"
                      aria-label={`Explore ${institution.title}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F3F6] text-[#174A70] transition-all duration-300 group-hover:bg-[#142B46] group-hover:text-white"
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  </div>
                </motion.article>
              </SectionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}