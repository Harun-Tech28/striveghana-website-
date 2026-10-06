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
    <section className="relative min-h-[540px] sm:min-h-[640px] lg:min-h-[720px] bg-slate-950 text-white py-10 sm:py-20 lg:py-28 overflow-hidden flex items-center border-b border-gray-800">
      {/* 1. Large, Clear Full-Width Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center lg:bg-[center_right] pointer-events-none z-0"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        aria-hidden="true"
      />

      {/* 2. Professional Contrast Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40 sm:via-slate-950/65 sm:to-transparent pointer-events-none z-1" 
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/40 pointer-events-none z-1"
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold, high-legibility typography */}
          <div className="lg:col-span-8 xl:col-span-7">
            <div className="space-y-4 sm:space-y-7">
              
              {/* Location Badge */}
              <div className="inline-flex items-center space-x-2 text-[11px] sm:text-sm font-bold tracking-wider text-amber-300 uppercase px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                <span>Ejisuman, Ashanti Region</span>
                <span className="text-amber-400">•</span>
                <span>Est. 2024</span>
              </div>

              {/* Main Headline & Arabic Calligraphy */}
              <div className="space-y-2 sm:space-y-4">
                <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
                  <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight text-white leading-[1.1] break-words">
                    {cleanTitle || 'STRIVE'}
                  </h1>
                  <span className="font-arabic text-3xl sm:text-4xl lg:text-6xl text-amber-300 font-bold drop-shadow-sm">
                    السعي
                  </span>
                </div>

                <p className="text-base sm:text-2xl lg:text-3xl font-bold text-amber-100/95 leading-snug">
                  {subtitle}
                </p>
              </div>

              {/* Description */}
              {description && (
                <p className="text-xs sm:text-base lg:text-xl text-slate-100 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
                  {description}
                </p>
              )}

              {/* Action Buttons - Fully responsive */}
              <div className="pt-1 flex flex-col sm:flex-row gap-2.5 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto">
                {buttons.map((btn, idx) => (
                  <Link
                    key={idx}
                    href={btn.href}
                    className={`w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4.5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg ${
                      btn.variant === 'primary'
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/25 hover:-translate-y-0.5'
                        : 'bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm hover:-translate-y-0.5'
                    }`}
                  >
                    {btn.variant === 'primary' && <Heart size={18} className="fill-slate-950 flex-shrink-0" />}
                    <span>{btn.text}</span>
                    {btn.variant !== 'primary' && <ArrowRight size={18} className="flex-shrink-0" />}
                  </Link>
                ))}
              </div>

              {/* Community Impact Row */}
              <div className="pt-4 sm:pt-7 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-left">
                <div className="p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-amber-300 font-heading">35+</p>
                  <p className="text-[11px] sm:text-sm font-semibold text-slate-200 mt-0.5 sm:mt-1">Converts & orphans</p>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-amber-300 font-heading">15</p>
                  <p className="text-[11px] sm:text-sm font-semibold text-slate-200 mt-0.5 sm:mt-1">Active mentors</p>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-amber-300 font-heading">4</p>
                  <p className="text-[11px] sm:text-sm font-semibold text-slate-200 mt-0.5 sm:mt-1">Weekly tracks</p>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-amber-300 font-heading">Ejisu</p>
                  <p className="text-[11px] sm:text-sm font-semibold text-slate-200 mt-0.5 sm:mt-1">Sanctuary center</p>
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