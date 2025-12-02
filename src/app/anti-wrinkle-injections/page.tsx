import { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import EasyWeekWidgetLoader from '@/components/booking/EasyWeekWidgetLoader'
import OpenWidgetButton from '@/components/booking/OpenWidgetButton'
import Footer from '@/components/layout/Footer'
import BotoxHero from '@/components/botox-landing/hero'
import BotoxPricing from '@/components/botox-landing/pricing'
import BotoxTrust from '@/components/botox-landing/trust'
import BotoxQuickBook from '@/components/botox-landing/quick-book'
import Reviews from '@/components/botox-landing/reviews'
import Process from '@/components/botox-landing/process'
import MobileStickyCTA from '@/components/botox-landing/mobile-sticky-cta'

export const metadata: Metadata = {
	title: 'Anti-Wrinkle Injections London | Line Softening by GMC Doctors',
	description:
		'Doctor-led anti-wrinkle injections in London using premium neuromodulators such as Botox® for precise line softening. Same-day appointments, transparent pricing from £129 per area, and a 3-for-2 offer for new clients.',
	keywords: [
		'anti-wrinkle injections London',
		'line softening London',
		'anti-aging injectables London',
		'wrinkle treatment London',
		'forehead lines',
		'crow’s feet',
		'frown lines',
		'GMC doctor',
		'same-day appointments',
	],
	alternates: { canonical: '/anti-wrinkle-injections' },
	openGraph: {
		title: 'Anti-Wrinkle Injections London | GMC Doctors | 3-for-2 Offer',
		description:
			'Doctor-led anti-wrinkle injections in London with premium neuromodulators for natural, line-softening results. Same-day appointments from £129 per area.',
		url: '/anti-wrinkle-injections',
	},
	robots: { index: true, follow: true },
}

export default function AntiWrinkleLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <EasyWeekWidgetLoader />
      {/* Structured data for Service and FAQ to improve ad relevance and QS */}
      <Script id="anti-wrinkle-service-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Anti‑Wrinkle Injections',
          alternateName: 'Line Softening Treatments',
          serviceType: 'Cosmetic procedure',
          areaServed: { '@type': 'City', name: 'London' },
          provider: {
            '@type': 'MedicalClinic',
            name: 'FineLine',
            telephone: '+44 20 7123 4567',
          },
          priceRange: '£129-£189',
          url: '/anti-wrinkle-injections',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'GBP',
            price: '189',
            category: '3 areas (3‑for‑2)',
            availability: 'https://schema.org/InStock',
            url: '/anti-wrinkle-injections#pricing',
          },
        })}
      </Script>
      <Script id="anti-wrinkle-faq-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How much do anti-wrinkle injections cost in London?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Treatments start from £129 per area. Our 3‑for‑2 offer is £189 for three areas for new clients.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long do results last?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Results typically last 3–4 months. Longevity varies based on factors like metabolism and dosing.',
              },
            },
            {
              '@type': 'Question',
              name: 'When will I see results?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Most patients begin to see results within 3–5 days, with full effect at around 2 weeks.',
              },
            },
            {
              '@type': 'Question',
              name: 'Who performs the treatment?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'All treatments are performed or supervised by GMC‑registered doctors in our London clinic.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is there downtime?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'There is no significant downtime. You can return to most normal activities immediately after treatment.',
              },
            },
          ],
        })}
      </Script>
      {/* Netlify form detection (hidden) */}
      <form name="booking" data-netlify="true" data-netlify-honeypot="bot-field" method="POST" action="/" hidden>
        <input type="hidden" name="form-name" value="booking" />
        <p hidden>
          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
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
      <Reviews />
      {/* Clinician bio / injector section */}
      <section className="py-14 px-5 bg-white" id="clinician">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Meet Your Injector</h2>
            <h3 className="mt-2 text-xl font-semibold text-sage-600">Dr. Salad</h3>
            <p className="mt-3 text-gray-600 text-sm md:text-base">
              Dr. Salad is a highly qualified medical doctor with a Master’s degree in Dermatology and years of experience in advanced skin and aesthetic procedures.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Having performed hundreds of successful injectable treatments and minor cosmetic procedures, Dr. Salad combines medical expertise with an artistic eye to deliver natural, balanced results never overdone.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              She has worked with some of the UK’s leading aesthetic clinics, earning a reputation for being skilled, approachable, and genuinely caring. Every treatment is carried out with your safety, comfort, and satisfaction in mind.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-6">
                <h3 className="font-semibold text-gray-900">Credentials</h3>
                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                  <li>GMC‑Registered Medical Doctor</li>
                  <li>• Master’s Degree in Dermatology</li>
                  <li>• Specialist Training in Anti‑Wrinkle & Dermal Filler Injections</li>
                  <li>• Performed Hundreds of Successful Procedures</li>
                  <li>• Uses Only Premium, FDA‑Approved Products</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-6">
                <h3 className="font-semibold text-gray-900">Treatment Approach</h3>
                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                  <li>• Assessment‑led, bespoke dosing</li>
                  <li>• Natural, balanced outcomes</li>
                  <li>• 2‑week review and aftercare</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative flex items-center justify-center p-0">
              <div className="relative w-full max-w-xl aspect-[4/5]">
                <Image
                  src="/images/f5c40a55-8b0a-42ef-9c80-8ab363ee7c72 (1)-fotor-bg-remover-20251103174657.png"
                  alt="Dr. Salad — Aesthetic doctor"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Process />
      <BotoxTrust />

      {/* Anti-wrinkle treatment areas / diagram */}
      <section className="py-14 px-5 bg-white" id="treatment-areas">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Where Anti-Wrinkle Injections Work Best
            </h2>
            <p className="mt-3 text-gray-600 text-sm md:text-base">
              Strategic micro‑doses relax overactive muscles while preserving natural expression. The plan is tailored to your features after an in‑clinic assessment.
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-6">
                <h3 className="font-semibold text-gray-900">Upper Face</h3>
                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                  <li>• Forehead lines</li>
                  <li>• Frown lines (glabella)</li>
                  <li>• Crow’s feet</li>
                  <li>• Brow lift (subtle)</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-6">
                <h3 className="font-semibold text-gray-900">Lower Face & Neck</h3>
                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                  <li>• Bunny lines</li>
                  <li>• Lip flip</li>
                  <li>• Masseter (jawline slimming)</li>
                  <li>• Chin dimpling & DAO</li>
                </ul>
              </div>
            </div>
            <p className="mt-5 text-xs text-gray-500">
              Illustrative diagram only. Injection points and dosing vary by individual; your GMC doctor will advise the safest, most natural approach for you.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
              <Image
                src="/images/6b29a9df2b3500a9013b0697861044df.jpg"
                alt="Facial anti-wrinkle treatment points diagram"
                width={1200}
                height={1500}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* On-page FAQ content to align with ad keywords and schema */}
      <section className="py-16 px-5 bg-white" id="faq">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Anti-Wrinkle Injections in London — Frequently Asked Questions</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold text-gray-900">How much do anti-wrinkle injections cost in London?</h3>
              <p className="mt-2 text-sm">Treatments start from £129 per area. New clients can claim our 3‑for‑2 offer — three areas for £189. See <a className="underline" href="#pricing">pricing</a>.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold text-gray-900">How long do results last?</h3>
              <p className="mt-2 text-sm">Results typically last 3–4 months, depending on individual factors and dosing.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold text-gray-900">When will I see results?</h3>
              <p className="mt-2 text-sm">Most patients notice improvements within 3–5 days, with full effect at around 2 weeks.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold text-gray-900">Who performs the treatment?</h3>
              <p className="mt-2 text-sm">All anti‑wrinkle injections are performed or supervised by GMC‑registered doctors in our London clinic.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold text-gray-900">Is there any downtime?</h3>
              <p className="mt-2 text-sm">There is no significant downtime. You can return to most daily activities immediately after treatment.</p>
            </div>
          </div>
        </div>
      </section>
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

      {/* Holiday last chance banner */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-gradient-to-br from-[#0f1a24] via-[#1a3045] to-[#142536] text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
            {/* Decorative snowflakes */}
            <div className="absolute top-4 left-6 text-white/20 text-4xl">❄</div>
            <div className="absolute bottom-4 right-8 text-white/20 text-3xl">❄</div>
            <div className="absolute top-1/2 right-1/4 text-white/10 text-2xl">❄</div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-400/30 px-3 py-1 rounded-full mb-3 text-sm font-semibold text-red-300">
                🎄 Holiday Special
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Glow Into the New Year — 3 Areas for the Price of 2</h3>
              <p className="text-white/80 mt-2">Limited festive offer ends 31st December. Book your doctor‑led consultation today.</p>
            </div>
            <OpenWidgetButton className="relative z-10 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 font-semibold shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition" ariaLabel="Claim holiday offer">
              🎁 Claim Holiday Offer
            </OpenWidgetButton>
          </div>
        </div>
      </section>
      {/* Modal lives at the end so it's above in DOM order */}
      <BotoxQuickBook />
      <Footer />
      <MobileStickyCTA />
    </main>
  )
}



