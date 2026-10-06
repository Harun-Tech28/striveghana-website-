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
  ShieldCheck,
  Sparkles
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
      {/* 1. Clean, Executive Page Header */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 inline-block">
              About Strive Ghana (السعي)
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Rooted in Faith, Dedicated to Brotherhood
            </h1>
            <p className="text-lg sm:text-2xl text-gray-200 max-w-3xl leading-relaxed pt-2 font-normal">
              A grassroots Muslim initiative in Ejisu, Ashanti Region, walking alongside young Muslims, new converts, and orphans through personal mentorship, practical learning, and community care.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Story & Roots in Ejisuman */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block">
              Our Community Roots
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-gray-900 tracking-tight">
              {storyAndRoots.title}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold leading-relaxed">
              {storyAndRoots.lead}
            </p>
          </div>

          {/* Authentic Core Pillars: Convert Care & Orphan Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] w-full">
                <img
                  src="/images/convert-care-charity.jpg"
                  alt="Strive Ghana brothers welcoming a new Muslim convert in Ejisuman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white border-t border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl font-heading">New Muslim Convert Support & Mentorship</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">Welcoming brothers embracing Islam with prayer kits, Arabic lessons, emergency housing, and genuine companionship.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] w-full">
                <img
                  src="/images/orphan-care-ghana.jpg"
                  alt="Muslim orphan children receiving care, healthy food and education in Ejisu Ghana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white border-t border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl font-heading">Muslim Orphan Care & Upbringing (Yateem)</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">Providing daily nutritious meals, safe shelter, schooling, and compassionate Islamic care in Ejisu.</p>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-gray-700 text-lg sm:text-xl leading-relaxed max-w-4xl">
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

      {/* 4. Mission & Vision: Clean Elevated Cards */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#fafafa] border border-gray-200 shadow-xs space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-800 bg-amber-100/70 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block">
                Our Purpose
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                Mission Statement
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                {mission}
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#fafafa] border border-gray-200 shadow-xs space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-800 bg-amber-100/70 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block">
                Long-Term Outlook
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                Vision Statement
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                {vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The STRIVE Framework */}
      <section className="py-20 sm:py-28 bg-[#fbfbf9] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
              Operational Framework
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-gray-900 tracking-tight">
              The Meaning of STRIVE
            </h2>
            <p className="mt-3 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Each letter represents a practical commitment we make to every young person and new Muslim who walks through our doors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {striveInitiative.meaning.map((pillar) => (
              <div
                key={pillar.letter}
                className="p-7 rounded-2xl bg-white border border-gray-200 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black text-lg flex items-center justify-center font-heading">
                      {pillar.letter}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 font-heading">
                      {pillar.word}
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 font-medium mb-3">
                    {pillar.description}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {pillar.inAction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core Objectives & Structure */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
              Objectives & Focus
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-gray-900 tracking-tight">
              Key Strategic Goals
            </h2>
            <p className="mt-3 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Measurable commitments guiding our educational circles, mentor deployment, and community partnerships.
            </p>
          </div>

          <div className="space-y-4">
            {coreObjectives.map((obj, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50/70 border border-gray-200 flex items-start space-x-5 hover:bg-white hover:shadow-xs transition-all">
                <span className="text-xl font-extrabold text-amber-800 font-mono flex-shrink-0 mt-0.5">
                  0{obj.number}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl">
                    {obj.title}
                  </h3>
                  <p className="text-base text-gray-600 mt-1.5 leading-relaxed font-normal">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Ejisu Community Center Information */}
      <section className="py-20 sm:py-28 bg-[#fbfbf9] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block">
                  Visiting Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900">
                  The Strive Center in Ejisuman
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                  Our center is not a distant administrative office; it is a welcoming home for youth, converts, and orphans. If you are exploring Islam, need a quiet place to study, or want to speak with a mentor, our doors are open.
                </p>
                
                <div className="space-y-3 text-base text-gray-600 pt-2">
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>{contact.address.street}, {contact.address.town}, Ashanti Region</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-amber-700 flex-shrink-0" />
                    <span>Call: <strong className="text-gray-900">{contact.phoneDisplay}</strong></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle size={18} className="text-amber-700 flex-shrink-0" />
                    <span>WhatsApp: <strong className="text-gray-900">{contact.phoneDisplay}</strong></span>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 space-y-5">
                <h3 className="text-xl font-bold text-gray-900 font-heading">
                  Weekly Center Hours
                </h3>
                <ul className="text-sm sm:text-base text-gray-600 space-y-3">
                  <li className="flex justify-between pb-2 border-b border-gray-200">
                    <span>Monday – Thursday:</span>
                    <span className="font-semibold text-gray-900">4:00 PM – 7:30 PM</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-gray-200">
                    <span>Friday:</span>
                    <span className="font-semibold text-gray-900">Jumu'ah & Youth Circle</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-gray-200">
                    <span>Saturday:</span>
                    <span className="font-semibold text-gray-900">9:00 AM – 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold text-gray-900">2:00 PM – 5:30 PM</span>
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="w-full py-3.5 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md shadow-amber-500/20"
                >
                  <span>Plan a Visit or Contact Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Modern Call to Action */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Support Our Grassroots Work in Ejisu
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Every contribution directly funds Quran copies, student sponsorship, orphan nutrition, and convert emergency assistance.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-base sm:text-lg transition-all shadow-md shadow-amber-500/25 hover:-translate-y-0.5"
            >
              Make a Donation
            </Link>
            <Link
              href="/get-involved"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold rounded-xl text-base sm:text-lg transition-all backdrop-blur-xs hover:-translate-y-0.5"
            >
              Volunteer as a Mentor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}