'use client'

import { useState } from 'react'
import Link from 'next/link'
import { organizationData } from '@/data/organization'
import { Check, ShieldCheck, Heart, ArrowRight, Smartphone } from 'lucide-react'

export default function ImpactCalculator() {
  const [currency, setCurrency] = useState<'GHS' | 'USD'>('GHS')
  const tiers = organizationData.impactTiers || []

  return (
    <section className="py-20 bg-primary-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent-gold/20 text-accent-gold-dark px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart size={14} className="fill-accent-gold text-accent-gold" />
            <span>Radical Transparency</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-700 tracking-tight mb-4">
            See Where Every Cedi Goes
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your charity is an investment in human lives and faith. Choose a giving tier to see the immediate, real-world impact in Ejisu and surrounding communities.
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex items-center bg-white p-1 rounded-xl shadow-sm border border-gray-200 mt-6">
            <button
              onClick={() => setCurrency('GHS')}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                currency === 'GHS'
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              ₵ Ghana Cedis (GHS)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                currency === 'USD'
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              $ US Dollars (USD)
            </button>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, idx) => {
            const isFeatured = idx === 1
            const amount = currency === 'GHS' ? `₵${tier.amountGHS}` : `$${tier.amountUSD}`

            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-primary-700 to-primary-600 text-white shadow-xl ring-2 ring-accent-gold relative'
                    : 'bg-white text-gray-800 border border-gray-200 shadow-md hover:shadow-xl'
                }`}
              >
                {isFeatured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-gold text-white text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                    Most Popular Impact
                  </span>
                )}

                <div>
                  <div className="text-3xl mb-3">{tier.icon}</div>
                  <h3
                    className={`font-bold text-lg mb-2 ${
                      isFeatured ? 'text-white' : 'text-primary-700'
                    }`}
                  >
                    {tier.title}
                  </h3>
                  <div className="flex items-baseline space-x-1 mb-4">
                    <span className="text-3xl font-extrabold tracking-tight font-heading">
                      {amount}
                    </span>
                    <span
                      className={`text-xs ${
                        isFeatured ? 'text-gray-200' : 'text-gray-500'
                      }`}
                    >
                      / one-time or monthly
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isFeatured ? 'text-gray-100' : 'text-gray-600'
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                <Link
                  href={`/donate?amount=${tier.amountGHS}&type=${tier.id}`}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all duration-200 text-center ${
                    isFeatured
                      ? 'bg-accent-gold hover:bg-accent-gold-dark text-white shadow-md'
                      : 'bg-primary-50 hover:bg-primary-500 hover:text-white text-primary-700'
                  }`}
                >
                  <span>Give {amount}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Mobile Money Direct Transfer Notice */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-amber-50 rounded-2xl text-amber-600 flex-shrink-0">
              <Smartphone size={28} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">
                Direct Mobile Money Giving (Ghana)
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Prefer sending directly from your phone? Send MoMo to our official line:{' '}
                <strong className="text-primary-600 font-mono text-base">0542524571</strong> (Ref: StriveGhana / Your Name).
              </p>
              <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500 font-medium">
                <span className="inline-flex items-center text-emerald-700">
                  <Check size={13} className="mr-1" /> MTN Mobile Money
                </span>
                <span className="inline-flex items-center text-emerald-700">
                  <Check size={13} className="mr-1" /> Telecel Cash
                </span>
                <span className="inline-flex items-center text-emerald-700">
                  <Check size={13} className="mr-1" /> AT Money
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-xl text-xs font-semibold border border-emerald-200">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>100% Zakat & Sadaqah Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
