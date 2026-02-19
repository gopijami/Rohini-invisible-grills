import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const heroImages = [
  { src: '/images/invisible-grill.webp?size=200w200h', alt: 'Invisible stainless steel grills closeup' },
  { src: '/images/stainless-steel-invisible-grill.jpg?size=200w200h', alt: 'Durable stainless-steel invisible grills' }
]

export default function Carousel(){
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    // auto-advance every 4s
    const advance = () => setIndex((i) => (i + 1) % heroImages.length)
    timeoutRef.current = window.setInterval(() => {
      advance()
    }, 4500)

    return () => {
      if (timeoutRef.current) window.clearInterval(timeoutRef.current)
    }
  }, [])

  // small horizontal auto-scroller for the gallery strip
  // (gallery strip extracted to ButtonCards component)

  return (
    <section className="w-full overflow-hidden rounded-md">
      <div className="w-full h-56 sm:h-72 relative overflow-hidden">
        <div className="flex h-full w-[400%] transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
          {heroImages.map((item, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 relative">
              <Image src={item.src} alt={item.alt} fill className="object-cover" unoptimized priority={i===0} loading={i===0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`w-2 h-3 rounded-full ${i===index? 'bg-white':'bg-white/50'}`} aria-label={`Go to slide ${i+1}`} />
          ))}
        </div>
      </div>

      {/* gallery strip moved to `ButtonCards` component for reuse */}
      <noscript>
        <div>
          {heroImages[0] && <img src={heroImages[0].src} alt={heroImages[0].alt} loading="eager" />}
        </div>
      </noscript>
    </section>
  )
}
