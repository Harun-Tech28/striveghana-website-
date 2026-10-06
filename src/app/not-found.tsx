'use client'

import Link from 'next/link'
import { Home, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#faf9f5] py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-lg p-8 border border-gray-200 shadow-xs text-center space-y-5">
        <div className="w-12 h-12 rounded-md bg-primary-50 text-primary-900 mx-auto flex items-center justify-center font-arabic text-xl font-bold border border-primary-100">
          السعي
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-700">
            Error 404
          </span>
          <h1 className="text-2xl font-bold font-heading text-gray-900">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="space-y-2.5 pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-primary-700 hover:bg-primary-800 text-white font-medium rounded-md text-sm transition-colors"
          >
            <Home size={15} />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/programs"
            className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 rounded-md text-sm font-medium transition-colors"
          >
            <Compass size={15} className="text-primary-700" />
            <span>View Programs</span>
          </Link>
        </div>

        <p className="text-xs text-gray-400 border-t border-gray-100 pt-3">
          Strive Ghana • Ejisuman, Ashanti Region
        </p>
      </div>
    </div>
  )
}
