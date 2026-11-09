
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react";

import type { DepartmentTab } from "../../data/departments/medicineData";

// ============================================
// DEPARTMENT HERO
// ============================================

type HeroImage = {
  src: string;
  alt: string;
};

type HeroProps = {
  title?: string;
  subtitle?: string;
  images: HeroImage[];
};

export function DepartmentHero({ images }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % images.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <section
      aria-label="Department of Medicine"
      className="relative flex h-[320px] items-center justify-center overflow-hidden bg-[#0B2036] sm:h-[360px] lg:h-[400px]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${images[activeSlide]?.src}")`,
          }}
        />
      </AnimatePresence>

      {/* Image overlay */}
      <div className="absolute inset-0 bg-[#071A30]/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#071A30]/25 via-transparent to-[#071A30]/50" />

      {/* Centered heading */}
      <div className="relative z-10 px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#E5C786] sm:text-sm"
        >
          Welcome
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-3xl font-semibold tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Department of Medicine
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 h-[2px] w-16 bg-[#D5B46A]"
        />
      </div>
    </section>
  );
}

// ============================================
// DEPARTMENT NOTICE TICKER
// ============================================

export function DepartmentNoticeTicker({
  notices,
}: {
  notices: string[];
}) {
  const repeatedNotices = [...notices, ...notices];

  return (
    <section
      aria-label="Department announcements"
      className="relative flex min-h-[52px] items-center overflow-hidden border-b border-[#D5B46A]/30 bg-[#102943] text-white"
    >
      <div className="relative z-10 flex min-h-[52px] shrink-0 items-center gap-2 bg-[#B38A49] px-4 text-[#102943] shadow-[8px_0_20px_rgba(0,0,0,0.15)] sm:px-6">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#102943]" />

        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] sm:text-xs">
          Latest Notices
        </span>
      </div>

      <div className="min-w-0 flex-1 overflow-hidden">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {repeatedNotices.map((notice, index) => (
            <div
              key={`${notice}-${index}`}
              className="flex shrink-0 items-center gap-4 px-5 sm:px-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5B46A]" />

              <span className="whitespace-nowrap text-xs font-medium text-white/85 sm:text-[13px]">
                {notice}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// DEPARTMENT NAVIGATION
// ============================================

export function DepartmentNavigation({
  activeTab,
  onTabChange,
}: {
  activeTab: DepartmentTab;
  onTabChange: (tab: DepartmentTab) => void;
}) {
  const tabs: { label: DepartmentTab; icon: typeof BookOpen }[] = [
    { label: "Overview", icon: Building2 },
    { label: "Research", icon: BookOpen },
    { label: "Gallery", icon: Stethoscope },
    { label: "Notices", icon: CalendarDays },
  ];

  return (
    <nav
      aria-label="Department sections"
      className="sticky top-0 z-30 border-b border-[#DCE2E8] bg-white/95 shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl overflow-x-auto px-3 sm:px-8 lg:px-12">
        {tabs.map(({ label, icon: Icon }) => {
          const isActive = activeTab === label;

          return (
            <button
              key={label}
              type="button"
              onClick={() => onTabChange(label)}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex shrink-0 items-center gap-2 px-4 py-4 text-xs font-bold transition-all duration-200 sm:px-6 sm:text-sm ${
                isActive
                  ? "text-[#142B46]"
                  : "text-[#718096] hover:text-[#B38A49]"
              }`}
            >
              <Icon
                size={15}
                className={isActive ? "text-[#B38A49]" : "text-current"}
              />

              {label}

              {isActive && (
                <motion.span
                  layoutId="department-active-tab"
                  className="absolute bottom-0 left-3 right-3 h-[3px] rounded-t-full bg-[#B38A49]"
                  transition={{ duration: 0.25 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

// ============================================
// REUSABLE SECTION HEADING
// ============================================

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#B38A49] sm:text-xs">
        {eyebrow}
      </p>

      <h2 className="font-serif text-2xl font-semibold text-[#142B46] sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#68778A]">
          {description}
        </p>
      )}

      <div className="mt-4 h-[2px] w-14 bg-[#B38A49]" />
    </div>
  );
}

// ============================================
// DEPARTMENT HEAD
// ============================================

export function DepartmentHead({
  head,
}: {
  head: {
    name: string;
    designation: string;
    image: string;
    message: string;
  };
}) {
  return (
    <section className="grid overflow-hidden rounded-sm border border-[#E4E8ED] bg-white shadow-[0_12px_40px_rgba(20,43,70,0.06)] lg:grid-cols-[0.8fr_1.7fr]">
      <div className="relative min-h-[300px] overflow-hidden bg-[#E9EEF3] sm:min-h-[360px]">
        <img
          src={head.image}
          alt="Demonstration portrait of a department head"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2036]/80 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5C786]">
            Department Leadership
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {head.name}
          </p>

          <p className="mt-1 text-xs text-white/75">
            {head.designation}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
        <SectionHeading
          eyebrow="Message from the Head"
          title="A Commitment to Excellence"
        />

        <div className="mb-5 h-8 w-8 font-serif text-5xl leading-none text-[#D5B46A]">
          “
        </div>

        <p className="text-sm leading-7 text-[#596A7D] sm:text-[15px] sm:leading-8">
          {head.message}
        </p>

        <div className="mt-7 flex items-center gap-3">
          <span className="h-px w-9 bg-[#B38A49]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#142B46]">
            Department of Medicine
          </span>
        </div>
      </div>
    </section>
  );
}

// ============================================
// ANIMATED NUMBER COUNTER
// ============================================

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString("en-US")
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, count, value]);

  return (
    <span className="inline-flex items-baseline">
      <motion.span ref={ref}>{rounded}</motion.span>

      <span className="ml-1 text-[#E5C786]">{suffix}</span>
    </span>
  );
}

// ============================================
// DEPARTMENT AT A GLANCE
// ============================================

export function DepartmentAtGlance({
  items,
}: {
  items: {
    label: string;
    value: number;
    suffix: string;
  }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0B2036] via-[#142F50] to-[#173D60] py-16 sm:py-20 lg:py-24">

      {/* Decorative gradient highlights */}
      <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-[#B38A49]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-48 right-0 h-96 w-96 rounded-full bg-[#4B83AC]/20 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5C786] sm:text-xs">
            Department Information
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Medicine at a Glance
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-14 bg-[#D5B46A]" />
        </div>

        {/* Five information points */}
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-5 lg:gap-y-0">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`relative flex flex-col items-center justify-center px-3 text-center ${
                index === 4 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Desktop separators */}
              {index > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/15 lg:block" />
              )}

              <div className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[52px]">
                <AnimatedNumber
                  value={item.value}
                  suffix={item.suffix}
                />
              </div>

              <div className="mt-4 h-[2px] w-8 bg-[#D5B46A]" />

              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#E5C786] sm:text-xs">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-[10px] text-white/45">
          Department statistics are illustrative and subject to official verification.
        </p>
      </div>
    </section>
  );
}

// ============================================
// DEPARTMENT CONTACT
// ============================================

export function DepartmentContact({
  contact,
}: {
  contact: {
    office: string;
    location: string;
    email: string;
    phone: string;
    hours: string;
  };
}) {
  const contactItems = [
    {
      icon: MapPin,
      label: "Office Location",
      value: contact.location,
    },
    {
      icon: Mail,
      label: "Email Address",
      value: contact.email,
    },
    {
      icon: Phone,
      label: "Telephone",
      value: contact.phone,
    },
    {
      icon: Clock3,
      label: "Office Hours",
      value: contact.hours,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Contact the Department"
            />

            <p className="text-sm font-semibold text-[#142B46]">
              {contact.office}
            </p>

            <p className="mt-3 text-sm leading-7 text-[#748194]">
              For academic enquiries and departmental communication, please
              contact the department office.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A27C3D]">
              Department Office
              <ArrowUpRight size={15} />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex gap-4 border border-[#E4E8ED] bg-[#FAFBFC] p-5 transition-colors hover:border-[#D5B46A]/70 hover:bg-[#F8F5EF]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#142B46] text-[#E5C786]">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A865E]">
                    {label}
                  </p>

                  <p className="mt-2 break-words text-xs leading-5 text-[#40536A]">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 border-t border-[#E8EBEF] pt-5 text-center text-[10px] leading-5 text-[#98A1AC]">
          Department contact information shown here is for demonstration only
          and must be replaced with verified RMU details.
        </p>
      </div>
    </section>
  );
}
