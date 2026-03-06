import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { FloatingContactSkeleton, HeaderSkeleton } from '../components/LoadingSkeletons'
import Head from 'next/head'
import { Metadata } from 'next'


const FloatingContact = dynamic(() => import('../components/FloatingContact'), {
  loading: () => <FloatingContactSkeleton />,
  ssr: true,
})

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <HeaderSkeleton />,
  ssr: true,
})

const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: true,
  loading: () => null // Defer loading until needed
})

const ContactDetailsBar = dynamic(() => import('../components/ContactDetailsBar'), {
  ssr: true,
  loading: () => null // Defer loading until needed
})


export default function App({ Component, pageProps }: AppProps) {
  return (<>
   <Head>
        <title>Rohini Invisible Grills — Balcony Safety & Nets, Hyderabad</title>
        <meta name="description" content="Rohini Invisible Grills — professional invisible grills, balcony safety nets, anti-bird nets and sports nets in Hyderabad. Quality installations for homes & societies." />
        <meta name="keywords" content="invisible grills, balcony safety nets, anti bird nets, sports nets, duct safety nets, Hyderabad, Rohini" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Rohini Invisible Grills" />
        <meta property="og:description" content="Professional invisible grills and safety net solutions in Hyderabad." />
        {/* Preload images used on the page to reduce critical request latency */}
        <link rel="preload" as="image" href="/images/children-safety-invisible-grills-for-balcony.webp" />
        <link rel="preload" as="image" href="/images/invisible-grill.webp" />
        <link rel="preload" as="image" href="/images/stainless-steel-invisible-grill.webp" />
        <link rel="preload" as="image" href="/images/Balcony-Invisible-Grills-1.webp" />
        <link rel="preload" as="image" href="/images/invisible-grills-bird-netting-in-hyderabad.webp" />
        <link rel="preload" as="image" href="/images/service-placeholder.svg" />
        <link rel="preload" as="image" href="/images/client-adhitya.svg" />
        <link rel="preload" as="image" href="/Rohini_logo.webp" />
        <link rel="preload" as="image" href="/images/anti-bird-invisible-grills.webp" />
        <link rel="preload" as="image" href="/images/invisible-grill-for-balcony.webp" />
        <link rel="preload" as="image" href="/images/invisible-grill-2.webp" />
        <link rel="preload" as="image" href="/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp" />
        <link rel="preload" as="image" href="/images/children-safety-invisible-grills-in-hyderabad.webp" />
        <link rel="preload" as="image" href="/images/drybalcony-invisible-grills-near-me.webp" />
        <link rel="preload" as="image" href="/images/invisible-grills-for-apartment.webp" />
        <link rel="preload" as="image" href="/images/invisible-grills-in-hyderabad.webp" />
        <link rel="preload" as="image" href="/images/pigeon-safety-invisible-grills.webp" />
        <link rel="preload" as="image" href="/images/sport-nets-installation-hyderabad.webp" />
      </Head>
    <div className="min-h-screen w-full">
      <div className="w-full app-shell bg-white">
        <Header />
          <ContactDetailsBar/>
          <Component {...pageProps} />
         <Footer />
      </div>
      <FloatingContact />
    </div>
  </>
  )
}
