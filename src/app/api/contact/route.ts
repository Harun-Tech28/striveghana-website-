import { NextRequest, NextResponse } from 'next/server'
import { sendContactNotification, sendAutoReply } from '@/lib/email-resend'

// Mark this route as dynamic
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, email, phone, subject, message, attachment } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email notifications
    try {
      await Promise.all([
        sendContactNotification({ name, email, phone, subject, message, attachment }),
        sendAutoReply({ name, email, phone, subject, message }),
      ])
    } catch (emailError: any) {
      console.error('Email sending error:', emailError)
      return NextResponse.json(
        {
          error: 'Failed to send email notification',
          details: process.env.NODE_ENV === 'development' ? emailError.message : undefined,
        },
        { status: 500 }
      )
    }

    // Send success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        data: {
          sentAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      {
        error: 'Failed to submit contact form',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    )
  }
}


