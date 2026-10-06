'use client'

import Link from 'next/link'
import { Heart, Users, BookOpen, ShieldCheck, ArrowRight, Compass, MessageCircle } from 'lucide-react'
import { organizationData } from '@/data/organization'

export default function BentoWhyStrive() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="why-strive">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass size={14} className="text-emerald-600" />
            <span>Why StriveGhana Exists</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-700 tracking-tight mb-4">
            Building Faith, Knowledge & Belonging
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            New converts and young Muslims face real spiritual confusion, isolation, and economic hurdles. We answer with dedicated mentorship and unwavering brotherhood.
          </p>
          <div className="w-20 h-1 bg-accent-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Large Feature - New Muslim Care (Span 7) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-primary-800 to-primary-700 rounded-3xl overflow-hidden shadow-xl text-white relative flex flex-col justify-between group">
            <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('/images/men-new-muslim.jpg')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/80 to-primary-800/60"></div>
            
            <div className="p-8 sm:p-10 relative z-10 space-y-4">
              <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent-gold border border-white/10">
                <Heart size={14} className="fill-accent-gold" />
                <span>Core Mission: New Muslim Care</span>
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                No Convert Walks the Path Alone
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl">
                Taking the Shahada is the start of a beautiful journey, but without support, new Muslims risk isolation and misunderstanding. We pair each convert with an experienced mentor, provide prayer starter kits, and supply emergency living support.
              </p>
            </div>

            <div className="p-8 sm:p-10 pt-0 relative z-10 flex flex-wrap items-center gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-accent-gold hover:bg-accent-gold-dark text-white font-bold rounded-xl text-sm transition-all shadow-md"
              >
                <span>Explore Convert Programs</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/${organizationData.contact.whatsapp}?text=${encodeURIComponent("Salam Alaykum! I am a new convert seeking support.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl text-sm transition-colors border border-white/20"
              >
                <MessageCircle size={16} />
                <span>Talk to a Mentor</span>
              </a>
            </div>
          </div>

          {/* Card 2: 100% Zakat Trust Box (Span 5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50/40 rounded-3xl p-8 sm:p-10 border border-amber-200/70 shadow-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                <ShieldCheck size={26} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900">
                Radical Transparency & 100% Zakat Policy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Zero administrative overhead is taken from your Zakat. Every Ghana Cedi directly feeds, clothes, educates, and houses vulnerable converts and youth under strict Islamic oversight.
              </p>

              <div className="space-y-2 pt-2 text-xs text-gray-700 font-medium">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Direct Mobile Money Giving (MTN MoMo, Telecel)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Paystack Certified Secure Checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Quarterly Public Financial Accountability Reports</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-amber-200/60">
              <Link
                href="/donate"
                className="inline-flex items-center space-x-2 text-amber-800 font-bold text-sm hover:text-amber-900 group"
              >
                <span>Calculate & Give Zakat</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 3: Islamic Education Visual Box (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl group flex flex-col justify-between">
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src="/images/islamic-learning.jpg"
                alt="Black Ghanaian Muslims studying Quran and Arabic"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="inline-flex items-center space-x-2 text-accent-gold text-xs font-bold mb-1">
                  <BookOpen size={14} />
                  <span>Weekend Islamic Academy</span>
                </div>
                <h4 className="text-xl font-bold font-heading">
                  Authentic Quran & Arabic Literacy
                </h4>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                Step-by-step Tajweed, Arabic reading, and Fiqh of worship classes taught patiently by vetted Ghanaian scholars at our Ejisu center.
              </p>
              <Link
                href="/programs"
                className="inline-flex items-center space-x-2 text-primary-600 font-bold text-xs uppercase tracking-wider hover:text-primary-700"
              >
                <span>View Class Timetables</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 4: Youth Leadership & Empowerment (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl group flex flex-col justify-between">
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src="/images/youth-empowerment.jpg"
                alt="Ghanaian Muslim youth leadership workshop"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="inline-flex items-center space-x-2 text-emerald-300 text-xs font-bold mb-1">
                  <Users size={14} />
                  <span>Youth Empowerment</span>
                </div>
                <h4 className="text-xl font-bold font-heading">
                  Mentorship & Moral Leadership
                </h4>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                Empowering secondary and tertiary students across Ashanti to excel academically, build noble character, and lead positive change in the Ummah.
              </p>
              <Link
                href="/get-involved"
                className="inline-flex items-center space-x-2 text-primary-600 font-bold text-xs uppercase tracking-wider hover:text-primary-700"
              >
                <span>Join Youth Circles</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
