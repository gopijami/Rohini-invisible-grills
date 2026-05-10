import type { Metadata } from "next";
import AboutClient from "../components/aboutClient";
import { socialProfileUrls } from "../components/constants/socialProfiles";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "About Rohini Invisible Grills Hyderabad",
    description:
      "Learn about Rohini Invisible Grills, Hyderabad installers for invisible grills, balcony safety grills, bird protection, sports nets, and child-safe windows.",
    keywords: [
      "invisible grill installers Hyderabad",
      "invisible grill installers",
      "balcony safety grills",
      "anti bird grills",
      "children safety grills",
      "sports nets installation",
      "window invisible grills",
      "invisible grills price",
    ],
    alternates: {
      canonical: "https://rohiniinvisiblegrills.com/about",
    },
    openGraph: {
      title:
        "About Rohini Invisible Grills Hyderabad",
      description:
        "Hyderabad-based invisible grill, balcony safety, bird protection, and sports net installation services.",
      url: "https://rohiniinvisiblegrills.com/about",
      siteName: "Rohini Invisible Grills",
      images: [
        {
          url: "/images/invisible-grill-for-balcony.webp",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Rohini Invisible Grills Hyderabad",
      description:
        "Hyderabad-based invisible grill, balcony safety, bird protection, and sports net installation services.",
      images: ["/images/invisible-grill-for-balcony.webp"],
    },
  };
}


export default function AboutPage() {
  return (<>
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Rohini Invisible Grills",
      "image": "https://rohiniinvisiblegrills.com/images/invisible-grill-for-balcony.webp",
      "telephone": "+91-8790518724",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "areaServed": "India",
      "url": "https://rohiniinvisiblegrills.com/about",
      "description":
        "Rohini Invisible Grills provides site-measured invisible grill installation, balcony safety grills, anti bird grills, and sports nets services.",
      "sameAs": socialProfileUrls,
      "priceRange": "Site-measured quote",
      "openingHours": "Mo-Su 08:00-20:00"
    }),
  }}
/>
 
 <AboutClient />
      </>
  );
}
