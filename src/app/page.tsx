
import Sidebar from "../components/sidebar";
import Hero from "../sections/Hero";

const sections = [
  {
    id: "proyectos",
    number: "01",
    title: "Mis proyectos",
    description:
      "Una selección de aplicaciones web y soluciones empresariales que he desarrollado.",
  },
  {
    id: "sobre-mi",
    number: "02",
    title: "Sobre mí",
    description:
      "Conoce mi experiencia, formación y enfoque en el desarrollo de software.",
  },
  {
    id: "tecnologias",
    number: "03",
    title: "Mis tecnologías",
    description:
      "Herramientas y tecnologías que utilizo para construir soluciones digitales.",
  },
  {
    id: "contacto",
    number: "04",
    title: "Trabajemos juntos",
    description:
      "Un espacio para conectar y conversar sobre nuevos proyectos.",
  },
];

// Organiza las secciones principales del portafolio.
export default function Home() {
  return (
    <>
      <Sidebar />

      <main className="md:ml-72">
        <Hero />

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="flex min-h-[55vh] scroll-mt-8 items-center border-t border-[var(--border)] px-7 py-24 lg:px-14"
          >
            <div className="mx-auto w-full max-w-6xl">
              <p className="mb-5 text-sm font-semibold tracking-widest text-indigo-400">
                {section.number} / PORTAFOLIO
              </p>

              <h2 className="mb-5 text-4xl font-bold sm:text-5xl">
                {section.title}
              </h2>

              <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
                {section.description}
              </p>

              <div className="mt-9 inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-xs text-[var(--muted)]">
                Sección en desarrollo
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
