import { Metadata } from 'next'
import BotoxHero from '@/components/botox-landing/hero'
import BotoxPricing from '@/components/botox-landing/pricing'
import BotoxTrust from '@/components/botox-landing/trust'
import BotoxQuickBook from '@/components/botox-landing/quick-book'

export const metadata: Metadata = {
  title: 'Anti‑Wrinkle (Botox) Offer | 3‑for‑2 | Book Now',
  description: 'Doctor‑led anti‑wrinkle injections. 3‑for‑2 new client offer. From £129/area. Same‑day appointments. Book now in seconds.',
}

export default function BotoxLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Netlify form detection (hidden) */}
      <form name="booking" data-netlify="true" data-netlify-honeypot="bot-field" method="POST" action="/" hidden>
        <input type="hidden" name="form-name" value="booking" />
        <p hidden>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <input name="plan" />
        <input name="price" />
        <input name="name" />
        <input name="email" />
        <input name="phone" />
        <input name="date" />
        <input name="time" />
        <textarea name="note" />
      </form>
      <BotoxHero />
      <BotoxPricing />
      <BotoxTrust />
      <section className="py-16 px-5 bg-white" id="book">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Book in Seconds</h3>
            <p className="text-gray-600 mb-6">Choose your offer, pick a time, and enter your details. We\'ll confirm instantly.</p>
            <BotoxQuickBook />
          </div>
          <div className="lg:sticky lg:top-6 space-y-4">
            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold text-gray-900">What\'s included</h4>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li>• Free consultation with a GMC doctor</li>
                <li>• Premium FDA‑approved products</li>
                <li>• Natural results (3‑5 days)</li>
                <li>• 2‑week review & aftercare</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold text-gray-900">Questions?</h4>
              <p className="text-sm text-gray-600">Prefer to talk? Call us and we\'ll book you in.</p>
              <a href="tel:02071234567" className="mt-3 inline-flex rounded-full bg-gray-900 text-white px-6 py-3 font-semibold">Call 020 7123 4567</a>
            </div>
          </div>
        </div>
      </section>
      {/* Modal lives at the end so it's above in DOM order */}
      <BotoxQuickBook />
      {/* Sticky mobile CTA */}
      <div className="fixed bottom-4 inset-x-4 z-50 md:hidden">
        <a href="?book=open&plan=3-areas" className="flex items-center justify-center rounded-full bg-[#D6B28A] text-[#221a16] py-4 font-bold shadow-xl">Claim 3‑for‑2 & Book Now</a>
      </div>
    </main>
  )
}



