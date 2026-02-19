import Head from 'next/head'
import dynamic from 'next/dynamic'
import {
  HeaderSkeleton,
  MobileRibbonSkeleton,
  CarouselSkeleton,
  ButtonCardsSkeleton,
  ServicesSkeleton,
  TestimonialsSkeleton,
  ClientsSkeleton,
} from '../components/LoadingSkeletons'

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <HeaderSkeleton />,
  ssr: true,
})
const MobileRibbon = dynamic(() => import('../components/MobileRibbon'), {
  loading: () => <MobileRibbonSkeleton />,
  ssr: true,
})
const Carousel = dynamic(() => import('../components/Carousel'), {
  loading: () => <CarouselSkeleton />,
  ssr: true,
})
const ButtonCards = dynamic(() => import('../components/ButtonCards'), {
  loading: () => <ButtonCardsSkeleton />,
  ssr: true,
})
const ContactForm = dynamic(() => import('../components/ContactForm'), { 
  ssr: true,
  loading: () => null // Defer loading until needed
})
const Services = dynamic(() => import('../components/Services'), {
  loading: () => <ServicesSkeleton />,
  ssr: true,
})
const Testimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <TestimonialsSkeleton />,
  ssr: true,
})
const Clients = dynamic(() => import('../components/Clients'), {
  loading: () => <ClientsSkeleton />,
  ssr: true,
})
const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: true,
  loading: () => null // Defer loading until needed
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohini Invisible Grills — Balcony Safety & Nets, Hyderabad</title>
        <meta name="description" content="Rohini Invisible Grills — professional invisible grills, balcony safety nets, anti-bird nets and sports nets in Hyderabad. Quality installations for homes & societies." />
        <meta name="keywords" content="invisible grills, balcony safety nets, anti bird nets, sports nets, duct safety nets, Hyderabad, Rohini" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Rohini Invisible Grills" />
        <meta property="og:description" content="Professional invisible grills and safety net solutions in Hyderabad." />
        {/* Preload images used on the page to reduce critical request latency */}
        <link rel="preload" as="image" href="/images/images1.jpeg" />
        <link rel="preload" as="image" href="/images/invisible-grill.webp" />
        <link rel="preload" as="image" href="/images/stainless-steel-invisible-grill.jpg" />
        <link rel="preload" as="image" href="/images/Balcony-Invisible-Grills-1.jpg" />
        <link rel="preload" as="image" href="/images/Untitled-design-10.webp" />
        <link rel="preload" as="image" href="/images/service-placeholder.svg" />
        <link rel="preload" as="image" href="/images/client-adhitya.svg" />
        <link rel="preload" as="image" href="/Rohini_logo.png" />
      </Head>

      <Header />
      <MobileRibbon />

      <main className="px-4 py-6 sm:p-6">
        <Carousel />
        <ButtonCards />

        <section className="mt-8">
          <ContactForm />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <Services />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <Testimonials />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Clients & Societies</h2>
          <Clients />
        </section>
      </main>

      <Footer />
    </>
  )
}
