import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Microscope,
  HeartPulse,
  Building2,
  BookOpen,
  Stethoscope,
  Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import SectionReveal from "../components/SectionReveal";

const heroImage =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=85";

const overviewImage =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85";

const academicImage =
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=85";

const highlights = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Medical Education",
    description:
      "Supporting academic development and professional learning in the field of medical and health sciences.",
  },
  {
    number: "02",
    icon: Microscope,
    title: "Research & Innovation",
    description:
      "Encouraging scientific inquiry, knowledge development, and research-led academic advancement.",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Healthcare Advancement",
    description:
      "Contributing to the development of skilled healthcare professionals and improved healthcare practices.",
  },
];

const academicFeatures = [
  {
    icon: BookOpen,
    title: "Academic Development",
    description:
      "A structured academic environment focused on medical and health sciences education.",
  },
  {
    icon: Stethoscope,
    title: "Professional Learning",
    description:
      "An emphasis on developing knowledge and practical capabilities for healthcare professions.",
  },
  {
    icon: Building2,
    title: "Institutional Collaboration",
    description:
      "Connecting academic activities with affiliated institutions and the wider healthcare community.",
  },
];

const aboutLinks = [
  {
    number: "01",
    title: "Mission & Vision",
    description: "Discover the university's guiding principles and aspirations.",
    href: "/mission-vision",
  },
  {
    number: "02",
    title: "History & Background",
    description: "Explore the university's establishment and institutional journey.",
    href: "/history",
  },
  {
    number: "03",
    title: "Campus & Facilities",
    description: "Learn about the university's campus environment and facilities.",
    href: "/campus-facilities",
  },
];

export default function UniversityOverview() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* Hero */}
      <PageHero
        eyebrow="About Rajshahi Medical University"
        title="An Overview of Our University"
        description="Discover the institution, its academic role, and its contribution to medical education and healthcare development."
        image={heroImage}
        currentPage="University Overview"
      />

      {/* Introduction */}
      <section className="bg-[#F7F6F2] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionReveal direction="right">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-4 -top-4 h-32 w-32 border-l-2 border-t-2 border-[#B38A49]/70 sm:-left-6 sm:-top-6" />

              <img
                src={overviewImage}
                alt="Medical professionals working in a healthcare environment"
                className="relative z-10 h-[340px] w-full object-cover shadow-xl sm:h-[440px]"
              />

              <div className="absolute -bottom-5 -right-4 z-20 hidden h-32 w-32 border-b-2 border-r-2 border-[#B38A49]/70 sm:block" />

              <div className="absolute -bottom-7 left-5 z-20 bg-[#142B46] px-6 py-4 text-white shadow-lg sm:left-8">
                <p className="font-serif text-xl font-semibold">
                  RMU
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#E5C786]">
                  Academic Excellence
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.15}>
            <div className="pt-5 lg:pt-0">
              <SectionHeading
                eyebrow="Who We Are"
                title="Advancing the Future of Medical Education"
              />

              <p className="mt-7 text-sm leading-8 text-[#647184] sm:text-base">
                Rajshahi Medical University is an institution dedicated to
                medical education and the advancement of health sciences.
                Through its academic activities and institutional
                relationships, the university contributes to the development
                of future healthcare professionals.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#647184] sm:text-base">
                Its academic environment brings together education, research,
                and professional development, with an emphasis on building
                knowledge and supporting the healthcare sector.
              </p>

              <Link
                to="/mission-vision"
                className="group mt-8 inline-flex items-center gap-3 border-b border-[#B38A49] pb-2 text-sm font-semibold text-[#142B46] transition hover:text-[#A27C3D]"
              >
                Discover our guiding principles
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Institutional highlights */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionReveal>
            <SectionHeading
              centered
              eyebrow="Our Institutional Focus"
              title="Three Pillars of Academic Progress"
              description="An institutional focus on education, research, and the development of healthcare professionals."
            />
          </SectionReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <SectionReveal key={item.number} delay={index * 0.12}>
                  <motion.article
                    whileHover={{ y: -9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative h-full overflow-hidden border border-[#E8E5DE] bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-10"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 -translate-y-10 translate-x-10 rounded-full bg-[#F4F0E7] transition-transform duration-500 group-hover:scale-[2.5]" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center bg-[#142B46] text-[#E5C786] transition-colors duration-300 group-hover:bg-[#A27C3D] group-hover:text-white">
                          <Icon size={25} strokeWidth={1.6} />
                        </div>

                        <span className="font-serif text-3xl text-[#D9D3C7]">
                          {item.number}
                        </span>
                      </div>

                      <h3 className="mt-10 font-serif text-2xl font-semibold text-[#142B46]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#748092]">
                        {item.description}
                      </p>

                      <div className="mt-8 h-[2px] w-10 bg-[#B38A49] transition-all duration-300 group-hover:w-20" />
                    </div>
                  </motion.article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic role */}
      <section className="bg-[#142B46] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionReveal direction="right">
            <div>
              <SectionHeading
                eyebrow="Academic Environment"
                title="Connecting Knowledge with Professional Practice"
                description="Medical education extends beyond the classroom. It brings together academic knowledge, practical learning, research, and professional development."
                light
              />

              <div className="mt-10 space-y-7">
                {academicFeatures.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.12 }}
                      className="flex gap-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#E5C786]/40 text-[#E5C786]">
                        <Icon size={21} strokeWidth={1.6} />
                      </div>

                      <div>
                        <h3 className="font-serif text-lg font-semibold">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-white/60">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.15}>
            <div className="relative">
              <img
                src={academicImage}
                alt="Medical education and professional learning"
                className="h-[380px] w-full object-cover sm:h-[500px]"
              />

              <div className="absolute -bottom-5 -left-5 hidden border border-[#E5C786]/40 bg-[#0B2036] p-7 sm:block">
                <Landmark className="mb-3 text-[#E5C786]" size={27} />
                <p className="font-serif text-lg font-semibold">
                  Knowledge
                </p>
                <p className="mt-1 text-xs tracking-wide text-white/60">
                  Education · Research · Development
                </p>
              </div>

              <div className="absolute inset-0 border border-white/10" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Explore other About pages */}
      <section className="bg-[#F7F6F2] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionReveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Explore Further"
                title="Get to Know RMU"
                description="Explore more about the university through these dedicated sections."
              />

              <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-[#A27C3D] md:block">
                About the University
              </span>
            </div>
          </SectionReveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {aboutLinks.map((item, index) => (
              <SectionReveal key={item.number} delay={index * 0.12}>
                <Link
                  to={item.href}
                  className="group flex h-full min-h-[220px] flex-col justify-between border border-[#E5E0D5] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#B38A49] hover:shadow-xl sm:p-9"
                >
                  <div>
                    <span className="font-serif text-4xl text-[#D8C9AC]">
                      {item.number}
                    </span>

                    <h3 className="mt-6 font-serif text-2xl font-semibold text-[#142B46] transition-colors group-hover:text-[#A27C3D]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#748092]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#A27C3D]">
                      Explore
                    </span>

                    <ArrowRight
                      size={19}
                      className="text-[#142B46] transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}