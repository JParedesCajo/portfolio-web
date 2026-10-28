
"use client";

import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";

// Muestra el progreso de navegación mediante una línea superior.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-[var(--accent)] shadow-[0_0_12px_rgba(70,135,230,0.35)]"
      style={{
        scaleX: reduceMotion
          ? scrollYProgress
          : smoothProgress,
      }}
    />
  );
}
