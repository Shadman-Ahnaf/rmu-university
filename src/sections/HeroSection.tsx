
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Keep these five images inside: src/assets/hero/
// Rename your images to demo1.jpg, demo2.jpg ... demo5.jpg
import demo1 from "../assets/demo1.jpg";
import demo2 from "../assets/demo2.jpg";
import demo3 from "../assets/demo3.jpg";
import demo4 from "../assets/demo4.jpg";
import demo5 from "../assets/demo5.jpg";

const heroImages = [demo1, demo2, demo3, demo4, demo5];

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>

      {/* Hero Slideshow */}
<section
  id="hero"
  className="group relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#0A1120] text-white"
>
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 -z-20">
          <AnimatePresence mode="sync">
            <motion.img
              key={activeImage}
              src={heroImages[activeImage]}
              alt={`Rajshahi Medical University slideshow image ${activeImage + 1}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: 5, ease: "linear" },
              }}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </AnimatePresence>
        </div>

        {/* Dark Overlays */}
<div className="absolute inset-0 -z-10 bg-[#081326]/15" />

<div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081326]/25 via-[#081326]/10 to-transparent" />

<div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#081326]/25 via-transparent to-transparent" />
        {/* Left Gold Accent */}
        <div className="absolute left-0 top-1/4 hidden h-40 w-[3px] bg-gradient-to-b from-transparent via-[#C9A227] to-transparent lg:block" />

        {/* Hero Buttons */}
<div className="absolute bottom-24 left-6 z-10 sm:bottom-28 sm:left-10 lg:bottom-32 lg:left-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-start gap-4 sm:flex-row"
          >
            {/* Explore Academics */}
            <motion.a
              href="#academics"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="group/btn inline-flex min-h-14 items-center justify-center gap-3 bg-gradient-to-r from-[#C9A227] to-[#E0BD60] px-7 text-xs font-bold uppercase tracking-wider text-[#101D36] shadow-xl shadow-black/20 transition-shadow hover:shadow-[#C9A227]/20 sm:px-9"
            >
              Explore Academics

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </motion.a>

            {/* Discover RMU */}
            <motion.a
              href="#about"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-14 items-center justify-center border border-white/50 bg-white/[0.08] px-7 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-[#C9A227] hover:bg-white/[0.16] sm:px-9"
            >
              Discover RMU
            </motion.a>
          </motion.div>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-9 left-6 z-10 flex items-center gap-2 sm:left-10 lg:left-16">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Show slideshow image ${index + 1}`}
              aria-current={activeImage === index}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                activeImage === index
                  ? "w-10 bg-[#D5B46A]"
                  : "w-5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.8 },
            y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-7 right-8 hidden flex-col items-center gap-2 text-white/70 transition-colors hover:text-[#E5C66D] lg:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
          <span className="text-lg">↓</span>
        </motion.a>

        {/* Bottom Gold Accent */}
        <div className="absolute bottom-0 right-0 hidden h-1 w-1/3 bg-gradient-to-l from-[#C9A227]/70 to-transparent lg:block" />
      </section>
    </>
  );
}
