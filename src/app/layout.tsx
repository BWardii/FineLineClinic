import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FineLine Clinic - Enhance Your Natural Beauty',
  description: 'Doctor-led treatments. Natural results. Timeless confidence. Professional aesthetic treatments including Botox, fillers, and vitamin infusions with Dr. Ayaan.',
  keywords: 'aesthetic clinic, botox, fillers, vitamin infusions, beauty treatments, cosmetic procedures, FineLine Clinic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 