'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Check, Star, Calendar } from 'lucide-react'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const pricingTiers = [
    {
      name: 'Essential',
      price: '$299',
      description: 'Perfect for first-time clients looking to enhance their natural beauty.',
      features: [
        'Initial consultation',
        'Single treatment area',
        'Basic aftercare kit',
        '1 follow-up appointment',
        'Treatment guarantee',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '$599',
      description: 'Our most popular package for comprehensive aesthetic enhancement.',
      features: [
        'Comprehensive consultation',
        'Multiple treatment areas',
        'Premium aftercare kit',
        '3 follow-up appointments',
        'Treatment guarantee',
        'Priority booking',
        'Complimentary touch-ups',
      ],
      popular: true,
    },
    {
      name: 'Luxury',
      price: '$999',
      description: 'Complete aesthetic transformation with premium care and attention.',
      features: [
        'Extended consultation',
        'Full facial treatment',
        'Luxury aftercare package',
        'Unlimited follow-ups (6 months)',
        'Treatment guarantee',
        'VIP booking access',
        'Complimentary touch-ups',
        'Exclusive member benefits',
      ],
      popular: false,
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
            Treatment Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the package that best fits your aesthetic goals and budget. 
            All packages include our satisfaction guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                tier.popular ? 'ring-2 ring-sage-400 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-sage-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star size={16} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">
                  {tier.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">{tier.price}</span>
                  <span className="text-gray-600 ml-2">starting from</span>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {tier.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check size={20} className="text-sage-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    tier.popular
                      ? 'bg-sage-500 text-white hover:bg-sage-600'
                      : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
                  }`}
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-sage-50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">
              Not sure which package is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a complimentary consultation and our experts will help you choose 
              the perfect treatment plan for your goals and budget.
            </p>
            <Link href="/contact" className="btn-secondary inline-flex items-center space-x-2">
              <Calendar size={20} />
              <span>Free Consultation</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 