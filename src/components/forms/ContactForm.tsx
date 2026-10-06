'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle, Paperclip, X } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  interest: string
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string>('')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileError('')
    
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size must be less than 5MB')
        setSelectedFile(null)
        return
      }
      
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg',
        'image/png',
        'image/jpg'
      ]
      
      if (!allowedTypes.includes(file.type)) {
        setFileError('Only PDF, Word documents, and images (JPG, PNG) are allowed')
        setSelectedFile(null)
        return
      }
      
      setSelectedFile(file)
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
    setFileError('')
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      let fileData = null
      if (selectedFile) {
        const reader = new FileReader()
        fileData = await new Promise((resolve, reject) => {
          reader.onload = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(selectedFile)
        })
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: `[${data.interest}] ${data.subject}`,
          message: data.message,
          attachment: fileData ? {
            filename: selectedFile?.name,
            content: fileData,
            type: selectedFile?.type
          } : null
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      reset()
      setSelectedFile(null)
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold font-heading text-gray-900 tracking-tight">
          Send Us a Message
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Fill out the form below and a coordinator from our Ejisu center will reply promptly.
        </p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Interest Category */}
        <div>
          <label htmlFor="interest" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
            Area of Interest *
          </label>
          <select
            id="interest"
            {...register('interest', { required: 'Please select an area of interest' })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600 bg-white"
          >
            <option value="">Select an area...</option>
            <option value="New Muslim Care">New Muslim Care & Mentorship</option>
            <option value="Youth Empowerment">Youth Leadership & Mentorship</option>
            <option value="Islamic Learning">Weekend Islamic Classes (Salah, Wudu, Quran)</option>
            <option value="Social Integration">Community Retreats & Halqas</option>
            <option value="Sponsor a Student">Sponsoring a Student / Financial Support</option>
            <option value="Volunteer / Mentor">Volunteering as a Mentor</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          {errors.interest && (
            <p className="mt-1 text-xs text-red-600">{errors.interest.message}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            {...register('subject', { required: 'Subject is required' })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600"
            placeholder="Subject of your message"
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
            Message *
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message', { required: 'Message is required' })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600 resize-vertical"
            placeholder="Write your message here..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
            Attachment (Optional)
          </label>
          <div className="flex items-center space-x-2">
            <label className="flex-1 cursor-pointer">
              <div className="w-full px-3 py-2 border border-dashed border-gray-300 hover:border-gray-400 rounded-md transition-colors flex items-center space-x-2 text-xs text-gray-600 bg-gray-50">
                <Paperclip className="w-3.5 h-3.5 text-gray-400" />
                <span className="truncate">{selectedFile ? selectedFile.name : 'Choose file (PDF, Word, Images up to 5MB)'}</span>
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="hidden"
              />
            </label>
            {selectedFile && (
              <button
                type="button"
                onClick={removeFile}
                className="p-1.5 text-gray-500 hover:text-red-600 rounded transition-colors"
                title="Remove attachment"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {fileError && (
            <p className="mt-1 text-xs text-red-600">{fileError}</p>
          )}
        </div>

        {/* Submit Button in Prestigious Gold */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-gray-300 text-slate-950 font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center space-x-2 text-sm shadow-md shadow-amber-500/20"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-950"></div>
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 fill-slate-950" />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Status Confirmation */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-900 text-xs sm:text-sm space-y-1">
            <div className="flex items-center space-x-2 font-semibold text-emerald-800">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Thank you! Your message has been sent.</span>
            </div>
            <p className="text-emerald-700">
              Our team at 99 BLK IX Ejisuman will review it and reply within 24–48 hours.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md flex items-start space-x-2 text-red-700 text-xs">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Unable to send message via form.</p>
              <p className="mt-0.5">
                Please contact us directly on WhatsApp or call <strong>0542524571</strong>.
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm