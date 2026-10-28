"use client";

import { motion, useReducedMotion } from "motion/react";

import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  FileDown,
  MapPin,
  MessageSquare,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { contactInfo } from "../data/contact";

// Muestra los canales profesionales y el acceso al CV.
export default function Contact() {
  const reduceMotion = useReducedMotion();

  const emailSubject = encodeURIComponent(
    "Contacto desde tu portafolio"
  );

  const emailUrl = contactInfo.email
    ? `mailto:${contactInfo.email}?subject=${emailSubject}`
    : "";

  return (
    <section
      id="contacto"
      className="portfolio-section relative scroll-mt-8 overflow-hidden border-t border-[var(--border)] px-7 pb-8 pt-24 sm:px-10 lg:px-[7%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(70,135,230,0.08),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            05 / CONTACTO
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            ¿Construimos algo
            <span className="block text-[var(--accent)]">
              juntos?
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Siempre estoy interesado en conocer nuevas
            oportunidades, colaborar en proyectos y
            desarrollar soluciones que generen valor.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9"
          >
            <div>
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)]">
                <MessageSquare size={26} />
              </div>

              <h3 className="max-w-md text-2xl font-bold leading-snug text-[var(--foreground)] sm:text-3xl">
                ¿Tienes un proyecto en mente?
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-8 text-[var(--muted)]">
                Podemos conversar sobre desarrollo web,
                aplicaciones móviles, sistemas empresariales
                u oportunidades profesionales.
              </p>

              <div className="mt-7 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

                <span className="text-sm text-[var(--muted)]">
                  Abierto a nuevas oportunidades
                </span>
              </div>
            </div>

            <div className="mt-10">
              {contactInfo.email ? (
                <a
                  href={emailUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  <Mail size={18} />
                  Enviar un correo
                  <ArrowUpRight size={17} />
                </a>
              ) : (
                <a
                  href={contactInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  <FaGithub size={18} />
                  Visitar mi GitHub
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-8"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Canales profesionales
            </p>

            <div className="space-y-3">
              {contactInfo.email && (
                <a
                  href={emailUrl}
                  className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-colors duration-300 hover:border-[var(--accent)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)]">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      Correo electrónico
                    </p>

                    <p className="mt-1 truncate text-xs text-[var(--muted)]">
                      {contactInfo.email}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-[var(--accent)]"
                  />
                </a>
              )}

              {contactInfo.githubUrl && (
                <a
                  href={contactInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-colors duration-300 hover:border-[var(--accent)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)]">
                    <FaGithub size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      GitHub
                    </p>

                    <p className="mt-1 text-xs text-[var(--muted)]">
                      Repositorios y proyectos
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-[var(--accent)]"
                  />
                </a>
              )}

              {contactInfo.linkedinUrl && (
                <a
                  href={contactInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-colors duration-300 hover:border-[var(--accent)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)]">
                    <FaLinkedin size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-xs text-[var(--muted)]">
                      Perfil profesional
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-[var(--accent)]"
                  />
                </a>
              )}

              {contactInfo.cvPath && (
                <a
                  href={contactInfo.cvPath}
                  download
                  className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-colors duration-300 hover:border-[var(--accent)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)]">
                    <FileDown size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      Descargar CV
                    </p>

                    <p className="mt-1 text-xs text-[var(--muted)]">
                      Currículum en PDF
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-[var(--accent)]"
                  />
                </a>
              )}
            </div>

            <div className="mt-7 flex items-center gap-3 border-t border-[var(--border)] pt-6">
              <MapPin size={18} className="text-[var(--accent)]" />

              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Ubicación
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  {contactInfo.location}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <footer className="mt-16 flex flex-col gap-5 border-t border-[var(--border)] py-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              {contactInfo.name}
            </p>

            <p className="mt-1 text-xs text-[var(--muted)]">
              © {new Date().getFullYear()} · {contactInfo.role}
            </p>
          </div>

          <a
            href="#inicio"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition-all duration-300 hover:-translate-y-1"
          >
            Volver al inicio
            <ArrowUp size={17} />
          </a>
        </footer>
      </div>
    </section>
  );
}
