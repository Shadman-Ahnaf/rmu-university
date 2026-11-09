
import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const leaders = [
  {
    name: "Professor Dr. A. Rahman",
    designation: "Vice-Chancellor",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85",
    message:
      "Rajshahi Medical University is committed to advancing medical education, encouraging meaningful research and preparing skilled healthcare professionals. Together, we aspire to build a stronger foundation for healthcare and academic excellence.",
  },
  {
    name: "Professor Dr. S. Ahmed",
    designation: "Pro Vice-Chancellor",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=85",
    message:
      "Our commitment is to create an academic environment where knowledge, innovation and professional values come together. We look forward to supporting our students, teachers and researchers in their journey towards excellence.",
  },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-gradient-to-br from-[#0B2036] via-[#142B46] to-[#174A70] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full border border-white/[0.07]" />
      <div className="pointer-events-none absolute -right-32 -bottom-40 h-[450px] w-[450px] rounded-full border border-[#E5C786]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <SectionReveal>
          <div className="mb-12 md:mb-16">

            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              University Leadership
            </h2>
          </div>
        </SectionReveal>

        {/* Leadership Cards */}
        <div className="grid gap-7 lg:grid-cols-2">
          {leaders.map((leader, index) => (
            <SectionReveal
              key={leader.designation}
              delay={index * 0.15}
              className="h-full"
            >
              <motion.article
                whileHover={{ y: -7 }}
                transition={{ duration: 0.3 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] shadow-xl shadow-black/10 backdrop-blur-sm transition-colors duration-300 hover:border-[#E5C786]/40 hover:bg-white/[0.11] sm:flex-row"
              >

                {/* Profile Image */}
                <div className="relative h-64 shrink-0 overflow-hidden sm:h-auto sm:min-h-[340px] sm:w-[36%]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2036]/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#142B46]/30" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-block rounded-md border border-white/20 bg-[#142B46]/85 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#E5C786] backdrop-blur-md">
                      {leader.designation}
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                  <Quote
                    size={30}
                    className="mb-5 text-[#E5C786]/80"
                    strokeWidth={1.5}
                  />

                  <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                    Message from the
                    <span className="block text-[#E5C786]">
                      {leader.designation}
                    </span>
                  </h3>

                  <p className="mt-5 flex-1 text-sm leading-7 text-white/75">
                    {leader.message}
                  </p>

                  <div className="mt-7 border-t border-white/15 pt-5">
                    <h4 className="text-sm font-semibold text-white">
                      {leader.name}
                    </h4>

                    <span className="mt-1 block text-[10px] uppercase tracking-[0.15em] text-[#E5C786]">
                      {leader.designation}
                    </span>
                  </div>
                </div>

              </motion.article>
            </SectionReveal>
          ))}
        </div>

        {/* Demonstration Content Note */}
        <p className="mt-8 text-center text-[10px] leading-5 text-white/40">
          Leadership names, photographs and messages are demonstration
          content and must be replaced with verified university information.
        </p>

      </div>
    </section>
  );
}
