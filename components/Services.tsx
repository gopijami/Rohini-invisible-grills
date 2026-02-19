const serviceList = [
  'Invisible Grills',
  'Invisible Grills in Hyderabad',
  'Balcony Safety Nets',
  'Anti Bird Nets',
  'Sports Nets',
  'All kinds of Sports Nets',
  'Duct Area Safety Nets'
]

const serviceImages: Record<string,string> = {
  'Invisible Grills': '/images/invisible-grill.webp',
  'Balcony Safety Nets': '/images/Balcony-Invisible-Grills-1.jpg',
  'All kinds of Sports Nets': '/images/stainless-steel-invisible-grill.jpg'
}

export default function Services(){
  return (
    <div className="py-2">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {serviceList.map((s, idx) => (
          <article key={s} className="bg-white border rounded-lg p-4 shadow-soft">
            <div className="flex gap-4">
              <div className="w-20 h-16 sm:w-28 sm:h-20 flex-shrink-0 overflow-hidden rounded-md">
                <img src={serviceImages[s] ?? '/images/service-placeholder.svg'} alt={s} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{s}</h3>
                <p className="text-sm text-gray-500 mt-1">Professional installations & durable materials.</p>
                <div className="mt-3 flex gap-2">
                  <a href="tel:+919900000000" className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-md text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.97.39 1.92.78 2.79a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.87.39 1.82.66 2.79.78A2 2 0 0 1 22 16.92z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Call
                  </a>
                  <a href="https://wa.me/919900000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-md text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
