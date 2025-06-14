'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Shield, Users, Sparkles } from 'lucide-react'

const Philosophy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centred Care',
      description: 'Every treatment plan is tailored to your unique goals, concerns, and anatomy. We listen, understand, and deliver personalised results.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We use only FDA-approved products and follow the strictest safety protocols. Your wellbeing is our top priority in every procedure.',
    },
    {
      icon: Sparkles,
      title: 'Natural Results',
      description: 'Our goal is to enhance your natural beauty, not change who you are. We believe in subtle, elegant improvements that look authentically you.',
    },
    {
      icon: Users,
      title: 'Ongoing Support',
      description: 'Our relationship doesn\'t end after your treatment. We provide comprehensive aftercare and are always here for your questions.',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-sage-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At FineLine Clinic, we believe that true beauty comes from feeling confident 
            and comfortable in your own skin. Our approach combines medical expertise 
            with artistic vision to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-6">
                <value.icon size={24} className="text-sage-500" />
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

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-md text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-gray-800 mb-6">
              "We don't just provide treatments – we create transformative experiences 
              that help you rediscover your confidence and natural radiance."
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="/images/doctor-ayaan.jpg"
                alt="Dr. Ayaan"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-poppins font-semibold text-gray-800">Dr. Ayaan</p>
                <p className="text-gray-600 text-sm">Medical Director, FineLine Clinic</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy 