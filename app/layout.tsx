import dynamic from "next/dynamic";
import "./globals.css";
import type { Metadata } from "next";
import { HeaderSkeleton } from "./home/LoadingSkeletons";

const NavBar = dynamic(() => import("./home/NavBar"), {
    loading: () => <HeaderSkeleton />,
    ssr: true,
  });

  const ContactDetailsBar = dynamic(() => import("./home/ContactDetailsBar"), {
    ssr: true,
    loading: () => null,
  });

export const metadata: Metadata = {
  title: {
    default: "Invisible Grills Hyderabad | Balcony Safety Nets | Anti Bird Nets",
    template: "%s | Invisible Grills Hyderabad",
  },
  description:
    "Best invisible grills in Hyderabad for balcony safety. We provide anti bird nets, children safety nets, sports nets and duct area safety nets installation services across Hyderabad.",
  keywords: [
    "Invisible grills Hyderabad",
    "Balcony safety nets",
    "Anti bird nets Hyderabad",
    "Children safety nets",
    "Pigeon safety nets",
    "Sports nets installation",
    "Invisible grills near me",
  ],
  authors: [{ name: "SJ Invisible Grills" }],
  creator: "SJ Invisible Grills",
  publisher: "SJ Invisible Grills",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Invisible Grills Hyderabad",
    description:
      "Balcony safety nets, anti bird nets and invisible grills installation services across Hyderabad.",
    url: "https://yourwebsite.com",
    siteName: "Invisible Grills Hyderabad",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Invisible Grills Hyderabad",
    description:
      "Best invisible grills and safety nets installation in Hyderabad.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "SJ Invisible Grills",
      description:
        "Invisible grills and safety nets installation services in Hyderabad.",
      areaServed: "Hyderabad",
      serviceType: [
        "Invisible Grills",
        "Balcony Safety Nets",
        "Anti Bird Nets",
        "Children Safety Nets",
      ],
    }),
  }}
/>
<NavBar />
        <ContactDetailsBar />
        {children}
      </body>
    </html>
  );
}