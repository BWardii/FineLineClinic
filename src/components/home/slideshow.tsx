"use client"

// Simple classNames utility
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export type Slide = {
  src: string
  alt: string
  colorTheme?: string
}

interface SlideshowProps {
  slides: Slide[]
  interval?: number // ms
  children?: React.ReactNode
}

/**
 * Slideshow component with auto/manual navigation and fade/slide transitions.
 */
export default function Slideshow({ slides, interval = 6000, children }: SlideshowProps) {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const numSlides = slides.length

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % numSlides)
    }, interval)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [current, interval, numSlides])

  const goTo = (idx: number) => setCurrent(idx)
  const prev = () => setCurrent((prev) => (prev - 1 + numSlides) % numSlides)
  const next = () => setCurrent((prev) => (prev + 1) % numSlides)

  return (
    <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={slide.src}
          className={cn(
            'absolute inset-0 transition-opacity duration-700 ease-in-out',
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
          aria-hidden={idx !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={idx === 0}
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 100vw"
            quality={90}
            style={{ 
              filter: 'brightness(0.95)'
            }}
          />
        </div>
      ))}
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        {children}
      </div>
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" aria-hidden />
      {/* Additional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 z-10" aria-hidden />
      {/* Navigation dots - More Mobile Friendly */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={cn(
              'w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white transition-all touch-manipulation',
              idx === current ? 'bg-white' : 'bg-white/40'
            )}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goTo(idx)}
            tabIndex={0}
          />
        ))}
      </div>
      {/* Arrows - Better Mobile Touch Targets */}
      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 sm:p-3 transition-all focus:outline-none touch-manipulation"
        aria-label="Previous slide"
        onClick={prev}
        tabIndex={0}
      >
        <span aria-hidden className="text-lg sm:text-xl">‹</span>
      </button>
      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 sm:p-3 transition-all focus:outline-none touch-manipulation"
        aria-label="Next slide"
        onClick={next}
        tabIndex={0}
      >
        <span aria-hidden className="text-lg sm:text-xl">›</span>
      </button>
    </div>
  )
} 