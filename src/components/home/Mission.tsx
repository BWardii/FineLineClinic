'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Shield, Award } from 'lucide-react'

const Mission = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We prioritize your comfort and well-being throughout your entire journey with us.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Using only FDA-approved treatments and maintaining the highest safety standards.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results that enhance your natural beauty.',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To provide safe, effective, and personalized aesthetic treatments that help you look and feel your best. 
            We believe in enhancing your natural beauty while maintaining the highest standards of medical care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-200 transition-colors duration-300">
                <value.icon size={32} className="text-sage-500" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission 