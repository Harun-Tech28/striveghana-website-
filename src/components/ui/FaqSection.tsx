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
    <section className="py-20 sm:py-28 bg-white border-b border-gray-200" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-900 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Clear information about our convert support, classes, Zakat policy, and community center in Ejisu.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. zakat, classes, new converts, momo)..."
              className="w-full pl-11 pr-10 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all shadow-xs text-slate-900"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-amber-50 hover:text-amber-900'
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
            <p className="py-8 text-base text-gray-500 text-center">
              No questions found matching your search. Please message us on WhatsApp or visit the center.
            </p>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-amber-700 transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-base text-slate-600 leading-relaxed pr-6 font-normal">
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
