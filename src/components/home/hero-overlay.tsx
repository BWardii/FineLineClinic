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
        'absolute inset-0 flex items-center justify-center px-4 sm:px-6',
        className
      )}
    >
      {/* Content - No Background Card, Just Text */}
      <div className="relative text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-sage-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-xl border border-white/50">
          <span className="w-2 h-2 bg-sage-500 rounded-full"></span>
          Premium IV Therapy
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="block text-shadow-xl drop-shadow-2xl">More Than a Drip.</span>
          <span className="block text-sage-100 text-shadow-xl drop-shadow-2xl">It's a FineLine Ritual</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium mb-12 leading-relaxed text-shadow-lg drop-shadow-xl max-w-4xl mx-auto">
          Experience the perfect blend of medical expertise and artistic vision at FineLine Clinic. Safe, effective treatments that help you look and feel your absolute best.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/booking"
            className="pointer-events-auto group relative overflow-hidden bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl transition-all duration-300 text-xl transform hover:scale-105 hover:shadow-3xl border border-sage-400/50"
          >
            <span className="relative z-10">Book Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="#services"
            className="pointer-events-auto group relative overflow-hidden bg-white/95 backdrop-blur-sm hover:bg-white text-sage-700 hover:text-sage-800 font-bold py-5 px-10 rounded-2xl shadow-2xl transition-all duration-300 text-xl transform hover:scale-105 hover:shadow-3xl border border-white/70"
          >
            <span className="relative z-10">View Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sage-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-sage-300/10 rounded-full blur-3xl"></div>
    </div>
  )
} 