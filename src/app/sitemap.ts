
import type { MetadataRoute } from "next";

// Obliga a Next.js a generar el sitemap durante la compilación.
export const dynamic = "force-static";

// Genera el sitemap utilizando la URL pública configurada.
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://jeffryparedes.pages.dev"
  ).replace(/\/+$/, "");

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
