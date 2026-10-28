
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// Configura el tema claro y oscuro de todo el portafolio.
export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Evita la advertencia de scripts durante el montaje
  // del componente en el cliente con React 19.
  const scriptProps =
    typeof window === "undefined"
      ? undefined
      : { type: "application/json" as const };

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      scriptProps={scriptProps}
    >
      {children}
    </NextThemesProvider>
  );
}
