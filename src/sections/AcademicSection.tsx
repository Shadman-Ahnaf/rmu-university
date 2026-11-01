
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
    description:
      "Explore medical education pathways focused on clinical knowledge, scientific foundations and professional development.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
    icon: Stethoscope,
    href: "#contact",
  },
  {
    title: "Dental Education",
    description:
      "Discover the academic foundations of oral health, dental sciences and clinical dental practice.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85",
    icon: BookOpen,
    href: "#contact",
  },
  {
    title: "Postgraduate Medical Education",
    description:
      "Explore advanced medical learning, specialist development and opportunities for academic growth.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    icon: GraduationCap,
    href: "#contact",
  },
  {
    title: "Medical Research",
    description:
      "Engage with scientific inquiry, medical discovery and research-driven academic development.",
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

        {/* Section Heading */}
        <SectionReveal>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B28B4B]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A27C3D]">
                  Academic Excellence
                </span>
              </div>

              <h2 className="max-w-2xl font-serif text-4xl font-bold leading-tight text-[#142B46] sm:text-5xl lg:text-6xl">
                Discover Your Path
                <span className="mt-2 block font-normal italic text-[#A27C3D]">
                  In Medical Education.
                </span>
              </h2>
            </div>

            <div className="max-w-md lg:pb-2">
              <p className="text-sm leading-8 text-[#718096] sm:text-base">
                Explore the academic disciplines and research pathways
                that contribute to the advancement of medical knowledge
                and healthcare education.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Featured Academic Banner */}
        <SectionReveal delay={0.15}>
          <div className="group relative mt-16 min-h-[340px] overflow-hidden bg-[#142B46] sm:min-h-[400px] lg:min-h-[430px]">

            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=90"
              alt="Medical education and clinical learning"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-55 transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B32] via-[#102B46]/90 to-[#102B46]/20" />

            <div className="relative flex min-h-[340px] flex-col justify-center px-7 py-14 sm:min-h-[400px] sm:px-12 lg:min-h-[430px] lg:px-16">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D6B45B]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5C66D]">
                  Academic Community
                </span>
              </div>

              <h3 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Shaping the Next Generation of
                <span className="block font-normal italic text-[#E5C66D]">
                  Healthcare Professionals.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                Building knowledge, strengthening clinical understanding
                and encouraging a culture of lifelong learning.
              </p>

              <a
                href="#about"
                className="group/link mt-9 inline-flex w-fit items-center gap-3 border-b border-[#D6B45B] pb-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-[#E5C66D]"
              >
                Explore Academic Vision
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </a>
            </div>

            <div className="absolute bottom-0 right-0 hidden border-l border-t border-white/20 bg-[#142B46]/80 px-8 py-5 backdrop-blur-md sm:block">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#E5C66D]">
                Our purpose
              </p>
              <p className="mt-1 font-serif text-lg text-white">
                Knowledge for a healthier future
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Academic Pathways Heading */}
        <div className="mt-20 flex items-center justify-between gap-4">
          <SectionReveal>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A27C3D]">
                Explore Our Disciplines
              </p>

              <h3 className="mt-3 font-serif text-2xl font-bold text-[#142B46] sm:text-3xl">
                Academic Pathways
              </h3>
            </div>
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

                  {/* Navy Card Content */}
                  <div className="flex flex-1 flex-col bg-[#142B46] p-6">

                    <h4 className="min-h-[56px] font-serif text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#E5C66D]">
                      {program.title}
                    </h4>

                    <p className="mt-4 flex-1 text-xs leading-7 text-white/65 sm:text-sm">
                      {program.description}
                    </p>

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

        {/* Bottom Note */}
        <SectionReveal delay={0.2}>
          <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-[#142B46]/10 pt-7 sm:flex-row sm:items-center">

            <p className="max-w-2xl text-xs leading-6 text-[#8490A0]">
              Academic program descriptions are introductory placeholders
              and will be aligned with RMU's officially published offerings.
            </p>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#142B46] transition-colors hover:text-[#A27C3D]"
            >
              Academic Information

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
