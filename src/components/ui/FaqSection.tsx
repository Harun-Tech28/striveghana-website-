'use client'

import { useState, useMemo } from 'react'
import { organizationData } from '@/data/organization'
import { ChevronDown, Search, X } from 'lucide-react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const faqs = organizationData.faqs || []

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'convert', label: 'New Converts' },
    { id: 'zakat', label: 'Zakat & Donations' },
    { id: 'education', label: 'Classes & Study' },
    { id: 'governance', label: 'Governance' }
  ]

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch = 
        searchQuery === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())

      let matchesCat = true
      if (selectedCategory === 'convert') {
        matchesCat = faq.question.toLowerCase().includes('convert') || faq.answer.toLowerCase().includes('convert') || faq.question.toLowerCase().includes('shahada')
      } else if (selectedCategory === 'zakat') {
        matchesCat = faq.question.toLowerCase().includes('zakat') || faq.answer.toLowerCase().includes('zakat') || faq.question.toLowerCase().includes('sadaq') || faq.answer.toLowerCase().includes('donation')
      } else if (selectedCategory === 'education') {
        matchesCat = faq.question.toLowerCase().includes('class') || faq.answer.toLowerCase().includes('learn') || faq.question.toLowerCase().includes('arabic')
      } else if (selectedCategory === 'governance') {
        matchesCat = faq.question.toLowerCase().includes('board') || faq.answer.toLowerCase().includes('ulama') || faq.question.toLowerCase().includes('govern') || faq.answer.toLowerCase().includes('transparen')
      }

      return matchesSearch && matchesCat
    })
  }, [faqs, searchQuery, selectedCategory])

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-200" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 block mb-1">
            Questions & Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Clear information about our convert support, classes, Zakat policy, and community center in Ejisu.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="space-y-3">
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. zakat, classes, new converts)..."
              className="w-full pl-10 pr-9 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary-600 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-primary-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {filteredFaqs.length === 0 ? (
            <p className="py-6 text-sm text-gray-500 text-center">
              No questions found matching your search. Please contact us directly.
            </p>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-primary-700 transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-primary-700' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed pr-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}
