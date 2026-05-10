import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Handshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type BrandedSection = {
  heading: string;
  content: string | string[];
  slug?: string | string[];
};

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  scripts?: ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
  showcaseImage: string;
  showcaseImageAlt: string;
  showcaseImageTitle: string;
  detailImage?: string;
  detailImageAlt?: string;
  detailImageTitle?: string;
  serviceName: string;
  location: string;
  serviceHref: string;
  serviceLabel?: string;
  showcaseBadge?: string;
  chips?: string[];
  sections: BrandedSection[];
  breadcrumbs: BreadcrumbItem[];
  ctaTitle: string;
  ctaDescription: string;
  afterContent?: ReactNode;
};

const defaultChips = [
  "Site Read First",
  "Opening-Specific Scope",
  "Material Matched to Use",
  "Clean Fixing Points",
];

const defaultStats = [
  { label: "Process", value: "Site Read" },
  { label: "Materials", value: "Scope Based" },
  { label: "Service Area", value: "Local Visit" },
];

function asText(content?: string | string[]) {
  if (!content) return "";
  return Array.isArray(content) ? content.join(" ") : content;
}

function asList(content?: string | string[]) {
  if (!content) return [];
  return Array.isArray(content) ? content : [content];
}

function includesAny(section: BrandedSection, terms: string[]) {
  const heading = section.heading.toLowerCase();
  return terms.some((term) => heading.includes(term));
}

function trimHeroDescription(text: string, maxChars = 1000) {
  if (text.length <= maxChars) return text;

  const trimmed = text.slice(0, maxChars);
  const lastSentenceBreak = Math.max(
    trimmed.lastIndexOf(". "),
    trimmed.lastIndexOf("! "),
    trimmed.lastIndexOf("? ")
  );

  if (lastSentenceBreak >= Math.floor(maxChars * 0.7)) {
    return trimmed.slice(0, lastSentenceBreak + 1).trim();
  }

  return `${trimmed.trimEnd()}...`;
}

function staticImageSrc(src?: string) {
  if (!src) return src;

  return src.startsWith("/") ? src.split("?")[0] : src;
}

type LayoutHeadingSlot =
  | "introTitle"
  | "trustLabel"
  | "trustTitle"
  | "highlightLabel"
  | "highlightTitle"
  | "supportLabel"
  | "supportTitle"
  | "detailsLabel"
  | "detailsTitle"
  | "detailsIntro"
  | "quoteBadge"
  | "quoteTitle"
  | "processLabel"
  | "processTitle"
  | "assuranceTitle"
  | "careLabel"
  | "careTitle"
  | "nearbyLabel"
  | "nearbyTitle"
  | "ctaLabel";

type LayoutTone = {
  surface: string;
  concern: string;
  material: string;
  result: string;
  check: string;
  activity: string;
};

function hashText(value: string) {
  return value.split("").reduce((sum, char, index) => {
    return (sum + char.charCodeAt(0) * (index + 17)) % 100000;
  }, 43);
}

function pick<T>(items: T[], seed: number, offset = 0) {
  return items[Math.abs(seed + offset * 47) % items.length];
}

function serviceTone(serviceName: string): LayoutTone {
  const lower = serviceName.toLowerCase();

  if (lower.includes("artificial grass")) {
    return {
      surface: "floor and edge",
      concern: "drainage, base level, and foot traffic",
      material: "turf pile and base preparation",
      result: "a green surface that still feels easy to clean",
      check: "surface read",
      activity: "balcony, terrace, or play-area use",
    };
  }

  if (lower.includes("sports")) {
    return {
      surface: "court and boundary",
      concern: "ball direction, support spacing, and nearby edges",
      material: "mesh, rope edge, and fixing support",
      result: "a play area that feels controlled",
      check: "impact-direction check",
      activity: "practice, play, and coaching movement",
    };
  }

  if (lower.includes("cloth")) {
    return {
      surface: "utility and ceiling",
      concern: "drying load, reach height, and movement space",
      material: "hanger hardware and wall or ceiling fixing",
      result: "a laundry corner that stays easier to use",
      check: "load and reach check",
      activity: "daily washing and drying",
    };
  }

  if (lower.includes("spikes")) {
    return {
      surface: "ledge and perch",
      concern: "active sitting lines, AC frames, and parapet edges",
      material: "spike base, fixing method, and ledge width",
      result: "a perch point that stops inviting repeat use",
      check: "perch-line check",
      activity: "ledge cleaning and bird-control upkeep",
    };
  }

  if (lower.includes("net")) {
    return {
      surface: "opening and duct",
      concern: "bird routes, pipe gaps, and edge coverage",
      material: "net material, hook spacing, and fixing line",
      result: "an opening that is easier to keep clean",
      check: "entry-route check",
      activity: "balcony, duct, and utility access",
    };
  }

  if (lower.includes("children")) {
    return {
      surface: "window and balcony edge",
      concern: "low sills, furniture reach, and child movement",
      material: "stainless cable, spacing, and anchor line",
      result: "a room that keeps air and feels calmer at the edge",
      check: "family-use check",
      activity: "daily child movement near openings",
    };
  }

  if (lower.includes("window")) {
    return {
      surface: "window and frame",
      concern: "sill depth, curtain movement, and outside ledges",
      material: "window cable and frame-side anchors",
      result: "a window that stays bright, open, and better controlled",
      check: "frame and sill check",
      activity: "rooms that depend on air and daylight",
    };
  }

  return {
    surface: "balcony and opening",
    concern: "open edges, side returns, and bird access",
    material: "stainless cable, tension, and anchor placement",
    result: "a space that feels safer without losing its view",
    check: "site-read check",
    activity: "daily balcony and window use",
  };
}

function layoutHeading(
  slot: LayoutHeadingSlot,
  serviceName: string,
  location: string,
  sourceHeading?: string
) {
  const tone = serviceTone(serviceName);
  const seed = hashText(`${slot}:${serviceName}:${location}:${sourceHeading ?? ""}`);
  const service = serviceName.toLowerCase();

  const options: Record<LayoutHeadingSlot, string[]> = {
    introTitle: [
      `${location} ${tone.surface} work starts with the site`,
      `How ${serviceName} should fit a ${location} space`,
      `A ${location} site read before the fitting line`,
      `${serviceName} planned around real ${tone.activity}`,
      `What the ${location} opening needs before work starts`,
      `A calmer ${tone.surface} answer for ${location}`,
    ],
    trustLabel: [
      "Site reading",
      `${location} notes`,
      "What matters here",
      "Practical check",
      "Before the scope",
      "Local fitting sense",
    ],
    trustTitle: [
      `${tone.result} after the right ${tone.check}`,
      `The ${tone.concern} question in ${location}`,
      `A better fit for ${tone.activity}`,
      `What changes when the site is read properly`,
      `${serviceName} with the awkward points included`,
      `A practical way to handle ${tone.surface} concerns`,
    ],
    highlightLabel: [
      "What we check",
      "Site details",
      `${location} fit notes`,
      "Scope points",
      "Before fitting",
      "Material notes",
    ],
    highlightTitle: [
      `${tone.surface} details that matter after fitting`,
      `Small site choices that change daily use`,
      `${tone.material} matched to the real surface`,
      `The checks that make the work feel settled`,
      `What should be clear before the team starts`,
      `${location} details that should not be guessed`,
    ],
    supportLabel: [
      "Talk through the site",
      "Before booking",
      "Site question",
      `${location} help`,
      "Quick site note",
      "Speak with the team",
    ],
    supportTitle: [
      `Need a site read for ${service} in ${location}?`,
      `Unsure what your ${tone.surface} needs in ${location}?`,
      `Want the ${tone.check} explained before booking?`,
      `Have a ${location} opening that needs a closer look?`,
      `Comparing the right scope for ${service} in ${location}?`,
      `Need practical guidance before fitting starts?`,
    ],
    detailsLabel: [
      "Work notes",
      `${location} scope`,
      "Fitting details",
      "Site decisions",
      "What changes the result",
      "Practical details",
    ],
    detailsTitle: [
      `${serviceName} choices that should match the site`,
      `What the installer should read before work`,
      `Details that keep the space easy to use`,
      `${tone.material} and ${tone.concern} in one plan`,
      `The parts of the job that should not feel copied`,
      `How the work should respond to ${location}`,
    ],
    detailsIntro: [
      `These notes keep the page tied to the actual ${tone.surface}, the way the area is used, and the decisions that affect the finished work.`,
      `The points below turn the service from a product label into a site-specific scope for ${location}.`,
      `Each detail should help a customer understand what is being checked, why it matters, and how the result should behave after fitting.`,
      `This section keeps material, access, finish, and daily use in the same conversation.`,
      `The useful details are the ones a customer can see or feel after the team leaves.`,
      `A good ${location} scope should explain the surface, the material, and the small choices that affect daily use.`,
    ],
    quoteBadge: [
      "Quote and site scope",
      "Before the quote",
      `${location} quote notes`,
      "Scope and access",
      "Price depends on the site",
      "Measure before deciding",
    ],
    quoteTitle: [
      `Scope, access, and surface decide the final quote`,
      `${tone.material} should be priced against the actual site`,
      `A clear quote starts with the parts that need work`,
      `The cost should follow the opening, not a fixed script`,
      `What changes the ${location} quote`,
      `How the site shape affects the installation cost`,
    ],
    processLabel: [
      "Fitting sequence",
      "Before work starts",
      "How the site is read",
      "Installation path",
      "Work sequence",
      "From check to fitting",
    ],
    processTitle: [
      `Fixing points, access, and finish checked before the line is set`,
      `${tone.check} first, material and fitting after that`,
      `A step-by-step fit around ${tone.activity}`,
      `How the team moves from site reading to finished work`,
      `The order that keeps the job practical`,
      `Surface, access, and alignment before the final fitting`,
    ],
    assuranceTitle: [
      `A result that should feel steady after daily use`,
      `Work that should settle into the space`,
      `A finish that should not fight the room`,
      `Practical hold, clean alignment, and easier use`,
      `The site should feel calmer after fitting`,
      `A clean result without making the space feel forced`,
    ],
    careLabel: [
      "Care notes",
      "After fitting",
      "Use and upkeep",
      "Daily care",
      "Keeping it easy",
      "Simple checks",
    ],
    careTitle: [
      `${tone.surface} care that keeps the area easy to use`,
      `Small habits that help the work stay settled`,
      `After-care for ${tone.activity}`,
      `How to keep the finished area working well`,
      `${location} upkeep notes for daily use`,
      `Care that follows the way the space is used`,
    ],
    nearbyLabel: [
      "Around this part of the city",
      `${location} surroundings`,
      "Close-by work",
      "Around this location",
      "Neighbouring pages",
      "Connected areas",
    ],
    nearbyTitle: [
      `Nearby locations connected to ${location}`,
      `Close-by areas where this service is also handled`,
      `${serviceName} work around ${location}`,
      `Other local pages near ${location}`,
      `Service coverage around ${location}`,
      `Areas nearby with similar site needs`,
    ],
    ctaLabel: [
      "Site check available",
      "Ready for a site read",
      "Before you book",
      "Ask for a scope check",
      "Talk through the opening",
      "Plan the fitting",
    ],
  };

  return pick(options[slot], seed, 1);
}

export default function BrandedServiceLayout({
  scripts,
  title,
  description,
  backgroundImage,
  showcaseImage,
  showcaseImageAlt,
  showcaseImageTitle,
  detailImage,
  detailImageAlt,
  detailImageTitle,
  serviceName,
  location,
  serviceHref,
  serviceLabel,
  showcaseBadge,
  chips,
  sections,
  breadcrumbs,
  ctaTitle,
  ctaDescription,
  afterContent,
}: Props) {
  const introSection = sections[0];
  const aboutSection =
    sections.find((section, index) => index !== 0 && includesAny(section, ["about"])) ??
    sections[1];
  const priceSection = sections.find((section) =>
    includesAny(section, ["price", "cost", "pricing"])
  );
  const tipsSection = sections.find((section) =>
    includesAny(section, ["tips", "maintenance", "care"])
  );
  const nearbySection = sections.find((section) =>
    includesAny(section, ["nearby areas", "nearby locations", "nearby"])
  );
  const whySection = sections.find((section) =>
    includesAny(section, ["why choose", "why ", "popular", "protect", "protection"])
  );
  const listSection =
    sections.find(
      (section) =>
        Array.isArray(section.content) &&
        !includesAny(section, ["nearby areas", "nearby locations", "nearby"])
    ) ?? whySection;
  const conclusionSection = sections.find((section) =>
    includesAny(section, ["conclusion"])
  );

  const usedSections = new Set<BrandedSection>(
    [
      introSection,
      aboutSection,
      priceSection,
      tipsSection,
      nearbySection,
      whySection,
      listSection,
      conclusionSection,
    ].filter(Boolean) as BrandedSection[]
  );

  const featureSections = sections.filter((section) => !usedSections.has(section)).slice(0, 4);
  const nearbyItems = asList(nearbySection?.content);
  const nearbyLinks = Array.isArray(nearbySection?.slug) ? nearbySection.slug : [];
  const highlightItems = asList(listSection?.content).slice(0, 6);
  const benefitItems =
    whySection && Array.isArray(whySection.content)
      ? whySection.content.slice(0, 6)
      : highlightItems.slice(0, 6);

  const statCards = [
    defaultStats[0],
    defaultStats[1],
    { label: "Service Area", value: location },
  ];
  const heroDescription = trimHeroDescription(description, 1000);
  const heroBackgroundImage = staticImageSrc(backgroundImage) ?? backgroundImage;
  const cleanShowcaseImage = staticImageSrc(showcaseImage) ?? showcaseImage;
  const cleanDetailImage = staticImageSrc(detailImage);
  const introTitle = layoutHeading("introTitle", serviceName, location, introSection?.heading);
  const trustLabel = layoutHeading("trustLabel", serviceName, location, whySection?.heading);
  const trustTitle = layoutHeading("trustTitle", serviceName, location, whySection?.heading);
  const highlightLabel = layoutHeading(
    "highlightLabel",
    serviceName,
    location,
    listSection?.heading
  );
  const highlightTitle = layoutHeading(
    "highlightTitle",
    serviceName,
    location,
    listSection?.heading
  );
  const supportLabel = layoutHeading("supportLabel", serviceName, location);
  const supportTitle = layoutHeading("supportTitle", serviceName, location);
  const detailsLabel = layoutHeading("detailsLabel", serviceName, location);
  const detailsTitle = layoutHeading("detailsTitle", serviceName, location);
  const detailsIntro = layoutHeading("detailsIntro", serviceName, location);
  const quoteBadge = layoutHeading("quoteBadge", serviceName, location, priceSection?.heading);
  const quoteTitle = layoutHeading("quoteTitle", serviceName, location, priceSection?.heading);
  const processLabel = layoutHeading("processLabel", serviceName, location);
  const processTitle = layoutHeading("processTitle", serviceName, location);
  const assuranceTitle = layoutHeading("assuranceTitle", serviceName, location);
  const careLabel = layoutHeading("careLabel", serviceName, location, tipsSection?.heading);
  const careTitle = layoutHeading("careTitle", serviceName, location, tipsSection?.heading);
  const nearbyLabel = layoutHeading("nearbyLabel", serviceName, location, nearbySection?.heading);
  const nearbyTitle = layoutHeading("nearbyTitle", serviceName, location, nearbySection?.heading);
  const ctaLabel = layoutHeading("ctaLabel", serviceName, location);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#fff7ed_32%,#ffffff_100%)]">
      {scripts}

      <section className="relative py-10 text-white md:py-14">
        <Image
          src={heroBackgroundImage}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />

        <div className="relative mx-auto max-w-[80vw] px-6 pb-8 text-center md:text-left">
          <h1 className="mb-6 text-2xl font-bold leading-tight drop-shadow-lg md:text-3xl">
            {title}
          </h1>

          <p className="max-w-3xl text-md text-gray-200 md:text-lg">{heroDescription}</p>

          <div className="mt-6 flex flex-col justify-center gap-6 sm:flex-row md:justify-start">
            <a
              href="tel:+918790518724"
              className="relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-2 font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(255,170,0,0.45)]"
            >
              <Phone size={20} className="relative z-10" />
              <span className="relative z-10 tracking-wide">Call Now</span>
            </a>

            <a
              href="https://wa.me/919491008380"
              className="relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-2 font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(34,197,94,0.45)]"
            >
              <MessageCircle size={20} className="relative z-10" />
              <span className="relative z-10 tracking-wide">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="-mt-6 overflow-hidden rounded-[28px] border border-orange-100 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.1)] md:-mt-16 md:rounded-[32px] md:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[340px] overflow-hidden lg:min-h-[520px]">
              <Image
                src={cleanShowcaseImage}
                alt={showcaseImageAlt}
                title={showcaseImageTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-900/0 to-transparent sm:from-slate-950/70 sm:via-slate-900/10" />

              <div className="absolute left-4 top-4 right-4 inline-flex w-fit max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:text-sm">
                <Sparkles size={16} className="text-amber-300" />
                {showcaseBadge ?? `${serviceName} Service`}
              </div>

              <div className="absolute bottom-4 left-4 right-4 hidden gap-2 sm:bottom-5 sm:left-5 sm:right-5 sm:grid sm:gap-3 sm:grid-cols-3">
                {statCards.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/15 bg-black/25 p-4 text-white backdrop-blur-md"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-orange-200">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-bold sm:text-2xl">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_32%),linear-gradient(180deg,#ffffff_0%,#fff7ed_100%)] p-5 md:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-600 sm:text-sm">
                <ShieldCheck size={16} />
                {serviceLabel ?? `${serviceName} in ${location}`}
              </div>

              <h2 className="mt-5 text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
                {introTitle}
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
                {asText(introSection?.content)}
              </p>

              {aboutSection && aboutSection !== introSection && (
                <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {asText(aboutSection.content)}
                </p>
              )}

              <div className="mt-6 grid gap-3 sm:hidden">
                {statCards.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-orange-100 bg-white p-4 shadow-sm"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-orange-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-bold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                {(chips && chips.length > 0 ? chips : defaultChips).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-center text-xs font-medium text-slate-700 sm:px-4 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-[24px] border border-orange-100 bg-white/90 p-4 shadow-sm">
                  <Handshake className="h-8 w-8 text-orange-500" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                    Site condition reviewed before final fitting is confirmed.
                  </p>
                </div>
                <div className="rounded-[24px] border border-orange-100 bg-white/90 p-4 shadow-sm">
                  <Award className="h-8 w-8 text-orange-500" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                    Material options discussed against exposure and fixing surface.
                  </p>
                </div>
                <div className="rounded-[24px] border border-orange-100 bg-white/90 p-4 shadow-sm">
                  <ShieldCheck className="h-8 w-8 text-orange-500" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                    Fitting planned around balconies, windows, and high-rise access.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact-us"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:text-base"
                >
                  Request Site Quote
                  <ArrowRight size={18} />
                </a>
                <a
                  href="https://wa.me/919491008380"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100 sm:text-base"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-5 text-sm text-slate-600 sm:px-6 sm:py-6">
        <div className="inline-flex flex-wrap items-center gap-2 rounded-[20px] border border-slate-200 bg-white/90 px-4 py-3 shadow-sm sm:rounded-full sm:py-2">
          {breadcrumbs.map((item, index) => (
            <div key={`${item.label}-${index}`} className="contents">
              {item.href ? (
                <Link
                  href={item.href}
                  prefetch={false}
                  className="transition hover:text-orange-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-slate-900">{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm md:rounded-[30px] md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-600 sm:text-sm">
              <Sparkles size={16} />
              {trustLabel}
            </div>
            <h2 className="mt-4 text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
              {trustTitle}
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              {asText(whySection?.content ?? introSection?.content)}
            </p>
            {conclusionSection && (
              <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                {asText(conclusionSection.content)}
              </p>
            )}

            {/* {benefitItems.length > 0 && (
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {benefitItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <p className="mt-3 text-sm font-medium leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            )} */}
          </div>

          <div className="space-y-6">
            {highlightItems.length > 0 && (
              <div className="rounded-[26px] border border-orange-100 bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] p-5 shadow-sm md:rounded-[30px] md:p-6">
                <div className="flex items-start gap-3">
                  <Building2 className="h-10 w-10 rounded-2xl bg-slate-900 p-2 text-white" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 sm:text-sm">
                      {highlightLabel}
                    </p>
                    <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                      {highlightTitle}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {highlightItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[26px] border border-slate-200 bg-slate-900 p-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.28)] md:rounded-[30px] md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200 sm:text-sm">
                {supportLabel}
              </p>
              <h3 className="mt-3 text-xl font-bold leading-tight sm:text-2xl">
                {supportTitle}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Speak with our team for site guidance, product suggestions, and a
                site quote for your balcony, window, or outdoor installation.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:+918790518724"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  Call Rohini Invisible Grills
                  <Phone size={18} />
                </a>
                <Link
                  href={serviceHref}
                  prefetch={false}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white px-4 py-3 font-semibold text-slate-900 transition hover:bg-orange-50"
                >
                  Explore service page
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featureSections.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="rounded-[26px] border border-orange-100 bg-white p-5 shadow-sm md:rounded-[34px] md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                  {detailsLabel}
                </p>
                <h2 className="mt-3 text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
                  {detailsTitle}
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-600">
                {detailsIntro}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {featureSections.map((section) => (
                <div
                  key={section.heading}
                  className="rounded-[22px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:rounded-[28px] md:p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-sm font-bold text-orange-600">
                    <Sparkles size={18} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold leading-tight text-slate-900">
                    {section.heading}
                  </h3>

                  {Array.isArray(section.content) ? (
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      {section.content.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(priceSection || detailImage) && (
        <section className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm md:rounded-[32px]">
              {cleanDetailImage && (
                <div className="relative h-[220px] sm:h-[280px]">
                  <Image
                    src={cleanDetailImage}
                    alt={detailImageAlt ?? showcaseImageAlt}
                    title={detailImageTitle ?? showcaseImageTitle}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 sm:text-sm">
                      <Award size={16} className="text-orange-500" />
                      {quoteBadge}
                    </div>
                  </div>
                </div>
              )}

              <div className="p-5 md:p-6">
                <h2 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                  {quoteTitle}
                </h2>

                <div className="mt-6 space-y-3">
                  {asList(priceSection?.content ?? aboutSection?.content).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm md:rounded-[32px] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                {processLabel}
              </p>
              <h2 className="mt-3 text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
                {processTitle}
              </h2>

              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                {asList(
                  sections.find((section) =>
                    includesAny(section, ["install", "process", "how we", "careful"])
                  )?.content ?? introSection?.content
                )
                  .slice(0, 6)
                  .map((item, index) => (
                    <div key={`${item}-${index}`} className="flex gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white sm:h-11 sm:w-11">
                        {index + 1}
                      </div>
                      <div className="rounded-[20px] border border-orange-100 bg-orange-50/60 px-4 py-4 sm:rounded-[24px]">
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-green-100 bg-green-50 p-4 sm:mt-8 sm:rounded-[28px] sm:p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {assuranceTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      Every installation is planned to preserve openness, airflow,
                      and the clean look of the property while improving safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {(tipsSection || nearbyItems.length > 0) && (
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            {tipsSection && (
              <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm md:rounded-[30px] md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 sm:text-sm">
                  {careLabel}
                </p>
                <h2 className="mt-3 text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
                  {careTitle}
                </h2>

                <div className="mt-6 space-y-4">
                  {asList(tipsSection.content).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <div className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {nearbyItems.length > 0 && (
              <div className="rounded-[26px] border border-orange-100 bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] p-5 shadow-sm md:rounded-[30px] md:p-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-10 w-10 rounded-2xl bg-slate-900 p-2 text-white" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 sm:text-sm">
                      {nearbyLabel}
                    </p>
                    <h2 className="text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
                      {nearbyTitle}
                    </h2>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {nearbyItems.map((item, index) => (
                    <Link
                      key={`${item}-${nearbyLinks[index] ?? index}`}
                      href={nearbyLinks[index] ?? "#"}
                      prefetch={false}
                      className="group rounded-[20px] border border-orange-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md sm:rounded-[24px]"
                    >
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                        View location page
                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {afterContent}

      <section className="px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_55%,#7c2d12_100%)] px-5 py-8 text-white shadow-[0_25px_80px_rgba(15,23,42,0.35)] md:rounded-[34px] md:px-10 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200 sm:text-sm">
                {ctaLabel}
              </p>
              <h2 className="mt-4 text-[1.9rem] font-bold leading-tight md:text-4xl">
                {ctaTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-200 sm:text-base sm:leading-8">
                {ctaDescription}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="/contact-us"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-orange-50 sm:text-base"
              >
                Request Site Quote
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:+918790518724"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 sm:text-base"
              >
                Call Now
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
