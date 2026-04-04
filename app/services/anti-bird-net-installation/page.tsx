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
// import {generateLocationKeywords} from "../../components/seo/keywordGenerator"

// ONLY CONTENT UPDATED — STRUCTURE SAME

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const location = "Hyderabad";

  if (!location) {
    return {
      title: "Page Not Found | Rohini Invisible Grills",
      description: "The requested service page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const geo = getGeo("hyderabad")

  const url = `https://rohiniinvisiblegrills.com/services/anti-bird-net-installation`;

  const image = "/birdnet/balocny-safety-nets-installation.webp";

  const primaryKeyword = `Anti Bird Net Installation in ${location}`;

  const title =
    `${primaryKeyword} | Balcony Safety Nets & Pigeon Control | Rohini Invisible Grills`;

  const description =
    `Looking for anti bird net installation in ${location}? Get top rated balcony safety nets, pigeon nets, and bird control solutions near you. High quality nets, expert installation, affordable price, and free site visit in ${location}.`;

  return {
    metadataBase: new URL("https://rohiniinvisiblegrills.com"),

    title: {
      default: title,
      template: "%s | Rohini Invisible Grills",
    },

    description,

    keywords: Array.from(new Set([
      primaryKeyword,
      `Anti bird nets ${location}`,
      `Balcony safety nets ${location}`,
      `Pigeon nets installation ${location}`,
      `Bird control nets ${location}`,
      `Anti bird nets near me ${location}`,
      `Cat safety nets balcony ${location}`,
      `Monkey safety nets ${location}`,
      "Rohini Invisible Grills",
    ])).slice(0, 30),

    alternates: {
      canonical: url,
    },

    category: "Bird Control",

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Rohini Invisible Grills",
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

// const headingFont = Poppins({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   variable: "--font-heading"
// });

// const bodyFont = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-body"
// });

export default function Page({ params }: any) {

  const location = "Hyderabad";

  const breadcrumbs = generateBreadcrumb(location, "services/anti-bird-net-installation")

  const authorityScore = locationAuthorityScore(location)

 const faqs = [

{
question: `What is anti bird net installation in ${location}?`,
answer: `Anti bird net installation is a service where strong safety nets are fixed on balconies and windows to stop pigeons and other birds from entering. It helps keep your home clean, safe, and free from bird nests.`
},

{
question: `Do anti bird nets stop pigeons in ${location}?`,
answer: `Yes. Anti bird nets create a strong barrier that blocks pigeons and other birds from entering your balcony. It prevents nesting, dirt, and bad smell.`
},

{
question: `Are anti bird nets safe for children and pets in ${location}?`,
answer: `Yes. Anti bird nets also work as balcony safety nets for children and pets. They prevent falls and make your balcony safer for daily use.`
},

{
question: `What material is used for bird nets in ${location}?`,
answer: `We use high quality nylon nets with UV protection. These nets are strong, weather resistant, and long lasting even in sun and rain.`
},

{
question: `How long does anti bird net installation take in ${location}?`,
answer: `Most installations are completed within a few hours depending on balcony size. Our team ensures fast and clean installation.`
},

{
question: `What is the cost of anti bird net installation in ${location}?`,
answer: `The price depends on balcony size and net type. We offer affordable pricing with high quality materials and professional installation.`
},

{
question: `Do anti bird nets block airflow or sunlight?`,
answer: `No. Anti bird nets allow full airflow and sunlight. They protect your space without blocking fresh air or outside view.`
},

{
question: `Can bird nets be used for cats and monkeys also?`,
answer: `Yes. These nets can also be used as cat safety nets and monkey safety nets for balconies, giving full protection for your home.`
},

{
question: `How long do anti bird nets last?`,
answer: `High quality anti bird nets can last many years with proper installation and basic maintenance. They are designed for long term outdoor use.`
},

{
question: `Why should I choose professional bird net installation in ${location}?`,
answer: `Professional installation ensures strong fitting, no gaps, and long life. People searching anti bird net installation near me in ${location} prefer expert service for better safety and durability.`
}

];

  const invisibleGrillsSections = [

{
header: `Anti Bird Net Installation in ${location}`,
content: `Bird problems are very common in ${location}. Pigeons make nests and create dirt in balconies. Our anti bird net installation stops birds from entering your space. These nets work as balcony safety nets, pigeon safety nets, and bird control nets. People searching for anti bird nets near me or top rated balcony safety nets choose this solution for clean and safe homes.`
},

{
header: `How Anti Bird Nets Protect Your Balcony`,
content: `Anti bird nets create a strong barrier that blocks pigeons and other birds. They stop nesting and reduce dirt and smell. These nets also work as children safety nets and cat safety nets for balcony. Families in ${location} searching for safety nets installation near me prefer this simple and effective solution.`
},

{
header: `High Quality Bird Net Material`,
content: `We use high quality safety nets made with strong nylon and UV protected material. These nets can handle sun, rain, and wind. They last many years without damage. Customers searching excellent bird nets installation or high quality safety nets installation in ${location} trust durable materials for long term use.`
},

{
header: `Professional Anti Bird Net Installation Process`,
content: `Our team provides expert installation with proper hooks and tight fitting. We cover balcony areas safely without gaps. This makes the net strong and secure. People searching anti bird net installation near me in ${location} choose professional service for better safety and long life.`
},

{
header: `Near me Anti Bird Net Cost in ${location}`,
content: `The cost of anti bird net installation in ${location} depends on balcony size and net type. We offer affordable pricing with high quality materials. Compared to other options, bird nets are a budget friendly solution. Customers searching top rated anti bird nets near me get best value and long term protection.`
},

{
header: `Why Homeowners in ${location} Choose Bird Nets`,
content: `Homeowners choose anti bird nets because they are simple, safe, and effective. These nets stop birds without harming them. They also protect children and pets. People searching balcony safety nets installation, cat safety nets, or monkey safety nets installation in ${location} prefer this trusted solution.`
},

{
header: `Maintenance Tips for Anti Bird Nets`,
content: `Anti bird nets need very little maintenance. Clean the net sometimes to remove dust. Check for damage once in a while. Do not cut or pull the net. Families in ${location} using bird nets enjoy long lasting protection and clean balconies with very low effort.`
}

];

  
    
    const url = `https://rohiniinvisiblegrills.com/services/anti-bird-net-installation`;
    const serviceName = "Anti Bird Net Installation";
    const serviceSlug = "anti-bird-net-installation";
    
    const galleryImages = [
    "/birdnet/balocny-safety-nets-installation.webp",
    "/birdnet/transparabt-net-installation.webp",
    ];
    
    
      // Build the full schema graph
    const schemaGraph = buildSchemaGraph(location, url, serviceName, serviceSlug, faqs, galleryImages);
    
    // Convert to JSON-LD for injecting in the page
    const jsonLd = JSON.stringify(schemaGraph, null, 2);

  return (

    <main className="bg-gray-50 min-h-screen">

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd  // JSON.stringify(buildFullSchema(location, "services/anti-bird-invisible-grills", faqs))
        }}
      />

      {/* Breadcrumb */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs)
        }}
      /> */}

      {/* Authority Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Anti Bird Net Installation in Hyderabad - Pigeon Protection Installation",
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
            backgroundImage: `url("/birdnet/balocny-safety-nets-installation.webp")`
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

          <h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg `}>
            Anti Bird Net Installation in Hyderabad – Balcony Safety & Pigeon Control
          </h1>

          <p className={`text-md md:text-lg max-w-3xl text-gray-200 `}>
            Looking for anti bird net installation near me in Hyderabad? We provide top rated balcony safety nets, pigeon nets, and bird control solutions to keep your home clean and safe. Strong nets, expert fitting, and long life protection for your balcony.
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
            src={"/birdnet/transparabt-net-installation.webp"+ "?v=hyderabad-telangana"}
            alt={`Anti bird Net installation in Hyderabad`}
            title={`Anti bird Net installation near me in Hyderabad`}
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
  <Link href="/services/anti-bird-net-installation" className="hover:underline">
  Anti Bird Net Installation
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
            {section.header.includes("Professional Anti Bird Net Installation Process") && (
              <div className="relative w-full h-[260px] md:h-[320px] my-6 rounded-xl overflow-hidden">

                <Image
                  src={"/birdnet/balocny-safety-nets-installation.webp?v=near-me-hyderabad-telangana"}
                  alt="Anti bird Net installation near me Hyderabad"
                  title="anti bird Net installation near me in Hyderabad"
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
      <LocationScroller service="anti-bird-net-installation" />

      {/* CTA */}

      <section className="bg-[#344A6C] text-white py-14">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Need Anti Bird Net Installation in {location}?
          </h2>

          <p className="mb-6">
           Contact Rohini Invisible Grills today for expert anti bird net installation. Stop pigeons, protect your balcony, and keep your home clean with high quality safety nets at best price.
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