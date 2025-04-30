// app/sitemap.ts
import { MetadataRoute } from "next";

const locales = ["en", "tr"];
const routes = [
  "",
  "/gallery",
  "/products",
  "/aboutus",
  "/services",
  "/contactus",
];

export default function generateSitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://serapore.com";

  const paths = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
    }))
  );

  return paths;
}
