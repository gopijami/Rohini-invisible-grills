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
  "near me",
  "installation",
  "price",
  "cost",
  "services",
  "providers",
  "company",
  "best",
  "low cost",
  "installation experts",
];

const buyerIntentKeywords = [
  "book installation",
  "free site visit",
  "same day installation",
  "professional installers",
  "trusted service",
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

  // Buyer intent
  buyerIntentKeywords.forEach((intent) => {
    keywords.add(`${intent} anti bird invisible grills ${location}`);
  });

  // Nearby authority signals (VERY POWERFUL)
  nearbyLocations.slice(0, 5).forEach((nearby) => {
    keywords.add(`anti bird invisible grills near ${nearby}`);
  });

  return Array.from(keywords);
}