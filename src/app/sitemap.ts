
import type { MetadataRoute } from "next";

// Genera el sitemap con la dirección pública del portafolio.
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://portfolio-web-dyc.pages.dev"
  ).replace(/\/+$/, "");

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
