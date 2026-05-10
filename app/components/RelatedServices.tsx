"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Link2 } from "lucide-react"
import { services as productServices } from "./data/productServices"
import { getRelatedServices } from "./constants/internalLinking"

type Props = {
  serviceSlug: string
}

const badgeColors: Record<string, string> = {
  "Most Visited": "bg-blue-600",
  "Popular": "bg-indigo-600",
  "Recommended": "bg-teal-600",
  "Pet Safe": "bg-pink-600",
  "Space Saver": "bg-gray-700",
  "Balcony Fit": "bg-green-700",
  "Family Safety": "bg-blue-700",
  "Bird Route Check": "bg-purple-700",
  "Sports Use": "bg-red-700",
  "Window Fit": "bg-indigo-700",
  "Child Safety": "bg-teal-700",
  "Pet Planning": "bg-pink-700",
  "Ledge Check": "bg-yellow-600 text-black",
  "Surface Prep": "bg-orange-700",
  "Bird Entry Check": "bg-emerald-700",
}

export default function RelatedServices({ serviceSlug }: Props) {
  const relatedServices = getRelatedServices(serviceSlug)
    .map((service) => {
      const serviceMeta = productServices.find((item) => item.slug === service.slug)

      return {
        ...service,
        image: serviceMeta?.image ?? "/images/invisible-grill.webp",
        description:
          serviceMeta?.description ??
          `Explore ${service.title.toLowerCase()} with material guidance, clean installation, and site-measured safety planning.`,
        badge: serviceMeta?.badge ?? "Recommended",
      }
    })
    .slice(0, 6)

  if (relatedServices.length === 0) {
    return null
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="overflow-hidden rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 shadow-[0_20px_60px_rgba(251,146,60,0.12)]">
        <div className="border-b border-orange-100 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(255,247,237,0.92))] px-6 py-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-sm">
              <Link2 size={22} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Related Services
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Customers also explore these services
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Browse closely related installation services for balconies, windows,
                bird protection, and modern home safety.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              prefetch={false}
              className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/10 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                  {service.badge && (
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-sm ${badgeColors[service.badge] ?? "bg-slate-800"}`}
                    >
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="absolute inset-x-4 bottom-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">
                    Service Page
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="line-clamp-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 transition group-hover:border-orange-400 group-hover:bg-orange-100">
                  Explore service
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
