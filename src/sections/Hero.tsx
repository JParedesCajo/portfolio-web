"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import HeroAtmosphere from "../components/animations/HeroAtmosphere";
import LaptopVisual from "../components/animations/LaptopVisual";

const stack = ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL"];

// Presenta el perfil y la computadora 3D con ambiente azul sin afectar las demás secciones.
export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="inicio" className="portfolio-hero relative isolate overflow-hidden">
      <HeroAtmosphere />

      <div className="relative z-10 mx-auto grid w-full max-w-[1370px] grid-cols-1 items-center gap-8 px-7 pb-16 pt-28 sm:px-12 lg:min-h-[720px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:px-[7%] lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-[670px]"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/50 px-4 py-2 text-[11px] font-medium text-[var(--muted)] backdrop-blur-md">
            <span className="availability-dot" />
            Software Developer Jr <span className="opacity-45">/</span> Trujillo, Perú
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
            Bienvenido a mi portafolio
          </p>

          <h1 className="hero-name font-bold tracking-[-0.065em]">
            Hola, soy <span className="hero-name-accent block">Jeffry.</span>
          </h1>

          <h2 className="mt-7 max-w-[590px] text-[clamp(1.45rem,2.4vw,2.35rem)] font-semibold leading-[1.22] tracking-[-0.035em]">
            Construyo experiencias digitales que generan impacto.
          </h2>

          <p className="mt-5 max-w-[540px] text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
            Desarrollo aplicaciones web, móviles y sistemas empresariales para necesidades reales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="hero-primary-btn" href="#proyectos">
              Ver proyectos <ArrowUpRight size={18} />
            </a>
            <a className="hero-secondary-btn" href="#contacto">
              Contactar <ArrowDownRight size={18} />
            </a>
          </div>

          <div className="mt-10 flex max-w-[600px] items-start gap-3 border-t border-[var(--border)] pt-5">
            <GraduationCap className="mt-0.5 shrink-0 text-[var(--accent)]" size={19} />
            <div>
              <p className="text-sm font-medium">Ingeniería de Sistemas e Inteligencia Artificial</p>
              <p className="mt-1 text-xs text-[var(--muted)]">Estudiante de 8.º ciclo · Universidad Privada Antenor Orrego</p>
            </div>
          </div>
        </motion.div>

        <div className="hero-visual relative flex min-h-[290px] items-center justify-center sm:min-h-[350px] lg:min-h-[500px]">
          <LaptopVisual />
        </div>

        <div className="col-span-1 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5 lg:col-span-2 lg:mt-0">
          <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <MapPin size={15} /> Trujillo, Perú
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => <span className="tech-pill" key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
