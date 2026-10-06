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
    <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 shadow-xs flex flex-col justify-between transition-all hover:border-gray-300 hover:shadow-sm">
      <div>
        {/* Track Label and Title */}
        <div className="mb-4">
          <div className="inline-flex items-center px-2.5 py-1 rounded bg-primary-50 text-primary-800 text-xs font-semibold tracking-wider uppercase mb-2.5 border border-primary-100">
            {trackBadge}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 leading-snug">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1 leading-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Activities List */}
        <div className="mb-6 bg-gray-50 p-4 sm:p-5 rounded-lg border border-gray-100">
          <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wide mb-2.5">
            Key Program Focus:
          </h4>
          <ul className="space-y-2">
            {activities.map((activity, idx) => (
              <li key={idx} className="text-gray-700 text-xs sm:text-sm flex items-start space-x-2.5">
                <Check size={16} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Link */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm">
        <Link
          href={link}
          className="text-primary-700 hover:text-primary-800 font-semibold flex items-center space-x-1.5 transition-colors"
        >
          <span>View program details</span>
          <ArrowRight size={14} />
        </Link>
        <span className="text-gray-500 font-medium">Ejisuman Center</span>
      </div>
    </div>
  )
}

export default ProgramCard