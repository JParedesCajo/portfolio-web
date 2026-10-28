
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Layers3,
  Smartphone,
  BriefcaseBusiness,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

type SkillGroup = {
  id: number;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
};

const skillGroups: SkillGroup[] = [
  {
    id: 1,
    number: "01",
    title: "Frontend",
    description:
      "Desarrollo de interfaces web modernas, interactivas y adaptables a diferentes dispositivos.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Backend y bases de datos",
    description:
      "Desarrollo de servicios, integración de APIs y gestión de información para aplicaciones.",
    technologies: [
      "Node.js",
      "REST API",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Desarrollo móvil",
    description:
      "Aplicaciones Android orientadas a procesos empresariales e integración de servicios.",
    technologies: [
      "Kotlin",
      "Android",
      "Android Studio",
      "Integración de APIs",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Herramientas y despliegue",
    description:
      "Herramientas de desarrollo, control de versiones y publicación de proyectos.",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Desarrollo de sistemas empresariales",
    description:
      "Desarrollo de software de escritorio y soluciones ERP para apoyar la gestión de productos, compras y procesos administrativos.",
    technologies: [
      "Java",
      "Java Swing",
      "Apache NetBeans",
      "Apache Maven",
      "JDBC",
      "H2 Database",
      "MySQL Connector/J",
    ],
    featured: true,
  },
];

// Muestra el icono correspondiente a cada categoría.
function SkillIcon({ id }: { id: number }) {
  const iconSize = 23;

  switch (id) {
    case 1:
      return <Code2 size={iconSize} />;
    case 2:
      return <Layers3 size={iconSize} />;
    case 3:
      return <Smartphone size={iconSize} />;
    case 4:
      return <BriefcaseBusiness size={iconSize} />;
    case 5:
      return <GraduationCap size={iconSize} />;
    default:
      return <Code2 size={iconSize} />;
  }
}

// Presenta el stack tecnológico y destaca el desarrollo de sistemas empresariales.
export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="tecnologias"
      className="portfolio-section relative scroll-mt-8 overflow-hidden border-t border-[var(--border)] px-7 py-24 sm:px-10 lg:px-[7%]"
    >
      <div className="relative mx-auto max-w-6xl">

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            03 / TECNOLOGÍAS
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Mi stack tecnológico
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Herramientas y tecnologías que utilizo para
            desarrollar soluciones web, móviles y
            sistemas empresariales.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.id}
              initial={
                reduceMotion ? false : { opacity: 0, y: 25 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : (index % 2) * 0.1,
              }}
              className={`
                group flex h-full flex-col
                rounded-[22px]
                border border-[var(--border)]
                bg-[var(--surface)]
                p-6 sm:p-7
                shadow-[0_12px_35px_rgba(8,24,48,0.04)]
                transition-[border-color,box-shadow]
                duration-300
                hover:border-[var(--accent)]
                hover:shadow-[0_18px_40px_rgba(42,102,190,0.10)]
                ${group.featured ? "md:col-span-2" : ""}
              `}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)]">
                  <SkillIcon id={group.id} />
                </div>

                <span className="text-xs font-semibold tracking-widest text-[var(--muted)]">
                  {group.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-xs font-medium text-[var(--muted)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {group.featured && (
                <div className="mt-6 border-t border-[var(--border)] pt-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Proyecto de referencia: SUVE-ERP
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Sistema de escritorio en desarrollo
                    para un pequeño restaurante, con
                    módulos iniciales de productos y compras.
                  </p>

                  <span className="mt-3 inline-flex rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--accent)]">
                    En desarrollo
                  </span>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-5 rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3 className="text-base font-semibold text-[var(--foreground)]">
              Aprendizaje continuo
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Continúo ampliando mis conocimientos
              en desarrollo de software, arquitectura
              de sistemas e infraestructura web.
            </p>
          </div>

          <a
            href="#experiencia"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-all duration-300 hover:gap-3"
          >
            Mi experiencia
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
