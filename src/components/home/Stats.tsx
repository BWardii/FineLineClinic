'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Award, Clock, Heart } from 'lucide-react'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Happy Patients',
      description: 'Trusted by thousands'
    },
    {
      icon: Award,
      number: '8+',
      label: 'Years Experience',
      suffix: '',
      description: 'Years of dedicated aesthetic medicine practice'
    },
    {
      icon: Clock,
      number: '10,000+',
      label: 'Procedures Completed',
      description: 'Safe & effective'
    },
    {
      icon: Heart,
      number: '99%',
      label: 'Satisfaction Rate',
      description: 'Outstanding results'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-r from-sage-600 to-sage-700 text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-sage-100 max-w-3xl mx-auto">
            Our commitment to excellence and patient satisfaction speaks for itself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={28} className="text-white" />
                </div>
                
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + (index * 0.1) }}
                  className="text-4xl md:text-5xl font-poppins font-bold mb-2"
                >
                  {stat.number}
                </motion.h3>
                
                <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
                <p className="text-sage-100">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats 