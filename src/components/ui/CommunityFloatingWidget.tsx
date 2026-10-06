'use client'

import { useState } from 'react'
import { MessageCircle, X, Phone, ArrowUpRight } from 'lucide-react'
import { organizationData } from '@/data/organization'

export default function CommunityFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const phone = organizationData.contact.whatsapp
  const phoneDisplay = organizationData.contact.phoneDisplay

  const quickMessages = [
    {
      title: "New Muslim / Convert Support",
      message: "Salam Alaykum, I recently embraced Islam (or have questions) and would like guidance from a Strive mentor.",
      tag: "Mentorship"
    },
    {
      title: "Student Sponsorship / Donations",
      message: "Salam Alaykum, I would like to support Strive Ghana or sponsor a student.",
      tag: "Support"
    },
    {
      title: "Weekend Learning Classes",
      message: "Salam Alaykum, I would like details about the weekend Islamic learning classes in Ejisu.",
      tag: "Classes"
    },
    {
      title: "Volunteer / Visit Center",
      message: "Salam Alaykum, I would like to visit the center at 99 BLK IX Ejisuman or volunteer.",
      tag: "Volunteer"
    }
  ]

  const openWhatsApp = (customMsg?: string) => {
    const text = encodeURIComponent(customMsg || "Salam Alaykum Strive team, I am reaching out from your website.")
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Expanded Dialog Card */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="bg-[#0b291a] p-4 text-white border-b border-[#17432b]">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm">
                  Strive Ghana Community Desk
                </h4>
                <p className="text-xs text-accent-gold mt-0.5 font-medium">
                  Ejisuman Center • {phoneDisplay}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-3.5 bg-gray-50 space-y-2 max-h-[340px] overflow-y-auto">
            <p className="text-xs text-gray-600 px-1 font-semibold uppercase tracking-wider">
              How can we assist you?
            </p>
            {quickMessages.map((item, idx) => (
              <button
                key={idx}
                onClick={() => openWhatsApp(item.message)}
                className="w-full text-left p-2.5 bg-white rounded-lg border border-gray-200 hover:border-primary-600 hover:bg-emerald-50/40 transition-colors block text-xs group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 group-hover:text-primary-800 transition-colors">{item.title}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded font-mono">
                      {item.tag}
                    </span>
                    <ArrowUpRight size={12} className="text-gray-400 group-hover:text-primary-700" />
                  </div>
                </div>
              </button>
            ))}

            <div className="pt-2 border-t border-gray-200 space-y-2">
              <button
                onClick={() => openWhatsApp()}
                className="w-full py-2.5 px-3 bg-primary-700 hover:bg-[#0b291a] text-white rounded-md font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
              >
                <MessageCircle size={15} />
                <span>Open WhatsApp Chat</span>
              </button>

              <a
                href={`tel:${organizationData.contact.phone}`}
                className="w-full py-2 px-3 bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 rounded-md font-medium text-xs flex items-center justify-center space-x-1.5 transition-colors text-center block"
              >
                <Phone size={13} className="text-primary-700 inline mr-1" />
                <span>Call Center: {phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 px-4 rounded-full bg-[#0b291a] hover:bg-primary-700 text-white shadow-xl flex items-center space-x-2 border border-[#17432b] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-gold"
        aria-label="Contact Strive Ghana Community Desk"
      >
        {isOpen ? (
          <X size={18} />
        ) : (
          <>
            <MessageCircle size={18} className="text-accent-gold" />
            <span className="text-xs font-semibold tracking-wide hidden sm:inline">Connect With Us</span>
          </>
        )}
      </button>
    </div>
  )
}
