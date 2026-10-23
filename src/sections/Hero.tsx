
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Code2 } from "lucide-react";

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
];

// Dibuja la portada y sus animaciones de presentación.
export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      <div className="hero-grid absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-7 pb-20 pt-28 lg:grid-cols-2 lg:px-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Software Developer Jr. · Trujillo, Perú
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Bienvenido a mi portafolio
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl xl:text-7xl">
            Hola, soy
            <span className="gradient-text mt-2 block">
              Jeffry.
            </span>
          </h1>

          <h2 className="mb-6 max-w-xl text-2xl font-semibold sm:text-3xl">
            Construyo experiencias digitales que generan impacto.
          </h2>

          <p className="mb-9 max-w-lg text-base leading-8 text-[var(--muted)]">
            Desarrollador de software enfocado en aplicaciones web,
            sistemas empresariales y soluciones tecnológicas
            para necesidades reales.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-6 py-3.5 font-medium text-white transition hover:-translate-y-1 hover:bg-indigo-500"
            >
              Ver proyectos
              <ArrowUpRight size={19} />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center gap-3 rounded-xl border border-[var(--border)] px-6 py-3.5 font-medium transition hover:-translate-y-1 hover:bg-[var(--surface-2)]"
            >
              Contactar
              <ArrowDownRight size={19} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="relative flex min-h-[370px] items-center justify-center lg:min-h-[550px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              className="hero-orb flex items-center justify-center"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -16, 0], rotate: [-5, 4, -5] }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="relative z-10 text-7xl font-black tracking-tight text-white/90">
                JP
              </span>
            </motion.div>
          </motion.div>

          <div className="floating-card absolute left-0 top-[15%] flex items-center gap-3">
            <Code2 size={20} className="text-indigo-400" />
            <div>
              <p className="text-sm font-semibold">Frontend</p>
              <p className="text-xs text-[var(--muted)]">React · Next.js</p>
            </div>
          </div>

          <div className="floating-card absolute bottom-[12%] right-0">
            <p className="text-sm font-semibold">Full Stack</p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              Interfaces + Backend
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
