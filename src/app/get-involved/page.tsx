'use client'

import Link from 'next/link'
import { Users, Heart, BookOpen, UserPlus, ArrowRight, Check, MessageCircle, Phone, MapPin } from 'lucide-react'
import { organizationData } from '@/data/organization'

export default function GetInvolvedPage() {
  const { contact } = organizationData

  const volunteerRoles = [
    {
      title: "Youth Mentor",
      description: "Walk alongside high school and vocational students, offering encouragement, life advice, and steady brotherly guidance.",
      commitment: "2–3 hours weekly (Fridays or weekends)"
    },
    {
      title: "Foundational Tutor",
      description: "Teach basic Quran reading, proper pronunciation of prayer verses, or help students with school academic subjects.",
      commitment: "Saturday mornings (9:00 AM – 12:00 PM)"
    },
    {
      title: "Convert Companion",
      description: "Pair with a new brother or sister who recently embraced Islam to sit with them at the masjid and answer basic everyday questions.",
      commitment: "Sundays & occasional check-ins via WhatsApp"
    },
    {
      title: "Events & Logistics Volunteer",
      description: "Help organize weekend tea circles, hall setup, community food distributions, and educational retreats in Ejisu.",
      commitment: "Monthly or event-based"
    }
  ]

  return (
    <div className="space-y-0">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 inline-block">
              Volunteer & Mentorship
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Get Involved with Strive Ghana
            </h1>
            <p className="text-lg sm:text-2xl text-gray-200 max-w-3xl leading-relaxed pt-1 font-normal">
              Join our network of elder brothers, tutors, and volunteers dedicated to supporting youth, orphans, and new converts across Ejisuman.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Reassurance & Real-World Context */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-lg bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-start gap-5">
            <div className="w-10 h-10 rounded-md bg-amber-50 text-amber-800 flex items-center justify-center flex-shrink-0 border border-amber-200">
              <Heart size={20} className="text-amber-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-heading text-gray-900">
                You Do Not Need to Be a Scholar to Make a Difference
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                What a young person or new convert in our community needs most is simply someone who shows up with kindness and consistency. An older brother who will listen without harsh judgment, share a warm cup of tea, and encourage them on their journey of faith. We provide all the curriculum, materials, and coordination support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Volunteer Pathways */}
      <section className="py-16 sm:py-24 bg-[#faf9f5] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-1">
              Ways to Serve
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
              Current Volunteer Roles
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Choose an area where your skills, background, or time can best benefit the community in Ejisu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerRoles.map((role, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-white border border-gray-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold font-heading text-gray-900 mb-2">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {role.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-medium text-gray-700">Time commitment:</span>
                  <span>{role.commitment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Simple Application Steps */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-1">
              Next Steps
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
              How to Join Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <span className="w-7 h-7 rounded bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center font-mono">
                1
              </span>
              <h4 className="font-bold text-gray-900">Reach Out</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Message us on WhatsApp or call our center to let us know you would like to volunteer.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <span className="w-7 h-7 rounded bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center font-mono">
                2
              </span>
              <h4 className="font-bold text-gray-900">Meet in Ejisu</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Join Dr. Salis and the coordinators at the center for a brief chat over tea.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <span className="w-7 h-7 rounded bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center font-mono">
                3
              </span>
              <h4 className="font-bold text-gray-900">Begin Mentoring</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Receive materials and begin supporting young Muslims or new converts in our weekend circles.
              </p>
            </div>
          </div>

          {/* Direct WhatsApp Callout in Warm Gold */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-amber-950 text-base">
                Ready to Volunteer?
              </h4>
              <p className="text-xs text-amber-800 mt-0.5">
                Send a quick message directly to Dr. Salis and our coordination team.
              </p>
            </div>
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Salam Alaykum, I would like to volunteer with Strive Ghana in Ejisu.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-all shadow-sm shadow-amber-500/20 flex-shrink-0"
            >
              <MessageCircle size={15} className="text-slate-950" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}