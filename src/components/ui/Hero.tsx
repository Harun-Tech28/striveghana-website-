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
    <section className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] bg-slate-950 text-white py-16 sm:py-24 lg:py-28 overflow-hidden flex items-center border-b border-gray-800">
      {/* 1. Large, Clear Full-Width Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center lg:bg-[center_right] pointer-events-none z-0"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        aria-hidden="true"
      />

      {/* 2. Professional Contrast Gradient (Gentle neutral vignette, zero muddy green tint) */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-900/35 sm:via-slate-950/60 sm:to-transparent pointer-events-none z-1" 
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 pointer-events-none z-1"
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold, large, high-legibility typography */}
          <div className="lg:col-span-8 xl:col-span-7">
            <div className="space-y-6 sm:space-y-8">
              
              {/* Location Badge */}
              <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-wider text-amber-300 uppercase px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                <span>Ejisuman, Ashanti Region</span>
                <span className="text-amber-400">•</span>
                <span>Est. 2024</span>
              </div>

              {/* Main Headline & Arabic Calligraphy */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-baseline gap-3 sm:gap-5">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white leading-[1.08]">
                    {cleanTitle || 'STRIVE'}
                  </h1>
                  <span className="font-arabic text-4xl sm:text-5xl lg:text-6xl text-amber-300 font-semibold drop-shadow-sm">
                    السعي
                  </span>
                </div>

                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-amber-100/95 leading-snug">
                  {subtitle}
                </p>
              </div>

              {/* Description */}
              {description && (
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
                  {description}
                </p>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                {buttons.map((btn, idx) => (
                  <Link
                    key={idx}
                    href={btn.href}
                    className={`px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-200 flex items-center space-x-2.5 shadow-md ${
                      btn.variant === 'primary'
                        ? 'bg-amber-600 hover:bg-amber-500 text-white hover:shadow-amber-600/30 hover:-translate-y-0.5'
                        : 'bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm hover:-translate-y-0.5'
                    }`}
                  >
                    {btn.variant === 'primary' && <Heart size={20} className="fill-white" />}
                    <span>{btn.text}</span>
                    {btn.variant !== 'primary' && <ArrowRight size={20} />}
                  </Link>
                ))}
              </div>

              {/* Community Impact Row */}
              <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
                <div className="p-3 rounded-lg bg-white/5 backdrop-blur-xs border border-white/10">
                  <p className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-heading">35+</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-300 mt-1">Converts & orphans</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 backdrop-blur-xs border border-white/10">
                  <p className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-heading">15</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-300 mt-1">Active mentors</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 backdrop-blur-xs border border-white/10">
                  <p className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-heading">4</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-300 mt-1">Weekly tracks</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 backdrop-blur-xs border border-white/10">
                  <p className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-heading">Ejisu</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-300 mt-1">Center location</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Open space to showcase the large background image */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5 min-h-[380px]" />

        </div>
      </div>
    </section>
  )
}

export default Hero