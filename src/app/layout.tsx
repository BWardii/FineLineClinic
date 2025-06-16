import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FineLine Clinic - Wellness & Aesthetics',
  description: 'Doctor-led treatments. Natural results. Timeless confidence. Professional aesthetic treatments including Botox, fillers, and vitamin infusions with Dr. Ayaan.',
  keywords: 'aesthetic clinic, botox, fillers, vitamin infusions, beauty treatments, cosmetic procedures, FineLine Clinic, wellness, aesthetics',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 