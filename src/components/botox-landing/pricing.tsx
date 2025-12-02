"use client"
import { Gift, Snowflake } from 'lucide-react'
import OpenWidgetButton from '@/components/booking/OpenWidgetButton'

export default function BotoxPricing() {
  return (
    <section className="py-16 px-5 bg-gradient-to-b from-slate-50 to-white" id="pricing">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 px-4 py-2 rounded-full mb-4">
            <Snowflake className="h-4 w-4 text-red-600" />
            <span className="text-sm font-semibold text-red-700">Winter Glow Pricing</span>
            <Snowflake className="h-4 w-4 text-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Holiday Season Special</h2>
          <p className="text-gray-600 mt-2">Gift yourself radiant skin — 3 areas for the price of 2</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow transition bg-white">
            <h3 className="font-semibold text-gray-900 mb-1">1 Area</h3>
            <div className="text-4xl font-bold">£129</div>
            <p className="text-sm text-gray-600 mt-2">Perfect for one concern</p>
            <OpenWidgetButton ariaLabel="Book 1 area" className="mt-6 inline-flex justify-center w-full rounded-full bg-gray-900 text-white py-3 font-semibold hover:bg-black/80">Book 1 Area</OpenWidgetButton>
          </div>
          <div className="relative border-2 border-red-600 rounded-2xl p-6 shadow-lg bg-gradient-to-br from-red-50 to-white">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-green-700 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
              <Gift className="h-3.5 w-3.5" />
              HOLIDAY BEST VALUE
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 mt-2">3 Areas (3‑for‑2)</h3>
            <div className="text-4xl font-bold text-red-700">£189</div>
            <p className="text-sm text-gray-600 mt-2">Buy 2 areas, 3rd area FREE</p>
            <OpenWidgetButton ariaLabel="Claim Holiday 3-for-2" className="mt-6 inline-flex justify-center w-full rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 font-semibold hover:brightness-110 gap-2">
              <Gift className="h-5 w-5" />
              Claim 3‑for‑2
            </OpenWidgetButton>
          </div>
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow transition bg-white">
            <h3 className="font-semibold text-gray-900 mb-1">2 Areas</h3>
            <div className="text-4xl font-bold">£189</div>
            <div className="text-sm text-gray-500 line-through">Was £245</div>
            <p className="text-sm text-gray-600 mt-2">Great combined results</p>
            <OpenWidgetButton ariaLabel="Book 2 areas" className="mt-6 inline-flex justify-center w-full rounded-full bg-gray-900 text-white py-3 font-semibold hover:bg-black/80">Book 2 Areas</OpenWidgetButton>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">Includes free consultation, premium products and 2‑week review. Holiday offer ends 31st December.</p>
      </div>
    </section>
  )
}
