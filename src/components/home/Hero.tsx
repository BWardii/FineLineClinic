'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Phone, Star, Award } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
          alt="Modern aesthetic clinic interior"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability - sage green tones */}
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/70 via-sage-800/50 to-sage-700/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 via-transparent to-sage-800/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-cream-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-sage-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-10 w-20 h-20 bg-gold-200/25 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-5xl mx-auto">
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center space-x-6 mb-8"
          >
            <div className="flex items-center space-x-2 bg-cream-50/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cream-200/30">
              <Star className="text-gold-300 fill-current" size={16} />
              <span className="text-cream-50 text-sm font-medium">5.0 Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-cream-50/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cream-200/30">
              <Award className="text-sage-300" size={16} />
              <span className="text-cream-50 text-sm font-medium">Board Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-cream-50/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cream-200/30">
              <span className="text-cream-50 text-sm font-medium">5000+ Happy Patients</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-poppins font-bold text-cream-50 mb-6 leading-tight"
          >
            Enhance Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sage-200 via-sage-300 to-cream-200">
              Natural Beauty
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-cream-100 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Experience the perfect blend of medical expertise and artistic vision at FineLine Clinic. 
            Safe, effective treatments that help you look and feel your absolute best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/booking" className="btn-primary bg-sage-500 hover:bg-sage-600 text-cream-50 border-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-lg px-8 py-4">
              <Calendar size={20} />
              <span>Book Consultation</span>
            </Link>
            <Link href="/services" className="btn-secondary bg-cream-50/15 backdrop-blur-sm text-cream-50 border-cream-200/40 hover:bg-cream-50/25 shadow-lg flex items-center space-x-2 text-lg px-8 py-4">
              <span>View Services</span>
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: '8+', label: 'Years Experience' },
              { number: '5000+', label: 'Happy Patients' },
              { number: '99%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-cream-50/15 backdrop-blur-sm rounded-lg p-6 border border-cream-200/30">
                <h3 className="text-3xl md:text-4xl font-poppins font-bold text-cream-50 mb-2">
                  {stat.number}
                </h3>
                <p className="text-cream-200">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream-200/60 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cream-200/80 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 