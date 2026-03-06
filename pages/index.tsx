import dynamic from 'next/dynamic'
import {
  CarouselSkeleton,
  ButtonCardsSkeleton,
  ServicesSkeleton,
  TestimonialsSkeleton,
  ClientsSkeleton,
} from '../components/LoadingSkeletons'



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


export default function Home() {
  return (
    <>
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

     
    </>
  )
}
