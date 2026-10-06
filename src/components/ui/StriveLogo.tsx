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
        className={`relative flex-shrink-0 rounded-full overflow-hidden transition-all duration-300 transform group-hover:scale-105 shadow-md ${
          isLight 
            ? 'ring-2 ring-accent-gold/80 bg-white' 
            : 'ring-2 ring-primary-600/40 hover:ring-accent-gold bg-white'
        }`}
        style={{ width: dimensions.img, height: dimensions.img }}
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
          <div className="flex items-center space-x-2">
            <span
              className={`font-heading font-extrabold tracking-tight ${dimensions.title} ${
                isLight ? 'text-white' : 'text-primary-800'
              }`}
            >
              Strive<span className="text-accent-gold">Ghana</span>
            </span>

            {showArabic && (
              <span className={`arabic-text font-bold text-accent-gold ${dimensions.arabic}`}>
                السعي
              </span>
            )}
          </div>
          <span
            className={`font-medium tracking-wider uppercase mt-1 ${dimensions.sub} ${
              isLight ? 'text-gray-300' : 'text-primary-600'
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
