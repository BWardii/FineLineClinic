'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Calendar, MapPin, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mainNavItems = [
    { href: '/services', label: 'Treatments' },
    { href: '/botox', label: 'Botox' },
    { href: '/vitamin-infusions', label: 'IV Therapy' },
    { href: '/aesthetic-enhancements', label: 'Aesthetic Enhancements' },
    { href: '/about', label: 'About' },
    { href: '/results', label: 'Results' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <>
      {/* Moving offer banner */}
      <div className="bg-[#EAB308] text-[#221a16] py-2 text-sm overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="marquee font-semibold">
            💉 Limited Time: 3 Areas for the Price of 2 — Offer expires this week. Book your doctor‑led consultation today.  •  💉 Limited Time: 3 Areas for the Price of 2 — Offer expires this week. Book your doctor‑led consultation today.
          </div>
        </div>
      </div>
      {/* Top Contact Bar - Optimized for Mobile */}
      <div className="bg-sage-700 text-white py-1.5 md:py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4">
          {/* Mobile Layout - Single Row with Essential Info */}
          <div className="md:hidden flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span className="font-medium">020 7123 4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-xs">
              <Clock className="w-3 h-3" />
              <span>Mon-Fri 9-6</span>
            </div>
          </div>
          
          {/* Desktop Layout - Full Info */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>020 7123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Rachel House, 214-218 High Road, N15 4NP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
            <div className="text-xs">
              📞 Emergency Consultations Available
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Optimized Heights */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-sage-100' 
            : 'bg-white border-b border-sage-100'
        }`}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo size="sm" variant="dark" showText={true} className="md:hidden" />
              <Logo size="md" variant="dark" showText={true} className="hidden md:block" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-sage-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-600 transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="flex items-center space-x-2 text-sage-600 hover:text-sage-700 font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </Link>
              <Link
                href="/booking"
                className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-sage-50 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Optimized */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-sage-100 shadow-lg"
            >
              <div className="container mx-auto px-4 py-4">
                {/* Mobile Contact Info */}
                <div className="mb-4 p-3 bg-sage-50 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-sage-700">
                      <MapPin className="w-4 h-4" />
                      <span>Rachel House, N15 4NP</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sage-700">
                      <Clock className="w-4 h-4" />
                      <span>Mon-Fri 9-6</span>
                    </div>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-3">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover:text-sage-600 font-medium py-2 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-3 flex flex-col space-y-3">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center space-x-2 text-sage-600 font-medium py-3 border border-sage-200 rounded-lg hover:bg-sage-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </Link>
                    <Link
                      href="/booking"
                      className="bg-sage-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors hover:bg-sage-700 shadow-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Book Consultation
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default Header 