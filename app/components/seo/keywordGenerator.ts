// components/seo/keywordGenerator.ts

const serviceCoreKeywords = [
  "anti bird invisible grills",
  "anti bird nets",
  "pigeon safety nets",
  "balcony bird protection",
  "bird control nets",
  "invisible bird grills",
];

const intentModifiers = [
  "local",
  "installation",
  "price",
  "cost",
  "services",
  "providers",
  "company",
  "site check",
  "site visit",
];

const buyerIntentKeywords = [
  "book installation",
  "site check",
  "scheduled installation",
  "installation team",
  "local service",
];

export function generateLocationKeywords(
  location: string,
  nearbyLocations: string[]
) {
  const keywords = new Set<string>();

  // Core combinations
  serviceCoreKeywords.forEach((service) => {
    keywords.add(`${service} in ${location}`);
    keywords.add(`${service} ${location}`);

    intentModifiers.forEach((intent) => {
      keywords.add(`${service} ${intent} in ${location}`);
      keywords.add(`${service} ${location} ${intent}`);
    });
  });

  // Buyer questions
  buyerIntentKeywords.forEach((intent) => {
    keywords.add(`${intent} anti bird invisible grills ${location}`);
  });

  // Nearby context for location pages.
  nearbyLocations.slice(0, 5).forEach((nearby) => {
    keywords.add(`anti bird invisible grills near ${nearby}`);
  });

  return Array.from(keywords);
}
