'use client'

import { ShieldCheck, MapPin, HeartHandshake, PhoneCall } from 'lucide-react'

export default function TrustBar() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Zakat Policy',
      description: 'Zero admin fee taken from Zakat. 100% directly touches beneficiaries.',
    },
    {
      icon: MapPin,
      title: 'Ejisuman Sanctuary',
      description: 'Physical center at 99 BLK IX Ejisuman (Near Family Hospital).',
    },
    {
      icon: HeartHandshake,
      title: 'Personal Mentorship',
      description: 'Guided by Dr. Salis & vetted local scholars across Ashanti.',
    },
    {
      icon: PhoneCall,
      title: 'Direct MoMo Giving',
      description: 'MTN Mobile Money: 054 252 4571 with instant Paystack checkout.',
    },
  ]

  return (
    <section className="bg-white border-y border-slate-200/80 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div 
                key={idx} 
                className="flex items-start space-x-3.5 p-3.5 sm:p-0 rounded-xl bg-slate-50/70 sm:bg-transparent border sm:border-0 border-slate-100 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                  <Icon size={20} className="sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 font-heading tracking-tight leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
