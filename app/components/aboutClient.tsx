"use client";
import Image from "next/image";
import SocialProfileLinks from "./SocialProfileLinks";


const services = [
  { title: "Invisible Grills" },
  { title: "Balcony Safety Invisible Grills" },
  { title: "Anti Bird Invisible Grills" },
  { title: "Sports Nets" },
  { title: "Windows Invisible Grills" },
  { title: "Children Safety Invisible Grills" },
];

const galleryImages = [
  {
    src: "/images/children-safety-invisible-grills-for-balcony.webp",
    alt: "Children safety invisible grills for apartment balconies",
  },
  {
    src: "/cards/stainless-steel-invisible-grill.webp",
    alt: "Stainless steel invisible grill cable system",
  },
  {
    src: "/images/invisible-grill-for-balcony.webp",
    alt: "Balcony invisible grill installation with clear outside view",
  },
  {
    src: "/images/apartment-balcony-invisible-grills-hyderabad.webp",
    alt: "Apartment balcony invisible grills in Hyderabad",
  },
  {
    src: "/images/sport-nets-installation-hyderabad.webp",
    alt: "Sports net installation for practice areas in Hyderabad",
  },
];




export default function AboutClient(){

    return(
        <div className="bg-white text-gray-800">
              {/* Hero Section */}
              <section className="text-center py-16 px-6 bg-gradient-to-r from-orange-100 to-orange-50">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  About Rohini Invisible Grills
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                  We provide site-measured invisible grill installations designed
                  for balcony safety, clean views, and practical bird-control needs.
                </p>
              </section>
        
              {/* About Content */}
              <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Rohini Invisible Grills provides balcony, window, and bird-control
                    installation support for residential and commercial spaces. We
                    specialize in invisible grills planned around the opening, fixing
                    surface, and daily use of the property.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our team discusses material options, measurements, access, and
                    finish before confirming the final installation scope.
                  </p>
                </div>
        
                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="relative w-full h-40">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-xl shadow-md"
                      />
                    </div>
                  ))}
                </div>
              </section>
        
              {/* Services Section */}
              <section className="bg-gray-50 py-12 px-6">
                <h2 className="text-3xl font-semibold text-center mb-8">
                  Our Services
                </h2>
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                    >
                      <h3 className="font-semibold text-lg text-center">
                        {service.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </section>
        
              {/* Why Choose Us */}
              <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-semibold text-center mb-8">
                  Why Choose Us
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">Material Guidance</h3>
                    <p className="text-gray-600 text-sm">
                      We discuss stainless steel options, exposure, and fixing
                      surfaces before installation.
                    </p>
                  </div>
                  <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">Measured Installation</h3>
                    <p className="text-gray-600 text-sm">
                      The site is checked for alignment, access, and daily-use fit.
                    </p>
                  </div>
                  <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">Clear Scope</h3>
                    <p className="text-gray-600 text-sm">
                      Pricing is explained after measurement, material choice, and
                      fixing details are understood.
                    </p>
                  </div>
                </div>
              </section>

              <section className="max-w-6xl mx-auto px-6 pb-12">
                <div className="rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg shadow-orange-100/50 md:p-8">
                  <SocialProfileLinks
                    heading="Connect With Rohini Invisible Grills"
                    description="Follow our official profiles for installation updates, balcony safety ideas, bird protection work, and service announcements."
                    showLabels
                    variant="warm"
                  />
                </div>
              </section>
        
              {/* CTA Section */}
              <section className="bg-[#344A6C] text-white text-center py-12 px-6">
                <h2 className="text-3xl font-bold mb-4">
                  Request an Installation Quote
                </h2>
                <p className="mb-6">
                  Share your balcony, window, or bird-control requirement and we
                  will guide the next site-check step.
                </p>
                <a
                  href="tel:8790518724"
                  className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100"
                >
                  Call 8790518724
                </a>
              </section>
            </div>
    )
}
