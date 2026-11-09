
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Pause } from "lucide-react";
import SectionReveal from "../components/SectionReveal";

export default function CampusSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Unable to play campus video:", error);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="campus"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Campus Introduction */}
          <SectionReveal direction="left">
            <div>
              <span className="mb-5 block text-xs font-bold uppercase tracking-[0.22em] text-[#A27C3D]">
                Rajshahi Medical University
              </span>

              <h2 className="font-serif text-3xl font-bold leading-tight text-[#142B46] sm:text-4xl lg:text-5xl">
                A Place to Learn,
                <span className="mt-2 block font-normal italic text-[#A27C3D]">
                  Discover & Grow.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#647184] sm:text-base">
                Discover the campus environment, academic facilities and
                learning spaces of Rajshahi Medical University.
              </p>

              <a
                href="/campus-facilities"
                className="group mt-8 inline-flex items-center gap-3 border-b border-[#B38A49] pb-2 text-xs font-bold uppercase tracking-widest text-[#142B46] transition-colors hover:text-[#A27C3D]"
              >
                Explore Our Campus

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </SectionReveal>

          {/* Campus Video */}
          <SectionReveal direction="right">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-2xl border border-[#142B46]/10 bg-[#142B46] shadow-xl shadow-[#142B46]/15"
            >
              <video
                ref={videoRef}
                className="aspect-video w-full object-cover"
                poster="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=85"
                preload="none"
                controls
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source
                  src="/videos/rmu-campus.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video element.
              </video>

              {!isPlaying && (
                <button
                  type="button"
                  onClick={toggleVideo}
                  aria-label="Play campus video"
                  className="absolute inset-0 flex items-center justify-center bg-[#071C30]/15 transition-colors duration-300 hover:bg-[#071C30]/30"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-[#142B46]/85 text-white shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B38A49]">
                    <Play size={25} fill="currentColor" />
                  </span>
                </button>
              )}

              <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/30 bg-[#142B46]/75 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Campus Highlights
              </div>
            </motion.div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}
