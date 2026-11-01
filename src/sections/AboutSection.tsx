
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Microscope,
  HeartPulse,
} from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const highlights = [
  {
    icon: GraduationCap,
    title: "Medical Education",
    description: "Supporting academic learning and professional development.",
  },
  {
    icon: Microscope,
    title: "Research & Innovation",
    description: "Encouraging scientific inquiry and medical advancement.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Excellence",
    description: "Contributing to a stronger healthcare education ecosystem.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F6F2] py-24 sm:py-28 lg:py-36"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#B28B4B]/10" />
      <div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full border border-[#B28B4B]/10" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: Image Composition */}
          <SectionReveal direction="right">
            <div className="relative mx-auto w-full max-w-[570px]">

              {/* Main Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#D9D7CE]">
                <motion.img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
                  alt="Medical professionals working in a clinical environment"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7 }}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102B55]/35 to-transparent" />

                <div className="absolute bottom-7 left-7 border-l-2 border-[#D6B45B] pl-4 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F0D68C]">
                    Our Vision
                  </p>
                  <p className="mt-2 max-w-[230px] font-serif text-xl leading-snug">
                    Advancing knowledge. Inspiring better healthcare.
                  </p>
                </div>
              </div>

              {/* Floating Secondary Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-10 -right-3 w-[43%] border-[7px] border-[#F7F6F2] shadow-2xl sm:-right-8"
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=85"
                    alt="Scientific research laboratory"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Decorative Gold Frame */}
              <div className="pointer-events-none absolute -left-4 -top-4 -z-0 h-32 w-32 border-l-2 border-t-2 border-[#B28B4B] sm:-left-6 sm:-top-6" />

              {/* Image Caption */}
              <div className="absolute -bottom-16 left-0 hidden text-[9px] uppercase tracking-[0.2em] text-[#8C806C] sm:block">
                Knowledge · Discovery · Service
              </div>
            </div>
          </SectionReveal>

          {/* RIGHT: Content */}
          <div className="pt-5 lg:pt-0">

            <SectionReveal direction="left">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B28B4B]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A27C3D]">
                  Discover RMU
                </span>
              </div>

              <h2 className="max-w-xl font-serif text-4xl font-bold leading-[1.2] text-[#142B46] sm:text-5xl lg:text-[54px]">
                A Commitment to
                <span className="mt-2 block font-normal italic text-[#A27C3D]">
                  Medical Excellence.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#647184] sm:text-base">
                Rajshahi Medical University is dedicated to the advancement
                of medical education, research and healthcare. Through
                academic development and institutional collaboration,
                the university strives to contribute to the future of
                healthcare in Bangladesh.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-8 text-[#647184] sm:text-base">
                Our academic vision emphasizes knowledge, scientific
                exploration and the development of skilled healthcare
                professionals who can serve society with competence
                and responsibility.
              </p>
            </SectionReveal>

            {/* Highlights */}
            <div className="mt-10 space-y-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <SectionReveal
                    key={item.title}
                    direction="up"
                    delay={index * 0.12}
                  >
                    <motion.div
                      whileHover={{ x: 7 }}
                      transition={{ duration: 0.25 }}
                      className="group flex items-start gap-5 border-b border-[#142B46]/10 pb-6"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B28B4B]/30 bg-white text-[#A27C3D] transition-all duration-300 group-hover:border-[#142B46] group-hover:bg-[#142B46] group-hover:text-white">
                        <Icon size={21} strokeWidth={1.5} />
                      </div>

                      <div>
                        <h3 className="font-serif text-lg font-bold text-[#142B46] transition-colors group-hover:text-[#A27C3D]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs leading-6 text-[#778294] sm:text-sm">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="ml-auto mt-1 shrink-0 text-[#B28B4B] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                      />
                    </motion.div>
                  </SectionReveal>
                );
              })}
            </div>

            {/* Learn More */}
            <SectionReveal delay={0.3}>
              <a
                href="#academics"
                className="group mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#142B46] transition-colors hover:text-[#A27C3D]"
              >
                Discover Our University

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B28B4B]/50 transition-all duration-300 group-hover:border-[#142B46] group-hover:bg-[#142B46] group-hover:text-white">
                  <ArrowRight size={16} />
                </span>
              </a>
            </SectionReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
