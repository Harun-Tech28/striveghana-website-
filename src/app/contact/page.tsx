'use client'

import { useState } from 'react'
import ContactForm from '@/components/forms/ContactForm'
import FaqSection from '@/components/ui/FaqSection'
import { organizationData } from '@/data/organization'
import { Mail, MapPin, Phone, Clock, MessageCircle, Copy, Check } from 'lucide-react'
import { triggerToast } from '@/components/ui/ToastNotification'

export default function ContactPage() {
  const { contact } = organizationData
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyText = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text)
    if (type === 'phone') {
      setCopiedPhone(true)
      triggerToast(`Copied Phone: ${contact.phoneDisplay}`, 'success')
      setTimeout(() => setCopiedPhone(false), 2500)
    } else {
      setCopiedEmail(true)
      triggerToast(`Copied Email: ${contact.email}`, 'success')
      setTimeout(() => setCopiedEmail(false), 2500)
    }
  }

  return (
    <div className="space-y-0">
      {/* 1. Page Header */}
      <section className="bg-[#0b291a] text-white py-14 sm:py-20 border-b border-[#17432b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent-gold block">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight text-white">
              Contact Strive Ghana
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed pt-1">
              Have questions about our weekend classes, convert support, or wish to visit our center in Ejisu? We are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-16 sm:py-24 bg-[#faf9f5] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Contact Details & Schedule */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block mb-1">
                  Community Center
                </span>
                <h2 className="text-2xl font-bold font-heading text-gray-900">
                  Ejisuman Center Location
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Our community center is located near Family Hospital in Ejisuman. Visitors and community members are always welcome.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs space-y-4 text-xs sm:text-sm">
                
                {/* Address */}
                <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
                  <MapPin size={18} className="text-primary-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Center Address</strong>
                    <p className="text-gray-600 mt-0.5">
                      {contact.address.street}, {contact.address.town}, Ashanti Region, Ghana
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      P.O. Box: {contact.address.poBox}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-primary-700 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block">Phone / MoMo Line</strong>
                      <a href={`tel:${contact.phone}`} className="text-gray-700 hover:text-primary-700">
                        {contact.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyText(contact.phoneDisplay, 'phone')}
                    className="text-xs text-gray-400 hover:text-primary-700 p-1"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
                  <MessageCircle size={18} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">WhatsApp Direct</strong>
                    <a
                      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Salam Alaykum, I am contacting you from the Strive website.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-medium"
                    >
                      Chat on WhatsApp ({contact.phoneDisplay})
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-primary-700 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block">Email</strong>
                      <a href={`mailto:${contact.email}`} className="text-gray-700 hover:text-primary-700">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyText(contact.email, 'email')}
                    className="text-xs text-gray-400 hover:text-primary-700 p-1"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>

              </div>

              {/* Hours Box */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs space-y-3">
                <div className="flex items-center space-x-2 font-bold text-gray-900 text-sm pb-2 border-b border-gray-100">
                  <Clock size={16} className="text-primary-700" />
                  <span>Center Weekly Schedule</span>
                </div>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5">
                  <li className="flex justify-between">
                    <span>Monday – Thursday:</span>
                    <span className="font-medium text-gray-900">4:00 PM – 7:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday:</span>
                    <span className="font-medium text-gray-900">Jumu'ah & Youth Circle</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium text-gray-900">9:00 AM – 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-gray-900">2:00 PM – 5:30 PM</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <FaqSection />
    </div>
  )
}