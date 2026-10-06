'use client'

import { useState, useRef } from 'react'
import { organizationData } from '@/data/organization'
import { Volume2, VolumeX, Share2, Check, BookOpen } from 'lucide-react'

export default function DailyAyahReflection() {
  const reflection = organizationData.dailyReflection
  const [isPlaying, setIsPlaying] = useState(false)
  const [copied, setCopied] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(reflection.audioUrl)
      audioRef.current.onended = () => setIsPlaying(false)
      audioRef.current.onerror = () => setIsPlaying(false)
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }
  }

  const shareReflection = () => {
    const text = `Strive Ghana — Quranic Reflection\n\n"${reflection.ayahArabic}"\n\n"${reflection.ayahTranslation}"\n— ${reflection.surahReference}\n\nReflection: ${reflection.reflectionText}\n\nhttps://striveghana.org`
    
    if (navigator.share) {
      navigator.share({
        title: 'Strive Daily Quran Reflection',
        text: text,
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="bg-[#0b291a] rounded-xl p-6 sm:p-8 text-white border border-[#17432b]" id="daily-reflection">
      <div className="space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-[#17432b]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-md bg-[#0f3f22] text-accent-gold flex items-center justify-center text-sm border border-[#17432b]">
              <BookOpen size={18} />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent-gold block">
                Daily Quranic Reflection
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading mt-0.5">
                {reflection.theme}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={toggleAudio}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                isPlaying 
                  ? 'bg-accent-gold text-gray-900 font-semibold' 
                  : 'bg-[#0f3f22] hover:bg-[#14532d] text-gray-200 border border-[#17432b]'
              }`}
            >
              {isPlaying ? <VolumeX size={15} /> : <Volume2 size={15} />}
              <span>{isPlaying ? 'Pause' : `Listen (${reflection.reciter})`}</span>
            </button>

            <button
              type="button"
              onClick={shareReflection}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#0f3f22] hover:bg-[#14532d] text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-[#17432b] transition-colors"
              title="Share this Ayah"
            >
              {copied ? <Check size={15} className="text-emerald-400" /> : <Share2 size={15} />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Arabic Ayah */}
        <div className="text-center py-2 space-y-4">
          <div className="text-2xl sm:text-4xl font-arabic text-accent-gold leading-relaxed font-normal">
            {reflection.ayahArabic}
          </div>
          <div className="text-base sm:text-lg text-gray-200 font-serif italic max-w-2xl mx-auto leading-relaxed">
            "{reflection.ayahTranslation}"
          </div>
          <p className="text-xs sm:text-sm font-medium text-emerald-300">
            — {reflection.surahReference}
          </p>
        </div>

        {/* Reflection Note */}
        <div className="p-4 bg-[#082014] rounded-md border border-[#17432b] text-sm sm:text-base text-gray-300 leading-relaxed">
          <strong className="text-white block mb-1">Community Context:</strong>
          {reflection.reflectionText}
        </div>

      </div>
    </div>
  )
}
