// Simple classNames utility
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

import Link from 'next/link'

interface HeroOverlayProps {
  className?: string
}

/**
 * Overlay for hero section: headline, subtitle, CTAs. Always readable.
 */
export default function HeroOverlay({ className }: HeroOverlayProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center gap-6 px-4 py-8 md:py-16 bg-black/30 rounded-xl max-w-2xl mx-auto',
        className
      )}
      style={{ backdropFilter: 'blur(2px)' }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
        Enhance Your Natural Beauty
      </h1>
      <p className="text-lg md:text-2xl text-white/90 font-medium drop-shadow">
        Experience the perfect blend of medical expertise and artistic vision at FineLine Clinic. Safe, effective treatments that help you look and feel your absolute best.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <Link
          href="/booking"
          className="pointer-events-auto bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all text-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
        >
          Book Consultation
        </Link>
        <Link
          href="#services"
          className="pointer-events-auto bg-white/90 hover:bg-white text-primary-700 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all text-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
        >
          View Services
        </Link>
      </div>
    </div>
  )
} 