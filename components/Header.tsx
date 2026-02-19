import { useState } from 'react'

const Menu = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform z-40 ${open ? 'translate-x-0' : '-translate-x-full'} w-72`}> 
      <div className="p-6">
        <button className="mb-4 text-sm text-gray-500" onClick={onClose}>Close</button>
        <nav className="flex flex-col gap-3 mt-4">
          <a className="py-2 px-3 rounded hover:bg-gray-100">Invisible Grills</a>
          <a className="py-2 px-3 rounded hover:bg-gray-100">Invisible Grills in Hyderabad</a>
          <a className="py-2 px-3 rounded hover:bg-gray-100">Balcony Safety Nets</a>
          <a className="py-2 px-3 rounded hover:bg-gray-100">Anti Bird Nets</a>
          <a className="py-2 px-3 rounded hover:bg-gray-100">Sports Nets</a>
          <a className="py-2 px-3 rounded hover:bg-gray-100">All kinds of Sports Nets</a>
          <a className="py-2 px-3 rounded hover:bg-gray-100">Duct Area Safety Nets</a>
        </nav>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        {/* <div className="w-12 h-12 bg-primary text-white rounded flex items-center justify-center font-bold">RI</div> */}
        <img src="Rohini_logo.png" alt="Rohini Invisible Grills" className=" w-auto h-20" loading="eager" />
          <div>
            <h1 className="text-sm sm:text-xl md:text-2xl font-bold text-primary leading-tight">Rohini Invisible Grills</h1>
            <p className="text-xs sm:text-sm text-accent2 font-medium">Safety nets distribution</p>
          </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:inline-block text-sm btn-accent px-3 py-1 rounded">Request Quote</button>
        <button aria-label="menu" onClick={() => setOpen(true)} className="p-2 rounded-md focus:outline-none">
          <svg width="29" height="29" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <Menu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
