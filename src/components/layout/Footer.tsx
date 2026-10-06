'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone, MessageCircle, ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { organizationData } from '@/data/organization'
import StriveLogo from '@/components/ui/StriveLogo'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail) {
      setSubscribed(true)
      setNewsletterEmail('')
    }
  }

  return (
    <footer className="bg-[#0b291a] text-gray-300 border-t border-[#17432b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#17432b]">
          
          {/* Column 1: Identity & Purpose (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <StriveLogo size="lg" variant="light" />

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Strive is a community-driven Muslim youth initiative based in Ejisuman, Ashanti Region. We walk beside young Muslims and new converts, offering practical guidance, education, and supportive brotherhood.
            </p>

            <div className="text-xs sm:text-sm text-gray-300 space-y-1 pt-1">
              <span className="font-semibold text-accent-gold block">The STRIVE Meaning:</span>
              <span>Support • Teach • Reach • Inspire • Value • Empower</span>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider mb-2">
                Monthly Community Updates
              </p>
              {subscribed ? (
                <div className="p-2.5 bg-[#0f3f22] rounded-md text-xs sm:text-sm text-emerald-300 flex items-center space-x-2 border border-[#17432b]">
                  <Check size={14} className="text-accent-gold" />
                  <span>Thank you for subscribing.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-3.5 py-2.5 bg-[#0f3f22] border border-[#17432b] rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent-gold flex-1 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-md text-sm font-semibold transition-colors flex items-center space-x-1"
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-200">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white transition-colors">
                  Weekly Programs
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-gray-400 hover:text-white transition-colors">
                  Volunteer & Mentor
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-white transition-colors">
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Programs (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-200">
              Our Core Focus Areas
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/programs#new-muslim" className="hover:text-white transition-colors block">
                  New Muslim Pastoral Care
                </Link>
                <span className="text-[11px] text-gray-500 block">Personal mentoring & prayer guidance</span>
              </li>
              <li>
                <Link href="/programs#youth" className="hover:text-white transition-colors block">
                  Youth Character & Mentorship
                </Link>
                <span className="text-[11px] text-gray-500 block">Leadership and life skills</span>
              </li>
              <li>
                <Link href="/programs#learning" className="hover:text-white transition-colors block">
                  Step-by-Step Islamic Learning
                </Link>
                <span className="text-[11px] text-gray-500 block">Wudu, Salah, and Quran reading</span>
              </li>
              <li>
                <Link href="/programs#social" className="hover:text-white transition-colors block">
                  Community Brotherhood
                </Link>
                <span className="text-[11px] text-gray-500 block">Weekend circles and service projects</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Ejisu Center (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-200">
              Ejisu Center & Contact
            </h3>
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin size={15} className="text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {organizationData.contact.address.street}, {organizationData.contact.address.town}, Ashanti Region, Ghana
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-accent-gold flex-shrink-0" />
                <a href={`tel:${organizationData.contact.phone}`} className="hover:text-white transition-colors">
                  {organizationData.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <MessageCircle size={14} className="text-emerald-400 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${organizationData.contact.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: {organizationData.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-accent-gold flex-shrink-0" />
                <a href={`mailto:${organizationData.contact.email}`} className="hover:text-white transition-colors">
                  {organizationData.contact.email}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-gray-400">
                <span>P.O. Box: {organizationData.contact.address.poBox}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {currentYear} Strive Ghana (السعي). Non-profit community initiative in Ejisu, Ashanti Region.
          </p>
          <div className="flex items-center space-x-6 text-xs">
            <Link href="/about" className="hover:text-gray-200 transition-colors">
              About
            </Link>
            <Link href="/donate" className="hover:text-gray-200 transition-colors">
              Donations & Transparency
            </Link>
            <Link href="/contact" className="hover:text-gray-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}