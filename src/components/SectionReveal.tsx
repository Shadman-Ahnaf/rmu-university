
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const directions = {
  up: { y: 45, x: 0 },
  down: { y: -45, x: 0 },
  left: { x: 45, y: 0 },
  right: { x: -45, y: 0 },
};

export default function SectionReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
