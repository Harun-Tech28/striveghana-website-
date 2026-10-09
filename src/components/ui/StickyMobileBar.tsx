'use client'

import Link from 'next/link'
import { Heart, MessageCircle } from 'lucide-react'
import { organizationData } from '@/data/organization'

export default function StickyMobileBar() {
  const whatsappUrl = `https://wa.me/${organizationData.contact.whatsapp}?text=${encodeURIComponent("Salam Alaykum, I would like to support Strive Ghana or connect with Dr. Salis.")}`

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-slate-950 border-t border-slate-800 p-3 sm:hidden shadow-2xl">
      <div className="flex items-center gap-2.5">
        <Link
          href="/donate#donate-form"
          className="flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-center text-xs flex items-center justify-center space-x-2 shadow-md shadow-amber-500/25 active:scale-[0.98] transition-all"
        >
          <Heart size={15} className="fill-slate-950" />
          <span>Sponsor / Donate</span>
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 border border-white/15 active:scale-[0.98] transition-all"
          aria-label="WhatsApp Strive Ghana"
        >
          <MessageCircle size={15} className="text-amber-400" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
