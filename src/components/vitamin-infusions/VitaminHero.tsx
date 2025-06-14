'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Shield, Zap, Sparkles } from 'lucide-react'

const VitaminHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-white via-cream-50 to-sage-50">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Premium Vitamin Infusion Therapy
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Experience the power of direct nutrient delivery with our state-of-the-art vitamin infusion treatments. 
            Boost your energy, enhance your beauty, and optimize your health with personalized IV therapy.
          </p>
          
          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              { icon: Zap, title: 'Instant Energy', desc: 'Feel revitalized immediately with direct nutrient delivery' },
              { icon: Shield, title: 'Immune Boost', desc: 'Strengthen your defenses with high-dose vitamins' },
              { icon: Sparkles, title: 'Radiant Skin', desc: 'Glow from the inside out with beauty-focused blends' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <benefit.icon className="text-sage-500 mx-auto mb-4" size={48} />
                <h3 className="font-poppins font-bold text-xl text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <Calendar size={20} />
              <span>Book Consultation</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VitaminHero 