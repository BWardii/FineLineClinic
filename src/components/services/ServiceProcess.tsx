'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, UserCheck, Zap, Heart } from 'lucide-react'

const ServiceProcess = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const steps = [
    {
      icon: Calendar,
      title: 'Consultation',
      description: 'Schedule your personalized consultation to discuss your goals and concerns.',
      details: ['Medical history review', 'Goal assessment', 'Treatment planning', 'Cost discussion'],
    },
    {
      icon: UserCheck,
      title: 'Treatment Plan',
      description: 'Our expert team creates a customized treatment plan tailored to your needs.',
      details: ['Personalized approach', 'Timeline planning', 'Product selection', 'Safety protocols'],
    },
    {
      icon: Zap,
      title: 'Treatment',
      description: 'Receive your treatment in our comfortable, state-of-the-art facility.',
      details: ['Professional care', 'Comfort measures', 'Safety monitoring', 'Immediate results'],
    },
    {
      icon: Heart,
      title: 'Aftercare',
      description: 'Comprehensive follow-up care to ensure optimal results and satisfaction.',
      details: ['Recovery guidance', 'Follow-up appointments', 'Touch-up services', 'Ongoing support'],
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-cream-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From consultation to aftercare, we ensure every step of your journey 
            is comfortable, safe, and tailored to your unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {index + 1}
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-6">
                  <step.icon size={24} className="text-sage-500" />
                </div>
                
                <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-sage-400 rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-sage-200 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess 