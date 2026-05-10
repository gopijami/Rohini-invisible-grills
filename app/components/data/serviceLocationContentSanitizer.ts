import type {
  ServiceLocationPageContent,
  ServiceLocationResolvedPageData,
} from "./serviceLocationPageContent";

type SanitizerOptions = {
  addHumanIntro?: boolean;
};

type ServiceTone = {
  audience: string;
  opening: string;
  concern: string;
  siteRead: string;
  checkItems: string[];
  decisionLine: string;
};

const serviceTones: Record<string, ServiceTone> = {
  "invisible-grills": {
    audience: "families with balcony, window, and utility openings",
    opening:
      "The enquiry usually starts with one uneasy edge, not a product name.",
    concern:
      "children near railings, pets at windows, pigeon routes, and the wish to keep the view open",
    siteRead:
      "balcony span, side returns, fixing depth, AC ledges, window sill height, and daily furniture placement",
    checkItems: [
      "where the family stands or sits near the opening",
      "whether birds use a ledge outside the main line",
      "which wall or frame can take a neat fixing",
      "how much of the view should stay visually light",
    ],
    decisionLine:
      "A good invisible-grill plan should feel quiet after installation: the room keeps its air and the open edge stops becoming a daily discussion.",
  },
  "anti-bird-invisible-grills": {
    audience: "homes that want bird-entry reduction without a heavy visible net",
    opening:
      "The first sign is often repeated cleaning at one ledge or corner.",
    concern:
      "pigeon routes, shaded ledges, AC brackets, side returns, and balcony corners that remain active after basic cleaning",
    siteRead:
      "the exact landing route, side opening, wall condition, and whether a cable line is enough or another bird-control method is needed",
    checkItems: [
      "where marks return after cleaning",
      "which ledge birds use when the home is quiet",
      "whether side gaps sit outside the main balcony face",
      "how visible the finished line will be from the room",
    ],
    decisionLine:
      "The useful answer is route-aware: treat the path birds actually use and avoid promising one front line for a problem that starts elsewhere.",
  },
  "anti-bird-net-installation": {
    audience: "balconies, ducts, and utility areas with bird-entry pressure",
    opening:
      "The call usually comes after cleaning has become repetitive.",
    concern:
      "pigeons entering ducts, nesting in utility shafts, sitting on balcony ledges, and leaving dirt in corners families still need to use",
    siteRead:
      "net coverage, hook spacing, access, open sides, pipe gaps, and whether the net can stay tight without blocking daily movement",
    checkItems: [
      "which opening birds enter through",
      "where hooks can be fixed without damaging weak surfaces",
      "whether the balcony still needs easy cleaning access",
      "how the net will behave around pipes, ducts, and corners",
    ],
    decisionLine:
      "A good bird-net plan names the included edges clearly so the customer knows what is covered and what remains outside the scope.",
  },
  "artificial-grass-turf": {
    audience: "homes and properties trying to make dull floors more usable",
    opening:
      "The enquiry often starts with a balcony, terrace, or corner that looks unfinished.",
    concern:
      "dusty surfaces, unused terrace corners, hard balcony floors, drainage, pet use, play areas, and edges that need a cleaner finish",
    siteRead:
      "surface level, water flow, edge cutting, wall junctions, expected foot traffic, and how the area will be cleaned",
    checkItems: [
      "whether the base holds water or drains properly",
      "where edges need clean cutting or fixing",
      "how the turf will be used after installation",
      "whether furniture, children, or pets change the surface choice",
    ],
    decisionLine:
      "Good turf work starts under the grass: the surface, drainage, and edge finish decide whether the area feels natural in daily use.",
  },
  "balcony-safety-invisible-grills": {
    audience: "families trying to make an open balcony calmer",
    opening:
      "The worry usually appears during normal family movement, not during measurement.",
    concern:
      "children near railings, pets at balcony corners, high-floor exposure, furniture close to the edge, and side gaps that feel too open",
    siteRead:
      "rail height, balcony span, furniture positions, side returns, cable line, fixing strength, and the way the family uses the door",
    checkItems: [
      "whether a child can climb from nearby furniture",
      "which corner feels most exposed during daily use",
      "how the line will look from the living room",
      "whether bird-entry work is separate from safety work",
    ],
    decisionLine:
      "The right balcony-safety answer should reduce open-edge worry while leaving the balcony useful for air, plants, and cleaning.",
  },
  "bird-spikes-installation": {
    audience: "properties with clear bird-perch points",
    opening:
      "The problem usually starts on one narrow ledge, not across the whole balcony.",
    concern:
      "pigeons sitting on AC frames, parapets, signboards, window shades, and ledges that are easy to return to",
    siteRead:
      "perch width, active sitting line, fixing surface, cleaning access, and whether spikes should be combined with nets or another route treatment",
    checkItems: [
      "where birds actually land",
      "whether the ledge is wide enough for the spike base",
      "how the fixing will handle weather and cleaning",
      "whether nearby gaps make spikes alone incomplete",
    ],
    decisionLine:
      "Bird spikes are most useful when the perch line is diagnosed first; they should not be used as a blanket answer for every bird problem.",
  },
  "children-safety-invisible-grills": {
    audience: "parents and families managing child movement near openings",
    opening:
      "The concern often appears after a child repeats the same movement toward an edge.",
    concern:
      "low windows, balcony fronts, climbable furniture, side corners, and utility openings that children treat like normal play space",
    siteRead:
      "child height, furniture placement, window sill depth, balcony access, spacing, tension, and the route a child reaches first",
    checkItems: [
      "where the child pauses or leans",
      "which furniture can become a climbing step",
      "whether the window or balcony is used for air every day",
      "how the family will supervise the opening after fitting",
    ],
    decisionLine:
      "A child-safety grill is a practical layer, not a substitute for supervision; the honest plan keeps both points clear.",
  },
  "cloth-hangers": {
    audience: "homes trying to manage laundry without crowding the balcony",
    opening:
      "The enquiry usually begins when drying clothes keeps taking over usable space.",
    concern:
      "limited utility space, weak rods, crowded balconies, poor airflow, damp clothes, ceiling height, and daily laundry load",
    siteRead:
      "ceiling or wall strength, hanger position, movement path, pulley access, wet-cloth load, and sunlight or airflow direction",
    checkItems: [
      "where clothes can dry without blocking movement",
      "whether the ceiling or wall can hold the fitting",
      "how the hanger will be reached daily",
      "whether the system leaves the balcony easier to use",
    ],
    decisionLine:
      "A good cloth-hanger installation should make laundry quieter in the home: less floor clutter, better airflow, and a fitting that feels natural to use.",
  },
  "sports-nets": {
    audience: "schools, apartments, terraces, and practice areas",
    opening:
      "The enquiry usually starts when balls leave the play area or practice feels uncontrolled.",
    concern:
      "ball direction, terrace edges, practice-lane height, support spacing, nearby windows, and whether the net can handle the sport being played",
    siteRead:
      "impact direction, net height, fixing supports, access, surrounding property, and the difference between casual play and repeated practice",
    checkItems: [
      "which direction the ball usually travels",
      "where poles or support lines can be fixed",
      "whether terrace edges or nearby windows need extra attention",
      "which sport and practice intensity the net must suit",
    ],
    decisionLine:
      "Sports-net work should be planned around play behavior first; mesh, height, and fixing only make sense after the game pattern is clear.",
  },
  "windows-invisible-grills": {
    audience: "homes with open windows that still need air and light",
    opening:
      "The concern often comes from one window that the family cannot keep closed all day.",
    concern:
      "low sills, child movement, pet movement, bird ledges, old bulky grills, and rooms that depend on open windows for ventilation",
    siteRead:
      "frame condition, sill depth, curtain movement, AC ledges, side openings, cable line, and how close people sit to the window",
    checkItems: [
      "whether the window is opened for air every day",
      "how the line will look from the bed, desk, or sofa",
      "whether an outside ledge is part of the bird route",
      "which frame or wall surface can hold the anchors neatly",
    ],
    decisionLine:
      "Window invisible grills should keep the room livable: safer at the opening, still bright, still ventilated, and clear about what the fitting can and cannot solve.",
  },
};

const riskyTextReplacements: Array<[RegExp, string]> = [
  [
    /\bElegant protection designed for modern homes and apartments\b/gi,
    "Protection planned around the actual opening and daily routine",
  ],
  [
    /\bClear-view safety with a cleaner and more refined finish\b/gi,
    "Safety planned to keep air, light, and the room-side view usable",
  ],
  [
    /\bDesigned to look refined while delivering strong everyday protection\b/gi,
    "Planned so the fitting supports daily use without making the opening look heavy",
  ],
  [
    /\bmeasured installation with neat finishing and secure fitting\b/gi,
    "site reading, clean fixing points, and scope explained before work",
  ],
  [/\bSite-Measured Installation\b/gi, "Site Read First"],
  [/\bMeasured Installation\b/gi, "Site Read First"],
  [/\bsite-measured\b/gi, "site-visit based"],
  [/\bModern Safety\b/gi, "Opening-Specific Safety"],
  [/\bWeather Resistant\b/gi, "Outdoor-Use Materials"],
  [/\bClean Fitting\b/gi, "Clean Fixing Points"],
  [/\bIntegrated Well-finished Finish\b/gi, "Integrated, tidy finish"],
  [/\bPolished Sit-Outs\b/gi, "Sit-outs kept easy to use"],
  [/\bcleaner well-finished finish\b/gi, "cleaner daily-use finish"],
  [/\bwell-finished well-finished\b/gi, "well-finished"],
  [/\brefined finish\b/gi, "quiet finish"],
  [/\bstrong everyday protection\b/gi, "steady daily-use protection"],
  [/\bsecure fitting\b/gi, "firm fixing"],
  [/\bneat finishing\b/gi, "clean finish"],
  [/\bnear me\b/gi, "in this area"],
  [/\bnear you\b/gi, "in your area"],
  [/\bfree quote\b/gi, "site quote"],
  [/\bfree inspection\b/gi, "site check"],
  [/\bfree site visit\b/gi, "site visit"],
  [/\bsame day\b/gi, "scheduled"],
  [/\b24\/7\b/gi, "scheduled"],
  [/\btop rated\b/gi, "locally reviewed"],
  [/\bbest\b/gi, "suitable"],
  [/\bpremium\b/gi, "well-finished"],
  [/\bexperts?\b/gi, "trained installers"],
  [/\bguaranteed\b/gi, "planned"],
  [/\bguarantee\b/gi, "confirm"],
  [/\bProduct Highlights\b/gi, "Practical Service Notes"],
  [/\bSearch Cluster\b/gi, "Service Notes"],
  [/\bcommercial intent\b/gi, "buyer comparison"],
  [/\btransactional intent\b/gi, "booking-ready question"],
  [/\bHuman-written\b/gi, "Practical"],
  [/\bManual local\b/gi, "Local"],
  [/\bSafety & Bird Control\b/gi, "Site Check"],
  [/\bSEO\b/g, "service"],
  [/\bAI\b/g, "template"],
  [/\bmodern\b/gi, "clean"],
  [/\bstrong and reliable\b/gi, "site-suitable"],
  [/\bsafe and reliable\b/gi, "careful"],
  [/\bprevent falls\b/gi, "add a barrier at open edges"],
  [/\bprevents accidents\b/gi, "reduces open-edge worry"],
  [/\bprevent accidents\b/gi, "reduce open-edge worry"],
  [/\bstop birds\b/gi, "help reduce bird entry"],
  [/\bstops birds\b/gi, "helps reduce bird entry"],
  [/\bstopping birds\b/gi, "reducing bird entry"],
  [/\bblock birds\b/gi, "help reduce bird entry"],
  [/\bblocks birds\b/gi, "helps reduce bird entry"],
  [/\bkeeping birds away\b/gi, "reducing bird access"],
  [/\bpermanent solution\b/gi, "longer-term site-suitable option"],
  [/\blow maintenance\b/gi, "easier to maintain"],
  [/\bdurable\b/gi, "daily-use"],
  [/\bprotect balconies\b/gi, "help keep balconies easier to use"],
  [/\bprotect homes\b/gi, "help make homes easier to manage"],
  [/\bprotect children\b/gi, "add a safety layer for children"],
  [/\bwithout hidden charges\b/gi, "with the scope explained clearly"],
  [/\bavailable in ([A-Za-z0-9 .'-]+)/gi, "handled around $1"],
];

function hashText(value: string) {
  return value.split("").reduce((sum, char, index) => {
    return (sum + char.charCodeAt(0) * (index + 11)) % 100000;
  }, 29);
}

function pick<T>(items: T[], seed: number, offset = 0) {
  return items[Math.abs(seed + offset * 37) % items.length];
}

function humanServiceTone(serviceSlug: string): ServiceTone {
  return (
    serviceTones[serviceSlug] ?? {
      audience: "homes and properties comparing local installation work",
      opening:
        "The enquiry usually starts with a real use problem rather than a neat product category.",
      concern:
        "surface condition, daily movement, access, material choice, and the finish the customer will see after work",
      siteRead:
        "site size, fixing condition, access, use pattern, and the customer's main concern",
      checkItems: [
        "what the customer wants the space to do after installation",
        "which surface or opening carries the real problem",
        "what is included and what is outside the scope",
        "how the final finish should look during daily use",
      ],
      decisionLine:
        "A useful service page should help the customer ask better questions before booking, not push a fixed script.",
    }
  );
}

function localContext(location: string, seed: number) {
  const lower = location.toLowerCase();

  if (lower.includes("hills")) {
    return "open views, sloped streets, visible balconies, and homes where the finished line is easy to notice";
  }
  if (lower.includes("road") || lower.includes("x-road") || lower.includes("junction")) {
    return "road-facing windows, dust, active movement outside, and openings that still need light and air";
  }
  if (lower.includes("nagar") || lower.includes("colony")) {
    return "family flats, older residential lanes, compact balconies, and windows used throughout the day";
  }
  if (lower.includes("township") || lower.includes("gated") || lower.includes("county")) {
    return "apartment blocks, shared rules, visible finishes, and balconies that need tidy work";
  }

  return pick(
    [
      "apartments, rented homes, family routines, and practical balcony or window use",
      "mixed building ages, everyday cleaning, side ledges, and openings that need a measured answer",
      "compact homes, upper-floor openings, and small details that become obvious after installation",
      "newer flats, older houses, utility corners, and daily-use spaces that should not feel patched",
    ],
    seed,
    1
  );
}

function sanitizeText(value: string) {
  let text = value.replace(/\s+/g, " ").trim();

  for (const [pattern, replacement] of riskyTextReplacements) {
    text = text.replace(pattern, replacement);
  }

  return text
    .replace(/\bhelp reduce pigeon entry from entering\b/gi, "help reduce pigeon entry")
    .replace(/\badd a safety barrier and reduce bird entry\b/gi, "add a safety layer and help reduce bird entry")
    .replace(/\bsite-suitable site-suitable\b/gi, "site-suitable")
    .replace(/\bcareful careful\b/gi, "careful")
    .replace(/\bclean clean\b/gi, "clean")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function sanitizeHeading(
  heading: string,
  pageData: ServiceLocationResolvedPageData
) {
  const serviceName = pageData.serviceName;
  const location = pageData.location;
  const original = heading.replace(/\s+/g, " ").trim();
  const seed = hashText(`${pageData.serviceSlug}:${location}:${original}`);

  if (/^overview$/i.test(original)) {
    return pick(
      [
        `${location} Site Read for ${serviceName}`,
        `What ${location} Customers Usually Need Checked`,
        `${serviceName} Context in ${location}`,
        `How ${location} Openings Usually Behave`,
      ],
      seed,
      1
    );
  }
  if (/^about\b/i.test(original)) {
    return pick(
      [
        `How Rohini Reads ${location} Sites`,
        `Our ${location} Site Check for ${serviceName}`,
        `How We Plan the Work in ${location}`,
        `${location} Installation Judgement`,
      ],
      seed,
      2
    );
  }
  if (/^(product highlights|practical service notes)$/i.test(original)) {
    return pick(
      [
        `What We Check on Site`,
        `${serviceName} Details That Matter in ${location}`,
        `Material and Fixing Notes for ${location}`,
        `${location} Scope Notes`,
      ],
      seed,
      3
    );
  }
  if (/^applications$/i.test(original)) {
    return pick(
      [
        `Where This Helps in ${location}`,
        `${location} Openings and Use Cases`,
        `Common ${location} Site Uses`,
        `Where ${serviceName} Fits Locally`,
      ],
      seed,
      4
    );
  }
  if (/^conclusion$/i.test(original)) {
    return pick(
      [
        `Before You Decide in ${location}`,
        `A Practical Closing Note for ${location}`,
        `Choosing the Right Scope in ${location}`,
        `Final Site Notes for ${location}`,
      ],
      seed,
      5
    );
  }
  if (/^nearby areas we serve$/i.test(original)) {
    return pick(
      [
        `Nearby Areas Around ${location}`,
        `${location} Nearby Service Links`,
        `Other Areas Connected to ${location}`,
        `Close-By Locations for ${serviceName}`,
      ],
      seed,
      6
    );
  }

  return sanitizeText(original)
    .replace(/\bPrice\s+in this area\s+in\b/i, "Price and Site Scope in")
    .replace(/\bPrice\s+near me\s+in\b/i, "Price and Site Scope in")
    .replace(/\bWhy Choose\b/i, `How ${location} Customers Compare`)
    .replace(/\bhelp reduce\b/g, "Helps Reduce");
}

function sanitizeContent(content: string | string[]) {
  if (Array.isArray(content)) {
    return content.map(sanitizeText).filter(Boolean);
  }

  return sanitizeText(content);
}

function shouldDropGeneratedIntro(heading: string) {
  return /^overview$/i.test(heading) || /^about\b/i.test(heading);
}

function buildHumanIntroSections(
  pageData: ServiceLocationResolvedPageData
): ServiceLocationResolvedPageData["sections"] {
  const seed = hashText(`${pageData.serviceSlug}:${pageData.location}`);
  const tone = humanServiceTone(pageData.serviceSlug);
  const context = localContext(pageData.location, seed);
  const serviceName = pageData.serviceName;
  const location = pageData.location;
  const openingHeading = pick(
    [
      `How ${location} Usually Asks for ${serviceName}`,
      `The First ${location} Conversation Is Usually Practical`,
      `Why ${serviceName} in ${location} Needs a Site Read`,
      `${location} Homes Need More Than a Stock Answer`,
    ],
    seed,
    2
  );

  return [
    {
      heading: openingHeading,
      content: [
        `${tone.opening} In ${location}, that conversation is shaped by ${context}. The customer usually wants the space to feel easier to use, but the right answer depends on the opening, surface, access, and daily routine.`,
        `For ${tone.audience}, the real concern is often ${tone.concern}. That is why the page should sound like a site visit, not a catalogue paragraph. A useful first step is to understand what the customer has stopped using normally and what they want the space to feel like after work.`,
      ],
    },
    {
      heading: `What We Check Before Suggesting the Scope`,
      content: [
        `${serviceName} in ${location} should be checked for ${tone.siteRead}.`,
        ...tone.checkItems,
        "whether a related service would solve one part of the problem more honestly",
      ],
    },
    {
      heading: `The Clear Decision for ${location}`,
      content: `${tone.decisionLine} The quote should explain the included openings, material choice, fixing method, access condition, and anything that is not part of the present work.`,
    },
  ];
}

function sanitizeSections(
  pageData: ServiceLocationResolvedPageData,
  addHumanIntro: boolean
) {
  const sourceSections = pageData.sections ?? [];
  const existingSections = sourceSections
    .filter((section) => {
      if (!addHumanIntro) return true;
      return !shouldDropGeneratedIntro(section.heading);
    })
    .map((section) => ({
      ...section,
      heading: sanitizeHeading(section.heading, pageData),
      content: sanitizeContent(section.content),
      slug: section.slug,
    }));

  return addHumanIntro
    ? [...buildHumanIntroSections(pageData), ...existingSections]
    : existingSections;
}

function sanitizeFaqs(
  faqs: ServiceLocationResolvedPageData["faqs"],
  pageData: ServiceLocationResolvedPageData
) {
  return (faqs ?? []).map((faq) => ({
    question: sanitizeText(faq.question),
    answer: sanitizeText(faq.answer),
  }));
}

function sanitizeKeywords(keywords?: string[]) {
  return keywords
    ?.map(sanitizeText)
    .filter((keyword) => {
      const lower = keyword.toLowerCase();
      return (
        keyword &&
        !lower.includes("service notes") &&
        !lower.includes("template")
      );
    })
    .slice(0, 30);
}

export function sanitizeServiceLocationPageContent(
  page: ServiceLocationPageContent,
  options: SanitizerOptions = {}
): ServiceLocationPageContent {
  const pageData = page.resolvedPageData;
  const sanitizedData: ServiceLocationResolvedPageData = {
    ...pageData,
    title: sanitizeText(pageData.title),
    shortDescription: sanitizeText(pageData.shortDescription),
    chips: pageData.chips?.map(sanitizeText),
    showcaseBadge: pageData.showcaseBadge
      ? sanitizeText(pageData.showcaseBadge)
      : pageData.showcaseBadge,
    cta: pageData.cta
      ? {
          title: sanitizeText(pageData.cta.title),
          description: sanitizeText(pageData.cta.description),
        }
      : pageData.cta,
    sections: sanitizeSections(pageData, Boolean(options.addHumanIntro)),
    faqs: sanitizeFaqs(pageData.faqs, pageData),
  };

  return {
    ...page,
    resolvedPageData: sanitizedData,
    layoutPropsPassedToBrandedServiceLayout:
      page.layoutPropsPassedToBrandedServiceLayout && {
        ...page.layoutPropsPassedToBrandedServiceLayout,
        serviceLabel: page.layoutPropsPassedToBrandedServiceLayout.serviceLabel
          ? sanitizeText(page.layoutPropsPassedToBrandedServiceLayout.serviceLabel)
          : page.layoutPropsPassedToBrandedServiceLayout.serviceLabel,
        showcaseBadge: page.layoutPropsPassedToBrandedServiceLayout.showcaseBadge
          ? sanitizeText(page.layoutPropsPassedToBrandedServiceLayout.showcaseBadge)
          : page.layoutPropsPassedToBrandedServiceLayout.showcaseBadge,
        chips: page.layoutPropsPassedToBrandedServiceLayout.chips?.map(sanitizeText),
        ctaTitle: page.layoutPropsPassedToBrandedServiceLayout.ctaTitle
          ? sanitizeText(page.layoutPropsPassedToBrandedServiceLayout.ctaTitle)
          : page.layoutPropsPassedToBrandedServiceLayout.ctaTitle,
        ctaDescription: page.layoutPropsPassedToBrandedServiceLayout.ctaDescription
          ? sanitizeText(page.layoutPropsPassedToBrandedServiceLayout.ctaDescription)
          : page.layoutPropsPassedToBrandedServiceLayout.ctaDescription,
      },
    metadata: page.metadata && {
      ...page.metadata,
      title: page.metadata.title && {
        ...page.metadata.title,
        default: sanitizeText(page.metadata.title.default),
      },
      description: page.metadata.description
        ? sanitizeText(page.metadata.description)
        : page.metadata.description,
      keywords: sanitizeKeywords(page.metadata.keywords),
      category: page.metadata.category
        ? sanitizeText(page.metadata.category)
        : page.metadata.category,
      openGraph: page.metadata.openGraph && {
        ...page.metadata.openGraph,
        title: page.metadata.openGraph.title
          ? sanitizeText(page.metadata.openGraph.title)
          : page.metadata.openGraph.title,
        description: page.metadata.openGraph.description
          ? sanitizeText(page.metadata.openGraph.description)
          : page.metadata.openGraph.description,
      },
      twitter: page.metadata.twitter && {
        ...page.metadata.twitter,
        title: page.metadata.twitter.title
          ? sanitizeText(page.metadata.twitter.title)
          : page.metadata.twitter.title,
        description: page.metadata.twitter.description
          ? sanitizeText(page.metadata.twitter.description)
          : page.metadata.twitter.description,
      },
    },
  };
}
