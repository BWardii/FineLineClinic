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
        'absolute inset-0 flex items-center justify-start pl-8 md:pl-16 lg:pl-20',
        className
      )}
    >
      {/* Main Content Container with Enhanced Background - Positioned Left */}
      <div className="relative max-w-xl lg:max-w-2xl">
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30"></div>
        
        {/* Content */}
        <div className="relative z-10 px-8 py-12 md:px-12 md:py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 text-sage-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <span className="w-2 h-2 bg-sage-500 rounded-full"></span>
            Premium IV Therapy
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block text-shadow-lg">More Than a Drip.</span>
            <span className="block text-sage-100 text-shadow-lg">It's a FineLine Ritual</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 font-medium mb-10 leading-relaxed text-shadow max-w-2xl mx-auto">
            Experience the perfect blend of medical expertise and artistic vision at FineLine Clinic. Safe, effective treatments that help you look and feel your absolute best.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="pointer-events-auto group relative overflow-hidden bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="#services"
              className="pointer-events-auto group relative overflow-hidden bg-white/95 hover:bg-white text-sage-700 hover:text-sage-800 font-bold py-4 px-8 rounded-2xl shadow-xl transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl border border-white/50"
            >
              <span className="relative z-10">View Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sage-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Positioned around the left card */}
      <div className="absolute top-1/4 left-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-12 w-40 h-40 bg-sage-300/20 rounded-full blur-3xl"></div>
    </div>
  )
} 