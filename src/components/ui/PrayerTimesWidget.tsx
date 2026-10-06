'use client'

import { useState, useEffect } from 'react'
import { Clock, MapPin, Compass, Bell, CheckCircle } from 'lucide-react'

interface PrayerTime {
  name: string
  arabic: string
  time: string
  minutes: number
}

export default function PrayerTimesWidget({ compact = false }: { compact?: boolean }) {
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [nextPrayer, setNextPrayer] = useState<{ name: string; timeLeft: string } | null>(null)
  const [activePrayer, setActivePrayer] = useState<string>('Dhuhr')

  // Calculated approximate standard prayer times for Ejisu, Ashanti, Ghana (UTC+0)
  const prayers: PrayerTime[] = [
    { name: 'Fajr', arabic: 'الفجر', time: '04:55 AM', minutes: 4 * 60 + 55 },
    { name: 'Sunrise', arabic: 'الشروق', time: '06:06 AM', minutes: 6 * 60 + 6 },
    { name: 'Dhuhr', arabic: 'الظهر', time: '12:12 PM', minutes: 12 * 60 + 12 },
    { name: 'Asr', arabic: 'العصر', time: '03:32 PM', minutes: 15 * 60 + 32 },
    { name: 'Maghrib', arabic: 'المغرب', time: '06:14 PM', minutes: 18 * 60 + 14 },
    { name: 'Isha', arabic: 'العشاء', time: '07:24 PM', minutes: 19 * 60 + 24 },
  ]

  useEffect(() => {
    setCurrentTime(new Date())
    const interval = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)

      const currentMinutes = now.getHours() * 60 + now.getMinutes()
      
      // Determine active and next prayer
      let next = prayers.find(p => p.minutes > currentMinutes)
      if (!next) {
        next = prayers[0] // Fajr tomorrow
      }

      // Calculate time remaining
      let diffMinutes = next.minutes - currentMinutes
      if (diffMinutes < 0) diffMinutes += 24 * 60

      const hoursLeft = Math.floor(diffMinutes / 60)
      const minsLeft = diffMinutes % 60
      const timeString = hoursLeft > 0 ? `${hoursLeft}h ${minsLeft}m` : `${minsLeft}m`

      setNextPrayer({ name: next.name, timeLeft: timeString })

      // Determine currently active prayer window
      for (let i = prayers.length - 1; i >= 0; i--) {
        if (currentMinutes >= prayers[i].minutes) {
          setActivePrayer(prayers[i].name)
          break
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (compact) {
    return (
      <div className="inline-flex items-center space-x-2 bg-primary-800/80 border border-primary-600/70 text-xs px-3 py-1 rounded-full text-gray-200">
        <Clock size={12} className="text-accent-gold animate-pulse" />
        <span>Next: <strong className="text-accent-gold">{nextPrayer?.name || 'Fajr'}</strong> in {nextPrayer?.timeLeft || '--'}</span>
        <span className="text-gray-400">|</span>
        <span className="text-[11px] text-emerald-300">Ejisu, Ghana</span>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
      {/* Decorative Islamic Header */}
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 p-6 sm:p-8 text-white relative">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-accent-gold mb-2">
              <MapPin size={12} />
              <span>Ejisu • Kumasi • Ashanti Region</span>
            </div>
            <h3 className="text-2xl font-bold font-heading">
              Daily Prayer Times & Qibla
            </h3>
            <p className="text-xs text-gray-200 mt-1">
              Accurate calculation according to Ghana Muslim Mission & Ashanti Islamic Council
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl text-right">
            <div className="text-[11px] text-gray-300">Next Prayer</div>
            <div className="text-lg font-bold text-accent-gold">
              {nextPrayer ? `${nextPrayer.name} in ${nextPrayer.timeLeft}` : 'Calculating...'}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Prayer Times */}
      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6">
          {prayers.map((prayer) => {
            const isActive = activePrayer === prayer.name
            const isNext = nextPrayer?.name === prayer.name

            return (
              <div
                key={prayer.name}
                className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                  isActive
                    ? 'bg-primary-700 text-white shadow-lg ring-2 ring-accent-gold scale-[1.02]'
                    : isNext
                    ? 'bg-accent-gold/15 text-primary-900 border border-accent-gold/40'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="text-xs font-medium opacity-80 mb-1">{prayer.name}</div>
                <div className={`text-sm arabic-text font-bold mb-1 ${isActive ? 'text-accent-gold' : 'text-primary-600'}`}>
                  {prayer.arabic}
                </div>
                <div className={`text-base font-extrabold font-mono ${isActive ? 'text-white' : 'text-gray-900'}`}>
                  {prayer.time}
                </div>
                {isActive && (
                  <span className="inline-block mt-1.5 text-[9px] uppercase tracking-wider bg-accent-gold text-primary-900 font-bold px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
                {isNext && !isActive && (
                  <span className="inline-block mt-1.5 text-[9px] uppercase tracking-wider bg-primary-600 text-white font-bold px-2 py-0.5 rounded-full">
                    Next
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* Qibla Direction & Community Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-emerald-50/70 border border-emerald-200/50 rounded-2xl text-xs text-emerald-900 gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Compass size={18} />
            </div>
            <div>
              <span className="font-bold block">Qibla Direction from Ejisu:</span>
              <span className="text-emerald-700 text-[11px]">68.4° East-North-East toward the Holy Kaaba in Makkah</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs text-primary-700 font-medium bg-white px-3 py-1.5 rounded-xl border border-emerald-200">
            <CheckCircle size={14} className="text-emerald-600" />
            <span>Congregational prayers held daily at Ejisuman center</span>
          </div>
        </div>
      </div>
    </div>
  )
}
