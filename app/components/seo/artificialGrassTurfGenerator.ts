import { createSeed, generateBreadcrumb, locationAuthorityScore, pickVariant, slugify } from "./utils";
import {
  overviewVariants,
  aboutVariants,
  installVariants,
  birdVariants,
  priceVariants,
  whyChooseVariants,
  safetyTipsVariants
} from "../data/artificialGrassTurfVariants";

import { buildFullSchema } from "./schema";
import { getNearbyLocations } from "./utils";
import { ServicePage, ServiceSection } from "./types";
import { enhanceFallbackServicePage } from "./fallbackContentEnhancer";

export const generateArtificialGrassService:
(location: string, locations: string[], index: number) => ServicePage =
(location: string, locations: string[], index: number) => {

  const seed = createSeed(location);

  const overview = pickVariant(overviewVariants, seed)(location);
  const about = pickVariant(aboutVariants, seed, 1)(location);
  const install = pickVariant(installVariants, seed, 2)(location);
  const usage = pickVariant(birdVariants, seed, 3)(location);
  const price = pickVariant(priceVariants, seed, 4)(location);
  const whyChoose = pickVariant(whyChooseVariants, seed, 5)(location);
  const safetyTips = pickVariant(safetyTipsVariants, seed, 6)(location);

  const nearby = getNearbyLocations(locations, index);
  const slug = `artificial-grass-turf/${slugify(location)}`;

  const breadcrumbs = generateBreadcrumb(location, slug);
  const authorityScore = locationAuthorityScore(location);

  const faqs = [

{
question:`What is artificial grass turf in ${location}?`,
answer:`Artificial grass turf is a synthetic surface designed to look like natural grass. It is used in balconies, terraces, gardens, and commercial spaces to create a green area without regular maintenance.`
},

{
question:`Why choose artificial grass turf in ${location}?`,
answer:`Artificial turf gives a green surface without watering or mowing. It suits homes and commercial spaces where natural grass is difficult to care for.`
},

{
question:`Is artificial grass suitable for homes in ${location}?`,
answer:`Yes. Artificial grass is used in homes, apartments, and villas for balconies, terraces, and gardens because it is easier to care for than natural grass.`
},

{
question:`How long does artificial turf installation take in ${location}?`,
answer:`Most artificial grass installations are completed within a day depending on the size of the area and preparation required.`
},

{
question:`Is artificial grass safe for children and pets in ${location}?`,
answer:`Yes. site-suitable artificial turf is soft, safe, and comfortable, making it suitable for children and pets to play on.`
},

{
question:`Does artificial grass require maintenance in ${location}?`,
answer:`Artificial grass requires minimal maintenance such as occasional cleaning and brushing to maintain its appearance.`
}

];

  const nearbySection: ServiceSection = {
    heading: "Nearby Areas We Serve",
     slug: nearby.map(
      (n: string) => `/artificial-grass-turf/${slugify(n)}`
    ),
    content: nearby.map((n: string) => `Artificial grass turf installation available in ${n}`)
  };

  return enhanceFallbackServicePage({

    location: location,

    slug: `artificial-grass-turf/${slugify(location)}`,

    title: `Artificial Grass Turf in ${location} | Lawn & Balcony Turf Installation`,

    shortDescription: `Rohini Artificial Grass provides artificial grass turf installation in ${location}. Transform balconies, terraces, and gardens with low-maintenance green lawn solutions in your area.`,

    heroImage: "/images/artificial-grass-and-artificial-turf-for-ground.webp",

    category: "artificial-grass",

    sections: [

      {
        heading: "Overview",
        content: overview
      },

      {
        heading: "About Rohini Artificial Grass",
        content: about
      },

      {
        heading: `How We Install Artificial Grass Turf in ${location}`,
        content: install
      },

      {
        heading: "Benefits of Artificial Grass Turf",
        content: usage
      },

      {
        heading: `Artificial Grass Turf Price in ${location}`,
        content: price
      },

      {
        heading: `Why Choose Artificial Grass Turf in ${location}`,
        content: whyChoose
      },

      {
        heading: `Artificial Grass Maintenance Tips for ${location}`,
        content: safetyTips
      },

      {
        heading: "Practical Service Notes",
        content: [
          "Natural-looking artificial grass for balconies, terraces, and gardens",
          "No watering or mowing required after installation",
          "Outdoor-use turf selected around daily foot traffic",
          "Soft surface options chosen around children, pets, and foot traffic",
          "Green finish planned around the actual balcony, terrace, or floor shape",
          "Cleaning and water movement discussed before the turf is cut",
          "Useful for homes, play corners, terraces, and display spaces",
          "Installation planned around access, edge cutting, and base condition",
          "A practical option where natural grass is difficult to maintain",
          "Turns dull indoor or outdoor corners into spaces people actually use"
        ]
      },

      {
        heading: "Applications",
        content: [
          `Artificial grass for balcony flooring in ${location}`,
          `Terrace garden turf installation in ${location}`,
          `Outdoor lawn solutions for homes in ${location}`,
          `Artificial grass local installation in ${location}`,
          `Play area turf for children and pets`,
          `Decorative green flooring for indoor spaces`,
          `Commercial landscaping turf solutions in ${location}`
        ]
      },

      nearbySection,

      {
        heading: "Conclusion",
        content: `If you are searching for artificial grass turf in ${location}, Rohini Artificial Grass checks the base, drainage, edge lines, and daily use before fitting turf that makes the space easier to live with.`
      }

    ],

    faqs: faqs,

    breadcrumbs,
    authorityScore,

    meta: {

      title: `Artificial Grass Turf in ${location} | Rohini Artificial Grass`,

      description: `Install artificial grass turf in ${location} for balconies, terraces, and lawns with base preparation, edge cutting, and water movement checked first.`,

      keywords: `artificial grass ${location}, artificial grass turf ${location}, artificial lawn ${location}, balcony grass turf ${location}, terrace grass installation ${location}, synthetic grass ${location}`

    },

    schema: buildFullSchema(location, slug, faqs)

  }, "artificial-grass-turf");

};
