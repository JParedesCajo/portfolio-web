
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  MapPin,
  Smartphone,
  Layers3,
  UserRound,
} from "lucide-react";

const specialties = [
  {
    title: "Desarrollo web",
    description: "Interfaces modernas y aplicaciones web.",
    icon: Code2,
  },
  {
    title: "Desarrollo móvil",
    description: "Aplicaciones Android con Kotlin.",
    icon: Smartphone,
  },
  {
    title: "Sistemas empresariales",
    description: "Software orientado a procesos reales.",
    icon: Layers3,
  },
];

// Presenta el perfil, la fotografía y la experiencia con una distribución compacta.
export default function About() {
  const reduceMotion = useReducedMotion();
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="sobre-mi"
      className="portfolio-section relative scroll-mt-8 overflow-hidden border-t border-[var(--border)] px-7 py-20 sm:px-10 lg:px-[7%]"
    >
      <div className="relative mx-auto max-w-6xl">

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            02 / SOBRE MÍ
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Más que escribir código,
            <span className="mt-2 block text-[var(--accent)]">
              busco crear soluciones.
            </span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)]">

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Mi perfil
              </p>
            </div>

            <h3 className="text-2xl font-semibold leading-snug text-[var(--foreground)] sm:text-3xl">
              Desarrollo tecnología enfocada en resolver
              necesidades reales.
            </h3>

            <div className="space-y-4 text-[15px] leading-7 text-[var(--muted)]">
              <p>
                Soy Jeffry Paredes Cajo, desarrollador
                de software y estudiante de 8.º ciclo
                de Ingeniería de Sistemas e Inteligencia
                Artificial en la Universidad Privada
                Antenor Orrego.
              </p>

              <p>
                Mi experiencia combina aplicaciones web,
                soluciones móviles y sistemas empresariales.
                Me interesa comprender las necesidades de
                cada organización antes de desarrollar
                una solución tecnológica.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="group w-full overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_12px_30px_rgba(8,24,48,0.07)] transition-colors duration-300 hover:border-[var(--accent)]"
          >
            <div className="relative h-[240px] w-full overflow-hidden bg-[#0B1A30] sm:h-[260px] lg:h-[240px]">
              {!photoError ? (
                <Image
                  src="/images/jeffry.webp"
                  alt="Fotografía de Jeffry Paredes Cajo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transform-none"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3">
                  <UserRound
                    size={45}
                    className="text-[#8EBDFB]"
                  />
                </div>
              )}
            </div>

            <div className="border-t border-[var(--border)] px-5 py-4">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Jeffry Paredes Cajo
              </h3>

              <p className="mt-1 text-sm text-[var(--muted)]">
                Software Developer Jr
              </p>

              <div className="mt-2 flex items-center gap-2 text-xs text-[var(--accent)]">
                <MapPin size={14} />
                Trujillo, Perú
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2">

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex h-full flex-col rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-[var(--accent)]"
          >
            <div className="mb-5 flex items-start justify-between gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <GraduationCap
                  size={22}
                  className="text-[var(--accent)]"
                />
              </div>

              <span className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--accent)]">
                En formación
              </span>
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Formación académica
            </p>

            <h3 className="text-xl font-bold leading-snug text-[var(--foreground)]">
              Ingeniería de Sistemas e Inteligencia Artificial
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Universidad Privada Antenor Orrego
            </p>

            <div className="mt-auto pt-5">
              <div className="border-t border-[var(--border)] pt-4">
                <span className="text-sm font-semibold text-[var(--foreground)]">
                  8.º ciclo · UPAO
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex h-full flex-col rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-[var(--accent)]"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)]">
              <BriefcaseBusiness
                size={22}
                className="text-[var(--accent)]"
              />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Experiencia aplicada
            </p>

            <h3 className="text-xl font-bold text-[var(--foreground)]">
              Soluciones para empresas reales
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Desarrollo de aplicaciones, APIs y
              plataformas empresariales orientadas
              a optimizar procesos y facilitar la
              gestión de información.
            </p>

            <div className="mt-auto pt-5">
              <div className="border-t border-[var(--border)] pt-4">
                <a
                  href="#experiencia"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-all duration-300 hover:gap-3"
                >
                  Conocer mi trayectoria
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 border-t border-[var(--border)] pt-8"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {specialties.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors duration-300 hover:bg-[var(--surface)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#experiencia"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
          >
            Mi experiencia
            <ArrowUpRight size={17} />
          </a>

          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors duration-300 hover:bg-[var(--surface)]"
          >
            Ver proyectos
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
