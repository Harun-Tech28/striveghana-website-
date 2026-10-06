'use client'

import { useState, useEffect } from 'react'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

export interface ToastMessage {
  id: string
  message: string
  type?: 'success' | 'info' | 'warning'
  duration?: number
}

// Global helper to fire toasts from anywhere in the application
export function triggerToast(message: string, type: 'success' | 'info' | 'warning' = 'success', duration = 3500) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('strive-toast', {
        detail: { message, type, duration }
      })
    )
  }
}

export default function ToastNotification() {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  useEffect(() => {
    const handleToastEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string; type?: 'success' | 'info' | 'warning'; duration?: number }>
      const newToast: ToastMessage = {
        id: Math.random().toString(36).substring(2, 9),
        message: customEvent.detail.message,
        type: customEvent.detail.type || 'success',
        duration: customEvent.detail.duration || 3500
      }

      setToasts((prev) => [...prev.slice(-2), newToast])

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id))
      }, newToast.duration)
    }

    window.addEventListener('strive-toast', handleToastEvent)
    return () => window.removeEventListener('strive-toast', handleToastEvent)
  }, [])

  if (toasts.length === 0) return null

  return (
    <div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center space-y-2 pointer-events-none w-[90%] sm:w-auto max-w-md"
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success'
        const isWarning = toast.type === 'warning'

        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center justify-between space-x-3 px-4 py-3 rounded-lg shadow-lg border bg-gray-900 text-white border-gray-800 text-xs sm:text-sm font-medium w-full sm:w-auto"
          >
            <div className="flex items-center space-x-2.5">
              {isSuccess && <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />}
              {isWarning && <AlertCircle size={16} className="text-amber-400 flex-shrink-0" />}
              {!isSuccess && !isWarning && <Info size={16} className="text-blue-400 flex-shrink-0" />}
              <span className="leading-snug">{toast.message}</span>
            </div>
            <button
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              className="text-gray-400 hover:text-white p-0.5 rounded transition-colors"
              aria-label="Close notification"
            >
              <X size={14} />
            </button>
          </div>
        )
      })}
    </div>
  )
}
