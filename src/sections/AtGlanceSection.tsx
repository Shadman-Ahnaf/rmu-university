
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";

const statistics = [
  {
    label: "Current Departments",
    value: 12,
  },
  {
    label: "Current Faculties",
    value: 8,
  },
  {
    label: "Current Researches",
    value: 150,
  },
  {
    label: "Current Students",
    value: 5000,
  },
];

export default function AtGlanceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);

  const [counts, setCounts] = useState<number[]>(
    statistics.map(() => 0)
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const resetCounts = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      setCounts(statistics.map(() => 0));
    };

    const startCounting = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      const duration = 1800;
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;

        const progress = Math.min(
          (timestamp - startTime) / duration,
          1
        );

        // Smooth ease-out animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCounts(
          statistics.map((item) =>
            Math.floor(item.value * easedProgress)
          )
        );

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          frameRef.current = null;
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        } else {
          resetCounts();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="at-a-glance"
      className="relative isolate overflow-hidden bg-[#F5F8FC] py-20 sm:py-24 lg:py-28"
    >
      {/* Soft Blue Background Elements */}
      <div className="pointer-events-none absolute -right-32 -top-40 h-[450px] w-[450px] rounded-full bg-[#A9C9E5] opacity-100 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#B9D4EA] opacity-100 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <SectionReveal>
          <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-[#A27C3D]">
                RMU in Numbers
              </span>

              <h2 className="font-serif text-3xl font-bold text-[#142B46] sm:text-4xl lg:text-5xl">
                At a Glance
              </h2>
            </div>

            <div className="hidden h-px flex-1 bg-[#142B46]/10 sm:mb-3 sm:ml-10 sm:block" />
          </div>
        </SectionReveal>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {statistics.map((item, index) => (
            <SectionReveal
              key={item.label}
              delay={index * 0.12}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -7 }}
                transition={{ duration: 0.3 }}
                className="group flex h-full flex-col items-center justify-center border-b border-[#142B46]/10 px-4 pb-8 text-center transition-colors duration-300 hover:border-[#B38A49] sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pb-4 lg:px-3"
              >
                <span className="mb-5 h-1 w-10 rounded-full bg-[#B38A49] transition-all duration-300 group-hover:w-16" />

                <p className="text-sm font-medium tracking-wide text-[#647184]">
                  {item.label}
                </p>

                <div className="mt-3 flex items-baseline justify-center gap-1">
                  <span className="font-serif text-5xl font-bold tabular-nums tracking-tight text-[#142B46] transition-colors duration-300 group-hover:text-[#A27C3D] sm:text-5xl lg:text-4xl xl:text-5xl">
                    {counts[index].toLocaleString("en-US")}
                  </span>

                  <span className="text-2xl font-bold text-[#B38A49]">
                    +
                  </span>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
