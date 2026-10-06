'use client'

import Link from 'next/link'
import { organizationData } from '@/data/organization'
import { ArrowRight, Check, MessageCircle, Calendar, Clock, MapPin } from 'lucide-react'

export default function ProgramsPage() {
  const { programs, contact } = organizationData

  const programImages: Record<string, string> = {
    'new-muslim-care': '/images/convert-care-charity.jpg',
    'orphan-care': '/images/orphan-care-ghana.jpg',
    'islamic-learning': '/images/community-brotherhood.jpg',
    'social-integration': '/images/ghana-muslim-charity.jpg',
    // Fallback aliases
    'new-muslim': '/images/convert-care-charity.jpg',
    'youth': '/images/orphan-care-ghana.jpg',
    'learning': '/images/community-brotherhood.jpg',
    'social': '/images/ghana-muslim-charity.jpg'
  }

  const trackSchedules: Record<string, { days: string; time: string; venue: string }> = {
    'new-muslim-care': { days: 'Sundays & One-on-One', time: '2:00 PM – 4:30 PM', venue: 'Strive Center, Ejisuman' },
    'orphan-care': { days: 'Daily Care & School Support', time: 'Full Day Care & Mentorship', venue: 'Ejisu Orphan Care Home' },
    'islamic-learning': { days: 'Saturday Mornings', time: '9:00 AM – 1:00 PM', venue: 'Strive Learning Center' },
    'social-integration': { days: 'Monthly Relief & Weekends', time: 'Flexible Hours', venue: 'Ejisu Community & Masajid' }
  }

  return (
    <div className="space-y-0">
      {/* 1. Clean Page Header */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 inline-block">
              Strive Ghana Activities
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Our Core Educational & Mentorship Programs
            </h1>
            <p className="text-lg sm:text-2xl text-gray-200 max-w-3xl leading-relaxed pt-1 font-normal">
              Structured weekly programs providing step-by-step guidance for new Muslim converts, orphan children, and youth across Ejisuman.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Track Navigator / Summary Bar */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-semibold text-gray-700 uppercase tracking-wider">
              Program Tracks:
            </span>
            <div className="flex flex-wrap gap-2">
              {programs.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-primary-700 hover:text-white rounded-md text-gray-800 font-medium transition-colors"
                >
                  Track {p.keyLetter.toUpperCase()}: {p.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Program Sections: Clean 2-Column Alternating Layout */}
      <section className="py-16 sm:py-24 bg-[#faf9f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {programs.map((program, idx) => {
            const isEven = idx % 2 === 0
            const imagePath = programImages[program.id] || '/images/community-brotherhood.jpg'
            const schedule = trackSchedules[program.id] || { days: 'Weekly', time: 'Afternoon', venue: 'Ejisuman Center' }

            return (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-24 p-6 sm:p-10 rounded-xl bg-white border border-gray-200 shadow-xs"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Content Column */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center space-x-2 text-xs font-semibold text-primary-700 uppercase tracking-wider">
                      <span>Track {program.keyLetter.toUpperCase()}</span>
                      <span>•</span>
                      <span>{program.subtitle}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
                      {program.title}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Weekly Activities */}
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 space-y-2">
                      <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                        What Participants Experience:
                      </h3>
                      <ul className="space-y-1.5">
                        {program.activities.map((act, i) => (
                          <li key={i} className="text-xs sm:text-sm text-gray-700 flex items-start space-x-2">
                            <Check size={14} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Schedule Pill Box */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-600 border-t border-gray-100">
                      <div>
                        <span className="font-semibold text-gray-900 block">Days:</span>
                        <span>{schedule.days}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block">Time:</span>
                        <span>{schedule.time}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block">Venue:</span>
                        <span>{schedule.venue}</span>
                      </div>
                    </div>

                    {/* Action Link */}
                    <div className="pt-2 flex flex-wrap gap-3">
                      <a
                        href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Salam Alaykum, I would like to join the ${program.title} program in Ejisu.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md text-xs font-medium transition-colors"
                      >
                        <MessageCircle size={14} />
                        <span>Register via WhatsApp</span>
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center space-x-1 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-md text-xs font-medium transition-colors"
                      >
                        <span>Ask Questions</span>
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="lg:col-span-5">
                    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-xs">
                      <img
                        src={imagePath}
                        alt={`${program.title} in Ejisuman, Ashanti Region`}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. Weekly Timetable Table */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block mb-1">
              Timetable
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
              Weekly Schedule at a Glance
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              All weekend halaqat and classes take place at 99 BLK IX Ejisuman (Near Family Hospital).
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700 uppercase">
                    <th className="py-3 px-4">Day</th>
                    <th className="py-3 px-4">Program</th>
                    <th className="py-3 px-4">Timing</th>
                    <th className="py-3 px-4">Audience</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-900">Monday – Thursday</td>
                    <td className="py-3 px-4">One-on-One Mentoring & Pastoral Care</td>
                    <td className="py-3 px-4">4:00 PM – 7:00 PM</td>
                    <td className="py-3 px-4">New converts & registered youth</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-900">Friday</td>
                    <td className="py-3 px-4">Post-Jumu'ah Youth Discussion & Tea</td>
                    <td className="py-3 px-4">2:00 PM – 4:00 PM</td>
                    <td className="py-3 px-4">Open to all community brothers</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-900">Saturday Morning</td>
                    <td className="py-3 px-4">Foundational Islamic Classes (Salah, Wudu, Quran)</td>
                    <td className="py-3 px-4">9:00 AM – 1:00 PM</td>
                    <td className="py-3 px-4">All beginners & students</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-900">Sunday Afternoon</td>
                    <td className="py-3 px-4">New Convert Support Circle & Mentorship</td>
                    <td className="py-3 px-4">2:30 PM – 5:00 PM</td>
                    <td className="py-3 px-4">Brothers & sisters newly in Islam</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Want to Join or Sponsor a Student?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Attendance is completely free for all youth, converts, and orphans. If you would like to help us cover textbook and meal costs, consider sponsoring a student.
          </p>
          <div className="pt-3 flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl text-base sm:text-lg transition-all shadow-md hover:-translate-y-0.5"
            >
              Sponsor a Student ($25/mo)
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold rounded-xl text-base sm:text-lg transition-all backdrop-blur-xs hover:-translate-y-0.5"
            >
              Contact Coordinators
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}