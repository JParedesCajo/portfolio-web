"use client";

import { useEffect, useState} from "react";
import { useTheme } from "next-themes";

import{
    Home,
    FolderKanban,
    UserRound,
    Code2,
    Mail,
    Menu,
    X,
    Sun,
    Moon,
}   from "lucide-react";

const navigation = [
    { label: "Inicio", href: "#inicio", icon: Home },
    { label: "Proyectos", href: "#proyectos", icon: FolderKanban },
    { label: "Sombre mi", href: "#sombre-mi", icon: UserRound },
    { label: "Tecnologìas", href: "#tecnologias", icon: Code2 },
    { label: "Contacto", href: "#contacto", icon: Mail },
];

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <button
            type="button"
            disabled={!mounted}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark" )}
            arial-label="Cambiar tema"
            className="flex w-full items-center gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm transition hover:bg-[var(--surface-2)]"
        >
            {mounted && theme === "dark" ? (
                <Sun size={18} />
            )   : (
                <Moon size={18} />
            )}
            Cambiar apariencia
            </button>
    );
}

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                arial-label={isOpen ? "Cerrar menù" : "Abrir menù"}
                aria-expanded={isOpen}
                arial-controls="portfolio-sidebar"
                onClick={() => setIsOpen(!isOpen)}
                className="fixed left-5 top-5 z-[60] rounded-xl border border-[var(--border)] bd-[var(--surface)] p-3 md:hidden"
            >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {isOpen && (
                <button
                type="button"
                arial-label="Cerrar navegaciòn"
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 md:hidden"
                />
            )}

            <aside
                id="portfolio-sidebar"
                className={`site-sidebar fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-[var(--border)] px-6 pb-7 pt-24 transition-transform duration-300 md:translate-x-0 md:pt-10 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="mb-12">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white">
                        JP
                    </div>

                    <h2 className="text-xl font-bold">
                        Jeffry Paredes Cajo
                    </h2>

                    <p className="mt-1 text-sm text-[var(--muted)]">
                        Software Developer
                    </p>
                </div>

                <nav aria-label="Navegaciòn principal" className="flex flex-col gap-2">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a 
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="nav-link"
                            >
                              <Icon size={19} />
                              <span>{item.label}</span>
                            </a>
                        );
                })}
                </nav>

                <div className="mt-auto space-y-5">
                    <ThemeToggle />

                <p className="text-xs text-[var(--muted)]">
                 © {new Date().getFullYear()} · Portafolio personal
                </p>
            </div>
        </aside>
    </>
    );
}