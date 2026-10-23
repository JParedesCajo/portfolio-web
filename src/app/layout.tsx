
import type { Metadata } from "next";
import ThemeProvider from "../components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeffry Paredes | Software Developer",
  description:
    "Portafolio profesional de desarrollo web, aplicaciones y soluciones de software.",
};

// Define la estructura global y habilita el sistema de temas.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
