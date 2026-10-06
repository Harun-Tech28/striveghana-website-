'use client'

import Image from 'next/image'
import Link from 'next/link'

interface StriveLogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  showArabic?: boolean
  className?: string
  href?: string
}

export default function StriveLogo({
  variant = 'dark',
  size = 'md',
  showText = true,
  showArabic = true,
  className = '',
  href = '/'
}: StriveLogoProps) {
  // Dimension mappings
  const dimensions = {
    sm: { img: 36, title: 'text-lg', arabic: 'text-xs', sub: 'text-[9px]' },
    md: { img: 48, title: 'text-xl', arabic: 'text-sm', sub: 'text-[10px]' },
    lg: { img: 64, title: 'text-2xl', arabic: 'text-base', sub: 'text-xs' },
    xl: { img: 84, title: 'text-3xl', arabic: 'text-lg', sub: 'text-sm' },
  }[size]

  const isLight = variant === 'light' // Used on dark backgrounds (e.g. footer)

  const content = (
    <div className={`inline-flex items-center space-x-3 group ${className}`}>
      {/* Official Circular Logo with subtle glow and golden border */}
      <div 
        className={`relative flex-shrink-0 rounded-full overflow-hidden transition-all duration-300 transform group-hover:scale-105 shadow-sm ${
          isLight 
            ? 'ring-2 ring-amber-400 bg-white' 
            : 'ring-2 ring-amber-500/40 hover:ring-amber-400 bg-white'
        } ${size === 'md' ? 'w-9 h-9 sm:w-11 sm:h-11' : ''}`}
        style={size !== 'md' ? { width: dimensions.img, height: dimensions.img } : undefined}
      >
        <Image
          src="/images/striveghana-logo.png"
          alt="StriveGhana Official Logo - السعي"
          width={dimensions.img * 2}
          height={dimensions.img * 2}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <span
              className={`font-heading font-extrabold tracking-tight ${
                size === 'md' ? 'text-base sm:text-xl' : dimensions.title
              } ${isLight ? 'text-white' : 'text-slate-900'}`}
            >
              Strive<span className="text-amber-500">Ghana</span>
            </span>

            {showArabic && (
              <span className={`arabic-text font-bold text-amber-500 ${
                size === 'md' ? 'text-xs sm:text-sm' : dimensions.arabic
              }`}>
                السعي
              </span>
            )}
          </div>
          <span
            className={`font-medium tracking-wider uppercase mt-0.5 sm:mt-1 ${dimensions.sub} hidden sm:block ${
              isLight ? 'text-slate-300' : 'text-amber-700'
            }`}
          >
            Youth & Convert Support
          </span>
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block focus:outline-none">
        {content}
      </Link>
    )
  }

  return content
}
