
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};


const imageClassByProject: Record<string, string> = {
  "iq-sombrero":
    "object-cover object-center group-hover:scale-[1.03]",

  "el-sombrero":
    "object-cover object-center group-hover:scale-[1.03]",

  "dgtz":
    "object-cover object-center group-hover:scale-[1.03]",

  "haccp":
    "object-contain object-center scale-[1.08] group-hover:scale-[1.10]",
};


// Muestra una tarjeta con la imagen, información y enlace del proyecto.
export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion ? false : { opacity: 0, y: 30 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : (index % 2) * 0.1,
      }}
      className="
        group relative min-w-0 overflow-hidden
        rounded-[24px]
        border border-[var(--border)]
        bg-[var(--surface)]
        shadow-[0_12px_35px_rgba(8,24,48,0.05)]
        transition-[border-color,box-shadow,transform]
        duration-300
        hover:-translate-y-1
        hover:border-[var(--accent)]
        hover:shadow-[0_20px_45px_rgba(36,104,199,0.12)]
      "
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[#0a172b]">
        
<Image
  src={project.image}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className={`
    transition-transform duration-700 ease-out
    ${imageClassByProject[project.id] ??
      "object-cover object-center group-hover:scale-[1.03]"}
  `}
/>


        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-[#061427]/0
            transition-colors duration-500
            group-hover:bg-[#061427]/5
          "
        />

        <span
          className="
            absolute left-5 top-5
            rounded-full
            border border-white/20
            bg-[#0b1c33]/85
            px-3 py-1.5
            text-[11px] font-semibold
            tracking-wide text-white
            backdrop-blur-md
          "
        >
          {project.status}
        </span>

        <span
          className="
            absolute bottom-4 right-4
            rounded-lg
            bg-[#0b1c33]/75
            px-2.5 py-1
            text-xs font-semibold
            tracking-widest text-white
            backdrop-blur-sm
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative p-5 sm:p-6">
        <p
          className="
            mb-2 text-[11px] font-bold
            uppercase tracking-[0.20em]
            text-[var(--accent)]
          "
        >
          {project.category}
        </p>

        <h3
          className="
            text-[1.6rem] font-semibold
            tracking-tight
            text-[var(--foreground)]
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-2 min-h-[56px]
            text-sm leading-6
            text-[var(--muted)]
          "
        >
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border border-[var(--border)]
                bg-[var(--background)]
                px-3 py-1.5
                text-xs text-[var(--muted)]
              "
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-4 border-t border-[var(--border)] pt-4">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${project.title} en otra pestaña`}
              className="
                inline-flex items-center gap-2
                rounded-md
                text-sm font-semibold
                text-[var(--accent)]
                outline-offset-4
                transition-all duration-300
                hover:gap-3
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-[var(--accent)]
              "
            >
              Explorar proyecto
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
              <LockKeyhole size={16} />
              Proyecto de uso interno
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
