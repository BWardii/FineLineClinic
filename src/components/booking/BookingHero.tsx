'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle } from 'lucide-react'

const BookingHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
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
            Book Your <span className="text-sage-500">Appointment</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed"
          >
            Schedule your consultation or treatment with our easy online booking system. 
            We'll confirm your appointment within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Calendar, title: 'Easy Scheduling', desc: 'Book online 24/7' },
              { icon: Clock, title: 'Flexible Hours', desc: 'Evening & weekend slots' },
              { icon: CheckCircle, title: 'Quick Confirmation', desc: 'Confirmed within 24hrs' },
            ].map((feature, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-md">
                <feature.icon className="text-sage-500 mx-auto mb-3" size={24} />
                <h3 className="font-poppins font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingHero 