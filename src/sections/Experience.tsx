
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Globe,
  Database,
  Smartphone,
  MonitorCog,
  ArrowUpRight,
  LockKeyhole,
  type LucideIcon,
} from "lucide-react";

type ExperienceItem = {
  number: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  contributions: string[];
  technologies: string[];
  status: "Publicado" | "Uso interno" | "En desarrollo";
  url?: string;
};

const experiences: ExperienceItem[] = [
  {
    number: "01",
    title: "El Sombrero",
    category: "Desarrollo web corporativo",
    description:
      "Sitio corporativo para presentar los servicios de un restaurante turístico y hotel en Trujillo.",
    icon: Globe,
    contributions: [
      "Diseño e implementación de una interfaz responsive.",
      "Presentación de restaurantes, hotel, cartas y servicios.",
      "Enlaces de contacto y reservas mediante WhatsApp.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    status: "Publicado",
    url: "https://www.elsombrero.com.pe/inicio",
  },
  {
    number: "02",
    title: "IQ Sombrero",
    category: "Sistema de gestión empresarial",
    description:
      "Plataforma web orientada a centralizar información operativa y apoyar decisiones del negocio.",
    icon: Database,
    contributions: [
      "Gestión de costos e información de productos.",
      "Módulos relacionados con compras e insumos.",
      "Organización de información para procesos internos.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
    ],
    status: "Publicado",
    url: "https://iq.elsombrero.com.pe/",
  },
  {
    number: "03",
    title: "Sistema HACCP",
    category: "Desarrollo móvil y backend",
    description:
      "Aplicación Android de uso interno para digitalizar inventarios, formularios y documentación HACCP.",
    icon: Smartphone,
    contributions: [
      "Desarrollo de pantallas y módulos en Kotlin.",
      "Gestión de formularios y registros operativos.",
      "Comunicación con servicios mediante APIs.",
    ],
    technologies: [
      "Kotlin",
      "Android",
      "Node.js",
      "REST API",
    ],
    status: "Uso interno",
  },
  {
    number: "04",
    title: "SUVE-ERP",
    category: "Sistema empresarial de escritorio",
    description:
      "ERP en desarrollo para apoyar las operaciones de un pequeño restaurante mediante una aplicación de escritorio.",
    icon: MonitorCog,
    contributions: [
      "Implementación inicial de módulos de productos y compras.",
      "Organización del código en modelos, DAO y servicios.",
      "Pruebas con H2 e incorporación de dependencias para integración con MySQL.",
    ],
    technologies: [
      "Java",
      "Swing",
      "NetBeans",
      "Maven",
      "JDBC",
      "H2",
    ],
    status: "En desarrollo",
  },
];

// Muestra la experiencia práctica respaldada por los proyectos desarrollados.
export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experiencia"
      className="portfolio-section relative scroll-mt-8 border-t border-[var(--border)] px-7 py-24 sm:px-10 lg:px-[7%]"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            04 / EXPERIENCIA
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Experiencia aplicada
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Soluciones que he desarrollado y proyectos en los
            que continúo trabajando. Esta sección muestra
            experiencia práctica, no una cronología de puestos
            laborales.
          </p>
        </motion.div>

        <div className="relative pl-7 sm:pl-10">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[7px] top-8 w-px bg-[var(--border)] sm:left-[15px]"
          />

          <div className="space-y-6">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.number}
                  initial={
                    reduceMotion ? false : { opacity: 0, x: 25 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: reduceMotion ? 0 : (index % 2) * 0.1,
                  }}
                  className="group relative rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_12px_35px_rgba(8,24,48,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[var(--accent)] hover:shadow-[0_18px_40px_rgba(42,102,190,0.10)] sm:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[27px] top-8 h-4 w-4 rounded-full border-[3px] border-[var(--accent)] bg-[var(--background)] sm:-left-[35px]"
                  />

                  <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
                    <div>
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)]">
                          <Icon size={21} />
                        </div>

                        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                          {experience.status}
                        </span>
                      </div>

                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                        {experience.category}
                      </p>

                      <h3 className="text-2xl font-bold text-[var(--foreground)]">
                        {experience.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                        {experience.description}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                        Trabajo desarrollado
                      </p>

                      <div className="space-y-3">
                        {experience.contributions.map(
                          (contribution) => (
                            <div
                              key={contribution}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />

                              <p className="text-sm leading-6 text-[var(--muted)]">
                                {contribution}
                              </p>
                            </div>
                          )
                        )}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--muted)]"
                            >
                              {technology}
                            </span>
                          )
                        )}
                      </div>

                      <div className="mt-auto pt-6">
                        <div className="border-t border-[var(--border)] pt-4">
                          {experience.url ? (
                            <a
                              href={experience.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-all duration-300 hover:gap-3"
                            >
                              Visitar proyecto
                              <ArrowUpRight size={17} />
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
                              <LockKeyhole size={16} />

                              {experience.status === "En desarrollo"
                                ? "Proyecto en desarrollo"
                                : "Solución de uso interno"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
