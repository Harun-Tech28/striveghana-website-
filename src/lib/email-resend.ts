import { Resend } from 'resend'

// Create Resend instance only when needed
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey.includes('your_api_key_here')) {
    return null
  }
  return new Resend(apiKey)
}

interface ContactEmailData {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  attachment?: {
    filename: string
    content: string
    type: string
  } | null
}

export async function sendContactNotification(data: ContactEmailData) {
  const { name, email, phone, subject, message, attachment } = data

  const resend = getResendClient()
  if (!resend) {
    console.log('[StriveGhana Contact] Received message (RESEND_API_KEY not configured, logging locally):', {
      name, email, phone, subject, message
    })
    return { success: true, simulated: true }
  }

  try {
    // Add timeout to prevent hanging
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email timeout')), 10000)
    )

    // Prepare email options
    const emailOptions: any = {
      from: 'StriveGhana <onboarding@resend.dev>', // Resend's test email
      to: process.env.NOTIFICATION_EMAIL || 'striveghana1@gmail.com',
      subject: `New Contact Form: ${subject || 'General Inquiry'}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
          <div style="background-color: #0f172a; color: white; padding: 24px 28px; border-radius: 8px 8px 0 0; border-bottom: 3px solid #cba135;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700;">New Contact Form Submission</h1>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #a7f3d0;">Strive Ghana Center • Ejisuman</p>
          </div>
          
          <div style="background: #ffffff; padding: 28px; border: 1px solid #e5e7eb; border-top: none;">
            <div style="margin-bottom: 18px;">
              <strong style="color: #0f172a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Name:</strong>
              <div style="background: #f9fafb; padding: 10px 14px; border-radius: 6px; margin-top: 5px; border: 1px solid #f3f4f6; font-size: 15px;">${name}</div>
            </div>
            
            <div style="margin-bottom: 18px;">
              <strong style="color: #0f172a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
              <div style="background: #f9fafb; padding: 10px 14px; border-radius: 6px; margin-top: 5px; border: 1px solid #f3f4f6; font-size: 15px;">
                <a href="mailto:${email}" style="color: #166534; text-decoration: none;">${email}</a>
              </div>
            </div>
            
            ${phone ? `
            <div style="margin-bottom: 18px;">
              <strong style="color: #0f172a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Phone:</strong>
              <div style="background: #f9fafb; padding: 10px 14px; border-radius: 6px; margin-top: 5px; border: 1px solid #f3f4f6; font-size: 15px;">
                <a href="tel:${phone}" style="color: #166534; text-decoration: none;">${phone}</a>
              </div>
            </div>
            ` : ''}
            
            ${subject ? `
            <div style="margin-bottom: 18px;">
              <strong style="color: #0f172a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Subject:</strong>
              <div style="background: #f9fafb; padding: 10px 14px; border-radius: 6px; margin-top: 5px; border: 1px solid #f3f4f6; font-size: 15px;">${subject}</div>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 18px;">
              <strong style="color: #0f172a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</strong>
              <div style="background: #f9fafb; padding: 14px; border-radius: 6px; border-left: 3px solid #166534; margin-top: 5px; font-size: 14px; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            ${attachment ? `
            <div style="margin-bottom: 18px;">
              <strong style="color: #0f172a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Attachment:</strong>
              <div style="background: #f9fafb; padding: 10px 14px; border-radius: 6px; margin-top: 5px; border: 1px solid #f3f4f6; font-size: 14px;">
                ${attachment.filename}
              </div>
            </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                <strong>Received:</strong> ${new Date().toLocaleString('en-US', { 
                  dateStyle: 'full', 
                  timeStyle: 'short',
                  timeZone: 'Africa/Accra'
                })}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p>Reply directly to <a href="mailto:${email}">${email}</a> to respond.</p>
          </div>
        </div>
      `
    }

    // Add attachment if present
    if (attachment) {
      emailOptions.attachments = [{
        filename: attachment.filename,
        content: attachment.content.split(',')[1], // Remove data:image/png;base64, prefix
      }]
    }

    const resend = getResendClient()
    if (!resend) {
      throw new Error('Resend client not initialized or RESEND_API_KEY missing')
    }
    const result = await Promise.race([
      resend.emails.send(emailOptions),
      timeoutPromise
    ]) as any

    console.log('Email sent via Resend:', result)
    return { success: true, messageId: result.data?.id }
  } catch (error) {
    console.error('Resend email error:', error)
    throw error
  }
}

export async function sendAutoReply(data: ContactEmailData) {
  const { name, email } = data

  try {
    // Add timeout to prevent hanging
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email timeout')), 10000)
    )

    const resend = getResendClient()
    if (!resend) {
      return { success: true, simulated: true }
    }
    await Promise.race([
      resend.emails.send({
      from: 'StriveGhana <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for contacting StriveGhana - السعي',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
          <div style="background-color: #0f172a; color: white; padding: 32px 24px; text-align: center; border-radius: 8px 8px 0 0; border-bottom: 3px solid #cba135;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Strive Ghana</h1>
            <div style="font-size: 26px; color: #cba135; margin: 8px 0; font-family: serif;">السعي</div>
            <p style="margin: 0; font-size: 13px; color: #a7f3d0;">Supporting Muslim Youth, Orphans & New Converts</p>
          </div>
          
          <div style="background: #ffffff; padding: 28px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">As-salamu alaykum, ${name}!</h2>
            
            <p style="font-size: 14px; line-height: 1.6; color: #374151;">Thank you for reaching out to Strive Ghana. We have received your message and truly appreciate your interest in our community work.</p>
            
            <p style="font-size: 14px; line-height: 1.6; color: #374151;">Our team in Ejisuman will review your inquiry and get back to you promptly, typically within 24-48 hours.</p>
            
            <div style="background: #f9fafb; padding: 16px 20px; border-radius: 6px; margin: 24px 0; border: 1px solid #f3f4f6;">
              <h3 style="margin-top: 0; margin-bottom: 10px; color: #0f172a; font-size: 14px;">Contact Information:</h3>
              <p style="margin: 4px 0; font-size: 13px; color: #4b5563;">Email: <a href="mailto:striveghana1@gmail.com" style="color: #166534; text-decoration: none;">striveghana1@gmail.com</a></p>
              <p style="margin: 4px 0; font-size: 13px; color: #4b5563;">Phone: <a href="tel:0542524571" style="color: #166534; text-decoration: none;">054 252 4571</a></p>
              <p style="margin: 4px 0; font-size: 13px; color: #4b5563;">WhatsApp: <a href="https://wa.me/233542524571" style="color: #166534; text-decoration: none;">Chat directly with coordinators</a></p>
            </div>
            
            <p style="margin-top: 24px; font-style: italic; color: #6b7280; font-size: 13px; border-left: 2px solid #cba135; padding-left: 12px;">
              "And strive for Allah with the striving due to Him. He has chosen you." — Quran 22:78
            </p>
          </div>
          
          <div style="text-align: center; padding: 18px; color: #6b7280; font-size: 12px; background: #f3f4f6; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="margin: 0; font-weight: 600; color: #374151;">Strive Ghana (السعي)</p>
            <p style="margin: 2px 0 0 0;">99 BLK IX Ejisuman (Near Family Hospital), Ejisu, Ashanti Region</p>
          </div>
        </div>
      `,
      }),
      timeoutPromise
    ])

    console.log('Auto-reply sent via Resend')
  } catch (error) {
    console.error('Auto-reply error:', error)
  }
}
