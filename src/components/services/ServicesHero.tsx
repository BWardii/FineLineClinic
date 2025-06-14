'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Award, Shield, Users } from 'lucide-react'

const ServicesHero = () => {
  const stats = [
    { icon: Users, label: 'Happy Patients', value: '5000+' },
    { icon: Award, label: 'Years Experience', value: '8+' },
    { icon: Shield, label: 'Safety Record', value: '100%' },
    { icon: Calendar, label: 'Procedures', value: '10,000+' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
            className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-gray-800 mb-6 leading-tight"
          >
            Our <span className="text-sage-500">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          >
            Comprehensive aesthetic treatments designed to enhance your natural beauty 
            with the highest standards of safety and care.
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
            <Link href="/contact" className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4">
              <span>Ask Questions</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-md">
                <stat.icon className="text-sage-500 mx-auto mb-2" size={32} />
                <p className="font-poppins font-bold text-2xl text-gray-800 mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero 