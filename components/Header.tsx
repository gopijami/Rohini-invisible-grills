import react,{ useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { services } from "./constants/services"
import { hyderabadLocations } from "./constants/locations"
import {
  Home,
  Phone,
  Info,
  Briefcase,
  ChevronDown,
  Menu
} from "lucide-react"
import { memo } from "react"


const MenuClient  = dynamic(() => import('./Menu.client'), {
  ssr: false,
})

const DropdownClient = dynamic(() => import('./Dropdown.client'), {
  ssr: false,
})


const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  // const [showTopBar, setShowTopBar] = useState(true)
  // const [lastScrollY, setLastScrollY] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY

  //     if (currentScrollY > lastScrollY && currentScrollY > 50) {
  //       // scrolling down
  //       setShowTopBar(false)
  //     } else {
  //       // scrolling up
  //       setShowTopBar(true)
  //     }

  //     setLastScrollY(currentScrollY)
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [lastScrollY])

  return (
    <>
      {/* Fixed Header Wrapper */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        
        {/* Main Header */}
        <header className="flex items-center justify-between px-6 pt-4 pb-0">
          <div className="flex items-center gap-3">
            <Image
              src="/Rohini_logo.webp"
              alt="Rohini Invisible Grills"
              width={120}
              height={95}
              priority
              className="h-16 sm:h-22 w-auto"
            />

            <div>
              <h1 className="text-sm sm:text-xl md:text-2xl font-bold text-primary">
                Rohini Invisible Grills
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                Safety Nets Distribution
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-between gap-4">
            <div className="hidden lg:flex">
             <div className=" flex items-center">
              <Link href="/" className="text-primary flex items-center text-lg md:text-sm lg:text-xl font-semibold px-4 py-2">
                 <Home size={22} className="text-orange-500 mr-2 md:text-sm lg:text-xl" />
                    Home
                  </Link>

                <DropdownClient />

                  <Link href="/contact" className="text-primary md:text-sm lg:text-xl flex items-center text-lg font-semibold px-4 py-2">
                 <Phone size={22} className="text-orange-500 mr-2 md:text-sm lg:text-xl" />
                    Contact Us
                  </Link>

                   <Link href="/about" className="text-primary md:text-sm lg:text-xl flex items-center text-lg font-semibold px-4 py-2">
                 <Info size={22} className="text-orange-500 mr-2 md:text-sm lg:text-xl" />
                    About Us
                  </Link>
              </div>
            </div>
          </div>

          <div className=" flex items-center gap-4">
            <div className="hidden sm:inline-block">
             <div className=" flex items-center">
              
                <button onClick={() => {
                      const element = document.getElementById("quote")
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}  className="hidden sm:inline-block text-sm btn-accent md:text-sm lg:text-xl text-white px-4 py-2 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded hover:opacity-90 transition">
                  Request Quote 
                </button>
            </div> 
          </div>
          <div className="block lg:hidden">
            <button
              aria-label="menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button></div>
          </div>
        </header>

       
      </div>

      {/* Important: Prevent content hiding under fixed header */}
      <div className="pt-20" />
      <div className="block lg:hidden">
      <MenuClient open={open} onClose={() => setOpen(false)} />
        </div>
    </>
  )
}

export default memo(Header)