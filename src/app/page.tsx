'use client'

import Link from 'next/link'
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  MapPin, 
  Users, 
  BookOpen, 
  Calendar,
  Phone,
  MessageCircle
} from 'lucide-react'
import Hero from '@/components/ui/Hero'
import ProgramCard from '@/components/ui/ProgramCard'
import ImpactStories from '@/components/ui/ImpactStories'
import DailyAyahReflection from '@/components/ui/DailyAyahReflection'
import FaqSection from '@/components/ui/FaqSection'
import { organizationData } from '@/data/organization'

export default function Home() {
  const { programs, striveInitiative, whyStrive, yearOneGoals, budget, howYouCanSupport, contact } = organizationData

  return (
    <div className="space-y-0">
      {/* 1. Grounded Hero with Official Banner Background */}
      <Hero
        title="Strive (S)"
        subtitle="Strive in unity, growing in faith and brotherhood"
        description="To support and empower youth and new converts by fostering faith, unity, and personal growth through education, mentorship, and community engagement."
        backgroundImage="/images/home-hero-bg.png"
        ctaButtons={[
          { text: 'Support Our Work', href: '/donate', variant: 'primary' },
          { text: 'View Weekly Programs', href: '/programs', variant: 'outline' }
        ]}
      />

      {/* 2. The STRIVE Framework: Clear, Editorial Presentation */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block mb-1">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 font-heading tracking-tight">
              The Meaning Behind Our Name
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              STRIVE is an acronym that describes how our team serves youth and new converts across Ejisuman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {striveInitiative.meaning.map((pillar) => (
              <div
                key={pillar.letter}
                className="p-6 rounded-lg bg-gray-50 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="w-8 h-8 rounded-md bg-primary-700 text-white font-bold text-base flex items-center justify-center font-heading">
                      {pillar.letter}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 font-heading">
                      {pillar.word}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 font-medium mb-3">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200 text-xs text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800 block mb-0.5">In Ejisu:</span>
                  <span>{pillar.inAction}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Community Reality & Founding Story: Natural Editorial Layout */}
      <section className="py-16 sm:py-24 bg-[#faf9f5] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block">
                Why We Started
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 font-heading tracking-tight leading-tight">
                Walking with those who embrace Islam, and mentoring the next generation.
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                When someone embraces Islam in Ghana, it is a moment of deep gratitude and celebration. Yet in the months following the Shahada, many new converts face unexpected silence—family estrangement, social misunderstanding, and the anxiety of learning basic prayers on their own.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                At the same time, young Muslims in our neighbourhoods navigate economic pressures and often feel disconnected from community spaces. Strive was created to be an open home in Ejisuman where everyone is met with warmth, patient teaching, and steady brotherhood.
              </p>

              {/* Personal Quote */}
              <div className="border-l-3 border-primary-700 pl-4 py-2 bg-white rounded-r-md border border-l-0 border-gray-200">
                <p className="italic text-sm text-gray-800 leading-relaxed">
                  "The true measure of our community is how we care for someone on Monday morning after the Shahada celebration has ended—when they need a patient brother to sit with them over tea and practice Surah Al-Fatiha."
                </p>
                <p className="text-xs font-semibold text-gray-600 mt-2">
                  — Dr. Salis, Lead Coordinator, Strive Ghana
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="px-5 py-2.5 bg-primary-700 hover:bg-primary-800 text-white font-medium rounded-md text-sm transition-colors"
                >
                  Read Our Full Story
                </Link>
                <Link
                  href="/get-involved"
                  className="px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium rounded-md text-sm transition-colors"
                >
                  Volunteer or Mentor
                </Link>
              </div>
            </div>

            {/* Community Center & Sanctuary Card */}
            <div className="lg:col-span-5">
              <div className="rounded-lg border border-gray-200 bg-gray-50/70 p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider block">
                    Our Community Roots
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">
                    Ejisuman Center & Care Home
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    99 BLK IX Ejisuman (Near Family Hospital) • Ashanti Region, Ghana
                  </p>
                </div>

                <div className="border-t border-gray-200/80 pt-4 space-y-3.5 text-sm text-gray-700">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary-700 font-bold shrink-0 mt-0.5">•</span>
                    <p><strong className="text-gray-900">New Convert Welcome:</strong> Open daily for prayer kits, Arabic learning, and brotherly companionship.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary-700 font-bold shrink-0 mt-0.5">•</span>
                    <p><strong className="text-gray-900">Orphan Care & Meals:</strong> Wholesome daily nutrition, school enrollment, and loving supervision.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary-700 font-bold shrink-0 mt-0.5">•</span>
                    <p><strong className="text-gray-900">Emergency Shelter:</strong> Temporary safe accommodation for converts facing family estrangement.</p>
                  </div>
                </div>

                <div className="border-t border-gray-200/80 pt-4 text-xs text-gray-500">
                  Direct Contact: <span className="font-semibold text-gray-800">0542524571</span> • <span className="text-gray-600">striveghana@gmail.com</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Programs Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block mb-1">
                Activities
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 font-heading tracking-tight">
                Our Weekly Programs
              </h2>
              <p className="mt-2 text-base text-gray-600 max-w-xl">
                Structured activities designed to support new Muslims, mentor youth, and strengthen community ties.
              </p>
            </div>
            <Link
              href="/programs"
              className="text-sm font-semibold text-primary-700 hover:text-primary-800 flex items-center space-x-1"
            >
              <span>View full schedule</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <ProgramCard
                key={program.id}
                title={`${program.keyLetter.toUpperCase()}. ${program.title}`}
                subtitle={program.subtitle}
                description={program.description}
                activities={program.activities}
                link={`/programs#${program.id}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Financial Transparency & First-Year Budget: Clean, Human Table */}
      <section className="py-16 sm:py-24 bg-[#0b291a] text-white border-b border-[#17432b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent-gold block mb-1">
              Accountability & Stewardship
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading tracking-tight text-white">
              Financial Transparency & First-Year Budget
            </h2>
            <p className="mt-2 text-base text-gray-300 leading-relaxed">
              We operate with strict accountability. Below is our complete projected operational and relief budget for Year 1, detailing how every donation is used.
            </p>
          </div>

          {/* Goals Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 pb-8 border-b border-[#17432b]">
            {yearOneGoals.map((goal, idx) => (
              <div key={idx} className="p-4 rounded-md bg-[#0f3f22] border border-[#17432b]">
                <p className="text-2xl sm:text-3xl font-bold text-accent-gold">{goal.value}</p>
                <p className="text-sm sm:text-base font-semibold text-white mt-0.5">{goal.label}</p>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">{goal.detail}</p>
              </div>
            ))}
          </div>

          {/* Clean Financial Table */}
          <div className="bg-[#0f3f22] border border-[#17432b] rounded-lg overflow-hidden">
            <div className="p-5 border-b border-[#17432b] flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Year 1 Budget Breakdown
                </h3>
                <p className="text-xs text-gray-300">
                  Total Projected: ${budget.total.toLocaleString()} USD (~GH₵ 52,000)
                </p>
              </div>
              <span className="text-xs text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded border border-emerald-800">
                100% Dedicated to Direct Community Aid & Learning
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#17432b] bg-[#082014] text-xs font-semibold text-gray-300 uppercase">
                    <th className="py-3 px-5">Category</th>
                    <th className="py-3 px-5">Allocation Purpose</th>
                    <th className="py-3 px-5 text-right">Amount (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#17432b]">
                  {budget.items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#14532d]/40 transition-colors">
                      <td className="py-3.5 px-5 font-medium text-white">{item.category}</td>
                      <td className="py-3.5 px-5 text-gray-300 text-xs sm:text-sm">{item.description}</td>
                      <td className="py-3.5 px-5 text-right font-mono text-accent-gold font-semibold">${item.amount}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#082014] font-bold text-white">
                    <td className="py-3.5 px-5" colSpan={2}>Total Year 1 Allocation</td>
                    <td className="py-3.5 px-5 text-right font-mono text-accent-gold text-base">${budget.total.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Daily Spiritual Reflection */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DailyAyahReflection />
        </div>
      </section>

      {/* 7. Community Reflections */}
      <ImpactStories />

      {/* 8. How You Can Support: Clean, Practical Options */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block mb-1">
              Ways to Help
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 font-heading">
              Support Strive Ghana
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Your support directly funds educational materials, student sponsorships, and convert care in Ejisuman.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howYouCanSupport.map((option) => (
              <div
                key={option.id}
                className="p-6 rounded-lg bg-gray-50 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2 py-0.5 rounded bg-primary-100 text-primary-900 text-xs font-semibold mb-3">
                    {option.highlight}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-heading mb-2">
                    {option.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {option.description}
                  </p>
                </div>

                <Link
                  href={option.href}
                  className="w-full py-2 px-3 bg-primary-700 hover:bg-primary-800 text-white text-center rounded-md text-xs font-medium transition-colors flex items-center justify-center space-x-1"
                >
                  <span>{option.cta}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          {/* Simple Zakat / Sadaqah Assurance Note */}
          <div className="mt-10 p-5 rounded-lg bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-emerald-900">
            <div className="flex items-center space-x-3">
              <ShieldCheck size={22} className="text-emerald-700 flex-shrink-0" />
              <span>
                <strong>Zakat & Sadaqah Compliant:</strong> Donations are strictly used for student books, convert welfare, and local educational aid with full transparency.
              </span>
            </div>
            <Link
              href="/donate"
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-md text-xs flex-shrink-0"
            >
              Donate Online
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <FaqSection />

      {/* 10. Simple, Trustworthy Call to Action */}
      <section className="py-16 sm:py-20 bg-[#0b291a] text-white border-t border-[#17432b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
            Get in Touch with Strive Ghana
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Whether you want to enroll in weekend classes, volunteer as a mentor, or visit our center in Ejisuman, we are here to assist.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-md text-sm transition-colors"
            >
              Contact Our Center
            </Link>
            <Link
              href="/donate"
              className="px-5 py-2.5 bg-transparent border border-gray-400 hover:bg-white/10 text-white font-medium rounded-md text-sm transition-colors"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}