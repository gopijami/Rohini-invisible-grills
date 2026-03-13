'use client'
import { useRef, memo, useMemo } from 'react'
import Image from 'next/image'

type ServiceItem = {
  service: string
  image: string
  price: string
}

export const defaultImages: ServiceItem[] = [
  {
    service: "Children Invisible Grills",
    image: "/images/children-safety-invisible-grills-for-balcony.webp",
    price: "$2"
  },
  {
    service: "Invisible Grills",
    image: "/images/invisible-grill.webp",
    price: "$1.2"
  },
  {
    service: "Stainless Steel Invisible Grill",
    image: "/images/stainless-steel-invisible-grill.webp",
    price: "$1.3"
  },
  {
    service: "Balcony Invisible Grills",
    image: "/images/Balcony-Invisible-Grills-1.webp",
    price: "$1.2"
  },
  {
    service: "Anti Bird Invisible Grills",
    image: "/images/anti-bird-invisible-grills.webp",
    price: "$1.5"
  },
  {
    service: "Invisible Grill for Balcony",
    image: "/images/invisible-grill-for-balcony.webp",
    price: "$1.4"
  },
  {
    service: "Apartment Balcony Invisible Grills",
    image: "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
    price: "$1.6"
  },
  {
    service: "Children Safety Invisible Grills",
    image: "/images/children-safety-invisible-grills-in-hyderabad.webp",
    price: "$2"
  },
  {
    service: "Dry Balcony Invisible Grills",
    image: "/images/drybalcony-invisible-grills-near-me.webp",
    price: "$1.8"
  },
  {
    service: "Invisible Grills for Apartment",
    image: "/images/invisible-grills-for-apartment.webp",
    price: "$1.2"
  },
  {
    service: "Pigeon Safety Invisible Grills",
    image: "/images/pigeon-safety-invisible-grills.webp",
    price: "$1.6"
  }
]

function ButtonCardsInner({ images = defaultImages }: { images?: ServiceItem[] }) {

  const scrollerRef = useRef<HTMLDivElement | null>(null)

  // duplicate images only once for seamless scrolling
  const combinedImages =images

  return (
    <div className="mt-3 w-full">
      {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mt-10 mb-10">
  Our Premium Products & Best Deals
  <span className="block w-24 h-1 bg-orange-500 mx-auto mt-3 rounded"></span>
</h2> */}

{/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mt-10 mb-10">
  Our Products & Best Deals
  <span className="block w-20 h-1 bg-orange-500 mx-auto mt-3 rounded"></span>
</h2> */}
<div className="text-center mt-12 mb-10">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800">
    Our Products & Best Deals
  </h1>

  <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 mx-auto mt-4 rounded-full"></div>
</div>
      <div
        ref={scrollerRef}
        className="overflow-x-auto thin-scrollbar py-2 touch-pan-x"
      >
        <div className="flex gap-4 px-4 flex-nowrap">
          {combinedImages.map((items, i) => {

            const isOriginal = i < images.length
            const isFirst = i === 0

            return (
              <div
                key={`${items.image}-${i}`}
                aria-hidden={!isOriginal}
                className={`min-w-[180px] sm:min-w-[220px] md:min-w-[260px] bg-white border rounded-lg p-0 shadow-soft transform transition-transform hover:scale-105 overflow-hidden ${
                  isOriginal ? "snap-start" : ""
                }`}
              >
                <div className="h-32 sm:h-36 w-full overflow-hidden relative bg-gray-100">
                  <Image
                    src={items.image}
                    alt={items.service}
                    fill
                    className="object-cover"
                    priority={isFirst}
                    loading={isFirst ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 220px, 260px"
                    unoptimized
                  />
                </div>

                <div className="p-3 text-left">
                  <div className="text-base font-medium">{items.service}</div>
                  <div className="text-xl font-bold text-green-600 mt-2">
                    {items.price}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Learn more
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(ButtonCardsInner)