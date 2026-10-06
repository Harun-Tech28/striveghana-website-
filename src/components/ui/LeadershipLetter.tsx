'use client'

import { organizationData } from '@/data/organization'
import { MapPin, MessageCircle, Mail } from 'lucide-react'
import Link from 'next/link'

export default function LeadershipLetter() {
  const letter = organizationData.leadershipLetter

  if (!letter) return null

  return (
    <section className="py-16 sm:py-24 bg-[#faf9f5] border-y border-gray-200" id="leadership-letter">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pastoral Letter Card */}
        <div className="bg-white rounded-xl p-8 sm:p-12 border border-gray-200 shadow-xs space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-gray-100 text-xs">
            <span className="font-semibold text-primary-700 uppercase tracking-wider">
              From the Ejisuman Center
            </span>
            <div className="flex items-center space-x-1.5 text-gray-500">
              <MapPin size={13} className="text-gray-400" />
              <span>99 BLK IX Ejisuman (Near Family Hospital)</span>
            </div>
          </div>

          {/* Letter Title */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
              {letter.heading}
            </h2>
            <p className="text-sm font-medium text-gray-600">
              {letter.subtitle}
            </p>
          </div>

          {/* Arabic Salutation */}
          <div className="py-1">
            <p className="text-primary-800 font-serif italic text-base border-l-2 border-primary-700 pl-3">
              "{letter.salutation}"
            </p>
          </div>

          {/* Letter Body */}
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            {letter.paragraphs.map((para, index) => (
              <p key={index}>
                {para}
              </p>
            ))}
          </div>

          {/* Signoff & Personal Stamp */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-500">
                {letter.signoff}
              </p>
              <h3 className="text-base font-bold text-gray-900 mt-1">
                {letter.authorName}
              </h3>
              <p className="text-xs text-gray-600">
                {letter.authorRole}
              </p>
              <p className="text-xs text-gray-500">
                {letter.location}
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap gap-2">
              <a
                href="https://wa.me/233542524571?text=Salam%20Alaykum%20Dr.%20Salis,%20I%20read%20your%20letter%20on%20the%20Strive%20website%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md text-xs font-medium transition-colors"
              >
                <MessageCircle size={14} />
                <span>WhatsApp Dr. Salis</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-md text-xs font-medium transition-colors"
              >
                <Mail size={14} />
                <span>Contact Center</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
