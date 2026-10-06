'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

interface ProgramCardProps {
  title: string
  subtitle?: string
  description: string
  activities: string[]
  icon?: string
  link: string
  index?: number
}

const ProgramCard = ({ title, subtitle, description, activities, link, index = 0 }: ProgramCardProps) => {
  const trackLabels = ['Track 01 • Revert Care', 'Track 02 • Yateem Welfare', 'Track 03 • Foundations', 'Track 04 • Fellowship']
  const trackBadge = trackLabels[index] || `Track 0${index + 1}`

  return (
    <div className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-200/90 shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between transition-all duration-200">
      <div>
        {/* Track Label and Title */}
        <div className="mb-5">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 border border-emerald-200">
            {trackBadge}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-snug">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600 font-medium mt-1.5 leading-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 font-normal">
          {description}
        </p>

        {/* Activities List */}
        <div className="mb-6 bg-slate-50/80 p-5 sm:p-6 rounded-xl border border-gray-100">
          <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
            Core Program Focus:
          </h4>
          <ul className="space-y-2.5">
            {activities.map((activity, idx) => (
              <li key={idx} className="text-gray-700 text-sm sm:text-base flex items-start space-x-3">
                <Check size={18} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Link */}
      <div className="pt-5 border-t border-gray-100 flex items-center justify-between text-sm sm:text-base">
        <Link
          href={link}
          className="text-emerald-800 hover:text-emerald-900 font-bold flex items-center space-x-2 transition-colors"
        >
          <span>View program schedule</span>
          <ArrowRight size={16} />
        </Link>
        <span className="text-xs sm:text-sm text-gray-500 font-semibold bg-gray-100 px-3 py-1 rounded-full">
          Ejisuman Center
        </span>
      </div>
    </div>
  )
}

export default ProgramCard