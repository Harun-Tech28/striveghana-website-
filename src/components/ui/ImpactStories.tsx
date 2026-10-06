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
    <section className="py-20 sm:py-28 bg-[#fbfbf9] border-b border-gray-200" id="impact-stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 inline-block mb-3">
              Community Voices
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-gray-900 tracking-tight">
              Reflections from Ejisu
            </h2>
            <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Real stories from individuals supported through mentorship, convert care, and weekend study circles.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredStories.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl border border-gray-200/90 bg-white shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {item.tag}
                  </span>
                  <Quote size={20} className="text-emerald-700/30" />
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6 italic font-serif">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center space-x-3.5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100 flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
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
