import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CommunityFloatingWidget from '@/components/ui/CommunityFloatingWidget'
import StickyMobileBar from '@/components/ui/StickyMobileBar'
import ScrollToTop from '@/components/ui/ScrollToTop'
import ToastNotification from '@/components/ui/ToastNotification'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const viewport: Viewport = {
  themeColor: '#bc9646',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://striveghana.org'),
  title: 'Strive (S) - السعي | Strive in unity, growing in faith and brotherhood',
  description: 'To support and empower youth and new converts by fostering faith, unity, and personal growth through education, mentorship, and community engagement in Ghana.',
  keywords: 'Strive, StriveGhana, السعي, AStriveInitiative, Islamic organization, Ghana, youth empowerment, new converts, Shahada, Islamic education, mentorship, Ejisuman, Ashanti',
  authors: [{ name: 'Strive (S) السعي' }],
  icons: {
    icon: '/images/striveghana-logo.png',
    shortcut: '/images/striveghana-logo.png',
    apple: '/images/striveghana-logo.png',
  },
  openGraph: {
    title: 'Strive (S) - السعي | Strive in unity, growing in faith and brotherhood',
    description: 'A faith-based, community-driven initiative in Ghana designed to bring together young Muslims and new converts.',
    url: 'https://striveghana.org',
    siteName: 'Strive (S) السعي',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/striveghana-logo.png',
        width: 800,
        height: 800,
        alt: 'Strive Logo - السعي',
      },
      {
        url: '/images/community-brotherhood.jpg',
        width: 1200,
        height: 675,
        alt: 'Strive Ghana Muslim Brotherhood and Community Center',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strive (S) - السعي',
    description: 'Together, We Strive for Faith and Brotherhood. @AStriveInitiative',
    creator: '@AStriveInitiative',
    images: ['/images/striveghana-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen pb-16 sm:pb-0">
          {children}
        </main>
        <Footer />
        <CommunityFloatingWidget />
        <StickyMobileBar />
        <ScrollToTop />
        <ToastNotification />
      </body>
    </html>
  )
}