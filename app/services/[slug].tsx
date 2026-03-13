// /pages/services/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { services } from "../components/constants/services"

type Props = {
  service: {
    title: string
    slug: string
  }
}

export default function ServicePage({ service }: Props) {
  return (
    <>
      <main className="px-6 py-16 max-w-5xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-center text-indigo-700">{service.title}</h1>

        <Image
          src={`/images/${service.slug}.webp`}
          alt={service.title}
          width={900}
          height={500}
          className="rounded-lg shadow-lg mx-auto"
        />

        {/* About */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-600">About {service.title}</h2>
          <p className="text-gray-700 text-base">
            {service.title} are high-quality invisible grills designed to keep your home safe. 
            We install them carefully to provide maximum security without blocking your view. 
            Our grills are perfect for balconies, windows, and open areas.
          </p>
        </section>

        {/* Uses */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-600">Uses</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Keep children safe at home</li>
            <li>Protect your balcony from birds and pigeons</li>
            <li>Enhance home safety without spoiling design</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-600">Why Choose Our {service.title}</h2>
          <p className="text-gray-700">
            We provide the best installation with stainless steel grills that are durable and invisible.
            Our team ensures perfect fitting and professional service.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center py-10">
          <a
            href="/contact"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Get Your {service.title} Now
          </a>
        </section>
      </main>
    </>
  )
}

// Generate pages for each service
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = services.map(s => ({ params: { slug: s.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const service = services.find(s => s.slug === slug)!
  return { props: { service } }
}