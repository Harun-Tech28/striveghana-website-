'use client'

import { useState } from 'react'
import DonationForm from '@/components/forms/DonationForm'
import ZakatCalculator from '@/components/ui/ZakatCalculator'
import { organizationData } from '@/data/organization'
import { ShieldCheck, Phone, MessageCircle, Copy, Check, Heart, ArrowRight } from 'lucide-react'
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

  return (
    <div className="space-y-0">
      {/* 1. Page Header */}
      <section className="bg-[#0b291a] text-white py-14 sm:py-20 border-b border-[#17432b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent-gold block">
              Donations & Sponsorships
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight text-white">
              Support Strive Ghana
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed pt-1">
              Your donations directly sustain new Muslim converts with emergency relief, welcome kits, and mentorship, and provide daily meals, shelter, and schooling for Muslim orphans in Ejisuman, Ashanti Region.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Ways to Support Summary */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howYouCanSupport.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-lg bg-gray-50 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-primary-800 uppercase tracking-wide block mb-1">
                    {item.highlight}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-heading mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
                <a
                  href="#donate-form"
                  className="text-xs font-semibold text-primary-700 hover:text-primary-800 flex items-center space-x-1"
                >
                  <span>Give towards this</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Giving Section: Form & Direct Bank/MoMo Details */}
      <section className="py-16 sm:py-24 bg-[#faf9f5] border-b border-gray-200" id="donate-form">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Donation Form */}
            <div className="lg:col-span-7">
              <DonationForm />
            </div>

            {/* Right: Direct MoMo, Bank & Accountability Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct MoMo Box */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h3 className="text-base font-bold text-gray-900">
                    Direct Mobile Money Transfer
                  </h3>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('0542524571', 'momo')}
                    className="inline-flex items-center space-x-1 text-xs text-primary-700 hover:text-primary-800 font-medium"
                  >
                    {copiedMoMo ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedMoMo ? 'Copied' : 'Copy Number'}</span>
                  </button>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-500">Network:</span>
                    <span className="font-semibold text-gray-900">MTN MoMo / Telecel</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-500">Number:</span>
                    <span className="font-mono font-bold text-gray-900 text-sm">054 252 4571</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-500">Account Name:</span>
                    <span className="font-semibold text-gray-900">Dr. Salis (Strive Ghana)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Reference:</span>
                    <span className="font-mono text-gray-900">Strive</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 bg-gray-50 p-2.5 rounded border border-gray-100 leading-relaxed">
                  After sending, please send a brief WhatsApp confirmation to <strong>0542524571</strong> so we can record your donation and confirm receipt.
                </p>
              </div>

              {/* Direct Bank Account Box */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h3 className="text-base font-bold text-gray-900">
                    Bank Account Information
                  </h3>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('9040001870275', 'bank')}
                    className="inline-flex items-center space-x-1 text-xs text-primary-700 hover:text-primary-800 font-medium"
                  >
                    {copiedBank ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedBank ? 'Copied' : 'Copy Account'}</span>
                  </button>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-500">Bank:</span>
                    <span className="font-semibold text-gray-900">Fidelity Bank Ghana</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-500">Account Name:</span>
                    <span className="font-semibold text-gray-900">Dr. Salis / Strive</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Account Number:</span>
                    <span className="font-mono font-bold text-gray-900">9040001870275</span>
                  </div>
                </div>
              </div>

              {/* Accountability Card */}
              <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center space-x-2 font-bold text-emerald-900">
                  <ShieldCheck size={18} className="text-emerald-700" />
                  <span>100% Direct Community Benefit</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  All public donations go directly towards convert welfare packs, student study materials, and community halaqat. Zero public administrative deductions.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Zakat Calculator Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block mb-1">
              Calculator
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
              Calculate Your Zakat
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Use this standard tool to assess your Zakat obligations on cash, gold, silver, and business assets.
            </p>
          </div>

          <ZakatCalculator />
        </div>
      </section>
    </div>
  )
}