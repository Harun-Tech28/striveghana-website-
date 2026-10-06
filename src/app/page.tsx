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
  MessageCircle,
  Sparkles,
  HeartHandshake,
  Home as HomeIcon,
  GraduationCap
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
      {/* 1. Grounded Hero with Large, Clear Background Image */}
      <Hero
        title="Strive (S)"
        subtitle="Strive in unity, growing in faith and brotherhood"
        description="Empowering new converts and youth across Ejisuman through patient Islamic education, sincere brotherly mentorship, and essential community relief."
        backgroundImage="/images/home-hero-bg.png"
        ctaButtons={[
          { text: 'Support Our Work', href: '/donate', variant: 'primary' },
          { text: 'Explore Programs', href: '/programs', variant: 'outline' }
        ]}
      />

      {/* 2. The STRIVE Framework: Clean, Modern Value Cards */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-left">
            <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 mb-3">
              <Sparkles size={14} className="text-emerald-700" />
              <span>Core Principles</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-heading tracking-tight leading-tight">
              The Meaning Behind S.T.R.I.V.E
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              Every letter guides our daily outreach to new Muslim converts and vulnerable youth across Ejisu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {striveInitiative.meaning.map((pillar) => (
              <div
                key={pillar.letter}
                className="p-7 sm:p-8 rounded-2xl bg-[#fafafa] hover:bg-white border border-gray-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3.5 mb-4">
                    <span className="w-12 h-12 rounded-xl bg-emerald-800 text-white font-extrabold text-2xl flex items-center justify-center font-heading shadow-xs">
                      {pillar.letter}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 font-heading">
                      {pillar.word}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium mb-5">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 text-sm text-gray-600 leading-relaxed">
                  <span className="font-bold text-emerald-900 uppercase text-xs tracking-wider block mb-1">In Ejisuman:</span>
                  <span>{pillar.inAction}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Community Reality & Founding Story: High-Impact Editorial Layout */}
      <section className="py-20 sm:py-28 bg-[#fbfbf9] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/70 px-3.5 py-1.5 rounded-full border border-emerald-200 inline-block">
                Our Sacred Mission
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-heading tracking-tight leading-tight">
                Walking with those who embrace Islam, and sheltering our youth.
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                When someone embraces Islam in Ghana, it is a moment of profound joy. Yet in the critical weeks following the Shahada, many new converts face sudden estrangement, loneliness, and the anxiety of learning basic prayers without patient guidance.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Strive was created to be an open home in Ejisuman where every convert and orphan finds sincere brotherhood, authentic learning, warm daily meals, and dependable shelter.
              </p>

              {/* Personal Quote Card from Dr. Salis */}
              <div className="p-6 sm:p-7 bg-white rounded-2xl border border-gray-200/90 shadow-xs border-l-4 border-l-emerald-700">
                <p className="italic text-base sm:text-lg text-gray-800 leading-relaxed font-serif">
                  "The true measure of our community is how we care for someone on Monday morning after the Shahada celebration has ended—when they need a patient brother to sit with them over tea and practice Surah Al-Fatiha."
                </p>
                <p className="text-sm sm:text-base font-bold text-emerald-900 mt-3">
                  — Dr. Salis, Lead Coordinator, Strive Ghana
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded-xl text-base transition-all shadow-xs hover:-translate-y-0.5"
                >
                  Read Our Full Story
                </Link>
                <Link
                  href="/get-involved"
                  className="px-6 py-3.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold rounded-xl text-base transition-all shadow-xs hover:-translate-y-0.5"
                >
                  Volunteer or Mentor
                </Link>
              </div>
            </div>

            {/* Community Center & Sanctuary Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm space-y-7">
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-1">
                    Ejisuman Headquarters
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">
                    Strive Center & Sanctuary
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                    <MapPin size={16} className="text-emerald-700 flex-shrink-0" />
                    <span>99 BLK IX Ejisuman (Near Family Hospital)</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-4 text-base text-gray-700">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</div>
                    <p><strong className="text-gray-900 font-semibold">New Convert Welcome:</strong> Daily prayer instruction, Quran kits, and warm hospitality.</p>
                  </div>
                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</div>
                    <p><strong className="text-gray-900 font-semibold">Orphan Care & Meals:</strong> Wholesome daily nutrition, school enrollment, and guidance.</p>
                  </div>
                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</div>
                    <p><strong className="text-gray-900 font-semibold">Emergency Relief:</strong> Safe housing for individuals facing family estrangement.</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 text-sm text-gray-600 flex items-center justify-between">
                  <span>Phone: <strong className="text-gray-900">054 252 4571</strong></span>
                  <span className="text-emerald-800 font-semibold">Ashanti Region</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Programs Section */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 block w-fit mb-3">
                Weekly Activities
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-heading tracking-tight">
                Our Four Core Programs
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Structured circles designed to mentor new Muslims, care for orphans, and nurture future youth leaders.
              </p>
            </div>
            <Link
              href="/programs"
              className="text-base sm:text-lg font-bold text-emerald-800 hover:text-emerald-900 flex items-center space-x-2 transition-colors flex-shrink-0"
            >
              <span>View full weekly schedule</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* 5. Financial Transparency & First-Year Budget: Replaced muddy green with clean executive light layout */}
      <section className="py-20 sm:py-28 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/70 px-3.5 py-1.5 rounded-full border border-emerald-200 inline-block mb-3">
              Accountability & Stewardship
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-gray-900 leading-tight">
              Financial Transparency & Year 1 Budget
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              We operate with strict accountability. Below is our projected relief and operational budget for Year 1, detailing exactly where every donation goes.
            </p>
          </div>

          {/* Goals Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {yearOneGoals.map((goal, idx) => (
              <div key={idx} className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 shadow-xs hover:shadow-md transition-all">
                <p className="text-3xl sm:text-5xl font-extrabold text-amber-600 font-heading">{goal.value}</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 mt-2">{goal.label}</p>
                <p className="text-sm text-gray-600 mt-1">{goal.detail}</p>
              </div>
            ))}
          </div>

          {/* Clean Executive Financial Table */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xs overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-gray-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-gray-50/50">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">
                  Year 1 Budget Allocation
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Total Projected: <strong className="text-gray-900">${budget.total.toLocaleString()} USD (~GH₵ 52,000)</strong>
                </p>
              </div>
              <span className="text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-100/80 px-4 py-1.5 rounded-full border border-emerald-300 w-fit">
                100% Direct Community Aid & Welfare
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-base">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-100/80 text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Allocation Purpose</th>
                    <th className="py-4 px-6 text-right">Amount (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {budget.items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">{item.category}</td>
                      <td className="py-4 px-6 text-gray-600 text-sm sm:text-base">{item.description}</td>
                      <td className="py-4 px-6 text-right font-mono text-emerald-800 font-bold text-base sm:text-lg">${item.amount}</td>
                    </tr>
                  ))}
                  <tr className="bg-amber-50/60 font-bold text-gray-900 border-t-2 border-amber-200 text-lg">
                    <td className="py-4 px-6" colSpan={2}>Total Year 1 Allocation</td>
                    <td className="py-4 px-6 text-right font-mono text-amber-700 font-extrabold text-xl">${budget.total.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Daily Spiritual Reflection */}
      <section className="py-20 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <DailyAyahReflection />
        </div>
      </section>

      {/* 7. Community Reflections */}
      <ImpactStories />

      {/* 8. How You Can Support: Clean, High-Impact Cards */}
      <section className="py-20 sm:py-28 bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200 inline-block mb-3">
              Ways to Give
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-heading">
              Support Strive Ghana
            </h2>
            <p className="mt-3 text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              Your gift directly provides prayer mats, Qurans, orphan sponsorships, and weekly halaqah meals right here in Ejisu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {howYouCanSupport.map((option) => (
              <div
                key={option.id}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
                    {option.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">
                    {option.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    {option.description}
                  </p>
                </div>

                <Link
                  href={option.href}
                  className="w-full py-3.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white text-center rounded-xl text-sm sm:text-base font-semibold transition-all flex items-center justify-center space-x-2 shadow-xs hover:shadow-sm"
                >
                  <span>{option.cta}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          {/* Simple Zakat / Sadaqah Assurance Note */}
          <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-white border border-emerald-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-base text-emerald-950">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={26} />
              </div>
              <span className="leading-relaxed">
                <strong className="text-gray-900 font-bold">100% Zakat & Sadaqah Compliant:</strong> Donations directly fund beginner kits, orphan food supplies, and local student scholarships with complete transparency.
              </span>
            </div>
            <Link
              href="/donate"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-base flex-shrink-0 shadow-sm transition-all hover:-translate-y-0.5"
            >
              Donate Online
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <FaqSection />

      {/* 10. Modern, Elegant Dark Slate Call to Action */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Connect with Strive Ghana
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Whether you want to enroll in weekend classes, volunteer as a mentor, or visit our center in Ejisuman, our doors are always open.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl text-base sm:text-lg transition-all shadow-md hover:-translate-y-0.5"
            >
              Contact Our Center
            </Link>
            <Link
              href="/donate"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold rounded-xl text-base sm:text-lg transition-all backdrop-blur-xs hover:-translate-y-0.5"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}