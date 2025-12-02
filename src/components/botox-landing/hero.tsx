import Image from 'next/image'
import { Clock, Shield, Star } from 'lucide-react'
export default function BotoxHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#12100f] via-[#1a1513] to-[#2b221e]">
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/Untitled-design-2024-05-16T164949.680-750x290.jpg" alt="Aesthetic face lift vector background" fill className="object-cover object-center" priority />
      </div>
      <div className="relative mx-auto max-w-screen-2xl px-5 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-semibold tracking-wider text-white/90">DOCTOR‑LED • GMC REGISTERED</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
              Anti‑Wrinkle Injections in London — Line Softening
              <span className="block text-white/80 text-lg md:text-3xl mt-2">3‑for‑2: Buy 2 areas, get the 3rd FREE</span>
            </h1>
            <p className="mt-6 text-white/80 text-lg max-w-xl">
              Doctor-led anti‑wrinkle injections using premium neuromodulators such as Botox® for precise, natural smoothing. Same‑day appointments with our GMC‑registered team.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://booking.eswk.co.uk/fineline-clinic"
                aria-label="Claim 3-for-2 anti-wrinkle offer"
                className="inline-flex items-center justify-center rounded-full bg-[#EAB308] text-[#221a16] px-6 py-4 w-full sm:w-auto font-semibold shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EAB308] transition"
              >
                Claim 3‑for‑2 Offer (Save £189)
              </a>
              <a href="tel:02071234567" className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-6 py-4 w-full sm:w-auto font-semibold hover:bg-white/10 transition">
                Call 020 7123 4567
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-3 text-white/90 sm:flex-row">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold uppercase tracking-wide">Same Day Appts</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold uppercase tracking-wide">5-Star Rated</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-xs text-white/70">
              <div className="flex items-center gap-2"><span>✓</span><span>Results in 3‑5 days</span></div>
              <div className="flex items-center gap-2"><span>✓</span><span>No downtime</span></div>
              <div className="flex items-center gap-2"><span>✓</span><span>Premium FDA‑approved products</span></div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:mt-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/botox-forehead-before-after.jpg"
                alt="Anti-wrinkle forehead treatment — before and after"
                width={2048}
                height={682}
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="w-full h-auto object-cover rounded-2xl md:rounded-3xl"
                quality={85}
                priority
              />
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



