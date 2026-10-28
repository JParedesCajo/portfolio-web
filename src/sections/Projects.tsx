"use client";

import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

// Agrupa los proyectos reales en una cuadrícula responsive con animaciones suaves.
export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-heading"
      className="portfolio-section relative scroll-mt-8 border-t border-[var(--border)] px-7 py-24 sm:px-10 lg:px-[7%]"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-11"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            01 / PORTAFOLIO
          </p>
          <h2
            id="projects-heading"
            className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl lg:text-6xl"
          >
            Proyectos seleccionados<span className="text-[var(--accent)]">.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Experiencias digitales y sistemas que he construido para resolver necesidades reales.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
