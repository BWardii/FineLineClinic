'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Calendar, Phone, MessageCircle, ArrowRight } from 'lucide-react'

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-sage-600 via-sage-700 to-sage-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cream-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gold-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight">
              Ready to Begin Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cream-200 to-gold-200">
                Transformation?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-sage-100 mb-8 leading-relaxed">
              Take the first step towards feeling confident and beautiful. 
              Schedule your complimentary consultation today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link 
              href="/booking" 
              className="group bg-white text-sage-700 hover:bg-cream-50 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
            >
              <Calendar size={20} />
              <span>Book Free Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="tel:+1234567890" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-sage-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
            >
              <Phone size={20} />
              <span>Call (123) 456-7890</span>
            </Link>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Calendar className="text-cream-200 mx-auto mb-3" size={24} />
              <h3 className="font-poppins font-semibold mb-2">Book Online</h3>
              <p className="text-sage-100 text-sm">Schedule 24/7 through our easy booking system</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Phone className="text-cream-200 mx-auto mb-3" size={24} />
              <h3 className="font-poppins font-semibold mb-2">Call Us</h3>
              <p className="text-sage-100 text-sm">Speak directly with our friendly team</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MessageCircle className="text-cream-200 mx-auto mb-3" size={24} />
              <h3 className="font-poppins font-semibold mb-2">Message Us</h3>
              <p className="text-sage-100 text-sm">Send us your questions anytime</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-sage-200 text-sm mb-4">
              ✨ Complimentary consultations • Flexible payment options • Same-day appointments available
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-sage-200">
              <span>📍 Rachel House, 214-218 High Road, N15 4NP</span>
              <span>🕒 Mon-Sat: 9AM-7PM</span>
              <span>📧 info@finelineclinic.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA 