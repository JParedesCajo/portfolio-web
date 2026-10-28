
import Sidebar from "../components/sidebar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import ScrollProgress from "../components/animations/ScrollProgress";

// Organiza el portafolio e incorpora el indicador de navegación.
export default function Home() {
  return (
    <>
      <ScrollProgress />

      <Sidebar />

      <main className="md:ml-[252px]">
        <Hero />

        <Projects />

        <About />

        <Skills />

        <Experience />

        <Contact />
      </main>
    </>
  );
}
