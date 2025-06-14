'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Phone, Mail, MapPin } from 'lucide-react'

const ContactHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-cream-50 to-white">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
      </div>

      <div className="relative z-10 container-max section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-poppins font-bold text-gray-800 mb-6 leading-tight"
          >
            Get In <span className="text-sage-500">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed"
          >
            Ready to begin your aesthetic journey? We're here to answer your questions, 
            schedule your consultation, and help you achieve your beauty goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/booking" className="btn-primary flex items-center space-x-2 text-lg px-8 py-4">
              <Calendar size={20} />
              <span>Book Consultation</span>
            </Link>
            <Link href="tel:+1234567890" className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4">
              <Phone size={20} />
              <span>Call Now</span>
            </Link>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Phone, title: 'Call Us', info: '(123) 456-7890' },
              { icon: Mail, title: 'Email Us', info: 'info@finelineclinic.com' },
              { icon: MapPin, title: 'Visit Us', info: '123 Beauty Lane, City' },
            ].map((contact, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-md">
                <contact.icon className="text-sage-500 mx-auto mb-3" size={24} />
                <h3 className="font-poppins font-semibold text-gray-800 mb-2">{contact.title}</h3>
                <p className="text-gray-600 text-sm">{contact.info}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero 