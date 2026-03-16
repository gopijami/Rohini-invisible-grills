import Link from "next/link";
// import NearbyServiceSection from "../../components/NearbyAreas";
import { Phone, MessageCircle,Plus, Minus } from "lucide-react";
import Image from "next/image";
import FAQSection from "../../invisible-grills/[slug]/Faqs";
import { Handshake, Award, ShieldCheck } from "lucide-react";
import { Poppins, Inter } from "next/font/google";
import { buildFullSchema } from "../../components/seo/schema";
import { generateBreadcrumb, locationAuthorityScore } from "../../components/seo/utils";

const headingFont = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading"
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body"
});








export default function Page({ params }:any) {
 const location = "Hyderabad";

 const breadcrumbs = generateBreadcrumb(location,"services/invisible-grills")
   const authorityScore = locationAuthorityScore(location)
const faqs = [

    {
      question:`What is the price of invisible grills in ${location}?`,
      answer:`The price depends on balcony size and installation design. Rohini Invisible Grills provides affordable installation services in ${location}.`
    },
    {
      question: `Are invisible grills safe for children in ${location}?`,
      answer: `Yes. Invisible grills installed in ${location} provide strong balcony protection and help prevent accidental falls.`
    },
    {
      question: `Do invisible grills block the outside view in ${location}?`,
      answer: `No. The stainless steel wires are thin and almost invisible, so they keep the outside view clear.`
    },
    {
      question: `Can invisible grills stop pigeons in ${location}?`,
      answer: `Yes. Invisible grills create a barrier that prevents birds from entering balconies or nesting.`
    },
    {
      question: `How long does invisible grill installation take in ${location}?`,
      answer: `Most installations are completed within a few hours depending on balcony size.`
    },
    {
      question:`Do invisible grills stop pigeons in ${location}?`,
      answer:`Yes. The stainless steel cables act as a barrier that prevents birds from entering balconies.`
    },
    {
        question:`Do invisible grills block balcony view in ${location}?`,
        answer:`No. The wires are very thin and almost invisible, so the outside view remains clear.`
    }
  ];

  const invisibleGrillsSections = [

{
header:`Balcony Safety Invisible Grills Installation in ${location}`,
content:`Modern apartments in ${location} often have open balconies that look beautiful but also require proper safety. Balcony safety invisible grills are designed to protect families while keeping the balcony space open and comfortable. Unlike traditional iron grills, invisible grills use thin stainless steel wires that are strong but visually minimal.

These grills allow fresh air and natural light to enter the home while creating a strong safety barrier. Families with children or pets often choose invisible grills because they provide protection without making the balcony look closed.

Our balcony safety invisible grill installation service in ${location} focuses on providing reliable protection with modern design. The grills blend naturally with the building structure and help homeowners feel safe while enjoying their balcony space.`
},

{
header:`Premium 304 Grade Stainless Steel Material Used in Our Grills`,
content:`The strength of invisible grills depends mainly on the quality of materials used. For balcony safety installations in ${location}, we use high quality 304 grade stainless steel wires. This stainless steel grade is widely used because it offers excellent durability and strong resistance to rust and weather damage.

Each stainless steel cable is coated with a protective nylon layer. This coating helps protect the wire from moisture, dust, and outdoor conditions. The wires are designed to handle strong tension and remain stable for many years.

By using premium 304 grade stainless steel materials, we ensure that the invisible grill system provides long lasting balcony protection. This combination of strong material and professional installation makes the grills reliable for everyday home safety.`
},

{
header:`How Balcony Invisible Grills Are Installed`,
content:`Proper installation is very important for balcony safety grills to work correctly. Our technicians in ${location} follow a professional process to make sure every grill system is installed safely and securely.

First, the balcony space is measured carefully to understand the exact installation area. Aluminium support channels are then fixed firmly using strong anchor bolts. After that, 304 grade stainless steel wires are installed between the channels with accurate spacing.

Special tension tools are used to tighten the wires so that they remain strong and straight. After installation is completed, the entire system is inspected to ensure proper alignment and safety. This step-by-step process helps create a secure balcony protection system that lasts for many years.`
},

{
header:`Why Balcony Safety Is Important for Apartments`,
content:`Balcony safety is a major concern for many apartment owners in ${location}. High rise buildings offer beautiful views, but open balconies can create safety risks if proper protection is not installed.

Balcony invisible grills help solve this problem by creating a protective barrier without blocking the outside view. The thin stainless steel wires keep children and pets safe while allowing sunlight and fresh air to enter the home.

This modern safety solution allows residents to enjoy their balcony comfortably without worrying about accidents. Because the wires are almost invisible, the balcony still looks elegant and spacious while remaining secure.`
},

{
header:`Balcony Safety Invisible Grill Cost in ${location}`,
content:`The price of balcony safety invisible grills in ${location} can vary depending on several factors. The size of the balcony, installation height, and total area all influence the final cost. Larger balconies require more stainless steel wires and installation work.

Even though pricing may change depending on the project, invisible grills are considered a smart investment for home safety. They require very little maintenance and do not rust easily like traditional metal grills.

Our team provides clear guidance and transparent pricing so homeowners can select the most suitable balcony safety solution for their needs and budget.`
},

{
header:`Why Homeowners Choose Our Balcony Safety Invisible Grills`,
content:`Many homeowners in ${location} choose our balcony invisible grill services because we focus on safety, quality materials, and professional installation. Every project is handled by trained technicians who understand how to install grills securely.

We use durable 304 grade stainless steel wires and reliable fixing systems that help the grills remain stable for a long time. Each installation is completed carefully to ensure correct spacing and strong support.

Our goal is to provide balcony safety solutions that protect families while maintaining the modern look of their homes. Customers trust our services because we focus on long lasting protection and honest workmanship.`
},

{
header:`Simple Maintenance for Balcony Invisible Grills`,
content:`Balcony safety invisible grills are designed to be low maintenance. Cleaning the wires occasionally helps keep them neat and free from dust. A simple wipe with a soft cloth is usually enough to maintain their appearance.

It is also recommended to avoid hanging heavy items directly on the grill wires. Invisible grills are built mainly for safety protection and not for supporting weight.

With proper care and regular cleaning, balcony invisible grills can remain strong and effective for many years. This makes them a practical and reliable safety option for modern homes in ${location}.`
}

];

 return (

  <main className="bg-gray-50 min-h-screen">

  {/* Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify( buildFullSchema(location, "/services/balcony-safety-invisible-grills", faqs))
    }}
  />

  {/* Breadcrumb Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(breadcrumbs)
    }}
  />

  {/*Location Authority Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Invisible grills in Hyderabad - Professional Installation for Bird Protection",
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
      backgroundImage: `url("/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp")`
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r  from-black/70 via-black/60 to-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

    <h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg ${headingFont.variable}`}>
      Balcony Safety Invisible Grills in Hyderabad - Professional Installation for Bird Protection
    </h1>

    <p className={`text-md md:text-lg max-w-3xl text-gray-200 ${bodyFont.variable}`}>
      Hyderabad invisible grill specialists installing high tensile stainless steel balcony safety systems that secure homes against accidents birds and falls while preserving open skyline views
    </p>

<div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">

  {/* CALL BUTTON */}
  <a
    href="tel:+919999999999"
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
    <span className="relative z-10 tracking-wide">Call Now</span>
  </a>

  {/* WHATSAPP BUTTON */}
  <a
    href="https://wa.me/919999999999"
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
      src={"/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp" + "?v=hyderabad-telangana"}
      alt={`Balcony safety invisible grill installation in near me hyderabad`}
      title={`Balcony Safety Invisible Grills in Hyderabad`}
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
  <Link href="/services/balcony-safety-invisible-grills" className="hover:underline">
  Balcony Safety Invisible Grills
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

  {/* <NearbyServiceSection page={page} /> */}


  {/* CTA */}

  <section className="bg-[#344A6C] text-white py-14">

  <div className="max-w-5xl mx-auto px-6 text-center">

  <h2 className="text-3xl font-bold mb-4">
  Need Invisible Grills in {location}?
  </h2>

  <p className="mb-6">
  Contact Rohini Invisible Grills today for professional installation.
  Protect your balcony and keep birds away and Get 10% discount on all balcony safetyinvisible grills.
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