import { getIds } from "./idGenerator";

/* ---------------- LOCATION DATA ---------------- */

const getAddressForLocation = (location: string) => {
  if (location === "Bachupally") {
    return {
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "862, Lahari Green Park Rd, opp. Vignana Jyothi Engineering College, Near Gothic Pangea",
        addressLocality: "Bachupally",
        addressRegion: "Telangana",
        postalCode: "500118",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.546734,
        longitude: 78.3858506,
      },
      hasMap:
        "https://www.google.com/maps/place/G9WP+M8X+Hyderabad,+Telangana",
    };
  }

  /* fallback */
  return {
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  };
};

/* ---------------- SERVICE SCHEMA ---------------- */

export const serviceSchema = (
  title: string,
  slug: string,
  location: string,
  url: string
) => {
  const locationData = getAddressForLocation(location);
  const locationSlug = location.replace(/\s+/g, "-").toLowerCase();
  const ids = getIds(url, slug, locationSlug);
  const serviceLabel = /\binstallation\b/i.test(title)
    ? title.toLowerCase()
    : `${title.toLowerCase()} installation`;


  return {
    "@type": "Service",
    "@id": ids.serviceId,

    name: `${title} in ${location}`,

    description: `Site-measured ${serviceLabel} service in ${location}. Planned for balcony safety, home protection, and reduced bird entry using materials suited to the opening.`,

    provider: {
      "@type": "LocalBusiness",
      "@id": `${url}#localbusiness`,
      name: "Rohini Invisible Grills",
      telephone: "+91-8790518724",
      url,
      ...locationData, // ✅ dynamic address + geo injected
    },

    // Product rich snippet output is intentionally disabled.
    // serviceOutput: {
    //   "@id": `${url}#product-${slug}-${locationSlug}`,
    // },

    serviceType: title,

    category:
      "Home Safety Installation Services",

    areaServed: {
      "@type": "City",
      name: location,
    },

     hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${title} Services`
    },

    // Review/rating rich snippet output is intentionally disabled.
    // aggregateRating: {
    //   "@id": ids.ratingId,
    // },

    mainEntityOfPage: {
      "@id": ids.webpageId,
    },
  };
};
