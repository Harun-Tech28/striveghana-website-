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
        <div className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="bg-slate-900 p-4 text-white border-b border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm">
                  Strive Ghana Community Desk
                </h4>
                <p className="text-xs text-amber-400 mt-0.5 font-medium">
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
                className="w-full text-left p-2.5 bg-white rounded-xl border border-gray-200 hover:border-emerald-600 hover:bg-emerald-50/50 transition-colors block text-xs group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 group-hover:text-emerald-800 transition-colors">{item.title}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded font-mono">
                      {item.tag}
                    </span>
                    <ArrowUpRight size={12} className="text-gray-400 group-hover:text-emerald-700" />
                  </div>
                </div>
              </button>
            ))}

            <div className="pt-2 border-t border-gray-200 space-y-2">
              <button
                onClick={() => openWhatsApp()}
                className="w-full py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
              >
                <MessageCircle size={15} />
                <span>Open WhatsApp Chat</span>
              </button>

              <a
                href={`tel:${organizationData.contact.phone}`}
                className="w-full py-2 px-3 bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 rounded-xl font-medium text-xs flex items-center justify-center space-x-1.5 transition-colors text-center block"
              >
                <Phone size={13} className="text-amber-600 inline mr-1" />
                <span>Call Center: {phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button in Prestigious Gold */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 px-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xl shadow-amber-500/25 flex items-center space-x-2 border border-amber-400 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 font-bold"
        aria-label="Contact Strive Ghana Community Desk"
      >
        {isOpen ? (
          <X size={18} />
        ) : (
          <>
            <MessageCircle size={18} className="fill-slate-950" />
            <span className="text-xs font-bold tracking-wide hidden sm:inline">Connect With Us</span>
          </>
        )}
      </button>
    </div>
  )
}
