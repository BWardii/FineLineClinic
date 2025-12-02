'use client'

import { useEffect, useState } from 'react'
import { Gift } from 'lucide-react'

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-gradient-to-t from-black/20 to-transparent">
        <div className="mx-auto max-w-screen-sm px-4 pb-4">
          <div className="rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-white p-3 shadow-2xl backdrop-blur">
            <a
              href="https://booking.eswk.co.uk/fineline-clinic"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <Gift className="h-5 w-5" />
              Claim 3‑for‑2 (Save £189)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
