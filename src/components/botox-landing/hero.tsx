'use client'

import Image from 'next/image'
import { Clock, Star, Snowflake, Gift } from 'lucide-react'

export default function BotoxHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1a24] via-[#142536] to-[#1a3045]">
      {/* Subtle snowfall overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="snowflakes" aria-hidden="true">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="snowflake"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }}
            >
              ❄
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .snowflakes {
          position: absolute;
          inset: 0;
        }
        .snowflake {
          position: absolute;
          top: -20px;
          color: rgba(255, 255, 255, 0.35);
          font-size: 1rem;
          animation: fall linear infinite;
        }
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.3;
          }
        }
      `}</style>
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/Untitled-design-2024-05-16T164949.680-750x290.jpg"
          alt="Aesthetic face lift vector background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="relative mx-auto max-w-screen-2xl px-5 py-12 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="lg:col-span-5 text-white">
            {/* Holiday badge - smaller on mobile */}
            <div className="inline-flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-red-600/80 to-green-700/80 border border-white/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4 shadow-lg">
              <Gift className="h-3 w-3 md:h-4 md:w-4 text-white" />
              <span className="text-[10px] md:text-sm font-bold tracking-wide text-white">
                ❄ WINTER GLOW OFFER ❄
              </span>
              <Snowflake className="h-3 w-3 md:h-4 md:w-4 text-white" />
            </div>
            {/* Headline - reduced on mobile */}
            <h1 className="text-2xl md:text-6xl font-bold leading-tight">
              Look Radiant This Festive Season
              <span className="block text-white/80 text-base md:text-3xl mt-1 md:mt-2">
                3‑for‑2: Buy 2 areas, get the 3rd FREE
              </span>
            </h1>
            {/* Short punchy copy for mobile, full on desktop */}
            <p className="mt-4 md:mt-6 text-white/80 text-sm md:text-lg max-w-xl">
              Get holiday-ready with smoother, fresher skin. Safe, doctor-led treatments using premium brands. Book your 3-for-2 package today.
            </p>
            {/* CTA buttons */}
            <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://booking.eswk.co.uk/fineline-clinic"
                aria-label="Claim holiday anti-wrinkle offer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-3 md:px-6 md:py-4 w-full sm:w-auto font-semibold shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition text-sm md:text-base"
              >
                <Gift className="h-4 w-4 md:h-5 md:w-5" />
                Claim 3‑for‑2 (Save £189)
              </a>
              <a
                href="tel:02071234567"
                className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/30 text-white px-6 py-4 w-full sm:w-auto font-semibold hover:bg-white/10 transition"
              >
                Call 020 7123 4567
              </a>
            </div>
            {/* Trust badges - compact on mobile */}
            <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3 text-white/90">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-white" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wide">Same Day</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Star className="h-4 w-4 md:h-5 md:w-5 text-amber-400" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wide">5-Star</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Snowflake className="h-4 w-4 md:h-5 md:w-5 text-sky-300" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wide">Limited</span>
              </div>
            </div>
            {/* Feature list - hidden on mobile to save space */}
            <div className="hidden md:flex mt-8 flex-wrap gap-4 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Results in 3‑5 days</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>No downtime</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Premium FDA‑approved products</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:mt-8">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
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
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="text-[10px] md:text-xs opacity-80">From</div>
                    <div className="text-lg md:text-2xl font-bold">£129 / area</div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1 text-[10px] md:text-xs bg-red-600/80 px-2 py-0.5 md:py-1 rounded-full mb-1">
                      <Snowflake className="h-2.5 w-2.5 md:h-3 md:w-3" />
                      Holiday Special
                    </div>
                    <div className="text-sm md:text-lg font-semibold">£189 (3‑for‑2)</div>
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
