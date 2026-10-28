// Define los datos que usa cada tarjeta del portafolio.
export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  status: "Publicado" | "En desarrollo" | "Privado";
  url?: string;
};

export const projects: Project[] = [
  {
    id: "iq-sombrero",
    title: "IQ Sombrero",
    category: "SISTEMA EMPRESARIAL",
    description:
      "Plataforma para administrar costos, compras, productos, insumos y trazabilidad operativa en restaurantes.",
    image: "/projects/iq-sombrero.webp",
    imageAlt: "Vista del sistema web IQ Sombrero",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    status: "Publicado",
    url: "https://iq.elsombrero.com.pe/",
  },
  {
    id: "el-sombrero",
    title: "El Sombrero",
    category: "SITIO WEB CORPORATIVO",
    description:
      "Sitio para restaurante y hotel con información comercial, cartas y contacto para reservas por WhatsApp.",
    image: "/projects/el-sombrero.webp",
    imageAlt: "Vista de la página web de El Sombrero",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Publicado",
    url: "https://www.elsombrero.com.pe/inicio",
  },
  {
    id: "haccp",
    title: "Sistema HACCP",
    category: "APLICACIÓN MÓVIL Y API",
    description:
      "Solución interna para digitalizar registros HACCP, inventarios y documentación, con acceso según el rol.",
    image: "/projects/haccp.webp",
    imageAlt: "Vista de la aplicación de inventarios y documentación HACCP",
    technologies: ["Kotlin", "Node.js", "PostgreSQL", "REST API"],
    status: "Privado",
  },
  {
    id: "dgtz",
    title: "DGTZ Agency",
    category: "WEB CREATIVA",
    description:
      "Experiencia web para agencia de marketing, enfocada en identidad digital, servicios y portafolio.",
    image: "/projects/dgtz.webp",
    imageAlt: "Vista del sitio de DGTZ Agency",
    technologies: ["Next.js", "React", "TypeScript", "Motion"],
    status: "En desarrollo",
    url: "https://dgtz-web-v1.vercel.app/",
  },
];
