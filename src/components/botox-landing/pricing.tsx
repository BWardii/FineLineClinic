import Link from 'next/link'

export default function BotoxPricing() {
  return (
    <section className="py-16 px-5 bg-white" id="pricing">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Transparent Pricing</h2>
          <p className="text-gray-600 mt-2">New client special — 3 areas for the price of 2</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow transition">
            <h3 className="font-semibold text-gray-900 mb-1">1 Area</h3>
            <div className="text-4xl font-bold">£129</div>
            <p className="text-sm text-gray-600 mt-2">Perfect for one concern</p>
            <Link href={{ query: { book: 'open', plan: '1-area' } }} className="mt-6 inline-flex justify-center w-full rounded-full bg-gray-900 text-white py-3 font-semibold hover:bg-black/80">Book 1 Area</Link>
          </div>
          <div className="relative border-2 border-[#D6B28A] rounded-2xl p-6 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D6B28A] text-[#221a16] text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</div>
            <h3 className="font-semibold text-gray-900 mb-1">3 Areas (3‑for‑2)</h3>
            <div className="text-4xl font-bold">£189</div>
            <p className="text-sm text-gray-600 mt-2">Buy 2 areas, 3rd area FREE</p>
            <Link href={{ query: { book: 'open', plan: '3-areas' } }} className="mt-6 inline-flex justify-center w-full rounded-full bg-[#D6B28A] text-[#221a16] py-3 font-semibold hover:brightness-110">Claim 3‑for‑2</Link>
          </div>
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow transition">
            <h3 className="font-semibold text-gray-900 mb-1">2 Areas</h3>
            <div className="text-4xl font-bold">£189</div>
            <div className="text-sm text-gray-500 line-through">Was £245</div>
            <p className="text-sm text-gray-600 mt-2">Great combined results</p>
            <Link href={{ query: { book: 'open', plan: '2-areas' } }} className="mt-6 inline-flex justify-center w-full rounded-full bg-gray-900 text-white py-3 font-semibold hover:bg-black/80">Book 2 Areas</Link>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">Includes free consultation, premium products and 2‑week review.</p>
      </div>
    </section>
  )
}



