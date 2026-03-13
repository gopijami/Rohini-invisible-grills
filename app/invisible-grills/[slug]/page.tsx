import Link from "next/link";
import { hyderabadLocations as locations } from "../../components/constants/locations";
import { generateService } from "../../components/seo/invisibleGrillsGenerator";
import { locationHash, slugify, locationImages } from "../../components/seo/utils";
import NearbyServiceSection from "../../components/NearbyAreas";
import { Phone, MessageCircle,Plus, Minus } from "lucide-react";
import Image from "next/image";
import FAQSection from "./Faqs";


export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: slugify(location),
  }));
}

export interface Section {
  heading: string;
  content: string[]; 
}




export function getLocationImage(location: string) {

  const hash = locationHash(location);

  const index = hash % locationImages.length;

  return locationImages[index];

}


export default function Page({ params }: { params: { slug: string , sections: Section[];} }) {
  const location = locations.find(
    (loc) => slugify(loc) === params.slug
  );

  const invisibleGrillImage = getLocationImage(location || "default location");
  console.log("Selected image for location:", location, invisibleGrillImage);

  if (!location) {
    return <div>Location not found</div>;
  }


  if (!location) return null;

  const page = generateService(
    location,
    locations,
    locations.indexOf(location)
  );

 return (

  <main className="bg-gray-50 min-h-screen">

  {/* Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(page.schema)
    }}
  />

  {/* Breadcrumb Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(page.breadcrumbs)
    }}
  />

  {/* HERO SECTION */}

  <section className="relative md:h-[400px] py-10 text-white">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url('${invisibleGrillImage}')`
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r  from-black/70 via-black/60 to-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

    <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg">
      {page.title}
    </h1>

    <p className="text-md md:text-lg max-w-3xl text-gray-200">
      {page.shortDescription}
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
<div className="relative bg-white md:bg-[#f1f5f9] md:w-[85%] -mt-[15px] md:-mt-[65px] p-4 md:p-6 rounded-2xl md:rounded-none shadow-xl group mx-auto">
<div className="relative w-full md:w-[100%] h-[300px] md:h-[350px]  rounded-1xl overflow-hidden shadow-2xl group mx-auto">

  {/* Image */}
  <Image
    src={invisibleGrillImage + "?v=" + page.slug}
    alt={`Invisible grill installation in ${page.location}`}
    title={`Invisible grills ${page.location}`}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-105"
    priority
  />

  {/* Soft Gradient Overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div> */}

</div>
</div>


  {/* BREADCRUMBS */}

  <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-600">

  <Link href="/" className="hover:underline">Home</Link>
  {" > "}
  <Link href="/" className="hover:underline">
  Invisible Grills Locations
  </Link>
  {" > "}
  {page.location}

  </div>


  {/* CONTENT SECTIONS */}

  <section className="max-w-6xl mx-auto px-6 py-10 space-y-12">

  {page.sections.map((section:any, index:number) => (

  <div key={index}>
    <div >
  <h2 className="text-1xl font-bold mb-4 text-gray-900">
  {section.heading}
  </h2>
  <div className="w-[100%] h-[1px] 
  
  bg-black/10
    mb-3  rounded-full"></div>
</div>

  {Array.isArray(section.content) ? (

  <ul className="list-disc ml-6 space-y-2 text-gray-700">

  {section.content.map((item:string, i:number)=>(
  <li key={i}>{item}</li>
  ))}

  </ul>

  ) : (

  <p className="text-gray-700 leading-relaxed">
  {section.content}
  </p>

  )}

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

  <FAQSection faqs={page.faqs} />


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

  <NearbyServiceSection page={page} />


  {/* CTA */}

  <section className="bg-blue-700 text-white py-14">

  <div className="max-w-5xl mx-auto px-6 text-center">

  <h2 className="text-3xl font-bold mb-4">
  Need Invisible Grills in {page.location}?
  </h2>

  <p className="mb-6">
  Contact Rohini Invisible Grills today for professional installation.
  Protect your balcony and keep birds away.
  </p>

  <a
  href="tel:+919999999999"
  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold"
  >
  Get Free Quote
  </a>

  </div>

  </section>

  </main>

  )
}