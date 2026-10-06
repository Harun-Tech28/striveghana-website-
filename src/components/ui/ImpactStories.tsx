'use client'

import { useState } from 'react'
import { organizationData } from '@/data/organization'
import { Quote } from 'lucide-react'

export default function ImpactStories() {
  const testimonials = organizationData.testimonials || []
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filterOptions = [
    { id: 'all', label: 'All Reflections' },
    { id: 'New Convert Support', label: 'New Converts' },
    { id: 'Youth Empowerment', label: 'Youth Mentorship' },
    { id: 'Mentorship Circle', label: 'Mentors' },
    { id: 'Student Sponsorship', label: 'Sponsored Students' },
  ]

  const filteredStories = activeFilter === 'all'
    ? testimonials
    : testimonials.filter(item => item.tag.toLowerCase().includes(activeFilter.toLowerCase()) || item.tag === activeFilter)

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100" id="impact-stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              Community Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Reflections from Ejisuman
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl leading-relaxed">
              Real reflections from converts, youth mentors, and families supported by Strive.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.slice(0, 4).map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStories.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {item.tag}
                  </span>
                  <Quote size={20} className="text-amber-500/40" />
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic font-serif">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center space-x-3.5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-200 flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
