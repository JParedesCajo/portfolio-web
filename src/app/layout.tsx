
import type { Metadata } from "next";
import ThemeProvider from "../components/theme-provider";
import "./globals.css";

const siteTitle = "Jeffry Paredes Cajo | Software Developer";

const siteDescription =
  "Portafolio de Jeffry Paredes Cajo, desarrollador de software en Trujillo, Perú. Proyectos de desarrollo web, aplicaciones Android y sistemas empresariales con Next.js, TypeScript, Kotlin y Java.";

// La URL pública se configurará al realizar el despliegue.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,

  applicationName: "Portafolio de Jeffry Paredes Cajo",

  authors: [
    {
      name: "Jeffry Paredes Cajo",
    },
  ],

  creator: "Jeffry Paredes Cajo",

  keywords: [
    "Jeffry Paredes Cajo",
    "Software Developer",
    "Desarrollador de software",
    "Desarrollo web",
    "Desarrollo móvil",
    "Sistemas empresariales",
    "Java Swing",
    "Kotlin",
    "Next.js",
    "TypeScript",
    "Trujillo Perú",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  metadataBase: siteUrl ? new URL(siteUrl) : undefined,

  alternates: siteUrl
    ? {
        canonical: siteUrl,
      }
    : undefined,

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "es_PE",
    siteName: "Jeffry Paredes Cajo",
    ...(siteUrl ? { url: siteUrl } : {}),
  },

  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

// Configura la estructura global y mantiene el proveedor de temas.
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
