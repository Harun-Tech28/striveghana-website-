'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MessageCircle, MapPin, Heart } from 'lucide-react'
import { organizationData } from '@/data/organization'
import StriveLogo from '@/components/ui/StriveLogo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#0b291a] text-gray-200 text-xs sm:text-sm py-2 px-4 border-b border-[#17432b] hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 text-gray-300">
            <span className="font-medium text-white">Strive Ghana</span>
            <span>•</span>
            <span>{organizationData.motto}</span>
          </div>

          <div className="flex items-center space-x-5 text-gray-300">
            <a
              href={`tel:${organizationData.contact.phone}`}
              className="hover:text-white transition-colors flex items-center"
            >
              <Phone size={13} className="mr-1.5 text-accent-gold" />
              <span>{organizationData.contact.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${organizationData.contact.whatsapp}?text=${encodeURIComponent("Salam Alaykum, I am reaching out from the Strive Ghana website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors flex items-center text-emerald-400"
            >
              <MessageCircle size={13} className="mr-1.5" />
              <span>WhatsApp</span>
            </a>
            <span className="flex items-center text-gray-300">
              <MapPin size={13} className="mr-1 text-accent-gold" />
              <span>Ejisu, Ashanti Region</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-40 bg-white transition-shadow duration-200 ${
          isScrolled ? 'shadow-sm border-b border-gray-200' : 'border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-3">
            {/* Brand Logo */}
            <StriveLogo size="md" variant="dark" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navigationItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? 'text-primary-700 bg-primary-50 font-semibold'
                        : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <div className="pl-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center space-x-1.5 bg-primary-700 hover:bg-primary-800 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors shadow-sm"
                >
                  <Heart size={14} className="fill-white" />
                  <span>Donate</span>
                </Link>
              </div>
            </nav>

            {/* Mobile menu trigger */}
            <div className="flex items-center space-x-2 md:hidden">
              <Link
                href="/donate"
                className="bg-primary-700 text-white text-xs font-medium py-2 px-3 rounded-md flex items-center space-x-1"
              >
                <Heart size={13} className="fill-white" />
                <span>Donate</span>
              </Link>
              <button
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-6 space-y-3">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? 'text-primary-700 bg-primary-50 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Link
                href="/donate"
                className="w-full py-2.5 bg-primary-700 text-white font-medium rounded-md text-sm flex items-center justify-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={15} className="fill-white" />
                <span>Support Our Programs</span>
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <a
                  href={`https://wa.me/${organizationData.contact.whatsapp}?text=${encodeURIComponent("Salam Alaykum, I am reaching out from the Strive Ghana website.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-emerald-50 text-emerald-800 rounded-md font-medium flex items-center justify-center space-x-1 border border-emerald-100"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${organizationData.contact.phone}`}
                  className="p-2 bg-gray-50 text-gray-800 rounded-md font-medium flex items-center justify-center space-x-1 border border-gray-200"
                >
                  <Phone size={14} />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header