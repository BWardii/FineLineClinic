'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Calendar, UserCheck, Droplets, CheckCircle } from 'lucide-react'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const steps = [
    {
      icon: Calendar,
      title: 'Book Consultation',
      description: 'Schedule your appointment and discuss your wellness goals with our team.',
      details: ['Health assessment', 'Goal discussion', 'Treatment selection', 'Scheduling'],
    },
    {
      icon: UserCheck,
      title: 'Medical Review',
      description: 'Our medical professional reviews your health history and customizes your treatment.',
      details: ['Health screening', 'Allergy check', 'Custom formulation', 'Safety protocols'],
    },
    {
      icon: Droplets,
      title: 'Infusion Treatment',
      description: 'Relax in our comfortable treatment room while receiving your IV therapy.',
      details: ['Comfortable seating', 'Professional administration', 'Monitoring throughout', 'Relaxing environment'],
    },
    {
      icon: CheckCircle,
      title: 'Feel the Results',
      description: 'Experience immediate benefits and enjoy your enhanced wellness.',
      details: ['Immediate effects', 'Lasting benefits', 'Follow-up care', 'Maintenance planning'],
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
            Your Infusion Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From consultation to results, we ensure a seamless and comfortable experience 
            tailored to your individual needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-sage-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon size={24} className="text-sage-500" />
                </div>

                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-gray-500">
                      <div className="w-1 h-1 bg-sage-400 rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-sage-200"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-white rounded-lg p-8 shadow-md"
        >
          <h3 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">
            Ready to Start Your Wellness Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Book your vitamin infusion consultation today and discover how IV therapy 
            can help you feel your best from the inside out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Book Your Infusion
            </Link>
            <Link href="/contact" className="btn-secondary">
              Ask Questions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process 