import { useRef, memo, useMemo } from 'react'
import Image from 'next/image'

const defaultImages = [
  '/images/images1.jpeg',
  '/images/invisible-grill.webp',
  '/images/stainless-steel-invisible-grill.jpg',
  '/images/Balcony-Invisible-Grills-1.jpg'
] as const

function ButtonCardsInner({ images = defaultImages }: { images?: readonly string[] }){
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  
  // Memoize combined images to avoid recalculation
  const combinedImages = useMemo(() => [...images, ...images], [images])

  return (
    <div className="mt-3 w-full">
      <div ref={scrollerRef} className="overflow-x-auto thin-scrollbar py-2 touch-pan-x">
        <div className="flex gap-4 px-4 flex-nowrap">
          {combinedImages.map((src, i) => {
            const isOriginal = i < images.length
            const isFirst = i === 0
            return (
              <div key={`${src}-${i}`} className={isOriginal ? "snap-start min-w-[160px] sm:min-w-[220px] md:min-w-[260px] bg-white border rounded-lg p-0 shadow-soft transform transition-transform hover:scale-105 overflow-hidden" : "min-w-[160px] sm:min-w-[220px] md:min-w-[260px] aria-hidden"} aria-hidden={!isOriginal}>
                <div className="h-32 sm:h-36 w-full overflow-hidden relative bg-gray-100">
                  <Image 
                    src={src} 
                    alt={isOriginal ? `Card ${i+1}` : ''} 
                    fill 
                    className="object-cover" 
                    unoptimized 
                    priority={isFirst}
                    loading={isFirst ? 'eager' : 'lazy'}
                  />
                </div>
                {isOriginal && (
                  <div className="p-3 text-left">
                    <div className="text-base font-medium">Service {i+1}</div>
                    <div className="text-sm text-gray-500 mt-1">Learn more</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(ButtonCardsInner)
