'use client'

import { useState, useEffect, Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Heart, CreditCard, CheckCircle2, AlertCircle, Smartphone, ShieldCheck, Copy, Check, Loader2 } from 'lucide-react'
import Script from 'next/script'
import { organizationData } from '@/data/organization'
import { triggerToast } from '@/components/ui/ToastNotification'

interface DonationFormData {
  amount: number
  customAmount?: number
  frequency: 'once' | 'monthly'
  donorName: string
  email: string
  phone?: string
  message?: string
  donationType: 'general' | 'convert' | 'youth' | 'orphan' | 'zakat' | 'sadaqat'
  paymentMethod: 'paystack' | 'momo_direct'
}

// Resilient Paystack inline script loader
const ensurePaystackScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false)
    if ((window as any).PaystackPop) return resolve(true)

    const existing = document.querySelector('script[src*="paystack.co"]') as HTMLScriptElement
    if (existing) {
      if ((window as any).PaystackPop) return resolve(true)
      existing.addEventListener('load', () => resolve(true), { once: true })
      existing.addEventListener('error', () => resolve(false), { once: true })
      setTimeout(() => resolve(Boolean((window as any).PaystackPop)), 3000)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    script.async = true
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
    setTimeout(() => resolve(Boolean((window as any).PaystackPop)), 3500)
  })
}

function DonationFormInner() {
  const searchParams = useSearchParams()
  const [currency, setCurrency] = useState<'GHS' | 'USD'>('GHS')
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(250)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isProcessing, setIsProcessing] = useState(false)
  const [copiedMomo, setCopiedMomo] = useState(false)

  const predefinedGHS = [
    { amount: 100, label: '₵100', impact: 'Convert welcome kit & Quran', badge: '' },
    { amount: 250, label: '₵250', impact: 'Orphan monthly food supply', badge: 'Most Popular' },
    { amount: 380, label: '₵380', impact: 'Sponsor an orphan (Yateem) / mo', badge: '' },
    { amount: 1000, label: '₵1,000', impact: 'Emergency convert relief & shelter', badge: '' },
  ]

  const predefinedUSD = [
    { amount: 15, label: '$15', impact: 'Convert welcome kit & Quran', badge: '' },
    { amount: 30, label: '$30', impact: 'Sponsor an orphan (Yateem) / mo', badge: 'Most Popular' },
    { amount: 50, label: '$50', impact: 'Revert emergency relief & shelter', badge: '' },
    { amount: 100, label: '$100', impact: 'Orphanage food & medical fund', badge: '' },
  ]

  const amountsList = currency === 'GHS' ? predefinedGHS : predefinedUSD

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm<DonationFormData>({
    mode: 'onChange',
    defaultValues: {
      amount: 250,
      frequency: 'once',
      donationType: 'convert',
      paymentMethod: 'paystack'
    }
  })

  // Prefill from URL query parameters (e.g. ?amount=250&frequency=monthly&purpose=orphan&currency=GHS)
  useEffect(() => {
    if (!searchParams) return

    const paramCurrency = searchParams.get('currency')?.toUpperCase()
    if (paramCurrency === 'USD') {
      setCurrency('USD')
      setSelectedAmount(30)
      setValue('amount', 30)
    } else if (paramCurrency === 'GHS') {
      setCurrency('GHS')
      setSelectedAmount(250)
      setValue('amount', 250)
    }

    const paramPurpose = searchParams.get('purpose')?.toLowerCase()
    if (paramPurpose && ['general', 'convert', 'youth', 'orphan', 'zakat', 'sadaqat'].includes(paramPurpose)) {
      setValue('donationType', paramPurpose as any)
    }

    const paramFrequency = searchParams.get('frequency')?.toLowerCase()
    if (paramFrequency === 'monthly' || paramFrequency === 'once') {
      setValue('frequency', paramFrequency as any)
    }

    const paramAmount = searchParams.get('amount')
    if (paramAmount) {
      const num = parseFloat(paramAmount)
      if (!isNaN(num) && num > 0) {
        setValue('amount', num)
        const match = (paramCurrency === 'USD' ? predefinedUSD : predefinedGHS).find(p => p.amount === num)
        if (match) {
          setSelectedAmount(num)
        } else {
          setSelectedAmount('custom')
          setValue('customAmount', num)
        }
      }
    }
  }, [searchParams, setValue])

  const watchFrequency = watch('frequency')
  const watchDonationType = watch('donationType')
  const watchPaymentMethod = watch('paymentMethod')
  const watchCustomAmount = watch('customAmount')
  const watchDonorName = watch('donorName')

  // Resolve sanitized Paystack public key
  const envKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || ''
  const isRealKey = Boolean(envKey && !envKey.includes('your_public_key_here') && envKey.startsWith('pk_'))
  const paystackPublicKey = isRealKey ? envKey : 'pk_test_573f55ec926ffe2953741d0e71614fc17768ddc5'

  const currentAmount = selectedAmount === 'custom'
    ? (Number(watchCustomAmount) || 50)
    : Number(selectedAmount)

  const onSubmit = async (data: DonationFormData) => {
    if (data.paymentMethod === 'momo_direct') {
      return
    }

    setIsProcessing(true)
    setSubmitStatus('idle')

    try {
      const isLoaded = await ensurePaystackScript()
      const PaystackPop = (window as any).PaystackPop

      if (!isLoaded || !PaystackPop || typeof PaystackPop.setup !== 'function') {
        setIsProcessing(false)
        triggerToast('Payment script is still loading. Please check your internet connection or use Direct MoMo.', 'error')
        return
      }

      const activeAmount = selectedAmount === 'custom'
        ? (Number(data.customAmount) || 50)
        : Number(selectedAmount)

      // Paystack in Ghana processes GHS pesewas (100 pesewas = 1 GHS)
      const amountInPesewas = currency === 'GHS'
        ? Math.round(activeAmount * 100)
        : Math.round(activeAmount * 16 * 100)

      const handler = PaystackPop.setup({
        key: paystackPublicKey,
        email: data.email.trim(),
        amount: amountInPesewas,
        currency: 'GHS',
        ref: `STRIVE-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        metadata: {
          custom_fields: [
            {
              display_name: 'Donor Name',
              variable_name: 'donor_name',
              value: data.donorName
            },
            {
              display_name: 'Donation Purpose',
              variable_name: 'donation_type',
              value: data.donationType
            },
            {
              display_name: 'Giving Frequency',
              variable_name: 'frequency',
              value: data.frequency
            },
            {
              display_name: 'Phone Number',
              variable_name: 'phone_number',
              value: data.phone || ''
            },
            {
              display_name: 'Prayer / Note',
              variable_name: 'message',
              value: data.message || ''
            }
          ]
        },
        callback: (response: { reference: string }) => {
          setIsProcessing(false)
          setSubmitStatus('success')
          triggerToast(`Alhamdulillah! Donation received. Reference: ${response.reference}`, 'success')
          reset()
          setSelectedAmount(currency === 'GHS' ? 250 : 30)
        },
        onClose: () => {
          setIsProcessing(false)
          triggerToast('Checkout window closed. You can complete your gift anytime.', 'info')
        }
      })

      handler.openIframe()
    } catch (err: any) {
      console.error('Paystack checkout error:', err)
      setIsProcessing(false)
      triggerToast('Unable to open payment modal. Please try again or use direct MoMo.', 'error')
    }
  }

  const handleAmountSelect = (amount: number | 'custom') => {
    setSelectedAmount(amount)
    if (typeof amount === 'number') {
      setValue('amount', amount)
    }
  }

  const handleCustomAdd = (delta: number) => {
    setSelectedAmount('custom')
    const prev = Number(watchCustomAmount) || 0
    const nextVal = prev + delta
    setValue('customAmount', nextVal)
    setValue('amount', nextVal)
  }

  const copyMomoNumber = () => {
    navigator.clipboard.writeText('0542524571')
    setCopiedMomo(true)
    triggerToast('Copied MTN MoMo Line: 054 252 4571 (Strive Ghana)', 'success')
    setTimeout(() => setCopiedMomo(false), 2500)
  }

  return (
    <>
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/90 p-4 sm:p-6 md:p-8 max-w-2xl w-full mx-auto"
      >
        {/* Form Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100/70 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-amber-300/60 shadow-xs">
            <Heart className="w-6 h-6 fill-amber-500/20 text-amber-600" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-950 tracking-tight">
            Make a Donation
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
            Every cedi or dollar directly provides Qurans, weekend class meals, and emergency welfare to new converts and youth right here in Ejisuman.
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex items-center bg-slate-100 p-1.5 rounded-2xl mt-5 border border-slate-200/80 shadow-xs">
            <button
              type="button"
              onClick={() => {
                setCurrency('GHS')
                setSelectedAmount(250)
                setValue('amount', 250)
              }}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                currency === 'GHS'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              ₵ Ghana Cedis (GHS)
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrency('USD')
                setSelectedAmount(30)
                setValue('amount', 30)
              }}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              $ US Dollars (USD)
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-7">
          {/* 1. Purpose / Donation Type */}
          <div>
            <div className="flex items-center space-x-2 mb-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-900 text-xs font-black inline-flex items-center justify-center">1</span>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Purpose of Donation *
              </label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {[
                { value: 'convert', label: 'New Converts', desc: 'Shahadah & kits' },
                { value: 'orphan', label: 'Orphan Care', desc: 'Yateem food & aid' },
                { value: 'zakat', label: 'Zakat (Alms)', desc: '100% direct relief' },
                { value: 'sadaqat', label: 'Sadaqah', desc: 'General charity' }
              ].map((type) => {
                const isSelected = watchDonationType === type.value
                return (
                  <label
                    key={type.value}
                    className={`relative flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-xl border-2 text-center cursor-pointer transition-all min-h-[58px] ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/80 text-amber-950 ring-2 ring-amber-400/80 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50/50'
                    }`}
                  >
                    <input
                      type="radio"
                      value={type.value}
                      {...register('donationType', { required: true })}
                      className="sr-only"
                    />
                    <span className="text-xs font-bold block">{type.label}</span>
                    <span className="text-[10px] text-slate-500 mt-0.5 hidden xs:block">{type.desc}</span>
                    {isSelected && (
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500" />
                    )}
                  </label>
                )
              })}
            </div>
          </div>

          {/* 2. Giving Frequency */}
          <div>
            <div className="flex items-center space-x-2 mb-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-900 text-xs font-black inline-flex items-center justify-center">2</span>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Giving Frequency *
              </label>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5">
              {[
                { value: 'once', label: 'One-Time Gift', note: 'Single donation today' },
                { value: 'monthly', label: 'Monthly Sponsorship', note: 'Continuous Sadaqah Jariyah 🌿' }
              ].map((freq) => {
                const isSelected = watchFrequency === freq.value
                return (
                  <label
                    key={freq.value}
                    className={`relative flex items-center justify-between p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/80 text-amber-950 ring-2 ring-amber-400/80 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      value={freq.value}
                      {...register('frequency', { required: true })}
                      className="sr-only"
                    />
                    <div>
                      <span className="text-xs font-bold block text-slate-900">{freq.label}</span>
                      <span className="text-[11px] text-slate-500 font-medium">{freq.note}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-2 ${
                      isSelected ? 'border-amber-600 bg-amber-600' : 'border-slate-300'
                    }`}>
                      {isSelected && <Check size={10} className="text-white stroke-[3]" />}
                    </div>
                  </label>
                )
              })}
            </div>
          </div>

          {/* 3. Amount Selection */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-900 text-xs font-black inline-flex items-center justify-center">3</span>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Select Amount ({currency}) *
                </label>
              </div>
              {watchFrequency === 'monthly' && (
                <span className="text-[11px] text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  {currency === 'GHS' ? '₵380/mo sponsors 1 orphan' : '$30/mo sponsors 1 orphan'}
                </span>
              )}
            </div>

            {/* Predefined Amounts Grid - Fully Unclipped & Fluid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 mb-3">
              {amountsList.map((item) => {
                const isSelected = selectedAmount === item.amount
                return (
                  <button
                    key={item.amount}
                    type="button"
                    onClick={() => handleAmountSelect(item.amount)}
                    className={`relative p-3 sm:p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between min-h-[88px] sm:min-h-[96px] ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-400 shadow-sm'
                        : 'border-slate-200 hover:border-amber-300 hover:bg-amber-50/20 bg-white text-slate-800'
                    }`}
                  >
                    {item.badge && (
                      <span className="absolute -top-2.5 right-2 sm:right-3 bg-amber-500 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                        {item.badge}
                      </span>
                    )}

                    <div className="flex items-baseline justify-between w-full">
                      <div className="font-black text-xl sm:text-2xl text-slate-950 font-heading">
                        {item.label}
                        {watchFrequency === 'monthly' && (
                          <span className="text-xs font-normal text-slate-500 ml-0.5">/mo</span>
                        )}
                      </div>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0">
                          <Check size={10} className="stroke-[3]" />
                        </div>
                      )}
                    </div>

                    {/* Unclipped description - Allows complete 2-line wrap on mobile */}
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-snug break-words">
                      {item.impact}
                    </p>
                  </button>
                )
              })}
            </div>

            {/* Custom Amount Field & Quick Increment Chips */}
            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200">
              <div className="flex items-center space-x-2.5">
                <button
                  type="button"
                  onClick={() => handleAmountSelect('custom')}
                  className={`px-3.5 py-2 rounded-lg border text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                    selectedAmount === 'custom'
                      ? 'border-amber-500 bg-amber-50 text-amber-950 ring-1 ring-amber-400'
                      : 'border-slate-300 bg-white hover:border-amber-300 text-slate-700'
                  }`}
                >
                  Custom Amount
                </button>

                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                    {currency === 'GHS' ? '₵' : '$'}
                  </span>
                  <input
                    type="number"
                    min="5"
                    value={selectedAmount === 'custom' ? (watchCustomAmount || '') : ''}
                    onFocus={() => handleAmountSelect('custom')}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0
                      setValue('customAmount', val)
                      setValue('amount', val)
                    }}
                    placeholder={selectedAmount === 'custom' ? 'Enter amount' : 'Or type any custom gift'}
                    className="w-full pl-8 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white"
                  />
                </div>
              </div>

              {selectedAmount === 'custom' && (
                <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-200/80 flex-wrap">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mr-1">Quick Add:</span>
                  {(currency === 'GHS' ? [50, 100, 200, 500] : [10, 25, 50, 100]).map((increment) => (
                    <button
                      key={increment}
                      type="button"
                      onClick={() => handleCustomAdd(increment)}
                      className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white hover:bg-amber-100/70 border border-slate-200 hover:border-amber-300 text-slate-700 transition-colors"
                    >
                      +{currency === 'GHS' ? '₵' : '$'}{increment}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 4. Payment Channel Tabs */}
          <div>
            <div className="flex items-center space-x-2 mb-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-900 text-xs font-black inline-flex items-center justify-center">4</span>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Choose How to Pay *
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <label
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center space-x-3 ${
                  watchPaymentMethod === 'paystack'
                    ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-400/80 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <input
                  type="radio"
                  value="paystack"
                  {...register('paymentMethod')}
                  className="sr-only"
                />
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900">Card & Mobile Money</p>
                  <p className="text-[11px] text-slate-500 truncate">MTN MoMo, Telecel, Card (Instant)</p>
                </div>
              </label>

              <label
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center space-x-3 ${
                  watchPaymentMethod === 'momo_direct'
                    ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-400/80 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <input
                  type="radio"
                  value="momo_direct"
                  {...register('paymentMethod')}
                  className="sr-only"
                />
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900">Direct MoMo Transfer</p>
                  <p className="text-[11px] text-slate-500 truncate">Send to 054 252 4571</p>
                </div>
              </label>
            </div>
          </div>

          {/* Direct MoMo Info Box */}
          {watchPaymentMethod === 'momo_direct' && (
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/60 border border-amber-300/80 rounded-2xl p-4 sm:p-5 text-xs text-amber-950 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900">Official Mobile Money Line:</span>
                <button
                  type="button"
                  onClick={copyMomoNumber}
                  className="inline-flex items-center space-x-1 bg-amber-200/80 hover:bg-amber-300 text-amber-950 px-2.5 py-1 rounded-lg font-bold text-xs transition-colors shadow-xs"
                >
                  {copiedMomo ? <Check size={13} className="text-emerald-700 stroke-[3]" /> : <Copy size={13} />}
                  <span>{copiedMomo ? 'Copied' : 'Copy Number'}</span>
                </button>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-amber-300/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shadow-xs">
                <div>
                  <span className="text-xl font-mono font-black text-slate-950 block tracking-tight">
                    054 252 4571
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Network: <strong>MTN MoMo / Telecel Cash</strong>
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                    Account: Dr. Salis (Strive Ghana)
                  </span>
                </div>
              </div>

              <p className="leading-relaxed text-[11px] text-slate-700">
                Dial your provider code (<strong>*170#</strong> for MTN), select <em>Transfer Money</em>, enter <strong>0542524571</strong>, and use reference <strong>Strive</strong>. Then click the button below to notify us via WhatsApp for instant receipt.
              </p>
            </div>
          )}

          {/* Accountability Assurance Banner */}
          <div className="p-3.5 bg-emerald-50/90 border border-emerald-200/80 rounded-xl flex items-center space-x-3 text-xs text-emerald-950">
            <ShieldCheck size={20} className="text-emerald-700 flex-shrink-0" />
            <p className="leading-relaxed text-[11px] sm:text-xs text-emerald-900">
              <strong>100% Zakat & Sadaqah Policy:</strong> Zero public administrative fee deductions. 100% of your funds directly buy Qurans, feed orphans, and support new converts.
            </p>
          </div>

          {/* 5. Donor Information Inputs */}
          <div>
            <div className="flex items-center space-x-2 mb-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-900 text-xs font-black inline-flex items-center justify-center">5</span>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Donor Information
              </label>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('donorName', { required: 'Please enter your name' })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                    placeholder="e.g. Ibrahim Mensah / Sister Aisha"
                  />
                  {errors.donorName && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.donorName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Please enter your email',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                    placeholder="e.g. ibrahim.mensah@gmail.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone / WhatsApp Number (for receipt confirmation)
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  placeholder="e.g. 054 252 4571"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Prayer, Du'a, or Dedication Note (Optional)
                </label>
                <textarea
                  rows={2}
                  {...register('message')}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  placeholder="May Allah accept from us and bless the youth in Ejisuman..."
                />
              </div>
            </div>
          </div>

          {/* Submit Actions */}
          {watchPaymentMethod === 'momo_direct' ? (
            <a
              href={`https://wa.me/233542524571?text=${encodeURIComponent(
                `Salam Alaykum! I am making a direct Mobile Money donation of ${currency === 'GHS' ? '₵' : '$'}${currentAmount} for ${watchDonationType}. My name is ${watchDonorName || 'Supporter'}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center space-x-2 text-base text-center active:scale-[0.99]"
            >
              <Smartphone size={20} className="fill-slate-950 flex-shrink-0" />
              <span>Confirm MoMo Transfer on WhatsApp</span>
            </a>
          ) : (
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 disabled:opacity-75 disabled:cursor-wait text-slate-950 font-black rounded-xl shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center space-x-2 text-base active:scale-[0.99]"
            >
              {isProcessing ? (
                <>
                  <Loader2 size={20} className="animate-spin text-slate-950 flex-shrink-0" />
                  <span>Opening Paystack Checkout...</span>
                </>
              ) : (
                <>
                  <Heart size={20} className="fill-slate-950 flex-shrink-0" />
                  <span>
                    Donate {currency === 'GHS' ? '₵' : '$'}{currentAmount} {currency} Now
                  </span>
                </>
              )}
            </button>
          )}

          {/* Status Confirmation */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start space-x-3 text-emerald-900 text-sm">
              <CheckCircle2 size={20} className="text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Thank you for your generous gift!</p>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Your donation reference has been recorded. May Allah reward you abundantly and multiply your blessing.
                </p>
              </div>
            </div>
          )}

          {/* Trust Badges Footer */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
            <span className="flex items-center">
              <ShieldCheck size={14} className="text-emerald-600 mr-1 flex-shrink-0" />
              256-Bit SSL Encrypted
            </span>
            <span>100% Zakat & Sadaqah Compliant</span>
            <span>Ejisuman, Ashanti Region</span>
          </div>
        </form>
      </motion.div>
    </>
  )
}

export default function DonationForm() {
  return (
    <Suspense fallback={
      <div className="bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-sm text-slate-500 text-sm">
        <Heart className="w-8 h-8 text-amber-500 mx-auto animate-pulse mb-2" />
        <p>Loading secure donation portal...</p>
      </div>
    }>
      <DonationFormInner />
    </Suspense>
  )
}