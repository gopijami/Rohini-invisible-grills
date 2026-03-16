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
    header: `Invisible Grills Installation in ${location}`,
    content: `Invisible grills have become one of the most preferred safety solutions for modern apartments and balconies in ${location}. Unlike traditional iron grills that block the view and make homes look closed, invisible grills provide strong protection while maintaining an open and elegant appearance. These grills are made from high-tensile stainless steel cables that are corrosion resistant, extremely durable, and capable of withstanding heavy pressure.

For apartments in high-rise buildings, safety is extremely important. Invisible grills protect children, pets, and elders from accidental falls while still allowing fresh air and natural light to enter your home. Our professional team provides expert invisible grill installation in ${location} using premium materials and advanced fixing techniques to ensure maximum safety and long-lasting durability.

Thousands of homeowners trust our invisible grill solutions because they combine safety, modern design, and long-term reliability. If you are looking for a clean, stylish, and highly secure balcony protection system, invisible grills are the perfect choice for your home in ${location}.`
  },

  {
    header: `What Are Invisible Grills and Why Are They Popular in ${location}?`,
    content: `Invisible grills are modern safety systems designed using high-quality stainless steel wires that are coated with protective nylon layers. These wires are usually spaced at safe distances to prevent accidents while still maintaining an almost invisible appearance from a distance. This design allows residents in ${location} to enjoy beautiful outside views without the bulky look of traditional metal grills.

Many apartment owners choose invisible grills because they provide the perfect balance between safety and aesthetics. They are ideal for balconies, windows, utility areas, and staircases. Unlike traditional grills, invisible grills do not block sunlight, airflow, or ventilation, making your living space brighter and more comfortable.

Our invisible grill installation service in ${location} focuses on using strong materials, professional anchoring systems, and precise tension control. This ensures the grills remain stable for many years without sagging or weakening. With proper installation and maintenance, invisible grills provide a safe and elegant protection solution that perfectly matches modern architecture.`
  },

  {
    header: `Professional Invisible Grill Installation Process in ${location}`,
    content: `A professional installation process is essential to ensure invisible grills perform safely and effectively. Our experienced installation team in ${location} follows a carefully designed step-by-step process to deliver the highest quality results for every home and apartment.

The process begins with a site inspection where our experts measure the balcony or window space and understand the safety requirements. After this, high-strength stainless steel wires are installed using premium aluminium channels and anchor bolts that are securely fixed to the structure. Each wire is tightened with precision equipment to maintain the correct tension and spacing.

Once the installation is completed, our team performs multiple safety checks to ensure the entire grill system is perfectly aligned, stable, and secure. This professional installation method guarantees long-lasting durability and safety for your home in ${location}. Our goal is to provide reliable invisible grill solutions that protect your family while maintaining the beauty of your living space.`
  },

  {
    header: `Invisible Grills for Bird Protection in ${location}`,
    content: `Bird problems such as pigeons nesting on balconies and windows are very common in many residential areas of ${location}. These birds can create hygiene issues, damage property, and make balconies difficult to use. Invisible grills provide an effective and humane solution to keep birds away without harming them.

Because invisible grills create a protective barrier, birds are unable to enter the balcony space. At the same time, the transparent design ensures that the grills remain visually minimal and do not disturb the appearance of your home. This makes them a perfect alternative to traditional bird nets or bulky grill structures.

Our invisible grill installations in ${location} are designed with optimal spacing that prevents birds from entering while maintaining excellent airflow and visibility. This allows homeowners to enjoy a clean, safe, and comfortable balcony environment without worrying about bird disturbances.`
  },

  {
    header: `Cost of Invisible Grills in ${location} – Pricing and Factors`,
    content: `The price of invisible grills in ${location} depends on several important factors such as balcony size, installation area, type of material used, and customization requirements. High-quality stainless steel wires, durable aluminium frames, and professional installation services all contribute to the overall cost.

Although the price may vary depending on the project size, invisible grills are considered a long-term investment for home safety. Compared to traditional iron grills that may rust, require repainting, or block the outside view, invisible grills provide a cleaner and more durable solution with minimal maintenance.

We provide transparent pricing and professional consultation to help homeowners in ${location} choose the most suitable invisible grill system for their needs. Our focus is on delivering premium quality materials, expert workmanship, and reliable safety solutions that offer excellent value for money.`
  },

  {
    header: `Why Homeowners in ${location} Choose Our Invisible Grill Services`,
    content: `Homeowners across ${location} trust our invisible grill installation services because we focus on quality, safety, and customer satisfaction. Our team has extensive experience installing invisible grills for apartments, villas, and residential buildings with precision and professionalism.

We use high-grade stainless steel wires that are rust-resistant and capable of withstanding strong tension. Every installation is performed by trained technicians who ensure proper spacing, alignment, and structural strength. This guarantees that the grills remain secure and visually appealing for many years.

In addition to quality materials and expert installation, we also provide excellent customer support and timely project completion. Our goal is to deliver a reliable invisible grill solution that protects your family while enhancing the modern appearance of your home in ${location}.`
  },

  {
    header: `Safety and Maintenance Tips for Invisible Grills in ${location}`,
    content: `Although invisible grills are designed for long-term durability, proper maintenance helps ensure they remain safe and effective for many years. Regularly cleaning the stainless steel wires and checking the tension levels can help maintain their strength and appearance.

It is also important to avoid placing excessive pressure on the wires or attaching heavy objects directly to the grill system. Invisible grills are designed primarily for safety protection rather than supporting weight. Periodic inspections by professionals can help identify any adjustments needed to maintain optimal performance.

For homeowners in ${location}, following these simple safety and maintenance practices ensures that invisible grills continue to provide reliable protection for children, pets, and family members. With proper care, invisible grills remain one of the most effective and stylish balcony safety solutions available today.`
  }
];

 return (

  <main className="bg-gray-50 min-h-screen">

  {/* Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify( buildFullSchema(location, "services/invisible-grills", faqs))
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
      backgroundImage: `url("/images/invisible-grills-bird-netting-in-hyderabad.webp")`
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r  from-black/70 via-black/60 to-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

    <h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg ${headingFont.variable}`}>
      Invisible grills in Hyderabad - Professional Installation for Bird Protection
    </h1>

    <p className={`text-md md:text-lg max-w-3xl text-gray-200 ${bodyFont.variable}`}>
      Invisible grills in Hyderabad designed for modern homes that need safety without losing open views strong stainless steel cables protect balconies windows and high rise spaces while keeping the design elegant and minimal
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
      src={"/images/invisible-grills-bird-netting-in-hyderabad.webp" + "?v=hyderabad-telangana"}
      alt={`Invisible grill installation in near me hyderabad`}
      title={`Invisible grills in Hyderabad`}
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
  <Link href="/services/invisible-grills" className="hover:underline">
  Invisible Grills
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
  Protect your balcony and keep birds away and lock 10% discount on all invisible grills.
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