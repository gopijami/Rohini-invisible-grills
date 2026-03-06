import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const heroImages = [
  { src: '/images/invisible-grill-for-balcony.webp', alt: 'Anti-bird invisible grills in tellapur hyderabad' },
  { src: '/images/invisible-grill.webp?size=200w200h', alt: 'Invisible stainless steel grills closeup' },
  { src: '/images/stainless-steel-invisible-grill.webp?size=200w200h', alt: 'Durable stainless-steel invisible grills' },
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
  <div className="w-full h-80 md:h-120 lg:h-140 sm:h-100 relative overflow-hidden">

    {/* Slides */}
    <div
      className="flex h-full w-full transition-transform duration-700"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      {heroImages.map((item, i) => (
        <div key={i} className="w-full h-full flex-shrink-0 relative">
          
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
            fetchPriority={i === 0?"high":"auto"}
          />

          {/* Caption Overlay */}
          <div className="absolute inset-0 flex items-center bg-black/30">
            <div
              className={`px-6 sm:px-10 text-white transition-all duration-700 ${
                i === index
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                  {item.alt}
              </h2>
              
              <p className="mt-4 text-white text-lg sm:text-xl font-medium drop-shadow-md">
                Premium Invisible Grills & Safety Nets in Hyderabad
              </p>
              <button 
              // onClick={() => {
              //     const element = document.getElementById("quote")
              //     element?.scrollIntoView({ behavior: "smooth" })
              //   }} 
                className="mt-4 px-4 py-2 bg-primary rounded-md text-sm font-semibold hover:scale-105 transition">
                 <a href="tel:+919900000000" className="font-medium">
              Call Now
            </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Dots */}
    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
      {heroImages.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`w-6 h-6 rounded-full ${
            i === index ? "bg-white" : "bg-white/50"
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
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
