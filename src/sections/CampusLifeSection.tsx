
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import "./CampusLifeSection.css";

type CampusExperience = {
  id: number;
  title: string;
  subtitle: string;
  video: string;
};

const campusExperiences: CampusExperience[] = [
  {
    id: 1,
    title: "Sports & Fitness",
    subtitle: "Move. Compete. Achieve.",
    video: "/videos/sports.mp4",
  },
  {
    id: 2,
    title: "Indoor Games",
    subtitle: "Play. Connect. Unwind.",
    video: "/videos/indoor.mp4",
  },
  {
    id: 3,
    title: "Cultural Activities",
    subtitle: "Celebrate creativity and expression.",
    video: "/videos/culture.mp4",
  },
  {
    id: 4,
    title: "Student Recreation",
    subtitle: "Friendships beyond the classroom.",
    video: "/videos/recreation.mp4",
  },
];

export default function CampusLifeSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  // Rotate the featured experience every five seconds
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % campusExperiences.length);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  // Play only the featured video
  useEffect(() => {
    Object.values(videoRefs.current).forEach((video) => {
      video?.pause();
    });

    const activeVideo = videoRefs.current[campusExperiences[activeIndex].id];

    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {
        // Playback may wait for browser autoplay permission.
      });
    }
  }, [activeIndex]);

  const featuredExperience = campusExperiences[activeIndex];

  const remainingExperiences = campusExperiences
    .map((experience, index) => ({ experience, index }))
    .filter(({ index }) => index !== activeIndex);

  const renderVideo = (experience: CampusExperience) => (
    <video
      ref={(element) => {
        videoRefs.current[experience.id] = element;
      }}
      className="campus-life-video"
      src={experience.video}
      muted
      playsInline
      loop
      preload="metadata"
      aria-hidden="true"
    />
  );

  return (
    <section className="campus-life-section" id="campus-life">
      <div className="campus-life-container">
        {/* Section heading */}
        <motion.div
          className="campus-life-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="campus-life-eyebrow">
              <span className="campus-life-line" />
              THE RMU EXPERIENCE
            </span>

            <h2>
              Our Campus Life
            </h2>
          </div>
        </motion.div>

        {/* Featured video and rotating experiences */}
        <div className="campus-life-showcase">
          {/* Main featured card */}
          <motion.div
            key={featuredExperience.id}
            className="campus-life-featured"
            initial={{ opacity: 0.7, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {renderVideo(featuredExperience)}

            <div className="campus-life-featured-overlay" />

            <div className="campus-life-featured-top">
              <span>FEATURED EXPERIENCE</span>
              <span className="campus-life-live">
                <span />
                NOW PLAYING
              </span>
            </div>

            <div className="campus-life-featured-content">
              <span className="campus-life-featured-subtitle">
                {featuredExperience.subtitle}
              </span>

              <h3>{featuredExperience.title}</h3>

              <div className="campus-life-featured-bottom">
                <span>DISCOVER CAMPUS LIFE</span>
                <span className="campus-life-featured-arrow">
                  <ArrowUpRight size={22} />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Three supporting cards */}
          <div className="campus-life-side">
            {remainingExperiences.map(({ experience, index }, position) => (
              <motion.button
                key={experience.id}
                type="button"
                className="campus-life-small-card"
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: position * 0.1,
                }}
                aria-label={`Feature ${experience.title}`}
              >
                {renderVideo(experience)}

                <span className="campus-life-small-overlay" />

                <span className="campus-life-small-number">
                  0{experience.id}
                </span>

                <span className="campus-life-small-content">
                  <span>{experience.subtitle}</span>
                  <strong>{experience.title}</strong>
                </span>

                <span className="campus-life-small-arrow">
                  <ArrowUpRight size={19} />
                </span>

                <span className="campus-life-small-progress" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom signature */}
        <div className="campus-life-footer">
          <span>RAJSHAHI MEDICAL UNIVERSITY</span>
          <span>
            <Play size={10} fill="currentColor" />
            AUTO SHOWCASE · 5 SECOND INTERVAL
          </span>
        </div>
      </div>
    </section>
  );
}
