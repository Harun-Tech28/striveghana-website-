'use client'

import { motion } from 'framer-motion'

interface QuranicVerseProps {
  arabicText: string
  translation: string
  reference: string
  className?: string
}

const QuranicVerse = ({ arabicText, translation, reference, className = '' }: QuranicVerseProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br from-primary-50 to-accent-gold/10 rounded-xl p-8 border-l-4 border-accent-gold ${className}`}
    >
      {/* Decorative Top Border */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-gold rounded-full"></div>
      </div>

      {/* Arabic Text */}
      <div className="text-center mb-6">
        <p className="arabic-text text-2xl md:text-3xl text-primary-700 leading-relaxed font-bold">
          {arabicText}
        </p>
      </div>

      {/* English Translation */}
      <div className="text-center mb-4">
        <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
          "{translation}"
        </p>
      </div>

      {/* Reference */}
      <div className="text-center">
        <p className="text-accent-gold font-semibold">
          — {reference}
        </p>
      </div>

      {/* Decorative Bottom Border */}
      <div className="flex justify-center mt-6">
        <div className="w-16 h-1 bg-gradient-to-r from-accent-gold to-primary-500 rounded-full"></div>
      </div>
    </motion.div>
  )
}

export default QuranicVerse