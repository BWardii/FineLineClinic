import Image from 'next/image'
import Link from 'next/link'

export default function BotoxHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#12100f] via-[#1a1513] to-[#2b221e]">
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/1000163192.jpg" alt="Aesthetic model" fill className="object-cover" priority />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-5">
              <span className="text-xs font-semibold tracking-wider text-white/90">DOCTOR-LED • CQC REGISTERED</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              3-for-2 Anti‑Wrinkle Offer
              <span className="block text-white/80 text-2xl md:text-3xl mt-2">Buy 2 areas, get the 3rd FREE</span>
            </h1>
            <p className="mt-6 text-white/80 text-lg max-w-xl">
              Natural-looking results by GMC-registered doctors. Same‑day appointments. Limited new client promo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href={{ query: { book: 'open', plan: '3-areas' } }} className="inline-flex items-center justify-center rounded-full bg-[#D6B28A] text-[#221a16] px-8 py-4 font-semibold shadow-xl hover:brightness-110 transition">
                Book Now — Claim 3‑for‑2
              </Link>
              <a href="tel:02071234567" className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/10 transition">
                Call 020 7123 4567
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-xs text-white/70">
              <div className="flex items-center gap-2"><span>✓</span><span>Results in 3‑5 days</span></div>
              <div className="flex items-center gap-2"><span>✓</span><span>No downtime</span></div>
              <div className="flex items-center gap-2"><span>✓</span><span>Premium FDA‑approved products</span></div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image src="/images/botox-review-before-and-after-1540816995.jpg" alt="Botox results — before and after" width={900} height={1100} className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="text-xs opacity-80">From</div>
                    <div className="text-2xl font-bold">£129 / area</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs opacity-80">3 Areas</div>
                    <div className="text-lg font-semibold">£189 (3‑for‑2)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



