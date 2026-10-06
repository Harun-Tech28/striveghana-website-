'use client'

interface IslamicDividerProps {
  variant?: 'gold' | 'emerald' | 'light'
  className?: string
  width?: 'sm' | 'md' | 'lg'
}

export default function IslamicDivider({ variant = 'gold', className = '', width = 'md' }: IslamicDividerProps) {
  const widthClasses = {
    sm: 'w-16 sm:w-24',
    md: 'w-24 sm:w-36',
    lg: 'w-36 sm:w-48'
  }

  const w = widthClasses[width]

  return (
    <div className={`flex items-center justify-center space-x-3 py-4 select-none pointer-events-none ${className}`} aria-hidden="true">
      {/* Left tapered line */}
      <div className={`h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-accent-gold ${w}`}></div>

      {/* Center 8-point geometric star motif */}
      <div className="relative flex items-center justify-center">
        {/* Outer diamond */}
        <div className="w-3.5 h-3.5 rotate-45 border border-accent-gold/70 bg-accent-gold/15 flex items-center justify-center">
          {/* Inner square */}
          <div className="w-1.5 h-1.5 rotate-45 bg-accent-gold"></div>
        </div>
      </div>

      {/* Right tapered line */}
      <div className={`h-px bg-gradient-to-l from-transparent via-accent-gold/40 to-accent-gold ${w}`}></div>
    </div>
  )
}
