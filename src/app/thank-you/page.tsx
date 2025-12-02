import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | Booking received',
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-5 py-20">
      <div className="max-w-xl w-full text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Thanks — we’ve got your request</h1>
        <p className="text-gray-600 mt-3">We’ll contact you shortly to confirm your appointment. No payment was taken online.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-flex rounded-full bg-gray-900 text-white px-6 py-3 font-semibold">Back to home</Link>
          <Link href="/anti-wrinkle-injections" className="inline-flex rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-800">View Botox offers</Link>
        </div>
      </div>
    </main>
  )
}


