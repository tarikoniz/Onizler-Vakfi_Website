import type { MetadataRoute } from "next";

const SITE = "https://onizler-vakfi-website.vercel.app";

const paths = [
  "",
  "/hakkimizda",
  "/calisma-alanlari",
  "/gonullu-ol",
  "/burs",
  "/haberler",
  "/destek",
  "/seffaflik",
  "/basin",
  "/iletisim",
  "/yasal",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of ["tr", "en"] as const) {
    for (const path of paths) {
      entries.push({
        url: `${SITE}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "/haberler" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/destek" ? 0.9 : 0.7,
        alternates: {
          languages: {
            tr: `${SITE}/tr${path}`,
            en: `${SITE}/en${path}`,
          },
        },
      });
    }
  }

  return entries;
}
