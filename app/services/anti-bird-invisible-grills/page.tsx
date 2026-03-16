import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
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

const breadcrumbs = generateBreadcrumb(location,"services/anti-bird-invisible-grills")

const authorityScore = locationAuthorityScore(location)

const faqs = [

{
question:`What are anti bird invisible grills in ${location}?`,
answer:`Anti bird invisible grills are stainless steel wire systems installed on balconies and windows to stop pigeons and other birds from entering the space. They protect homes while keeping the outside view open.`
},

{
question:`Do invisible grills stop pigeons in ${location}?`,
answer:`Yes. Invisible grills create a strong barrier that prevents pigeons from entering balconies and nesting inside apartments.`
},

{
question:`Are anti bird invisible grills safe for families in ${location}?`,
answer:`Yes. These grills not only stop birds but also help protect children and pets from balcony accidents.`
},

{
question:`What material is used for invisible grills in ${location}?`,
answer:`Most invisible grills are made using 304 grade stainless steel wires with protective coating to prevent rust and weather damage.`
},

{
question:`How long does installation take in ${location}?`,
answer:`Most anti bird invisible grill installations are completed within a few hours depending on balcony size and height.`
},

{
question:`Do invisible grills block the balcony view in ${location}?`,
answer:`No. The stainless steel wires are very thin and almost invisible, so the outside view remains clear and open.`
}

]

const invisibleGrillsSections = [

{
header:`Anti Bird Invisible Grills Installation in ${location}`,
content:`Bird problems are very common in many apartments and buildings in ${location}. Pigeons often sit on balconies, windows, and utility areas which can create dirt, bad smell, and hygiene issues. Anti bird invisible grills are one of the most effective solutions to stop birds from entering these spaces.

These grills are designed using thin stainless steel cables that are strong but almost invisible. They create a protective barrier that keeps birds away while allowing fresh air and natural sunlight to enter the home.

Homeowners in ${location} choose anti bird invisible grills because they help maintain clean balconies without affecting the appearance of the building. The system blends with the structure and keeps the balcony open and modern while solving bird problems permanently.`
},

{
header:`How Anti Bird Invisible Grills Protect Your Balcony`,
content:`Pigeons and other birds often try to build nests in balconies and window corners. This can damage property and make the area uncomfortable for residents. Anti bird invisible grills prevent birds from landing or entering the balcony area.

The stainless steel wires are fixed vertically or horizontally with proper spacing so that birds cannot pass through the gap. Because the wires are thin, they do not block the view or airflow.

With this protection system installed, residents in ${location} can enjoy their balcony space without worrying about bird droppings, feathers, or nesting problems.`
},

{
header:`High Quality Stainless Steel Invisible Grill Material`,
content:`The strength of anti bird invisible grills depends on the quality of materials used. For installations in ${location}, most systems use 304 grade stainless steel cables which are known for their durability and rust resistance.

These cables are coated with a protective nylon layer that helps them resist weather conditions such as rain and humidity. This coating also improves the life of the grill system.

Using high quality stainless steel wires ensures the invisible grill remains strong and stable for many years. Proper material selection is very important for long term balcony safety and bird protection.`
},

{
header:`Professional Invisible Grill Installation Process`,
content:`Professional installation is important to make sure invisible grills work effectively. Our installation process in ${location} begins with a careful inspection of the balcony or window area.

Aluminium channels are fixed securely to the structure using strong anchor bolts. After this, stainless steel wires are installed between the channels and tightened using special tools to maintain correct tension.

Once the installation is finished, the system is inspected to make sure every wire is properly aligned and secured. This process helps create a strong barrier that prevents birds from entering while keeping the structure safe and neat.`
},

{
header:`Anti Bird Invisible Grill Cost in ${location}`,
content:`The cost of anti bird invisible grills in ${location} depends on several factors including balcony size, installation height, and total area to be covered. Larger balconies require more stainless steel cables and installation work.

Although pricing may vary depending on the project, invisible grills are considered a long term solution for bird protection and balcony safety. They require very little maintenance and last for many years without rust or damage.

Many homeowners prefer this solution because it provides both protection and a clean modern appearance for their balcony space.`
},

{
header:`Why Homeowners in ${location} Choose Invisible Grills`,
content:`Many apartment residents in ${location} install anti bird invisible grills because they solve bird problems without changing the appearance of the building. Unlike traditional metal grills or bird nets, invisible grills are almost unnoticeable.

They allow clear outside views, natural ventilation, and sunlight while keeping birds away from the balcony area. This makes them a perfect solution for modern homes and apartments.

Because of their strong material and minimal design, invisible grills have become one of the most trusted balcony protection systems used in many residential buildings today.`
},

{
header:`Maintenance Tips for Anti Bird Invisible Grills`,
content:`Invisible grills are designed to require very little maintenance. Cleaning the stainless steel wires occasionally helps remove dust and keeps them looking neat.

It is also recommended not to hang heavy items on the wires because the system is designed mainly for protection rather than supporting weight.

With simple cleaning and proper care, anti bird invisible grills can continue protecting balconies and windows in ${location} for many years while maintaining their clean and modern appearance.`
}

]

return (

<main className="bg-gray-50 min-h-screen">

{/* Schema */}
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(buildFullSchema(location,"services/anti-bird-invisible-grills",faqs))
}}
/>

{/* Breadcrumb */}
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(breadcrumbs)
}}
/>

{/* Authority Schema */}
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context":"https://schema.org",
"@type":"Service",
name:"Anti Bird Invisible Grills in Hyderabad - Pigeon Protection Installation",
areaServed:"Hyderabad",
additionalProperty:{
"@type":"PropertyValue",
name:"Location Authority Score",
value:authorityScore
}
})
}}
/>

{/* HERO */}

<section className="relative md:h-[400px] py-10 text-white">

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:`url("/images/anti-bird-invisible-grills.webp")`
}}
/>

<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>

<div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

<h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg ${headingFont.variable}`}>
Anti Bird Invisible Grills in Hyderabad – Balcony Pigeon Protection
</h1>

<p className={`text-md md:text-lg max-w-3xl text-gray-200 ${bodyFont.variable}`}>
Anti bird invisible grills in Hyderabad designed to stop pigeons and protect balconies using strong stainless steel cables that keep homes safe while maintaining open outside views.
</p>

<div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">

<a
href="tel:+919999999999"
className="relative group overflow-hidden flex items-center justify-center gap-3 px-5 py-2 rounded-2xl font-semibold text-white backdrop-blur-xl border border-white/20 bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(255,170,0,0.45)]"
>
<Phone size={20}/>
Call Now
</a>

<a
href="https://wa.me/919999999999"
className="relative group overflow-hidden flex items-center justify-center gap-3 px-5 py-2 rounded-2xl font-semibold text-white backdrop-blur-xl border border-white/20 bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(34,197,94,0.45)]"
>
<MessageCircle size={20}/>
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
src={"/images/anti-bird-invisible-grills.webp"}
alt={`Anti bird invisible grill installation in Hyderabad`}
title={`Anti bird invisible grills Hyderabad`}
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



{/* CONTENT */}

<section className="max-w-6xl mx-auto px-6 py-10 space-y-12">

{invisibleGrillsSections.map((section:any,index:number)=>(
<div key={index}>

<h2 className="text-2xl font-bold mb-4 text-green-900">
{section.header}
</h2>

<div className="w-full h-[1px] bg-black/10 mb-3 rounded-full"></div>

<p className="text-gray-700 leading-relaxed">
{section.content}
</p>

</div>
))}

</section>

<FAQSection faqs={faqs}/>

{/* CTA */}

  <section className="bg-[#344A6C] text-white py-14">

  <div className="max-w-5xl mx-auto px-6 text-center">

  <h2 className="text-3xl font-bold mb-4">
    Need Anti Bird Invisible Grills in {location}?
  </h2>

  <p className="mb-6">
  Contact Rohini Invisible Grills today for professional installation.
  Protect your balcony and keep birds away and Get 10% discount on all anti bird invisible grills.
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