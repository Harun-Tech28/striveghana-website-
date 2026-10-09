'use client'

import { useState } from 'react'
import { Calculator, ShieldCheck, Heart, ArrowRight, Check, Info, RotateCcw, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function ZakatCalculator() {
  const [currency, setCurrency] = useState<'GHS' | 'USD'>('GHS')
  
  // Zakatable Asset States
  const [cash, setCash] = useState<number>(0)
  const [goldSilver, setGoldSilver] = useState<number>(0)
  const [businessStock, setBusinessStock] = useState<number>(0)
  const [investments, setInvestments] = useState<number>(0)
  const [liabilities, setLiabilities] = useState<number>(0)

  // Nisab threshold (Silver Nisab benchmark: approx GHS 12,000 / USD 950)
  const nisabThreshold = currency === 'GHS' ? 12000 : 950

  const totalAssets = (Number(cash) || 0) + (Number(goldSilver) || 0) + (Number(businessStock) || 0) + (Number(investments) || 0)
  const netZakatable = Math.max(0, totalAssets - (Number(liabilities) || 0))
  const isEligible = netZakatable >= nisabThreshold
  const zakatPayable = isEligible ? Math.round(netZakatable * 0.025 * 100) / 100 : 0
  const nisabProgress = Math.min(100, Math.round((netZakatable / nisabThreshold) * 100))

  const resetFields = () => {
    setCash(0)
    setGoldSilver(0)
    setBusinessStock(0)
    setInvestments(0)
    setLiabilities(0)
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm" id="zakat-calculator">
      {/* Header Bar */}
      <div className="bg-slate-950 p-4 sm:p-6 text-white border-b border-slate-800">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Annual 2.5% Calculation
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
              Zakat Calculator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Calculate your annual Zakat obligation according to authentic Islamic guidelines.
            </p>
          </div>

          {/* Currency Selector */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 flex-shrink-0">
            <button
              type="button"
              onClick={() => setCurrency('GHS')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === 'GHS' 
                  ? 'bg-amber-500 text-slate-950 shadow-xs' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              GH₵ (Cedi)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === 'USD' 
                  ? 'bg-amber-500 text-slate-950 shadow-xs' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              $ (USD)
            </button>
          </div>
        </div>
      </div>

      {/* Calculator Body */}
      <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Input Fields Column (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <div>
              <h4 className="font-bold text-gray-900 text-sm">
                Zakatable Assets (Held for 1 Full Year)
              </h4>
              <p className="text-xs text-gray-500">Enter current estimated value of your liquid wealth</p>
            </div>
            <button
              type="button"
              onClick={resetFields}
              className="text-xs text-gray-500 hover:text-red-600 transition-colors flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          </div>

          {/* Cash */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Cash on Hand & Bank Balances ({currency})
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-gray-500 text-xs">
                {currency === 'GHS' ? 'GH₵' : '$'}
              </span>
              <input
                type="number"
                min="0"
                value={cash || ''}
                onChange={(e) => setCash(parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                className="w-full pl-12 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600 font-mono"
              />
            </div>
          </div>

          {/* Gold & Silver */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Gold, Silver & Valuable Jewelry ({currency})
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-gray-500 text-xs">
                {currency === 'GHS' ? 'GH₵' : '$'}
              </span>
              <input
                type="number"
                min="0"
                value={goldSilver || ''}
                onChange={(e) => setGoldSilver(parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                className="w-full pl-12 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600 font-mono"
              />
            </div>
          </div>

          {/* Business Stock */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Business Goods & Inventory for Sale ({currency})
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-gray-500 text-xs">
                {currency === 'GHS' ? 'GH₵' : '$'}
              </span>
              <input
                type="number"
                min="0"
                value={businessStock || ''}
                onChange={(e) => setBusinessStock(parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                className="w-full pl-12 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600 font-mono"
              />
            </div>
          </div>

          {/* Investments */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Shares, Mutual Funds & Liquid Investments ({currency})
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-gray-500 text-xs">
                {currency === 'GHS' ? 'GH₵' : '$'}
              </span>
              <input
                type="number"
                min="0"
                value={investments || ''}
                onChange={(e) => setInvestments(parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                className="w-full pl-12 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600 font-mono"
              />
            </div>
          </div>

          {/* Liabilities */}
          <div className="pt-2">
            <label className="block text-xs font-medium text-red-700 mb-1">
              Less: Due Short-Term Debts & Bills ({currency})
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-red-500 text-xs">
                - {currency === 'GHS' ? 'GH₵' : '$'}
              </span>
              <input
                type="number"
                min="0"
                value={liabilities || ''}
                onChange={(e) => setLiabilities(parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                className="w-full pl-14 pr-3 py-2 text-sm border border-red-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 font-mono bg-red-50/20"
              />
            </div>
          </div>

          {/* Quranic Note */}
          <div className="mt-4 p-3 rounded-md bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start space-x-2">
            <BookOpen size={15} className="text-emerald-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Quranic Principle (Surah At-Tawbah 9:60):</p>
              <p className="text-[11px] text-emerald-900 mt-0.5">
                Zakat is designated for the needy and explicitly for <em>al-mu’allafatu qulūbuhum</em> (supporting and reassuring new converts).
              </p>
            </div>
          </div>
        </div>

        {/* Calculation Summary Box (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gray-50 rounded-lg p-5 sm:p-6 border border-gray-200 space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200">
              <h4 className="font-bold text-gray-900 text-sm">
                Summary
              </h4>
              <Calculator size={15} className="text-gray-500" />
            </div>

            {/* Nisab Status */}
            <div className={`p-3.5 rounded-md border text-xs ${
              isEligible 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}>
              <div className="flex items-center justify-between font-semibold mb-1">
                <span className="flex items-center space-x-1.5">
                  {isEligible ? <Check size={13} className="text-emerald-700" /> : <Info size={13} className="text-amber-700" />}
                  <span>{isEligible ? 'Nisab Reached (Zakat Due)' : 'Below Nisab Threshold'}</span>
                </span>
                <span className="font-mono">{nisabProgress}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1.5 overflow-hidden">
                <div 
                  className={`h-full rounded-full ${isEligible ? 'bg-emerald-600' : 'bg-amber-500'}`}
                  style={{ width: `${nisabProgress}%` }}
                ></div>
              </div>

              <p className="text-[11px] text-gray-600">
                Nisab threshold: ~{currency === 'GHS' ? 'GH₵ 12,000' : '$950'}.
              </p>
            </div>

            {/* Asset Tallies */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Total Assets:</span>
                <span className="font-mono font-medium">
                  {currency === 'GHS' ? 'GH₵' : '$'} {totalAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Deductions:</span>
                <span className="font-mono font-medium">
                  - {currency === 'GHS' ? 'GH₵' : '$'} {(Number(liabilities) || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between text-gray-900 font-bold pt-1.5 border-t border-gray-200">
                <span>Net Zakatable:</span>
                <span className="font-mono text-primary-800">
                  {currency === 'GHS' ? 'GH₵' : '$'} {netZakatable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            {/* Payable Output */}
            <div className="bg-white p-4 rounded-md border border-gray-200 text-center">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-0.5">
                Zakat Payable (2.5%)
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 font-mono">
                {currency === 'GHS' ? 'GH₵' : '$'} {zakatPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>

          {/* Action Link */}
          <div>
            <Link
              href={zakatPayable > 0 
                ? `/donate?amount=${zakatPayable}&purpose=zakat&currency=${currency}#donate-form` 
                : '/donate?purpose=zakat#donate-form'}
              className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-500/25 active:scale-[0.99] text-center"
            >
              <Heart size={16} className="fill-slate-950" />
              <span>
                {zakatPayable > 0 
                  ? `Pay ${currency === 'GHS' ? 'GH₵' : '$'}${zakatPayable.toLocaleString()} Zakat Online` 
                  : 'Fulfill Zakat with Strive'}
              </span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
