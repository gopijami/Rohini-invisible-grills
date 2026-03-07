import dynamic from "next/dynamic";

import { CarouselSkeleton ,
  ButtonCardsSkeleton,
  ServicesSkeleton,
  TestimonialsSkeleton,
  HeaderSkeleton,
  ClientsSkeleton, } from "./home/LoadingSkeletons";

  const NavBar = dynamic(() => import("./home/NavBar"), {
    loading: () => <HeaderSkeleton />,
    ssr: true,
  });

  const ContactDetailsBar = dynamic(() => import("./home/ContactDetailsBar"), {
    ssr: true,
    loading: () => null,
  });


  const Footer = dynamic(() => import("./footer/Footer"), {
    ssr: true,
    loading: () => null,
  });


const Carousel = dynamic(() => import("./home/Carousel"), {
  loading: () => <CarouselSkeleton />,
  ssr: true,
});

const ButtonCards = dynamic(() => import("./home/ButtonCards"), {
  loading: () => <ButtonCardsSkeleton />,
  ssr: true,
});

const ContactForm = dynamic(() => import("./home/ContactForm"), {
  ssr: true,
  loading: () => null,
});

const Services = dynamic(() => import("./home/Services"), {
  loading: () => <ServicesSkeleton />,
  ssr: true,
});

const Testimonials = dynamic(() => import("./home/Testimonials"), {
  loading: () => <TestimonialsSkeleton />,
  ssr: true,
});

const Clients = dynamic(() => import("./home/Clients"), {
  loading: () => <ClientsSkeleton />,
  ssr: true,
});

export default function Home() {
  return (
    <>
      {/* <NavBar />
      <ContactDetailsBar /> */}
    <main className="px-4 pb-6 pt-[1px] md:pt-[3px] sm:p-6">
         
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
  );
}