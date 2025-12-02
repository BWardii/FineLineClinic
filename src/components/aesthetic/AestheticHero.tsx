'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Star, Shield } from 'lucide-react'

const AestheticHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sage-50 via-white to-gold-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-sage-200 to-sage-300 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full opacity-15"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-sage-300 to-gold-300 rounded-full opacity-25"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sage-200 px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-gold-600" />
            <span className="text-sage-700 font-medium">Premium Aesthetic Treatments</span>
            <Star className="w-4 h-4 text-gold-500" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Enhance Your
            <span className="block bg-gradient-to-r from-sage-600 via-gold-600 to-sage-700 bg-clip-text text-transparent">
              Natural Beauty
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Expert aesthetic treatments including anti-wrinkle injections, dermal fillers, microneedling with polynucleotides, 
            and advanced skin rejuvenation procedures. Achieve natural-looking results with precision and care.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { icon: Shield, text: 'FDA Approved' },
              { icon: Star, text: 'Expert Practitioners' },
              { icon: Sparkles, text: 'Natural Results' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-sage-200">
                <feature.icon className="w-5 h-5 text-sage-600" />
                <span className="text-sage-700 font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/booking"
              className="group bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="#treatments"
              className="group bg-white/80 backdrop-blur-sm hover:bg-white text-sage-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 border border-sage-200 hover:border-sage-300 hover:shadow-lg"
            >
              View Treatments
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 pt-8 border-t border-sage-200"
          >
            <p className="text-sm text-gray-500 mb-4">Trusted by thousands of satisfied clients</p>
            <div className="flex justify-center items-center gap-8 text-sage-600">
              <div className="text-center">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-sage-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-sage-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AestheticHero 