"use client"

import React, { useState, useEffect } from "react"
import { services } from "./constants/services"
import { Briefcase } from "lucide-react"
import Link from "next/link"
import { hyderabadLocations } from "./constants/locations"
import { useRouter } from "next/router"

export default function DropdownClient() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // ✅ close dropdown after navigation
  useEffect(() => {
    const handleRoute = () => setOpen(false)

    router.events.on("routeChangeStart", handleRoute)
    return () => router.events.off("routeChangeStart", handleRoute)
  }, [router])

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}
      <button className="text-primary font-semibold flex md:text-sm lg:text-xl items-center px-4 py-2 text-lg hover:text-indigo-600 transition">
        <Briefcase size={22} className="text-orange-500 mr-2 md:text-sm lg:text-xl" />
        Services
      </button>

      {/* First Dropdown */}
      <div
        className={`absolute left-0 mt-3 w-72 bg-white shadow-xl rounded-xl
        transition-all duration-300 z-50
        ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-3"
        }`}
      >
        {services.map((service) => (
          <ServiceItem
            key={service.slug}
            service={service}
            closeMenu={() => setOpen(false)}
          />
        ))}
      </div>
    </div>
  )
}

/* ========================= */
/* Sub Component */
/* ========================= */

function ServiceItem({ service, closeMenu }: any) {
  const [subOpen, setSubOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setSubOpen(true)}
      onMouseLeave={() => setSubOpen(false)}
    >
      {/* Service Link */}
      <Link
        href={`/services/${service.slug}`}
        onClick={closeMenu}
        className="block px-5 py-3 hover:bg-indigo-50 font-medium text-gray-700"
      >
        {service.title}
      </Link>

      {/* Second Dropdown */}
      <div
        className={`absolute left-full top-0 w-80 bg-white shadow-xl rounded-xl
        max-h-[57vh] overflow-y-auto transition-all duration-300
        ${
          subOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {hyderabadLocations.map((location: string) => (
          <Link
            key={`${service.slug}-${location}`}
            href={`/services/${service.slug}/${location}`}
            onClick={closeMenu}
            className="block px-5 py-3 hover:bg-indigo-50 text-gray-700"
          >
            {service.title} in {location}
          </Link>
        ))}
      </div>
    </div>
  )
}