'use client'

import { useState } from 'react'
import DonationForm from '@/components/forms/DonationForm'
import ZakatCalculator from '@/components/ui/ZakatCalculator'
import { organizationData } from '@/data/organization'
import { ShieldCheck, Phone, MessageCircle, Copy, Check, Heart, ArrowRight, Building, Smartphone, Sparkles } from 'lucide-react'
import { triggerToast } from '@/components/ui/ToastNotification'

export default function DonatePage() {
  const { howYouCanSupport, contact } = organizationData
  const [copiedMoMo, setCopiedMoMo] = useState(false)
  const [copiedBank, setCopiedBank] = useState(false)

  const copyToClipboard = (text: string, type: 'momo' | 'bank') => {
    navigator.clipboard.writeText(text)
    if (type === 'momo') {
      setCopiedMoMo(true)
      triggerToast(`Copied MoMo line: ${contact.phoneDisplay} (Strive Ghana)`, 'success')
      setTimeout(() => setCopiedMoMo(false), 2500)
    } else {
      setCopiedBank(true)
      triggerToast('Copied Bank Account details to clipboard.', 'success')
      setTimeout(() => setCopiedBank(false), 2500)
    }
  }

  const whatsappConfirmUrl = `https://wa.me/233542524571?text=${encodeURIComponent("Salam Alaykum Dr. Salis, I would like to confirm my donation / MoMo transfer to Strive Ghana.")}`

  return (
    <div className="space-y-0 bg-[#faf9f5]">
      {/* 1. Page Header with Prestige Warm Gold Accent */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-12 sm:py-20 lg:py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              <Sparkles size={14} className="text-amber-400" />
              <span>Sponsorships & Blessed Giving</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
                Support Strive Ghana
              </h1>
              <p className="font-arabic text-xl sm:text-3xl text-amber-300 font-bold">
                وَمَا تُنفِقُواْ مِنْ خَيْرٍ فَلِأَنفُسِكُمْ
              </p>
            </div>

            <p className="text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed font-normal">
              Your donations directly sustain new Muslim converts with emergency relief, welcome packs, and brotherhood mentorship, and provide daily meals, clothing, and schooling for vulnerable orphans in Ejisuman, Ashanti Region.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Ways to Support Summary Cards */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left mb-6 sm:mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-2">
              Impact Tracks
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-950">
              Where Your Support Reaches
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {howYouCanSupport.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-amber-400/80 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[11px] font-black text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block mb-2.5">
                    {item.highlight}
                  </span>
                  <h3 className="text-base font-bold text-slate-950 font-heading mb-1.5 group-hover:text-amber-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <a
                  href="#donate-form"
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center space-x-1 pt-2 border-t border-slate-200/60"
                >
                  <span>Give towards this</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Giving Section: Form & Direct Bank/MoMo Details */}
      <section className="py-10 sm:py-16 lg:py-20 bg-[#faf9f5] border-b border-slate-200/80" id="donate-form">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Responsive Donation Form */}
            <div className="lg:col-span-7 w-full">
              <DonationForm />
            </div>

            {/* Right Column: Direct MoMo, Bank & Accountability Info */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              
              {/* Direct MoMo Box */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                      <Smartphone size={18} />
                    </div>
                    <h3 className="text-base font-bold text-slate-950 font-heading">
                      Direct Mobile Money
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('0542524571', 'momo')}
                    className="inline-flex items-center space-x-1 text-xs text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-lg font-bold transition-colors border border-amber-200/60"
                  >
                    {copiedMoMo ? <Check size={13} className="text-emerald-700 stroke-[3]" /> : <Copy size={13} />}
                    <span>{copiedMoMo ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-50">
                    <span className="text-slate-500">Networks:</span>
                    <span className="font-semibold text-slate-900">MTN MoMo & Telecel Cash</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-50 items-center">
                    <span className="text-slate-500">Official Line:</span>
                    <span className="font-mono font-black text-slate-950 text-base">054 252 4571</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-50">
                    <span className="text-slate-500">Account Name:</span>
                    <span className="font-semibold text-slate-900">Dr. Salis (Strive Ghana)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Reference:</span>
                    <span className="font-mono font-bold text-amber-800">Strive</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={whatsappConfirmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <MessageCircle size={15} className="text-emerald-700" />
                    <span>Confirm via WhatsApp (054 252 4571)</span>
                  </a>
                </div>
              </div>

              {/* Direct Bank Account Box */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                      <Building size={18} />
                    </div>
                    <h3 className="text-base font-bold text-slate-950 font-heading">
                      Bank Transfer
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('9040001870275', 'bank')}
                    className="inline-flex items-center space-x-1 text-xs text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-lg font-bold transition-colors border border-amber-200/60"
                  >
                    {copiedBank ? <Check size={13} className="text-emerald-700 stroke-[3]" /> : <Copy size={13} />}
                    <span>{copiedBank ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-50">
                    <span className="text-slate-500">Bank:</span>
                    <span className="font-semibold text-slate-900">Fidelity Bank Ghana</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-50">
                    <span className="text-slate-500">Account Name:</span>
                    <span className="font-semibold text-slate-900">Dr. Salis / Strive</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Account Number:</span>
                    <span className="font-mono font-black text-slate-950 text-sm">9040001870275</span>
                  </div>
                </div>
              </div>

              {/* Accountability Card in Warm Gold */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/60 p-5 rounded-2xl border border-amber-300/80 text-xs sm:text-sm text-amber-950 space-y-2 shadow-xs">
                <div className="flex items-center space-x-2 font-bold text-amber-900">
                  <ShieldCheck size={20} className="text-amber-600 flex-shrink-0" />
                  <span className="text-sm font-black">100% Direct Community Benefit</span>
                </div>
                <p className="leading-relaxed text-amber-900 text-xs">
                  All public donations go directly towards convert welfare packs, student study materials, and community halaqat. Zero public administrative deductions.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Zakat Calculator Section */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-2">
              Obligatory Alms (Zakat)
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-950 tracking-tight">
              Calculate Your Zakat
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Use this standard tool to assess your annual Zakat obligation on cash, gold, silver, and business inventory based on the current Nisab threshold.
            </p>
          </div>

          <ZakatCalculator />
        </div>
      </section>
    </div>
  )
}