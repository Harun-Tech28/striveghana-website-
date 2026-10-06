'use client'

import Link from 'next/link'
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  HeartHandshake, 
  Home as HomeIcon, 
  GraduationCap,
  BookOpen,
  Calendar,
  Users
} from 'lucide-react'
import Hero from '@/components/ui/Hero'
import ImpactStories from '@/components/ui/ImpactStories'
import DailyAyahReflection from '@/components/ui/DailyAyahReflection'
import { organizationData } from '@/data/organization'

export default function Home() {
  const { programs, contact } = organizationData

  const corePillars = [
    {
      title: "New Muslim Pastoral Care",
      arabic: "رعاية المهتدين",
      description: "Welcoming new converts with beginner prayer instruction, English Quran kits, and patient 1-on-1 brotherly mentorship.",
      icon: HeartHandshake,
      badge: "Shahada Support",
      link: "/programs#new-muslim",
      color: "emerald"
    },
    {
      title: "Orphan Shelter & Daily Meals",
      arabic: "كفالة اليتيم",
      description: "Providing wholesome daily nutrition, safe emergency accommodation, and school sponsorship for vulnerable orphans in Ejisu.",
      icon: HomeIcon,
      badge: "Orphan Care",
      link: "/programs#orphan-care",
      color: "amber"
    },
    {
      title: "Youth Circles & Livelihoods",
      arabic: "تمكين الشباب",
      description: "Weekly Saturday halaqah, Islamic character building, and digital literacy skills to help Ghanaian youth thrive with dignity.",
      icon: GraduationCap,
      badge: "Youth Leadership",
      link: "/programs#youth",
      color: "blue"
    }
  ]

  const givingOptions = [
    {
      title: "Convert Starter Pack",
      amountUSD: "$25",
      amountGHS: "GH₵ 350",
      description: "Provides a prayer mat, beginner Arabic/English Quran, prayer guide, and modest clothing for a newly converted Muslim.",
      actionText: "Sponsor a Convert",
      badge: "High Immediate Impact",
      popular: false
    },
    {
      title: "Sponsor an Orphan's Care",
      amountUSD: "$50",
      amountGHS: "GH₵ 700",
      description: "Covers one month of nutritious daily meals, primary school fees, books, and medical care for an orphan at our center.",
      actionText: "Sponsor an Orphan",
      badge: "Most Urgent Need",
      popular: true
    },
    {
      title: "Sanctuary & General Sadaqah",
      amountUSD: "Any",
      amountGHS: "Custom",
      description: "Directly funds safe emergency lodging for estranged converts, center utilities, teacher stipends, and relief supplies.",
      actionText: "Give Sadaqah",
      badge: "Ongoing Charity",
      popular: false
    }
  ]

  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* 1. Grounded Hero with Clear, Large Background Image & Responsive Controls */}
      <Hero
        title="Strive (S)"
        subtitle="Strive in unity, growing in faith and brotherhood"
        description="Walking beside new Muslim converts and vulnerable orphans in Ejisuman through patient Islamic education, sincere brotherhood, and essential relief."
        backgroundImage="/images/home-hero-bg.png"
        ctaButtons={[
          { text: 'Support Our Mission', href: '/donate', variant: 'primary' },
          { text: 'Explore Programs', href: '/programs', variant: 'outline' }
        ]}
      />

      {/* 2. Core Pillars: Simple, Attractive & Scannable */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
              <Sparkles size={13} className="text-emerald-600" />
              <span>What We Do</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Three Sacred Responsibilities
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Simple, authentic, and compassionate care rooted right here in the Ashanti Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {corePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                        <IconComponent size={24} />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-arabic text-amber-600 font-medium mb-3">
                      {pillar.arabic}
                    </p>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <Link
                    href={pillar.link}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors pt-4 border-t border-slate-200/80 group-hover:translate-x-1 duration-200"
                  >
                    <span>Learn how this works</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Community Reality & Founding Story: High Credibility, Human & Concise */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Story Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Our Sacred Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                No convert left behind. <br className="hidden sm:inline" />
                No orphan left alone.
              </h2>
              
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                When someone embraces Islam in Ghana, it is a moment of pure joy. Yet in the critical weeks following the Shahada, many new converts face family estrangement, eviction, and the loneliness of learning basic prayers on their own.
              </p>
              
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Strive was established in Ejisuman to be a living family home—where converts and orphans receive patient guidance, hot meals, school enrollment, and sincere brotherhood without judgment.
              </p>

              {/* Leadership Quote Card */}
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-emerald-600">
                <p className="italic text-sm sm:text-base text-slate-800 leading-relaxed font-serif">
                  "The true test of our brotherhood is how we care for someone on Monday morning after the Shahada celebration has ended—when they need a patient brother to sit with them over tea and practice Surah Al-Fatiha."
                </p>
                <p className="text-sm font-bold text-slate-900 mt-3">
                  — Dr. Salis, Lead Coordinator, Strive Ghana
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl text-center text-sm sm:text-base transition-all shadow-sm hover:-translate-y-0.5"
                >
                  Read Our Full Story
                </Link>
                <Link
                  href="/get-involved"
                  className="px-6 py-3.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold rounded-xl text-center text-sm sm:text-base transition-all shadow-sm hover:-translate-y-0.5"
                >
                  Volunteer With Us
                </Link>
              </div>
            </div>

            {/* Ejisuman Center Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                    <MapPin size={14} />
                    <span>Ejisuman Headquarters</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Strive Sanctuary & Center
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    99 BLK IX Ejisuman (Near Family Hospital), Ashanti Region
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-5 space-y-3.5 text-sm text-slate-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <p><strong className="text-slate-900">Daily Open Sanctuary:</strong> Prayer instruction, Quran starter kits, and warm hospitality.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <p><strong className="text-slate-900">Orphan Care & Feeding:</strong> Nutritious meals, clothing, and primary education sponsorship.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <p><strong className="text-slate-900">Emergency Shelter:</strong> Safe temporary housing for converts facing family rejection.</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5 space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600">
                    <span>Direct Helpline:</span>
                    <a href="tel:0542524571" className="font-bold text-slate-900 hover:text-emerald-700 transition-colors">
                      054 252 4571
                    </a>
                  </div>
                  <a
                    href="https://wa.me/233542524571?text=Salam%20Alaykum,%20I%20would%20like%20to%20learn%20more%20about%20Strive%20Ghana."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Active Programs: Compact & Engaging */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
                Weekly Activities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                Our Core Programs
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-xl">
                Structured circles in Ejisu designed to mentor new Muslims and care for orphans.
              </p>
            </div>
            <Link
              href="/programs"
              className="text-sm sm:text-base font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1.5 transition-colors flex-shrink-0"
            >
              <span>View full weekly timetable</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.slice(0, 3).map((program, index) => (
              <div
                key={program.id}
                className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {program.keyLetter} • Program Track
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      Weekly
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">
                    {program.title}
                  </h3>
                  <p className="text-xs text-amber-600 font-medium mb-3">
                    {program.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {program.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/programs#${program.id}`}
                    className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center space-x-1"
                  >
                    <span>Program schedule & details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Direct Ways to Give: Simple, Transparent & High-Converting */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-gray-200" id="donate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              Give with Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Support Strive Ghana
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              100% of your donation directly provides Quran kits, orphan food supplies, and safe sanctuary in Ejisuman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {givingOptions.map((opt, idx) => (
              <div
                key={idx}
                className={`p-7 sm:p-8 rounded-2xl bg-white border transition-all duration-200 flex flex-col justify-between ${
                  opt.popular
                    ? 'border-emerald-500 shadow-lg ring-1 ring-emerald-500 relative'
                    : 'border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {opt.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-xs">
                    Most Urgent Need
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {opt.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">
                    {opt.title}
                  </h3>

                  <div className="my-4 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-extrabold text-slate-900 font-heading">
                        {opt.amountGHS}
                      </span>
                      <span className="text-sm font-semibold text-slate-500">
                        (~{opt.amountUSD})
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {opt.description}
                  </p>
                </div>

                <Link
                  href="/donate"
                  className={`w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold transition-all flex items-center justify-center space-x-2 shadow-xs ${
                    opt.popular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <Heart size={16} className="fill-white" />
                  <span>{opt.actionText}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Simple Zakat & Transparency Assurance Card */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 text-slate-800">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-200">
                <ShieldCheck size={26} />
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-bold text-slate-900 text-base">100% Zakat & Sadaqah Compliant</p>
                <p className="text-slate-600 mt-0.5">
                  Funds directly support vulnerable orphans and needy converts in accordance with authentic Islamic principles.
                </p>
              </div>
            </div>
            <Link
              href="/donate"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm flex-shrink-0 shadow-sm transition-all hover:-translate-y-0.5"
            >
              Donate via Paystack / MoMo
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Daily Spiritual Reflection */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DailyAyahReflection />
        </div>
      </section>

      {/* 7. Community Reflections */}
      <ImpactStories />

      {/* 8. Modern Executive Bottom Call to Action */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Connect with Strive Ghana
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you want to join weekend classes, volunteer as a mentor, or visit our center at 99 BLK IX Ejisuman, our doors are always open.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row gap-3.5 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-base transition-all shadow-md hover:-translate-y-0.5"
            >
              Contact Dr. Salis & Team
            </Link>
            <Link
              href="/donate"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold rounded-xl text-base transition-all backdrop-blur-xs hover:-translate-y-0.5"
            >
              Support With a Donation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}