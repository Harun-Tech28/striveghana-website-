'use client'

import { useState } from 'react'
import { organizationData } from '@/data/organization'
import { Calendar, Clock, MapPin, User, MessageCircle, Phone, ExternalLink, CalendarPlus } from 'lucide-react'

import IslamicDivider from '@/components/ui/IslamicDivider'

export default function CommunityCalendar() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const events = organizationData.upcomingEvents || []

  const categories = [
    { id: 'all', label: 'All Gatherings' },
    { id: 'new-converts', label: 'Track A: New Converts' },
    { id: 'youth', label: 'Track B: Youth Circles' },
    { id: 'education', label: 'Track C: Quran & Arabic' },
    { id: 'social', label: 'Track D: Social & Retreats' },
  ]

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(e => e.category === selectedCategory)

  // Helper to generate a Google Calendar link
  const createGoogleCalendarLink = (title: string, details: string, location: string) => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE"
    const textParam = encodeURIComponent(`Strive (S) السعي: ${title}`)
    const detailsParam = encodeURIComponent(`${details}\n\nOrganized by Strive (S) السعي • @AStriveInitiative\nEjisuman, Ejisu, Ashanti Region.`)
    const locationParam = encodeURIComponent(location)
    return `${baseUrl}&text=${textParam}&details=${detailsParam}&location=${locationParam}`
  }

  return (
    <section className="relative overflow-hidden py-24 bg-white border-t border-gray-100" id="community-calendar">
      <div className="absolute inset-0 islamic-pattern-warm opacity-45 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent-gold-dark mb-2 bg-accent-gold/10 px-3.5 py-1 rounded-full">
            <Calendar size={13} className="text-accent-gold-dark" />
            <span>Weekly Gatherings & Open Circles</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-primary-950 tracking-tight">
                Ejisuman Community Schedule
              </h2>
              <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                All our weekly circles and classes are completely free and warmly open. Join us in person at our Ejisuman center or participate virtually.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1.5 bg-gray-100/90 rounded-2xl border border-gray-200 self-start md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-white text-primary-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="p-6 sm:p-8 bg-white rounded-3xl border border-gray-200/90 hover:border-primary-400 hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-800 border border-primary-100">
                    {evt.badge}
                  </span>
                  <span className="text-xs font-bold text-gray-600 flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <Calendar size={13} className="mr-1.5 text-accent-gold-dark" />
                    {evt.day}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary-950 group-hover:text-primary-800 transition-colors">
                  {evt.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {evt.description}
                </p>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-1 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Clock size={15} className="text-primary-600 mr-1.5 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">{evt.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={15} className="text-primary-600 mr-1.5 flex-shrink-0" />
                    <span>{evt.location}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={15} className="text-primary-600 mr-1.5 flex-shrink-0" />
                    <span>Facilitator: <strong className="text-gray-800">{evt.facilitator}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0 pt-2 lg:pt-0">
                <a
                  href={`https://wa.me/${organizationData.contact.whatsapp}?text=${encodeURIComponent(`Salam Alaykum! I would like to attend or RSVP for: ${evt.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={14} />
                  <span>RSVP via WhatsApp</span>
                </a>

                <a
                  href={createGoogleCalendarLink(evt.title, evt.description, evt.location)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-xl text-xs font-semibold transition-colors"
                  title="Add to Google Calendar"
                >
                  <CalendarPlus size={14} className="text-primary-700" />
                  <span>Add to Calendar</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Center Visit Guidance Panel */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 via-gray-100/60 to-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-wider font-bold text-accent-gold-dark">Personal Visits & Counsel</span>
            <h4 className="text-xl font-bold text-primary-950 font-heading">
              Need Private Guidance or Planning a First Visit?
            </h4>
            <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">
              Our center is located at <strong>99 BLK IX Ejisuman (Near Family Hospital)</strong> in Ejisu, Ashanti. Our mentors are available throughout the week for confidential convert coaching and youth counseling.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <a
              href="tel:0542524571"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-xl text-xs font-bold transition-colors shadow-sm"
            >
              <Phone size={14} className="text-primary-700" />
              <span>Call: 054 252 4571</span>
            </a>
            <a
              href={`https://wa.me/${organizationData.contact.whatsapp}?text=${encodeURIComponent("Salam Alaykum! I would like to arrange a private visit to the Strive center in Ejisuman.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-primary-800 hover:bg-primary-900 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              <MessageCircle size={14} />
              <span>Arrange Visit</span>
            </a>
          </div>
        </div>

        <IslamicDivider width="lg" className="mt-12" />

      </div>
    </section>
  )
}
