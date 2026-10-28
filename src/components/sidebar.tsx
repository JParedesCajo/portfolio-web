"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Home,
  Mail,
  Menu,
  Moon,
  Sun,
  UserRound,
  X,
} from "lucide-react";

const navigation = [
  { label: "Inicio", href: "#inicio", icon: Home },
  { label: "Proyectos", href: "#proyectos", icon: FolderKanban },
  { label: "Sobre mí", href: "#sobre-mi", icon: UserRound },
  { label: "Tecnologías", href: "#tecnologias", icon: Code2 },
  { label: "Experiencia", href: "#experiencia", icon: BriefcaseBusiness },
  { label: "Contacto", href: "#contacto", icon: Mail },
];

// Alterna entre apariencia oscura y clara sin errores de hidratación.
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      disabled={!mounted}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="sidebar-theme-btn"
      aria-label="Cambiar apariencia"
    >
      {mounted && resolvedTheme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
      <span>{mounted && resolvedTheme === "dark" ? "Modo claro" : "Modo oscuro"}</span>
    </button>
  );
}

// Muestra la navegación compacta y resalta la sección visible.
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((item) => item.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-32% 0px -56% 0px", threshold: 0 }
    );

    navigation.forEach((item) => {
      const section = document.getElementById(item.href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="mobile-menu-btn fixed left-5 top-5 z-[70] flex h-12 w-12 items-center justify-center rounded-xl md:hidden"
        aria-expanded={isOpen}
        aria-controls="portfolio-sidebar"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/70 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar menú"
        />
      )}

      <aside
        id="portfolio-sidebar"
        className={`sidebar-shell fixed inset-y-0 left-0 z-50 flex w-[252px] flex-col border-r px-5 pb-6 pt-23 transition-transform duration-300 md:translate-x-0 md:pt-9 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-12 px-2">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-soft)] text-sm font-bold tracking-wide text-[var(--accent)]">
            JPC<span className="ml-0.5 text-[var(--accent)]"></span>
          </div>
          <h2 className="text-base font-bold leading-snug tracking-tight">Jeffry Paredes Cajo</h2>
          <p className="mt-1 text-xs text-[var(--muted)]">Software Developer Jr</p>
        </div>

        <p className="mb-3 px-3 text-[10px] font-semibold tracking-[0.24em] text-[var(--subtle)] uppercase">
          Explorar
        </p>
        <nav aria-label="Navegación principal" className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const selected = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActive(item.href.slice(1));
                  setIsOpen(false);
                }}
                aria-current={selected ? "location" : undefined}
                className={`sidebar-link ${selected ? "sidebar-link-active" : ""}`}
              >
                <Icon size={17} />
                <span>{item.label}</span>
                {selected && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto space-y-6">
          <a href="#contacto" className="sidebar-contact-link" onClick={() => setIsOpen(false)}>
            ¿Tienes un proyecto? <ArrowUpRight size={16} />
          </a>
          <ThemeToggle />
          <p className="px-2 text-[11px] text-[var(--subtle)]">© 2026 · Hecho con propósito.</p>
        </div>
      </aside>
    </>
  );
}
