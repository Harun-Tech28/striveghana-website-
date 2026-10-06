'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Calendar,
  HeartHandshake,
  Users,
  BookOpen
} from 'lucide-react'
import Hero from '@/components/ui/Hero'
import TrustBar from '@/components/ui/TrustBar'
import ImpactStories from '@/components/ui/ImpactStories'
import FaqSection from '@/components/ui/FaqSection'
import DailyAyahReflection from '@/components/ui/DailyAyahReflection'
import { organizationData } from '@/data/organization'

export default function Home() {
  const { contact } = organizationData

  return (
    <div className="space-y-0 overflow-x-hidden bg-white text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Executive Hero with Clear, Large Background Image & Warm Gold Typography */}
      <Hero
        title="Strive (S)"
        subtitle="Strive in unity, growing in faith and brotherhood"
        description="Walking beside new Muslim converts and caring for vulnerable orphans in Ejisuman through patient Islamic education, sincere brotherhood, and essential relief."
        backgroundImage="/images/home-hero-bg.png"
        ctaButtons={[
          { text: 'Support Our Mission', href: '/donate', variant: 'primary' },
          { text: 'Explore Programs', href: '/programs', variant: 'outline' }
        ]}
      />

      {/* 2. Executive Credibility & Trust Bar */}
      <TrustBar />

      {/* 2. Personal Welcome from Dr. Salis & Community Center (Humanizing the Mission) */}
      <section className="py-12 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Real Authentic Community Photo - Fully Fluid Aspect Ratio */}
            <div className="lg:col-span-6 w-full">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 group">
                <Image
                  src="/images/community-brotherhood.jpg"
                  alt="Brothers gathered at Strive Ghana Center in Ejisuman"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  <div className="inline-flex items-center space-x-2 bg-amber-500 text-slate-950 font-black text-[10px] sm:text-xs uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1 sm:mb-1.5">
                    <span>Ejisuman Brotherhood</span>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base font-medium leading-snug text-slate-100 line-clamp-2 sm:line-clamp-none">
                    Brothers gather at 99 BLK IX Ejisuman for weekend learning, shared meals, and lifelong fellowship.
                  </p>
                </div>
              </div>
            </div>

            {/* Human Voice: Dr. Salis & The Calling */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-7">
              <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-900 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
                <Sparkles size={14} className="text-amber-600" />
                <span>A Living Sanctuary</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight leading-[1.15]">
                "When someone embraces Islam, our brotherhood has only just begun."
              </h2>

              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal">
                <p>
                  Every year in the Ashanti Region, souls embrace Islam with joy. Masajid celebrate with Takbeer and warm hugs. But on Monday morning, when the crowds disperse, many converts face sudden eviction, silence, and isolation.
                </p>
                <p>
                  At the same time, children who have lost their parents in our neighbourhoods go to sleep without dependable meals or school fees.
                </p>
              </div>

              {/* Dr. Salis Signature Quote */}
              <div className="p-4 sm:p-7 bg-amber-50/40 rounded-2xl sm:rounded-3xl border-l-4 border-l-amber-500 border border-amber-200/60 shadow-xs">
                <p className="italic text-base sm:text-xl lg:text-2xl text-slate-900 leading-relaxed font-serif">
                  "Strive is not an aloof institution. It is an open family home in Ejisuman where the kettle is always warm with tea, an orphan is welcomed with loving arms, and no one ever walks the road of faith alone."
                </p>
                <div className="mt-4 sm:mt-5 flex items-center justify-between pt-3 sm:pt-4 border-t border-amber-200/50">
                  <div>
                    <p className="text-base sm:text-lg font-black text-slate-950">
                      Dr. Salis
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-amber-800">
                      Lead Coordinator & Mentor, Strive Ghana
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-200 shadow-2xs">
                    Ejisuman Center
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/about"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all shadow-md shadow-amber-500/25 hover:-translate-y-0.5 text-center"
                >
                  Read Our Full Story
                </Link>
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Salam Alaykum Dr. Salis, I am visiting the website and would like to learn more about Strive Ghana.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all flex items-center justify-center space-x-2 text-center"
                >
                  <MessageCircle size={18} className="text-amber-400" />
                  <span>Talk with Dr. Salis</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Program Feature 1: New Muslim Revert Pastoral Care (High-Quality Visual Story) */}
      <section className="py-12 sm:py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Story & Details Left */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-900 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
                Program 01 • Revert Pastoral Care
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight leading-[1.15]">
                Walking Beside New Muslims from Day One
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal">
                Learning to perform Wudu and recite Surah Al-Fatiha in Arabic can feel overwhelming. At Strive, experienced mentors sit side-by-side with every new believer, answering questions with patience, warmth, and zero judgment.
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start space-x-3.5 sm:space-x-4 hover:border-amber-300 transition-colors">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center flex-shrink-0 text-sm sm:text-base shadow-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900">
                      Beginner Quran & Prayer Starter Packs
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Every convert receives an English translation Quran, prayer rug, step-by-step Salah handbook, and modest attire.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start space-x-3.5 sm:space-x-4 hover:border-amber-300 transition-colors">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center flex-shrink-0 text-sm sm:text-base shadow-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900">
                      Emergency Lodging & Family Relief
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Immediate safe sanctuary for brothers and sisters who face eviction or rejection by their families after embracing Islam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/donate"
                  className="inline-flex items-center space-x-2 text-sm sm:text-base lg:text-lg font-bold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  <span>Sponsor a Convert Welcome Pack ($25 / GH₵ 350)</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* High Quality Authentic Image Right - Fully Fluid Aspect Ratio */}
            <div className="lg:col-span-6 w-full">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 group">
                <Image
                  src="/images/convert-care-charity.jpg"
                  alt="New Muslim convert pastoral care and brotherly guidance in Ghana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                    Brotherly Mentorship
                  </span>
                  <p className="text-xs sm:text-sm lg:text-base font-medium leading-snug text-slate-100 line-clamp-2 sm:line-clamp-none">
                    "When I took my Shahada, Strive gave me a brother who sat with me every morning until I learned my prayers." — Bilal, Ejisu
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Program Feature 2: Orphan Care & Daily Meals in Ejisuman (High-Quality Visual Story) */}
      <section className="py-12 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* High Quality Authentic Image Left - Fully Fluid Aspect Ratio */}
            <div className="lg:col-span-6 order-2 lg:order-1 w-full">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 group">
                <Image
                  src="/images/orphan-care-ghana.jpg"
                  alt="Caring for Muslim orphans and vulnerable children in Ghana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                    Loving Yateem Care
                  </span>
                  <p className="text-xs sm:text-sm lg:text-base font-medium leading-snug text-slate-100 line-clamp-2 sm:line-clamp-none">
                    Nutritious daily meals, school enrollment, and loving spiritual guidance for vulnerable children across Ejisu.
                  </p>
                </div>
              </div>
            </div>

            {/* Story & Details Right */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 sm:space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-900 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
                Program 02 • Orphan (Yateem) Care
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight leading-[1.15]">
                Raising Muslim Orphans with Dignity and Love
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal">
                The Messenger of Allah ﷺ said: <em>"I and the one who looks after an orphan will be like this in Paradise,"</em> joining his two fingers. We honour this sacred trust every single day.
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/30 border border-amber-200/80 shadow-xs flex items-start space-x-3.5 sm:space-x-4 hover:border-amber-400 transition-colors">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center flex-shrink-0 text-sm sm:text-base shadow-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900">
                      Wholesome Daily Nutrition
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Healthy, balanced hot meals so no child goes hungry after school.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/30 border border-amber-200/80 shadow-xs flex items-start space-x-3.5 sm:space-x-4 hover:border-amber-400 transition-colors">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center flex-shrink-0 text-sm sm:text-base shadow-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900">
                      School Uniforms, Tuition & Books
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Ensuring every orphan child stays enrolled in primary and junior high school.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/donate"
                  className="inline-flex items-center space-x-2 text-sm sm:text-base lg:text-lg font-bold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  <span>Sponsor an Orphan Child ($50 / GH₵ 700 / mo)</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Program Feature 3: Youth Halaqah & Skills Training */}
      <section className="py-12 sm:py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Story & Details Left */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-900 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
                Program 03 • Youth Empowerment
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight leading-[1.15]">
                Saturday Halaqah Circles & Practical Skills
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal">
                Every Saturday from 9:00 AM to 1:00 PM, dozens of young Muslims gather at our Ejisuman center. We teach Quran recitation, character refinement, and practical digital literacy so young Muslims become confident, self-reliant leaders.
              </p>

              <div className="p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs space-y-3.5">
                <div className="flex items-center space-x-2 text-amber-800 font-bold text-xs sm:text-sm uppercase tracking-wider">
                  <Calendar size={16} />
                  <span>Weekly Schedule at Ejisu Sanctuary:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-700 font-medium">
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block font-bold text-sm sm:text-base">Saturday 9:00 AM</strong>
                    <span className="text-slate-600 text-xs sm:text-sm">Quran & Salah Foundations</span>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block font-bold text-sm sm:text-base">Sunday 2:30 PM</strong>
                    <span className="text-slate-600 text-xs sm:text-sm">Convert Care & Mentorship</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/programs"
                  className="inline-flex items-center space-x-2 text-sm sm:text-base lg:text-lg font-bold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  <span>View full curriculum & timetable</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* High Quality Authentic Image Right - Fully Fluid Aspect Ratio */}
            <div className="lg:col-span-6 w-full">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 group">
                <Image
                  src="/images/islamic-learning.jpg"
                  alt="Islamic learning and study circles at Strive Ghana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                    Free for All Youth
                  </span>
                  <p className="text-xs sm:text-sm lg:text-base font-medium leading-snug text-slate-100 line-clamp-2 sm:line-clamp-none">
                    No student is ever turned away. All textbooks, learning kits, and weekend meals are provided 100% free.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Human Giving Section: Direct, Simple & Transparent (NO Complicated Grids) */}
      <section className="py-12 sm:py-20 lg:py-28 bg-white border-b border-slate-100" id="donate-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-12">
          
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-900 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block mb-3">
              Give with Sincerity
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight leading-tight">
              Directly Touch a Life in Ghana
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              You are not giving to an abstract administration. Your gift directly puts a Quran into a new brother’s hands and feeds an orphan child in Ejisu.
            </p>
          </div>

          {/* Two Prominent Human Sponsorship Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
            
            {/* Convert Sponsorship */}
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-amber-50/30 border-2 border-amber-400/80 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <span className="inline-block text-xs font-black uppercase tracking-wider text-amber-950 bg-amber-400 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full mb-3 sm:mb-4">
                  Convert Care
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-slate-950">
                  Sponsor a Convert Welcome Pack
                </h3>
                <div className="my-4 sm:my-5 flex items-baseline space-x-2 pb-3 sm:pb-4 border-b border-amber-200">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950">
                    GH₵ 350
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-500">
                    (~ $25 USD)
                  </span>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
                  Provides a brand new English translation Quran, prayer mat, Salah manual, and first-week living essentials for a newly converted Muslim.
                </p>
              </div>

              <Link
                href="/donate"
                className="w-full py-3.5 sm:py-4 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl sm:rounded-2xl text-center text-base sm:text-lg transition-all shadow-md shadow-amber-500/25 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Heart size={18} className="fill-slate-950" />
                <span>Sponsor a Convert Pack</span>
              </Link>
            </div>

            {/* Orphan Sponsorship */}
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-slate-950 text-white border-2 border-amber-400 shadow-2xl flex flex-col justify-between relative overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl" />
              
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full">
                    Most Sacred Need
                  </span>
                  <span className="text-xs font-bold text-amber-300">
                    Monthly Support
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-white">
                  Sponsor an Orphan's Care & Meals
                </h3>
                <div className="my-4 sm:my-5 flex items-baseline space-x-2 pb-3 sm:pb-4 border-b border-slate-800">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-amber-400">
                    GH₵ 700
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-400">
                    (~ $50 USD / mo)
                  </span>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
                  Covers one full month of wholesome cooked lunches, primary school fees, books, clothing, and loving mentorship for an orphan child in Ejisu.
                </p>
              </div>

              <Link
                href="/donate"
                className="w-full py-3.5 sm:py-4 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl sm:rounded-2xl text-center text-base sm:text-lg transition-all shadow-md shadow-amber-500/30 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Heart size={18} className="fill-slate-950" />
                <span>Sponsor an Orphan Child</span>
              </Link>
            </div>

          </div>

          {/* Simple Zakat & Transparency Assurance Card */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-amber-50/60 border border-amber-300 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-5 text-left">
            <div className="flex items-start sm:items-center space-x-3.5 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 border border-amber-200">
                <ShieldCheck size={28} className="sm:w-8 sm:h-8" />
              </div>
              <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
                <p className="font-black text-slate-950">100% Zakat & Sadaqah Compliant</p>
                <p className="text-slate-600 mt-0.5 text-xs sm:text-sm">
                  Every public cedi and dollar directly funds beginner kits, orphan nutrition, and student school supplies. Zero administrative overhead.
                </p>
              </div>
            </div>
            <Link
              href="/donate"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl sm:rounded-2xl text-sm sm:text-base flex-shrink-0 shadow-sm shadow-amber-500/25 transition-all hover:-translate-y-0.5 text-center"
            >
              Donate via Paystack / MoMo
            </Link>
          </div>

        </div>
      </section>

      {/* 7. Community Reflections & Impact Stories */}
      <ImpactStories />

      {/* 8. Frequently Asked Questions (Accordion) */}
      <FaqSection />

      {/* 9. Daily Spiritual Ayah */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DailyAyahReflection />
        </div>
      </section>

      {/* 10. Akwaaba Invitation & Bottom Call to Action */}
      <section className="py-12 sm:py-20 lg:py-28 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 inline-block">
            Akwaaba — You Have a Family in Ejisuman
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
            Connect with Dr. Salis & Strive Ghana
          </h2>
          <p className="text-base sm:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you are taking your first steps in Islam, looking to sponsor a student, or want to visit our center at 99 BLK IX Ejisuman, our doors are always open.
          </p>
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all shadow-lg shadow-amber-500/25 hover:-translate-y-0.5 text-center"
            >
              Visit Our Center in Ejisu
            </Link>
            <Link
              href="/donate"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-amber-500 hover:text-slate-950 border border-amber-400/50 text-amber-300 font-bold rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all backdrop-blur-xs hover:-translate-y-0.5 text-center"
            >
              Support With a Donation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}