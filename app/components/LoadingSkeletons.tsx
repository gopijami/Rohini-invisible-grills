// Loading skeleton components for lazy-loaded sections

export function HeaderSkeleton() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-20 h-20 bg-gray-300 rounded"></div>
        <div className="flex flex-col gap-2">
          <div className="h-4 bg-gray-300 rounded w-32"></div>
          <div className="h-3 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
      <div className="w-8 h-8 bg-gray-300 rounded"></div>
    </div>
  )
}

export function CarouselSkeleton() {
  return (
    <div className="relative w-full h-96 bg-gray-300 rounded-lg animate-pulse flex items-center justify-center">
      <div className="text-gray-400 text-center">
        <div className="h-8 bg-gray-400 rounded w-48 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-400 rounded w-32 mx-auto"></div>
      </div>
    </div>
  )
}

export function MobileRibbonSkeleton() {
  return (
    <div className="flex gap-2 p-4 bg-white animate-pulse">
      <div className="flex-1 h-10 bg-gray-300 rounded"></div>
      <div className="flex-1 h-10 bg-gray-300 rounded"></div>
      <div className="flex-1 h-10 bg-gray-300 rounded"></div>
    </div>
  )
}

export function ButtonCardsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-32 bg-gray-300 rounded-lg"></div>
      ))}
    </div>
  )
}

export function ServicesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-48 bg-gray-300 rounded-lg"></div>
      ))}
    </div>
  )
}

export function TestimonialsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-pulse">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="h-32 bg-gray-300 rounded-lg"></div>
      ))}
    </div>
  )
}

export function ClientsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-20 bg-gray-300 rounded-lg"></div>
      ))}
    </div>
  )
}

export function FloatingContactSkeleton() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50 animate-pulse">
      <div className="w-12 h-12 rounded-full bg-gray-300"></div>
      <div className="w-12 h-12 rounded-full bg-gray-300"></div>
    </div>
  )
}
