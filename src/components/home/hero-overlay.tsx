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
        // Mobile: centered and full width, Desktop: left-positioned
        'absolute inset-0 flex items-center px-4 sm:px-6 md:justify-start md:pl-8 lg:pl-16 xl:pl-20 justify-center',
        className
      )}
    >
      {/* Main Content Container with Enhanced Background - Responsive Positioning */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl border border-white/30"></div>
        
        {/* Content */}
        <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 text-sage-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sage-500 rounded-full"></span>
            Premium IV Therapy
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="block text-shadow-lg">More Than a Drip.</span>
            <span className="block text-sage-100 text-shadow-lg">It's a FineLine Ritual</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 font-medium mb-6 sm:mb-8 md:mb-10 leading-relaxed text-shadow max-w-2xl mx-auto">
            Experience the perfect blend of medical expertise and artistic vision at FineLine Clinic. Safe, effective treatments that help you look and feel your absolute best.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/booking"
              className="pointer-events-auto group relative overflow-hidden bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 text-base sm:text-lg transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="#services"
              className="pointer-events-auto group relative overflow-hidden bg-white/95 hover:bg-white text-sage-700 hover:text-sage-800 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 text-base sm:text-lg transform hover:scale-105 hover:shadow-2xl border border-white/50"
            >
              <span className="relative z-10">View Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sage-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute top-1/4 left-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-1/3 left-12 w-40 h-40 bg-sage-300/20 rounded-full blur-3xl"></div>
    </div>
  )
} 