import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/privacy", "/terms"].map((path) => ({ url: `https://starixis.com${path}`, lastModified, changeFrequency: path ? "yearly" : "monthly", priority: path ? .3 : 1 }));
}
