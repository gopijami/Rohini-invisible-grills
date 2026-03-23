import { MetadataRoute } from "next";
import { services } from "./components/constants/services"
import { hyderabadLocations } from "./components/constants/locations"
import {slugify} from "./components/seo/utils"
import {hyderabadOtherLocations} from "./components/data/telangana"


const BASE_URL = "https://rohiniinvisiblegrills.com";

const locations = [
  ...hyderabadLocations,
  ...hyderabadOtherLocations,
];

export default function sitemap(): MetadataRoute.Sitemap {

  const sitemap: MetadataRoute.Sitemap = [];

  /* ---------- HOME ---------- */
  sitemap.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  });

  /* ---------- SERVICE HUB PAGES ---------- */
  services.forEach((service) => {

    // Parent service page
    sitemap.push({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    });

    // Location pages
    locations.forEach((location) => {
      sitemap.push({
        url: `${BASE_URL}/${service.slug}/${slugify(location)}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });

  });

  return sitemap;
}