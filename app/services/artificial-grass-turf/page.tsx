
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import FAQSection from "../../invisible-grills/[slug]/Faqs";
import { Handshake, Award, ShieldCheck } from "lucide-react";
// import { Poppins, Inter } from "next/font/google";
import { buildFullSchema } from "../../components/seo/schema";
import { generateBreadcrumb, locationAuthorityScore } from "../../components/seo/utils";
import LocationScroller from "../../components/LocationsWeServe";
import {buildSchemaGraph } from "../../components/schema/combineSchema";


import type { Metadata } from "next";
import {getGeo} from "../../components/utils/getGeo"
import MapSection from "../../components/maps/geoMap";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const location = "Hyderabad";

  const geo = getGeo("hyderabad")

  const url = `https://rohiniinvisiblegrills.com/services/artificial-grass-turf`;

  const image =   "/artificialturf/cards/artificial-turf-for-garden.webp";

  const primaryKeyword = `Artificial Grass Turf Installation in ${location}`;

  const title =
    `${primaryKeyword} | Balcony & Terrace Grass Flooring Near Me | Rohini`;

  const description =
    `Looking for artificial grass turf installation in ${location}? Get top rated balcony grass, terrace turf, and garden grass solutions near you. Premium quality grass, expert installation, affordable price, and natural green look for homes and offices.`;

  return {
    metadataBase: new URL("https://rohiniinvisiblegrills.com"),

    title: {
      default: title,
      template: "%s | Rohini",
    },

    description,

    keywords: Array.from(new Set([
      primaryKeyword,
      `Artificial grass ${location}`,
      `Balcony grass flooring ${location}`,
      `Terrace grass installation ${location}`,
      `Garden artificial turf ${location}`,
      `Artificial grass near me ${location}`,
      `Green carpet grass ${location}`,
      "Rohini",
    ])).slice(0, 30),

    alternates: {
      canonical: url,
    },

    category: "Flooring",

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Rohini",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: primaryKeyword,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    other: {
      "geo.region": geo.region,
      "geo.placename": location,
      "geo.position": `${geo.lat};${geo.lng}`,
      ICBM: `${geo.lat}, ${geo.lng}`,
    },
  };
}

export default function Page({ params }: any) {

  const location = "Hyderabad";

  const breadcrumbs = generateBreadcrumb(location, "services/artificial-grass-turf")

  const authorityScore = locationAuthorityScore(location)

 const faqs = [

{
question: `What is artificial grass turf installation in ${location}?`,
answer: `Artificial grass turf installation is a service where high quality synthetic grass is installed on balconies, terraces, gardens, and indoor areas to create a natural green look without maintenance.`
},

{
question: `Where can artificial grass be installed in ${location}?`,
answer: `Artificial grass can be installed on balconies, terraces, gardens, rooftops, play areas, and indoor spaces to enhance appearance and comfort.`
},

{
question: `Is artificial grass safe for children and pets?`,
answer: `Yes. Artificial grass is soft, non-toxic, and safe for children and pets. It provides a comfortable surface for play and daily use.`
},

{
question: `How long does artificial grass last?`,
answer: `High quality artificial grass can last 5 to 10 years depending on usage and maintenance. It is designed for long-term durability.`
},

{
question: `Does artificial grass need maintenance?`,
answer: `Artificial grass requires very low maintenance. Occasional cleaning is enough to keep it fresh and neat.`
},

{
question: `What is the cost of artificial grass installation in ${location}?`,
answer: `The cost depends on area size and grass quality. We provide affordable pricing with premium materials and professional installation.`
},

{
question: `Does artificial grass look natural?`,
answer: `Yes. Modern artificial grass is designed to look like real grass with natural color and texture, giving a premium green finish.`
},

{
question: `Is artificial grass suitable for outdoor use?`,
answer: `Yes. Artificial grass is UV protected and weather resistant, making it perfect for outdoor balconies, terraces, and gardens.`
},

{
question: `Why choose professional artificial grass installation in ${location}?`,
answer: `Professional installation ensures proper fitting, smooth finishing, and long-lasting performance. Customers searching artificial grass near me prefer expert service for best results.`
},

{
question: `Can artificial grass be installed on tiles or concrete?`,
answer: `Yes. Artificial grass can be installed on tiles, concrete, and other surfaces with proper base preparation.`
}

];

  const invisibleGrillsSections = [

{
header: `Artificial Grass Turf Installation in ${location}`,
content: `Artificial grass turf installation in ${location} is the best way to create a green and beautiful space without maintenance. People searching artificial grass near me or balcony grass installation choose this solution to improve home appearance and comfort. It is perfect for balconies, terraces, and gardens.`
},

{
header: `How Artificial Grass Improves Your Space`,
content: `Artificial grass gives a natural green look and makes your space more attractive. It is soft, clean, and comfortable for walking and sitting. Families in ${location} searching balcony grass or terrace turf installation prefer this for modern and stylish homes.`
},

{
header: `High Quality Artificial Grass Material`,
content: `We use premium quality artificial grass with UV protection and strong backing. It does not fade in sunlight and lasts for many years. Customers searching top rated artificial grass installation in ${location} choose durable and realistic grass solutions.`
},

{
header: `Professional Artificial Grass Installation Process`,
content: `Our team provides expert installation with proper surface preparation and fixing. We ensure smooth finishing without bubbles or gaps. People searching artificial grass installation near me in ${location} trust professional service for best results.`
},

{
header: `Near me Artificial Grass Cost in ${location}`,
content: `The cost of artificial grass installation in ${location} depends on area size and grass type. We offer affordable pricing with premium quality materials. Customers searching best artificial grass price near me get value for money and long-lasting beauty.`
},

{
header: `Why Homeowners in ${location} Choose Artificial Grass`,
content: `Homeowners choose artificial grass because it looks natural and needs no watering or cutting. It saves time and effort while keeping space green all year. People searching balcony grass flooring or terrace grass installation in ${location} prefer this easy solution.`
},

{
header: `Maintenance Tips for Artificial Grass`,
content: `Artificial grass needs very little maintenance. Clean dust occasionally and remove waste to keep it fresh. It stays green and neat for years. Families in ${location} enjoy clean and beautiful spaces with minimal effort.`
}

];

  
    
    const url = `https://rohiniinvisiblegrills.com/services/artificial-grass-turf`;
    const serviceName = "Artificial Grass Turf Installation";
    const serviceSlug = "artificial-grass-turf";
    
    const galleryImages = [
    "/artificialturf/cards/artificial-turf-for-garden.webp",
  "/artificialturf/cards/artificial-grass-for-ramp.webp",
  "/artificialturf/artificial-turf-installation-for-ground-near-me.webp",
    ];
    
    
    const schemaGraph = buildSchemaGraph(location, url, serviceName, serviceSlug, faqs, galleryImages);
    const jsonLd = JSON.stringify(schemaGraph, null, 2);

  return (

    <main className="bg-gray-50 min-h-screen">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Artificial Grass Turf Installation in Hyderabad",
            areaServed: "Hyderabad",
            additionalProperty: {
              "@type": "PropertyValue",
              name: "Location Authority Score",
              value: authorityScore
            }
          })
        }}
      />

      {/* HERO */}

      <section className="relative md:h-[400px] py-10 text-white">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url( "/artificialturf/cards/artificial-turf-for-garden.webp")`
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

          <h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg `}>
             Artificial Grass Turf Installation in Hyderabad – Balcony & Terrace Green Flooring
          </h1>

          <p className={`text-md md:text-lg max-w-3xl text-gray-200 `}>
            Looking for artificial grass near me in Hyderabad? We provide top rated balcony grass, terrace turf, and garden flooring solutions. Get natural green look, zero maintenance, and premium finish for your space.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">

            <a
              href="tel:+918790518724"
              className="relative group overflow-hidden flex items-center justify-center gap-3 px-5 py-2 rounded-2xl font-semibold text-white backdrop-blur-xl border border-white/20 bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(255,170,0,0.45)]"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href="https://wa.me/919491008380"
              className="relative group overflow-hidden flex items-center justify-center gap-3 px-5 py-2 rounded-2xl font-semibold text-white backdrop-blur-xl border border-white/20 bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(34,197,94,0.45)]"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* IMAGE SECTION */}

      <div className="relative bg-white md:bg-[#f1f5f9] md:w-[75%] -mt-[15px] md:-mt-[65px] p-4 md:p-6 rounded-2xl md:rounded-none shadow-xl mx-auto">

        <div className="relative w-full md:w-[100%] h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl mx-auto">

          {/* Image */}
          <Image
            src={"/artificialturf/cards/artificial-grass-for-ramp.webp"+ "?v=hyderabad-telangana"}
            alt={`Artificial Grass Turf installation in Hyderabad`}
            title={`Artificial Grass Turf installation near me in Hyderabad`}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />

        </div>

        {/* Icons Section */}
        <div
          className="
    relative md:absolute
    md:bottom-6 md:left-1/2 md:-translate-x-1/2
    mt-4 md:mt-0
    w-full md:w-auto
    px-4 py-4 md:px-8
    text-center

    md:bg-black/20 
    md:rounded-full
    md:shadow-xl
  "
        >
          <div
            className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      gap-6 md:gap-10
      items-center
      "
          >

            {/* Trusted Homes */}
            <div className="flex flex-col items-center">
              <Handshake className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 drop-shadow-lg mb-2" />
              <p className="text-gray-900 md:text-white text-xs md:text-sm  font-semibold">
                15,000+ Trusted Homes & 18 Years Warranty
              </p>
            </div>

            {/* Quality */}
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 drop-shadow-lg mb-2" />
              <p className="text-gray-900 md:text-white text-xs md:text-sm font-semibold">
                ISO Certified Quality
              </p>
            </div>

            {/* Experience */}
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 drop-shadow-lg mb-2" />
              <p className="text-gray-900 md:text-white text-xs md:text-sm font-semibold max-w-[220px]">
                18+ Years Experience & Expert Installation
              </p>
            </div>

          </div>
        </div>

      </div>

      
  {/* BREADCRUMBS */}

  <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-600">

  <Link href="/" className="hover:underline">Home</Link>
  {" > "}
  <Link href="/services/artificial-grass-turf" className="hover:underline">
  Artificial Grass Turf
  </Link>
  {" > "}
  {"Hyderabad"}

  </div>



      {/* CONTENT */}

      <section className="max-w-6xl mx-auto px-6 py-10 space-y-12">

        {invisibleGrillsSections.map((section: any, index: number) => (
          <div key={index}>

            <h2 className="text-2xl font-bold mb-4 text-green-900">
              {section.header}
            </h2>

            <div className="w-full h-[1px] bg-black/10 mb-3 rounded-full"></div>
            {section.header.includes("Near me Artificial Grass Cost in") && (
              <div className="relative w-full h-[260px] md:h-[320px] my-6 rounded-xl overflow-hidden">

                <Image
                  src={"/artificialturf/artificial-turf-installation-for-ground-near-me.webp?v=near-me-hyderabad-telangana"}
                  alt="Artificial Grass Turf installation near me Hyderabad"
                  title="Artificial Grass Turf installation near me in Hyderabad"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />

              </div>
            )}

            <p className="text-gray-700 leading-relaxed">
              {section.content}
            </p>

          </div>
        ))}

      </section>

      <FAQSection faqs={faqs} />

      
  {/* MAP SECTION */}

  <MapSection area={location} />

      {/* locations we serve */}
      <LocationScroller service="artificial-grass-turf" />

      {/* CTA */}

      <section className="bg-[#344A6C] text-white py-14">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Need Artificial Grass Turf Installation in {location}?
          </h2>

          <p className="mb-6">
          Upgrade your space with high-quality artificial grass turf. Get a natural green finish, expert installation, and long-lasting beauty at the best price with Rohini Invisible Grills.
          </p>

          <a
            href="/contact-us"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold"
          >
            Get Free Quote
          </a>

        </div>

      </section>

    </main>

  )
}







