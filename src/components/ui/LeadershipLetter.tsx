'use client'

import { organizationData } from '@/data/organization'
import { MapPin, MessageCircle, Mail } from 'lucide-react'
import Link from 'next/link'

export default function LeadershipLetter() {
  const letter = organizationData.leadershipLetter

  if (!letter) return null

  return (
    <section className="py-20 sm:py-28 bg-[#fbfbf9] border-y border-gray-200" id="leadership-letter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pastoral Letter Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-14 border border-gray-200/90 shadow-sm space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-gray-100 text-xs sm:text-sm">
            <span className="font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 w-fit">
              From the Ejisuman Center
            </span>
            <div className="flex items-center space-x-2 text-gray-500 font-medium">
              <MapPin size={15} className="text-emerald-700" />
              <span>99 BLK IX Ejisuman (Near Family Hospital)</span>
            </div>
          </div>

          {/* Letter Title */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-gray-900 tracking-tight">
              {letter.heading}
            </h2>
            <p className="text-base sm:text-lg font-medium text-gray-600">
              {letter.subtitle}
            </p>
          </div>

          {/* Arabic Salutation */}
          <div className="py-1">
            <p className="text-emerald-950 font-serif italic text-lg sm:text-xl border-l-4 border-emerald-700 pl-4 py-1 bg-emerald-50/50 rounded-r-lg">
              "{letter.salutation}"
            </p>
          </div>

          {/* Letter Body - Summarized and readable */}
          <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
            {letter.paragraphs.map((para, index) => (
              <p key={index}>
                {para}
              </p>
            ))}
          </div>

          {/* Signoff & Personal Stamp */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-gray-500 font-medium">
                {letter.signoff}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-1 font-heading">
                {letter.authorName}
              </h3>
              <p className="text-sm font-medium text-emerald-800">
                {letter.authorRole}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {letter.location}
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/233542524571?text=Salam%20Alaykum%20Dr.%20Salis,%20I%20read%20your%20letter%20on%20the%20Strive%20website%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm sm:text-base font-semibold shadow-xs transition-all hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Dr. Salis</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200 rounded-xl text-sm sm:text-base font-semibold transition-all hover:-translate-y-0.5"
              >
                <Mail size={16} />
                <span>Contact Center</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
