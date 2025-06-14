'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, Clock, Heart, Users, Sparkles } from 'lucide-react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Shield,
      title: 'FDA-Approved Products',
      description: 'We only use the highest quality, FDA-approved products for all treatments.',
      color: 'sage'
    },
    {
      icon: Award,
      title: 'Board-Certified Physician',
      description: 'Dr. Ayaan is board-certified with 8+ years of aesthetic medicine experience.',
      color: 'gold'
    },
    {
      icon: Clock,
      title: 'Minimal Downtime',
      description: 'Most treatments require little to no downtime, so you can return to your routine quickly.',
      color: 'sage'
    },
    {
      icon: Heart,
      title: 'Natural Results',
      description: 'Our philosophy focuses on enhancing your natural beauty, not changing who you are.',
      color: 'gold'
    },
    {
      icon: Users,
      title: '5000+ Happy Patients',
      description: 'Join thousands of satisfied patients who trust us with their aesthetic goals.',
      color: 'sage'
    },
    {
      icon: Sparkles,
      title: 'Personalized Care',
      description: 'Every treatment plan is customized to your unique needs and desired outcomes.',
      color: 'gold'
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-cream-50 to-sage-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Why Choose <span className="text-sage-500">FineLine Clinic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that expertise, quality, and personalized care can make 
            in your aesthetic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  feature.color === 'sage' ? 'bg-sage-100' : 'bg-gold-100'
                }`}>
                  <feature.icon 
                    size={28} 
                    className={feature.color === 'sage' ? 'text-sage-500' : 'text-gold-500'} 
                  />
                </div>
                
                <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 