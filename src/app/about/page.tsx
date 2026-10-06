'use client'

import Link from 'next/link'
import { organizationData } from '@/data/organization'
import LeadershipLetter from '@/components/ui/LeadershipLetter'
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowRight, 
  Check, 
  Users, 
  BookOpen, 
  Heart, 
  ShieldCheck 
} from 'lucide-react'

export default function AboutPage() {
  const { 
    mission, 
    vision, 
    overview,
    storyAndRoots,
    striveInitiative,
    coreObjectives,
    contact
  } = organizationData

  return (
    <div className="space-y-0">
      {/* 1. Clean, Professional Page Header */}
      <section className="bg-[#0b291a] text-white py-14 sm:py-20 border-b border-[#17432b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent-gold block">
              About Strive Ghana (السعي)
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight text-white">
              Rooted in Faith, Dedicated to Brotherhood
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed pt-1">
              A grassroots Muslim initiative in Ejisu, Ashanti Region, walking alongside young Muslims and new converts through mentorship, practical learning, and community care.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Story & Roots in Ejisuman */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block">
              Our Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
              {storyAndRoots.title}
            </h2>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              {storyAndRoots.lead}
            </p>
          </div>

          {/* Authentic Core Pillars: Convert Care & Orphan Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden border border-gray-300 shadow-xs bg-white">
              <div className="relative aspect-[16/10] w-full">
                <img
                  src="/images/convert-care-charity.jpg"
                  alt="Strive Ghana brothers welcoming a new Muslim convert in Ejisuman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3.5 bg-gray-50 border-t border-gray-200 text-xs text-gray-700">
                <p className="font-semibold text-gray-900">New Muslim Convert Support & Mentorship</p>
                <p className="text-gray-500 mt-0.5">Welcoming brothers embracing Islam with prayer kits, Arabic lessons, and genuine companionship.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-gray-300 shadow-xs bg-white">
              <div className="relative aspect-[16/10] w-full">
                <img
                  src="/images/orphan-care-ghana.jpg"
                  alt="Muslim orphan children receiving care, healthy food and education in Ejisu Ghana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3.5 bg-gray-50 border-t border-gray-200 text-xs text-gray-700">
                <p className="font-semibold text-gray-900">Muslim Orphan Care & Upbringing (Yateem)</p>
                <p className="text-gray-500 mt-0.5">Providing daily nutritious meals, safe shelter, schooling, and compassionate Islamic care in Ejisu.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            {storyAndRoots.narrative.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership Letter */}
      <LeadershipLetter />

      {/* 4. Mission & Vision: Clean Two-Column Layout */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 rounded-lg bg-gray-50 border border-gray-200 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block">
                Our Purpose
              </span>
              <h3 className="text-xl font-bold font-heading text-gray-900">
                Mission Statement
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {mission}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-50 border border-gray-200 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block">
                Long-Term Outlook
              </span>
              <h3 className="text-xl font-bold font-heading text-gray-900">
                Vision Statement
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The STRIVE Framework */}
      <section className="py-16 sm:py-24 bg-[#faf9f5] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block mb-1">
              Operational Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
              The Meaning of STRIVE
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Each letter represents a practical commitment we make to every young person who walks through our doors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {striveInitiative.meaning.map((pillar) => (
              <div
                key={pillar.letter}
                className="p-5 rounded-lg bg-white border border-gray-200"
              >
                <div className="flex items-center space-x-2.5 mb-2">
                  <span className="w-7 h-7 rounded bg-primary-700 text-white font-bold text-sm flex items-center justify-center">
                    {pillar.letter}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-heading">
                    {pillar.word}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-800 mb-2">
                  {pillar.description}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-2">
                  {pillar.inAction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core Objectives & Structure */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block mb-1">
              Objectives & Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
              Key Strategic Goals
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Measurable commitments guiding our educational circles, mentor deployment, and community partnerships.
            </p>
          </div>

          <div className="space-y-3">
            {coreObjectives.map((obj, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-gray-50 border border-gray-200 flex items-start space-x-4">
                <span className="text-base font-bold text-primary-700 font-mono flex-shrink-0 mt-0.5">
                  0{obj.number}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                    {obj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Ejisu Community Center Information */}
      <section className="py-16 sm:py-24 bg-[#faf9f5] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-gray-200 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block">
                  Visiting Us
                </span>
                <h2 className="text-2xl font-bold font-heading text-gray-900">
                  The Strive Center in Ejisuman
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Our center is not a distant administrative office; it is a welcoming home for youth and converts. If you are exploring Islam, need a quiet place to study, or want to speak with an older brother, our doors are open.
                </p>
                
                <div className="space-y-2 text-xs sm:text-sm text-gray-600 pt-1">
                  <div className="flex items-start space-x-2">
                    <MapPin size={16} className="text-primary-700 flex-shrink-0 mt-0.5" />
                    <span>{contact.address.street}, {contact.address.town}, Ashanti Region</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={15} className="text-primary-700 flex-shrink-0" />
                    <span>Call: {contact.phoneDisplay}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle size={15} className="text-emerald-700 flex-shrink-0" />
                    <span>WhatsApp: {contact.phoneDisplay}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gray-50 border border-gray-200 space-y-4">
                <h3 className="text-base font-bold text-gray-900">
                  Weekly Center Hours
                </h3>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-2">
                  <li className="flex justify-between pb-1 border-b border-gray-200">
                    <span>Monday – Thursday:</span>
                    <span className="font-medium text-gray-800">4:00 PM – 7:30 PM (Mentoring)</span>
                  </li>
                  <li className="flex justify-between pb-1 border-b border-gray-200">
                    <span>Friday:</span>
                    <span className="font-medium text-gray-800">Jumu'ah & Youth Circle</span>
                  </li>
                  <li className="flex justify-between pb-1 border-b border-gray-200">
                    <span>Saturday:</span>
                    <span className="font-medium text-gray-800">9:00 AM – 1:00 PM (Classes)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-gray-800">2:00 PM – 5:30 PM (Convert Circle)</span>
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 bg-primary-700 hover:bg-primary-800 text-white font-medium text-xs rounded-md flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <span>Plan a Visit or Contact Us</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-14 sm:py-18 bg-[#0b291a] text-white border-t border-[#17432b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Support Our Grassroots Work in Ejisu
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
            Every contribution directly funds Quran copies, student sponsorship, and convert emergency assistance.
          </p>
          <div className="pt-2 flex flex-wrap gap-3 justify-center">
            <Link
              href="/donate"
              className="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-md text-sm transition-colors"
            >
              Make a Donation
            </Link>
            <Link
              href="/get-involved"
              className="px-5 py-2.5 bg-transparent border border-gray-400 hover:bg-white/10 text-white font-medium rounded-md text-sm transition-colors"
            >
              Volunteer as a Mentor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}