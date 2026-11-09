
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
} from "lucide-react";

const contactDetails = [
  {
    title: "General Enquiries",
    role: "Information Desk",
    name: "Ms. Nusrat Jahan",
    phone: "+880 1700-000001",
    email: "info@rmu-demo.example",
    icon: Phone,
  },
  {
    title: "Admission Office",
    role: "Admission Information",
    name: "Mr. Tanvir Hasan",
    phone: "+880 1700-000002",
    email: "admissions@rmu-demo.example",
    icon: Building2,
  },
  {
    title: "Registrar's Office",
    role: "Administrative Enquiries",
    name: "Dr. Farhana Rahman",
    phone: "+880 1700-000003",
    email: "registrar@rmu-demo.example",
    icon: Mail,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const mapUrl =
    "https://www.google.com/maps?q=Rajshahi+Medical+University+Rajshahi&output=embed";

  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Rajshahi+Medical+University+Rajshahi";

  return (
    <main className="min-h-screen bg-[#F5F6F7] pt-24 sm:pt-28">

      {/* Contact information */}
      <section className="px-4 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#A27C3D]">
              Get in Touch
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-[#142B46] sm:text-3xl">
              Contact Information
            </h2>
            <div className="mt-4 h-[2px] w-12 bg-[#B38A49]" />
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-[#142B46]/[0.07] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B38A49]/40 hover:shadow-xl hover:shadow-[#142B46]/[0.07] sm:p-7"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#142B46] text-[#E5C786] transition-colors duration-300 group-hover:bg-[#A27C3D] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#A27C3D]">
                      Demo Contact
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#142B46]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] font-medium text-[#8490A0]">
                    {item.role}
                  </p>

                  <div className="my-5 h-px bg-[#142B46]/10" />

                  <p className="mb-4 text-xs font-semibold text-[#142B46]">
                    {item.name}
                  </p>

                  <a
                    href={`tel:${item.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 py-2 text-xs text-[#647184] transition-colors hover:text-[#A27C3D]"
                  >
                    <Phone size={14} className="shrink-0 text-[#B38A49]" />
                    <span>{item.phone}</span>
                  </a>

                  <a
                    href={`mailto:${item.email}`}
                    className="flex min-w-0 items-center gap-3 py-2 text-xs text-[#647184] transition-colors hover:text-[#A27C3D]"
                  >
                    <Mail size={14} className="shrink-0 text-[#B38A49]" />
                    <span className="break-all">{item.email}</span>
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location and office hours */}
      <section className="px-4 py-10 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-[#142B46]/10 bg-white shadow-xl shadow-[#142B46]/10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Map and Address */}
          <div className="relative min-h-[380px] overflow-hidden bg-[#142B46] lg:min-h-[430px]">

            <iframe
              src={mapUrl}
              title="Rajshahi Medical University Location"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />

            {/* Map information overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-3 rounded-xl border border-white/20 bg-[#142B46]/90 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[340px] sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D5B46A] text-[#142B46]">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E5C786]">
                    Find Us
                  </p>

                  <h2 className="mt-1 font-serif text-xl font-semibold text-white">
                    Visit RMU
                  </h2>
                </div>
              </div>

              <p className="text-[11px] leading-5 text-white/75">
                University Campus, Rajshahi, Bangladesh
              </p>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#D5B46A] px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#142B46] transition-all duration-300 hover:gap-4 hover:bg-[#E5C786]"
              >
                Open in Map
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Office hours */}
          <div className="relative overflow-hidden border-t border-[#142B46]/10 bg-[#142B46]/[0.94] p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full border border-[#D5B46A]/15" />

            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#D5B46A]/25 bg-white/[0.08] text-[#E5C786]">
                <Clock size={20} />
              </div>

              <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#E5C786]">
                Working Hours
              </p>

              <h3 className="mt-3 font-serif text-2xl font-semibold text-white">
                Office Hours
              </h3>

              <div className="mt-7 space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                  <span className="text-xs text-white/65">
                    Sunday – Thursday
                  </span>

                  <span className="text-xs font-semibold text-white">
                    9:00 AM – 5:00 PM
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                  <span className="text-xs text-white/65">
                    Friday – Saturday
                  </span>

                  <span className="text-xs font-semibold text-[#E5C786]">
                    Closed
                  </span>
                </div>

                <p className="pt-1 text-[9px] text-white/45">
                  Bangladesh Standard Time (BST)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <p className="mx-auto mt-5 max-w-7xl px-4 pb-8 text-center text-[8px] text-[#8490A0]">
        Contact names, phone numbers, email addresses, office hours and address
        are demonstration details. Replace them with verified RMU information
        before launch.
      </p>
    </main>
  );
}
