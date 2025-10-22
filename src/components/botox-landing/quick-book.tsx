"use client"

import { useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type PlanKey = '1-area' | '2-areas' | '3-areas'

const PLAN_LABELS: Record<PlanKey, string> = {
  '1-area': '1 Area',
  '2-areas': '2 Areas',
  '3-areas': '3 Areas (3‑for‑2)',
}

const PLAN_PRICES: Record<PlanKey, number> = {
  '1-area': 129,
  '2-areas': 189,
  '3-areas': 189,
}

export default function BotoxQuickBook() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const initialPlan = (searchParams.get('plan') as PlanKey) || '3-areas'
  const isOpen = searchParams.get('book') === 'open'

  const [plan, setPlan] = useState<PlanKey>(initialPlan)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', note: '' })

  useEffect(() => {
    const qpPlan = searchParams.get('plan') as PlanKey | null
    if (qpPlan && qpPlan !== plan) setPlan(qpPlan)
  }, [searchParams, plan])

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const body = new URLSearchParams({
        'form-name': 'booking',
        plan,
        price: String(price),
        ...form,
      })
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      router.push(`/thank-you?service=botox&plan=${encodeURIComponent(plan)}`)
    } catch {
      // Fallback to inline success state if redirect fails
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const close = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('book')
    router.replace(`${pathname}${params.size ? `?${params.toString()}` : ''}`)
  }

  const price = useMemo(() => PLAN_PRICES[plan], [plan])

  if (!isOpen) return null

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[100]">
        <div className="absolute inset-0 bg-black/60" onClick={close} />
        <div className="absolute inset-x-4 md:inset-x-0 md:left-1/2 md:-translate-x-1/2 top-10 md:top-16 md:max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking request received</h3>
            <p className="text-gray-600 mb-6">We\'ll call you shortly to confirm your {PLAN_LABELS[plan]} treatment. No payment taken online.</p>
            <button onClick={close} className="inline-flex rounded-full bg-gray-900 text-white px-6 py-3 font-semibold">Close</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/60" onClick={close} />
      <div className="absolute inset-x-4 md:inset-x-0 md:left-1/2 md:-translate-x-1/2 top-6 md:top-12 md:max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: form */}
          <form onSubmit={onSubmit} method="post" name="booking" data-netlify="true" action="/" className="p-6 md:p-8">
            {/* Netlify requires form-name for AJAX/JSX forms */}
            <input type="hidden" name="form-name" value="booking" />
            {/* Honeypot field */}
            <div className="hidden"><label>Don’t fill this out if you're human: <input name="bot-field" /></label></div>
            {/* Hidden mirrors so static parser has names/values when JS is disabled */}
            <input type="hidden" name="plan" value={plan} />
            <input type="hidden" name="price" value={String(price)} />
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">Checkout</h3>
              <p className="text-sm text-gray-600 mt-1">All bookings are securely processed. No payment taken online.</p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2 text-sm" role="radiogroup" aria-label="Select offer">
                {(['1-area','3-areas','2-areas'] as PlanKey[]).map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setPlan(p)
                      const params = new URLSearchParams(searchParams.toString())
                      params.set('plan', p)
                      params.set('book', 'open')
                      router.replace(`${pathname}?${params.toString()}`)
                    }}
                    className={`border rounded-xl px-3 py-2 text-center ${plan===p ? (p==='3-areas' ? 'border-[#D6B28A] border-2' : 'border-gray-900') : 'border-gray-200'}`}
                  >
                    {PLAN_LABELS[p]}
                  </button>
                ))}
              </div>

              <input name="name" required placeholder="Full name" value={form.name} onChange={onChange} className="w-full border rounded-lg px-4 py-3" />
              <input name="email" type="email" required placeholder="Email" value={form.email} onChange={onChange} className="w-full border rounded-lg px-4 py-3" />
              <input name="phone" required placeholder="Phone number" value={form.phone} onChange={onChange} className="w-full border rounded-lg px-4 py-3" />
              <div className="grid grid-cols-2 gap-2">
                <input type="date" name="date" required value={form.date} onChange={onChange} className="w-full border rounded-lg px-4 py-3" />
                <input type="time" name="time" required value={form.time} onChange={onChange} className="w-full border rounded-lg px-4 py-3" />
              </div>
              <textarea name="note" placeholder="Add a booking note (optional)" value={form.note} onChange={onChange} className="w-full border rounded-lg px-4 py-3" rows={3} />

              {/* Payment - only pay at venue */}
              <div className="mt-4">
                <div className="text-sm font-semibold text-gray-900 mb-2">Payment</div>
                <div className="border rounded-xl p-4 flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-900 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-gray-900 rounded-full" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Pay at venue</div>
                    <div className="text-xs text-gray-600">No online payment required</div>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className={`mt-5 w-full rounded-full text-white py-3 font-semibold ${isSubmitting ? 'bg-[#2563eb]/60' : 'bg-[#2563eb] hover:bg-[#1d4ed8]'}`}>{isSubmitting ? 'Submitting…' : 'Complete booking'}</button>
              <p className="text-xs text-gray-500 text-center mt-2">By booking you agree to our terms and privacy policy.</p>
            </div>
          </form>

          {/* Right: summary */}
          <aside className="bg-gray-50 p-6 md:p-8 border-t md:border-t-0 md:border-l">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gray-200" />
              <div>
                <div className="font-semibold text-gray-900">Anti‑Wrinkle Therapy</div>
                <div className="text-xs text-gray-600">Doctor‑led • 45 mins total</div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span>Plan</span><span className="font-medium">{PLAN_LABELS[plan]}</span></div>
              <div className="flex justify-between"><span>Duration</span><span>45 mins</span></div>
              <div className="h-px bg-gray-200 my-2" />
              <div className="flex justify-between"><span>Pay at venue</span><span className="font-semibold">£{price}</span></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}



