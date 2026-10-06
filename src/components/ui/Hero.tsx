'use client'

import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle: string
  description?: string
  backgroundImage?: string
  ctaButtons?: Array<{
    text: string
    href: string
    variant: 'primary' | 'secondary' | 'outline'
  }>
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = '/images/home-hero-bg.png',
  ctaButtons = []
}: HeroProps) => {
  const buttons = ctaButtons.length > 0 ? ctaButtons : [
    { text: 'Support Our Work', href: '/donate', variant: 'primary' as const },
    { text: 'Explore Programs', href: '/programs', variant: 'outline' as const }
  ]

  // Clean English title so Arabic doesn't duplicate
  const cleanTitle = title.replace(/السعي/g, '').replace(/\s*\(S\)\s*/i, '').trim()

  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] bg-[#0b291a] text-white py-16 sm:py-20 lg:py-24 border-b border-[#17432b] overflow-hidden flex items-center">
      {/* 1. Base Image Layer: Right-side contained banner image - small, clearly visible, gentle */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full sm:w-[60%] lg:w-[48%] max-w-[580px] pointer-events-none flex items-center justify-end z-0"
        aria-hidden="true"
      >
        <div 
          className="w-full h-[85%] max-h-[480px] bg-contain bg-right bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        {/* Soft edge gradient to blend gently into the deep spruce green background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b291a] via-[#0b291a]/60 to-transparent sm:via-[#0b291a]/25" />
      </div>

      {/* 2. Top-to-bottom gentle tone overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#0b291a]/60 via-transparent to-[#0b291a]/80 pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Natural, professional typography and layout */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="bg-[#0b291a]/85 sm:bg-transparent rounded-xl p-6 sm:p-0 border sm:border-none border-white/10 space-y-6">
              
              <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider text-accent-gold uppercase">
                <span>Ejisuman, Ashanti Region</span>
                <span>•</span>
                <span>Est. 2024</span>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-white leading-tight">
                    {cleanTitle || 'STRIVE'}
                  </h1>
                  <span className="font-arabic text-3xl sm:text-4xl lg:text-5xl text-accent-gold font-normal">
                    السعي
                  </span>
                </div>

                <p className="text-xl sm:text-2xl font-medium text-emerald-100 leading-snug">
                  {subtitle}
                </p>
              </div>

              {description && (
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl">
                  {description}
                </p>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                {buttons.map((btn, idx) => (
                  <Link
                    key={idx}
                    href={btn.href}
                    className={`px-6 py-3 rounded-md font-semibold text-base transition-colors flex items-center space-x-2.5 ${
                      btn.variant === 'primary'
                        ? 'bg-accent-gold hover:bg-accent-gold-dark text-white shadow-sm'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                    }`}
                  >
                    {btn.variant === 'primary' && <Heart size={18} className="fill-white" />}
                    <span>{btn.text}</span>
                    {btn.variant !== 'primary' && <ArrowRight size={18} />}
                  </Link>
                ))}
              </div>

              {/* Simple Community Fact Row */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-accent-gold">35+</p>
                  <p className="text-xs sm:text-sm text-gray-300">Youth & converts</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-accent-gold">15</p>
                  <p className="text-xs sm:text-sm text-gray-300">Active mentors</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-accent-gold">4</p>
                  <p className="text-xs sm:text-sm text-gray-300">Weekly tracks</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-accent-gold">Ejisu</p>
                  <p className="text-xs sm:text-sm text-gray-300">Center location</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Kept clear so the background banner graphic is visible */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[440px]">
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero