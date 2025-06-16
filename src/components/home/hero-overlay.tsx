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
        <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-sage-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 md:mb-8 shadow-xl border border-white/50">
          <span className="w-2 h-2 bg-sage-500 rounded-full"></span>
          Premium IV Therapy
        </div>

        {/* Main Headline - More Compact on Mobile */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
          <span className="block text-shadow-xl drop-shadow-2xl">More Than a Drip.</span>
          <span className="block text-sage-100 text-shadow-xl drop-shadow-2xl">It's a FineLine Ritual</span>
        </h1>
        
        {/* Subtitle - More Compact on Mobile */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium mb-6 sm:mb-8 md:mb-12 leading-relaxed text-shadow-lg drop-shadow-xl max-w-4xl mx-auto">
          Confidence starts with a single treatment
        </p>
        
        {/* CTA Buttons - More Compact on Mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
          <Link
            href="/booking"
            className="pointer-events-auto group relative overflow-hidden bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-300 text-base sm:text-lg md:text-xl transform hover:scale-105 hover:shadow-3xl border border-sage-400/50 w-full sm:w-auto"
          >
            <span className="relative z-10">Book Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="#services"
            className="pointer-events-auto group relative overflow-hidden bg-white/95 backdrop-blur-sm hover:bg-white text-sage-700 hover:text-sage-800 font-bold py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-300 text-base sm:text-lg md:text-xl transform hover:scale-105 hover:shadow-3xl border border-white/70 w-full sm:w-auto"
          >
            <span className="relative z-10">View Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sage-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>

      {/* Subtle Decorative Elements - Hidden on Mobile for Cleaner Look */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-40 h-40 bg-sage-300/10 rounded-full blur-3xl"></div>
    </div>
  )
} 