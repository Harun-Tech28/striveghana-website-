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
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(150)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isProcessing, setIsProcessing] = useState(false)
  const [copiedMomo, setCopiedMomo] = useState(false)

  const predefinedGHS = [
    { amount: 100, label: '₵100', impact: 'Convert welcome kit & Quran' },
    { amount: 250, label: '₵250', impact: 'Orphan monthly food supply' },
    { amount: 380, label: '₵380', impact: 'Sponsor an orphan (Yateem) / mo' },
    { amount: 1000, label: '₵1,000', impact: 'Emergency convert relief & shelter' },
  ]

  const predefinedUSD = [
    { amount: 15, label: '$15', impact: 'Convert welcome kit & Quran' },
    { amount: 30, label: '$30', impact: 'Sponsor an orphan (Yateem) / mo' },
    { amount: 50, label: '$50', impact: 'Revert emergency relief & shelter' },
    { amount: 100, label: '$100', impact: 'Orphanage food & medical fund' },
  ]

  const amountsList = currency === 'GHS' ? predefinedGHS : predefinedUSD

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isValid }
  } = useForm<DonationFormData>({
    mode: 'onChange',
    defaultValues: {
      amount: 150,
      frequency: 'once',
      donationType: 'general',
      paymentMethod: 'paystack'
    }
  })

  // Prefill from URL query parameters (e.g. ?amount=25&frequency=monthly&purpose=youth&currency=USD)
  useEffect(() => {
    if (!searchParams) return

    const paramCurrency = searchParams.get('currency')?.toUpperCase()
    if (paramCurrency === 'USD') {
      setCurrency('USD')
    } else if (paramCurrency === 'GHS') {
      setCurrency('GHS')
    }

    const paramPurpose = searchParams.get('purpose')?.toLowerCase()
    if (paramPurpose && ['general', 'convert', 'youth', 'zakat', 'sadaqat'].includes(paramPurpose)) {
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
  const watchEmail = watch('email')
  const watchDonorName = watch('donorName')

  // Resolve sanitized Paystack public key
  const envKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || ''
  const isRealKey = Boolean(envKey && !envKey.includes('your_public_key_here') && envKey.startsWith('pk_'))
  const paystackPublicKey = isRealKey ? envKey : 'pk_test_573f55ec926ffe2953741d0e71614fc17768ddc5'

  const currentAmount = selectedAmount === 'custom'
    ? (Number(watch('customAmount')) || 50)
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
          setSelectedAmount(currency === 'GHS' ? 150 : 25)
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
        className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 sm:p-8 max-w-2xl mx-auto"
      >
      {/* Form Header */}
      <div className="text-center mb-6">
        <div className="w-10 h-10 bg-primary-50 text-primary-800 rounded-md flex items-center justify-center mx-auto mb-3 border border-primary-100">
          <Heart className="w-5 h-5 text-primary-700" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 tracking-tight">
          Make a Donation
        </h3>
        <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto leading-relaxed">
          Every cedi or dollar directly provides Qurans, weekend class meals, and emergency welfare to new converts and youth right here in Ejisuman.
        </p>

        {/* Currency Switcher */}
        <div className="inline-flex items-center bg-gray-100 p-1 rounded-xl mt-6 border border-gray-200">
          <button
            type="button"
            onClick={() => {
              setCurrency('GHS')
              setSelectedAmount(150)
              setValue('amount', 150)
            }}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              currency === 'GHS'
                ? 'bg-white text-primary-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            ₵ Ghana Cedis (GHS)
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrency('USD')
              setSelectedAmount(25)
              setValue('amount', 25)
            }}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              currency === 'USD'
                ? 'bg-white text-primary-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            $ US Dollars (USD)
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 1. Purpose / Donation Type */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
            1. Purpose of Donation *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { value: 'convert', label: 'New Converts' },
              { value: 'orphan', label: 'Orphan Care (Yateem)' },
              { value: 'zakat', label: 'Zakat (Alms)' },
              { value: 'sadaqat', label: 'Sadaqah (Charity)' }
            ].map((type) => (
              <label
                key={type.value}
                className={`flex items-center justify-center p-3 rounded-xl border text-xs font-semibold cursor-pointer text-center transition-all ${
                  watchDonationType === type.value
                    ? 'border-primary-600 bg-primary-50 text-primary-800 ring-1 ring-primary-500 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <input
                  type="radio"
                  value={type.value}
                  {...register('donationType', { required: true })}
                  className="sr-only"
                />
                <span>{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 2. Giving Frequency */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
            2. Giving Frequency *
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'once', label: 'One-Time Gift' },
              { value: 'monthly', label: 'Monthly Sponsorship' }
            ].map((freq) => (
              <label
                key={freq.value}
                className={`flex items-center justify-center p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                  watchFrequency === freq.value
                    ? 'border-accent-gold bg-accent-gold/10 text-primary-900 ring-1 ring-accent-gold'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <input
                  type="radio"
                  value={freq.value}
                  {...register('frequency', { required: true })}
                  className="sr-only"
                />
                <span>{freq.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 3. Amount Selection */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              3. Select Amount ({currency}) *
            </label>
            {watchFrequency === 'monthly' && (
              <span className="text-xs text-primary-800 font-bold flex items-center">
                $30/mo sponsors 1 orphan child
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            {amountsList.map((item) => (
              <button
                key={item.amount}
                type="button"
                onClick={() => handleAmountSelect(item.amount)}
                className={`p-3.5 rounded-xl border-2 text-left transition-all ${
                  selectedAmount === item.amount
                    ? 'border-primary-600 bg-primary-50 text-primary-800 ring-1 ring-primary-500 shadow-sm'
                    : 'border-gray-200 hover:border-primary-200 text-gray-800'
                }`}
              >
                <div className="font-extrabold text-lg text-primary-800 font-heading">
                  {item.label}
                  {watchFrequency === 'monthly' && <span className="text-xs font-normal text-gray-500">/mo</span>}
                </div>
                <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">
                  {item.impact}
                </p>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => handleAmountSelect('custom')}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all whitespace-nowrap ${
                selectedAmount === 'custom'
                  ? 'border-primary-600 bg-primary-50 text-primary-700 font-bold'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              Custom Amount
            </button>
            {selectedAmount === 'custom' && (
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">
                  {currency === 'GHS' ? '₵' : '$'}
                </span>
                <input
                  type="number"
                  min="5"
                  {...register('customAmount', { required: 'Please enter an amount', min: 5 })}
                  className="w-full pl-8 pr-4 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter amount"
                />
              </div>
            )}
          </div>
        </div>

        {/* 4. Payment Channel Tabs: Paystack Instant vs Direct MoMo */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
            4. Choose How to Pay *
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label
              className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center space-x-3 ${
                watchPaymentMethod === 'paystack'
                  ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-500'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                value="paystack"
                {...register('paymentMethod')}
                className="sr-only"
              />
              <CreditCard className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-gray-900">Card & Mobile Money</p>
                <p className="text-[10px] text-gray-500">Paystack Instant Checkout</p>
              </div>
            </label>

            <label
              className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center space-x-3 ${
                watchPaymentMethod === 'momo_direct'
                  ? 'border-amber-600 bg-amber-50 ring-1 ring-amber-500'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                value="momo_direct"
                {...register('paymentMethod')}
                className="sr-only"
              />
              <Smartphone className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-gray-900">Direct MoMo Transfer</p>
                <p className="text-[10px] text-gray-500">MTN / Telecel / AT Phone</p>
              </div>
            </label>
          </div>
        </div>

        {/* Direct MoMo Info Box */}
        {watchPaymentMethod === 'momo_direct' && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-xs text-amber-900 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm">Official MoMo Line:</span>
              <button
                type="button"
                onClick={copyMomoNumber}
                className="inline-flex items-center space-x-1 bg-amber-200/80 hover:bg-amber-300 text-amber-900 px-2.5 py-1 rounded font-medium text-[11px] transition-colors"
              >
                {copiedMomo ? <Check size={12} className="text-emerald-700" /> : <Copy size={12} />}
                <span>{copiedMomo ? 'Copied' : 'Copy Number'}</span>
              </button>
            </div>
            <div className="bg-white p-3 rounded-md border border-amber-200 flex items-center justify-between">
              <span className="text-lg font-mono font-bold text-amber-950">
                054 252 4571
              </span>
              <span className="text-[11px] text-gray-500">
                Account: <strong>Strive Ghana</strong>
              </span>
            </div>
            <p className="leading-relaxed text-[11px]">
              Dial your provider code (*170# for MTN), choose Transfer Money, enter <strong>0542524571</strong>, and use reference <strong>Strive</strong>. Please message us on WhatsApp after sending so we can confirm receipt.
            </p>
          </div>
        )}

        {/* Accountability Note */}
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center space-x-3 text-xs text-emerald-950">
          <ShieldCheck size={18} className="text-emerald-700 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong>Financial Accountability:</strong> 100% of your donation directly funds student materials, emergency convert assistance, and educational halaqat.
          </p>
        </div>

        {/* Donor Information Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              {...register('donorName', { required: 'Please enter your name' })}
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="e.g., Brother Ibrahim Mensah / Sister Aisha"
            />
            {errors.donorName && (
              <p className="text-xs text-red-500 mt-1">{errors.donorName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
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
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="e.g., ibrahim.mensah@gmail.com"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone for Paystack/Receipt */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Phone / WhatsApp Number (for receipt confirmation)
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="e.g. 0542524571"
          />
        </div>

        {/* Optional Prayer or Dedication Note */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Prayer, Du'a, or Message of Support (Optional)
          </label>
          <textarea
            rows={2}
            {...register('message')}
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="May Allah bless this community..."
          />
        </div>

        {/* Submit Actions */}
        {watchPaymentMethod === 'momo_direct' ? (
          <a
            href={`https://wa.me/233542524571?text=${encodeURIComponent(
              `Salam Alaykum! I am making a direct Mobile Money donation of ${currency === 'GHS' ? '₵' : '$'}${currentAmount} for ${watchDonationType}. My name is ${watchDonorName || 'Supporter'}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center space-x-2 text-sm text-center"
          >
            <Smartphone size={18} />
            <span>Confirm MoMo Transfer via WhatsApp</span>
          </a>
        ) : (
          <button
            type="submit"
            disabled={isProcessing}
            className="w-full py-3.5 bg-primary-700 hover:bg-primary-800 disabled:opacity-75 disabled:cursor-wait text-white font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center space-x-2 text-sm"
          >
            {isProcessing ? (
              <>
                <Loader2 size={18} className="animate-spin text-white" />
                <span>Opening Paystack Checkout...</span>
              </>
            ) : (
              <>
                <Heart size={18} className="fill-white" />
                <span>
                  Make Payment • {currency === 'GHS' ? '₵' : '$'}
                  {currentAmount}
                </span>
              </>
            )}
          </button>
        )}

        {/* Status Confirmation */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start space-x-3 text-emerald-900 text-sm">
            <CheckCircle2 size={18} className="text-emerald-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Thank you for your donation.</p>
              <p className="text-xs text-emerald-800 mt-0.5">
                Your payment reference has been recorded. May Allah reward you abundantly.
              </p>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
          <span className="flex items-center">
            <ShieldCheck size={14} className="text-emerald-600 mr-1" />
            256-bit Encrypted SSL
          </span>
          <span>100% Zakat & Sadaqah Compliant</span>
          <span>Ejisuman, Ghana</span>
        </div>
      </form>
    </motion.div>
  </>
  )
}

export default function DonationForm() {
  return (
    <Suspense fallback={
      <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm text-gray-500 text-sm">
        <Heart className="w-8 h-8 text-accent-gold mx-auto animate-pulse mb-2" />
        <p>Loading secure donation portal...</p>
      </div>
    }>
      <DonationFormInner />
    </Suspense>
  )
}