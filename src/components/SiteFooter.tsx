import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
  Globe,
} from "lucide-react";

const footerLinks = {
  University: [
    { label: "About RMU", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Research", href: "#research" },
    { label: "Affiliated Institutions", href: "#institutions" },
  ],
  Explore: [
    { label: "Latest News", href: "#news" },
    { label: "Events", href: "#news" },
    { label: "Admissions", href: "#academics" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#0B2036] text-white">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full border border-[#D5A64A]/15" />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 md:pt-20 lg:px-12">

        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">

          {/* University identity */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D5A64A] text-lg font-bold text-[#0B2036]">
                RMU
              </div>

              <div>
                <h2 className="text-lg font-bold tracking-wide">
                  Rajshahi Medical University
                </h2>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#D5A64A]">
                  Education · Research · Healthcare
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
              Advancing medical education, research, and healthcare through
              academic excellence.
            </p>

            {/* Social links - demo placeholders */}
<div className="mt-6 flex gap-3">
  {[
    { icon: Globe, label: "Website" },
    
    { icon: Mail, label: "Email" },
  ].map(({ icon: Icon, label }) => (
    <a
      key={label}
      href="#contact"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#D5A64A] hover:bg-[#D5A64A] hover:text-[#0B2036]"
    >
      <Icon size={17} />
    </a>
  ))}
</div>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#D5A64A]">
                {heading}
              </h3>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact information */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#D5A64A]">
              Get In Touch
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#D5A64A]" />
                <span>Rajshahi, Bangladesh</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={18} className="shrink-0 text-[#D5A64A]" />
                <a
                  href="mailto:info@rmu.edu.bd"
                  className="transition-colors hover:text-white"
                >
                  info@rmu.edu.bd
                </a>
              </li>

              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={18} className="shrink-0 text-[#D5A64A]" />
                <span>Contact information to be updated</span>
              </li>
            </ul>

            <a
              href="#home"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#D5A64A] transition-all hover:gap-4"
            >
              Back to Homepage
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-white/40">
            © {new Date().getFullYear()} Rajshahi Medical University.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-xs text-white/45 transition-colors hover:text-[#D5A64A]"
            >
              Privacy Policy
            </a>

            <a
              href="#home"
              className="text-xs text-white/45 transition-colors hover:text-[#D5A64A]"
            >
              Terms & Conditions
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#D5A64A] transition-all hover:bg-[#D5A64A] hover:text-[#0B2036]"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
