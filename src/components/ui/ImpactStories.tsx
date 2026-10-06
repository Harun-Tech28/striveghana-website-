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
    <section className="py-16 sm:py-24 bg-[#faf9f5] border-b border-gray-200" id="impact-stories">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block mb-1">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-gray-900 tracking-tight">
              Community Voices from Ejisu
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Reflections from individuals participating in our mentorship, convert care, and weekend study circles.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary-700 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStories.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-lg border border-gray-200 bg-white shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-medium text-primary-800 bg-primary-50 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                  <Quote size={16} className="text-gray-300" />
                </div>

                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-xs sm:text-sm">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-gray-500">
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
