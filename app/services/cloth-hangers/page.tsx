import Link from "next/link";
// import NearbyServiceSection from "../../components/NearbyAreas";
import { Phone, MessageCircle,Plus, Minus } from "lucide-react";
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

// ONLY CONTENT CHANGED — EVERYTHING ELSE SAME

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

  const url = `https://rohiniinvisiblegrills.com/services/cloth-hangers`;

  const image =  "/clothhangers/ceiling-balcony-cloth-hangers-near-me.webp";

  const primaryKeyword = `Cloth Hangers Installation in ${location}`;

  const title =
    `${primaryKeyword} | Balcony Drying Solutions Near Me | Rohini Invisible Grills`;

  const description =
    `Looking for cloth hangers installation in ${location}? Get top rated balcony cloth drying stands near you. Strong, space saving, and durable cloth hangers for apartments with expert installation and affordable price.`;


  return {
    metadataBase: new URL("https://rohiniinvisiblegrills.com"),

    title: {
      default: title,
      template: "%s | Rohini Invisible Grills",
    },

    description,

    keywords: Array.from(new Set([
      primaryKeyword,
      `Cloth hangers near me ${location}`,
      `Balcony cloth drying stand ${location}`,
      `Ceiling cloth hanger ${location}`,
      `Wall mounted cloth hanger ${location}`,
      `Best cloth hanger installation ${location}`,
      `Folding cloth hanger ${location}`,
      `Cloth drying stand near me`,
      "Rohini Invisible Grills",
    ])).slice(0, 30),

    alternates: {
      canonical: url,
    },

    category: "Home Utility",

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








export default function Page({ params }:any) {
 const location = "Hyderabad";

 const breadcrumbs = generateBreadcrumb(location,"services/balcony-safety-invisible-grills")
   const authorityScore = locationAuthorityScore(location)
const faqs = [

{
question:`What is cloth hanger installation in ${location}?`,
answer:`Cloth hanger installation is a service where drying stands are fixed on balcony or ceiling to hang clothes easily. It saves space and keeps clothes organized.`
},

{
question:`Which cloth hanger is best for balcony in ${location}?`,
answer:`Ceiling mounted and wall mounted cloth hangers are best for balconies. They save space and are strong for daily use.`
},

{
question:`What is the price of cloth hanger installation near me in ${location}?`,
answer:`The cost depends on type and size. We offer affordable cloth hanger installation near me with high quality materials.`
},

{
question:`Are cloth hangers strong for heavy clothes?`,
answer:`Yes. Our cloth hangers are made with strong materials and can handle heavy wet clothes easily.`
},

{
question:`Do you provide cloth hanger installation near me in ${location}?`,
answer:`Yes. We provide top rated cloth hanger installation across ${location} with expert service and fast setup.`
},

{
question:`How long does installation take?`,
answer:`Most installations are completed within a few hours. Our team ensures quick and clean work.`
},

{
question:`Are cloth hangers suitable for small balconies?`,
answer:`Yes. Folding and ceiling hangers are perfect for small spaces and save maximum area.`
}

];

 const invisibleGrillsSections = [

{
header:`Cloth Hangers Installation in ${location}`,
content:`Cloth hangers installation in ${location} is the best solution for drying clothes in apartments. People searching cloth hangers near me choose this for space saving and easy drying. It keeps your balcony neat and organized.`
},

{
header:`High Quality Cloth Hangers for Daily Use`,
content:`We provide strong and durable cloth hangers made with premium materials. These hangers are rust proof and long lasting. Customers looking for top rated cloth hanger installation in ${location} prefer high quality products.`
},

{
header:`How Cloth Hangers Are Installed`,
content:`Our team installs ceiling mounted or wall mounted cloth hangers using strong fittings. This ensures safety and stability for daily use. Proper installation helps in long life and smooth usage.`
},

{
header:`Why Cloth Hangers Are Important for Homes`,
content:`Drying clothes in small spaces is difficult. Cloth hangers help save space and keep clothes clean. Families in ${location} searching balcony cloth drying stands near me choose this solution for comfort and convenience.`
},

{
header:`Cloth Hangers Installation Cost in ${location}`,
content:`The cost depends on type of hanger and installation area. We offer affordable pricing with high quality materials. Customers searching best cloth hanger installation near me get value for money.`
},

{
header:`Why Choose Our Cloth Hangers Installation`,
content:`We provide expert cloth hanger installation in ${location} with strong materials and neat work. Customers trust us for quality service, fast installation, and long lasting products.`
},

{
header:`Maintenance Tips for Cloth Hangers`,
content:`Cloth hangers need very little maintenance. Clean occasionally and avoid overload. With proper care, they last for many years and work smoothly.`
}

];


    
    const url = `https://rohiniinvisiblegrills.com/services/cloth-hangers`;
    const serviceName = "Cloth Hangers Installation";
    const serviceSlug = "cloth-hangers";
    
    const galleryImages = [
    "/clothhangers/ceiling-cloth-hangers-near-me.webp",
  "/clothhangers/ceiling-balcony-cloth-hangers-near-me.webp",
  "/clothhangers/dry-balcony-cloth-hangers-near-me.webp",
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
      __html: jsonLd  // JSON.stringify( buildFullSchema(location, "/services/balcony-safety-invisible-grills", faqs))
    }}
  />

  {/* Breadcrumb Schema */}
  {/* <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(breadcrumbs)
    }}
  /> */}

  {/*Location Authority Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Cloth Hangers Installation in Hyderabad - Professional Installation for Cloth Hanger Protection",
        areaServed: "Hyderabad",
        additionalProperty: {
          "@type": "PropertyValue",
          name: "Location Authority Score",
          value: authorityScore
        }
      })
    }}
  />

  {/* HERO SECTION */}

  <section className="relative md:h-[400px] py-10 text-white">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url("/clothhangers/ceiling-balcony-cloth-hangers-near-me.webp")`
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r  from-black/70 via-black/60 to-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

    <h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg `}>
      Cloth Hangers Installation in Hyderabad – Balcony Drying Solutions
    </h1>

    <p className={`text-md md:text-lg max-w-3xl text-gray-200 `}>
      Looking for cloth hangers near me in Hyderabad? Get top rated balcony cloth drying stands with strong design, space saving setup, and easy daily use for apartments.
    </p>

<div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">

  {/* CALL BUTTON */}
  <a
    href="tel:+918790518724"
    className="relative group overflow-hidden
    flex items-center justify-center gap-3
    px-5 py-2 rounded-2xl
    font-semibold text-white
    backdrop-blur-xl
    border border-white/20
    bg-white/10
    shadow-[0_10px_40px_rgba(0,0,0,0.35)]
    transition-all duration-500
    hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(255,170,0,0.45)]"
  >

    {/* Glow layer */}
    <span className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/40 to-amber-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></span>

    <Phone size={20} className="relative z-10" />
    <span className="relative z-10 tracking-wide">+91 87905 18724</span>
  </a>

  {/* WHATSAPP BUTTON */}
  <a
    href="https://wa.me/919491008380"
    className="relative group overflow-hidden
    flex items-center justify-center gap-3
    px-5 py-2 rounded-2xl
    font-semibold text-white
    backdrop-blur-xl
    border border-white/20
    bg-white/10
    shadow-[0_10px_40px_rgba(0,0,0,0.35)]
    transition-all duration-500
    hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(34,197,94,0.45)]"
  >

    {/* Glow layer */}
    <span className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/40 to-green-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></span>

    <MessageCircle size={20} className="relative z-10" />
    <span className="relative z-10 tracking-wide">WhatsApp</span>
  </a>

</div>

  </div>

</section>
<div className="relative bg-white md:bg-[#f1f5f9] md:w-[75%] -mt-[15px] md:-mt-[65px] p-4 md:p-6 rounded-2xl md:rounded-none shadow-xl mx-auto">

  <div className="relative w-full md:w-[100%] h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl mx-auto">

    {/* Image */}
    <Image
      src={"/clothhangers/ceiling-cloth-hangers-near-me.webp" + "?v=hyderabad-telangana"}
      alt={`Cloth hangers installation in near me hyderabad`}
      title={`Cloth Hangers Installation in Hyderabad`}
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
  <Link href="/services/cloth-hangers" className="hover:underline">
  Cloth Hangers Installation
  </Link>
  {" > "}
  {location}

  </div>


  {/* CONTENT SECTIONS */}

  <section className="max-w-6xl mx-auto px-6 py-10 space-y-12">

  {invisibleGrillsSections.map((section:any, index:number) => (

  <div key={index}>
    <div >
  <h2 className="text-2xl font-bold mb-4 text-green-900">
  {section.header}
  </h2>
  <div className="w-[100%] h-[1px] 
  
  bg-black/10
    mb-3  rounded-full"></div>
</div>

{section.header.includes("Why Cloth Hangers Are Important for Homes") && (
  <div className="relative w-full h-[260px] md:h-[320px] my-6 rounded-xl overflow-hidden">
    
    <Image
      src={"/clothhangers/dry-balcony-cloth-hangers-near-me.webp?v=near-me-hyderabad-telangana"}
      alt="Cloth hangers installation near me Hyderabad"
      title="Cloth Hangers Installation in Hyderabad"
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


  {/* FAQ SECTION */}

  {/* <section className="bg-white py-12">

  <div className="max-w-5xl mx-auto px-6">

  <h2 className="text-3xl font-bold mb-8 text-center">
  Frequently Asked Questions
  </h2>

  <div className="space-y-4">

  {page.faqs.map((faq:any, i:number)=>(
  
  <details
  key={i}
  className="border rounded-lg p-4 group cursor-pointer"
  >

  <summary className="font-semibold text-gray-900">
  {faq.question}
  </summary>

  <p className="mt-3 text-gray-700">
  {faq.answer}
  </p>

  </details>

  ))}

  </div>

  </div>

  </section> */}

  <FAQSection faqs={faqs} />


  {/* NEARBY LOCATIONS */}

  {/* <section className="py-12 bg-gray-100">

  <div className="max-w-6xl mx-auto px-6">

  <h2 className="text-2xl font-bold mb-6">
  Invisible Grill Installation Near {page.location}
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

  {page.sections
  .find((s:any)=>s.heading==="Nearby Areas We Serve")
  ?.content.map((loc:string,i:number)=>{

  const slug = loc
  .replace("Invisible grill installation available in ","")
  .toLowerCase()
  .replace(/\s/g,"-")

  return (

  <Link
  key={i}
  href={`/invisible-grills/${slug}`}
  className="bg-white p-4 rounded-lg shadow hover:shadow-lg text-center text-blue-600 font-medium"
  >
  {loc.replace("Invisible grill installation available in ","")}
  </Link>

  )

  })}

  </div>

  </div>



  </section> */}

  <MapSection area={location} />

  {/* <NearbyServiceSection page={page} /> */}
<LocationScroller service="cloth-hangers" />

  {/* CTA */}

  <section className="bg-[#344A6C] text-white py-14">

  <div className="max-w-5xl mx-auto px-6 text-center">

  <h2 className="text-3xl font-bold mb-4">
  Need Cloth Hangers in {location}?
  </h2>

  <p className="mb-6">
   Contact Rohini Invisible Grills today for professional cloth hanger installation. Save space, dry clothes easily, and get affordable pricing with expert service.
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