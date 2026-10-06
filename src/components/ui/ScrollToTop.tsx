'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to Top"
      className="fixed bottom-18 sm:bottom-5 left-4 sm:left-5 z-40 p-2.5 rounded-full bg-white border border-gray-300 text-gray-700 shadow-md hover:bg-gray-50 hover:text-gray-900 transition-all focus:outline-none active:scale-95"
    >
      <ArrowUp size={16} />
    </button>
  )
}
