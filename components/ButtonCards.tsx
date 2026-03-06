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
    price: "$1.3"
  },
  {
    service: "Invisible Grills",
    image: "/images/invisible-grill.webp",
    price: "$1.3"
  },
  {
    service: "Stainless Steel Invisible Grill",
    image: "/images/stainless-steel-invisible-grill.webp",
    price: "$1.3"
  },
  {
    service: "Balcony Invisible Grills",
    image: "/images/Balcony-Invisible-Grills-1.webp",
    price: "$1.3"
  },
  {
    service: "Anti Bird Invisible Grills",
    image: "/images/anti-bird-invisible-grills.webp",
    price: "$1.3"
  },
  {
    service: "Invisible Grill for Balcony",
    image: "/images/invisible-grill-for-balcony.webp",
    price: "$1.3"
  },
  {
    service: "Apartment Balcony Invisible Grills",
    image: "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
    price: "$1.3"
  },
  {
    service: "Children Safety Invisible Grills",
    image: "/images/children-safety-invisible-grills-in-hyderabad.webp",
    price: "$1.3"
  },
  {
    service: "Dry Balcony Invisible Grills",
    image: "/images/drybalcony-invisible-grills-near-me.webp",
    price: "$1.3"
  },
  {
    service: "Invisible Grills for Apartment",
    image: "/images/invisible-grills-for-apartment.webp",
    price: "$1.3"
  },
  {
    service: "Pigeon Safety Invisible Grills",
    image: "/images/pigeon-safety-invisible-grills.webp",
    price: "$1.3"
  }
]

function ButtonCardsInner({ images = defaultImages }: { images?: ServiceItem[] }){
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  
  // Memoize combined images to avoid recalculation
  const combinedImages = useMemo(() => [...images, ...images], [images])

  return (
    <div className="mt-3 w-full">
      <div ref={scrollerRef} className="overflow-x-auto thin-scrollbar py-2 touch-pan-x">
        <div className="flex gap-4 px-4 flex-nowrap">
          {combinedImages.map((items, i) => {
            const isOriginal = i < images.length
            const isFirst = i === 0
            return (
              <div key={`${items.image}-${i}`} className={isOriginal ? "snap-start min-w-[160px] sm:min-w-[220px] md:min-w-[260px] bg-white border rounded-lg p-0 shadow-soft transform transition-transform hover:scale-105 overflow-hidden" : "min-w-[160px] sm:min-w-[220px] md:min-w-[260px] aria-hidden"} aria-hidden={!isOriginal}>
                <div className="h-32 sm:h-36 w-full overflow-hidden relative bg-gray-100">
                  <Image 
                    src={items.image} 
                    alt={isOriginal ? `Card ${i+1}` : ''} 
                    fill 
                    className="object-cover" 
                    unoptimized 
                    priority={isFirst}
                    loading={isFirst ? 'eager' : 'lazy'}
                  />
                </div>
                  <div className="p-3 text-left">
                    <div className="text-base font-medium">{items.service}</div>
                    <div className="text-xl font-bold text-green-600 mt-2">{items.price}</div>
                    <div className="text-sm text-gray-500 mt-1">Learn more</div>
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
