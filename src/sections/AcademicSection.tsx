import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Stethoscope,
  Microscope,
  BookOpen,
} from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const programs = [
  {
    title: "Undergraduate Medical Education",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
    icon: Stethoscope,
    href: "#contact",
  },
  {
    title: "Dental Education",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85",
    icon: BookOpen,
    href: "#contact",
  },
  {
    title: "Postgraduate Medical Education",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    icon: GraduationCap,
    href: "#contact",
  },
  {
    title: "Medical Research",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
    icon: Microscope,
    href: "#research",
  },
];

export default function AcademicSection() {
  return (
    <section
      id="academics"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Academic Pathways Heading */}
        <div className="mt-20 flex items-center justify-between gap-4">
          <SectionReveal>
            <h3 className="font-serif text-2xl font-bold text-[#142B46] sm:text-3xl">
              Academic Pathways
            </h3>
          </SectionReveal>

          <div className="hidden h-px flex-1 bg-[#142B46]/10 sm:ml-10 sm:block" />
        </div>

        {/* Academic Cards */}
        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <SectionReveal
                key={program.title}
                delay={index * 0.12}
                className="h-full"
              >
                <motion.article
                  whileHover={{ y: -9 }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-full flex-col overflow-hidden border border-[#142B46] bg-[#142B46] shadow-md transition-all duration-300 hover:border-[#B28B4B] hover:shadow-xl hover:shadow-[#142B46]/20"
                >

                  {/* Card Image */}
                  <div className="relative aspect-[5/3] overflow-hidden bg-[#142B46]">

                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-[#102B46]/10 transition-colors duration-300 group-hover:bg-[#102B46]/30" />

                    <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center border border-white/30 bg-[#142B46]/90 text-[#E5C66D] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#C9A227] group-hover:text-[#142B46]">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col bg-[#142B46] p-6">

                    <h4 className="min-h-[56px] font-serif text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#E5C66D]">
                      {program.title}
                    </h4>

                    <a
                      href={program.href}
                      className="mt-7 flex items-center justify-between border-t border-white/15 pt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E5C66D] transition-colors hover:text-white"
                    >
                      Explore More

                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
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