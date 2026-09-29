import type { MetadataRoute } from "next";
import { seo } from "@/data/event";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: seo.siteUrl, changeFrequency: "weekly", priority: 1 }];
}
