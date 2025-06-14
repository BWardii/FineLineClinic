'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Clock, DollarSign, Zap, Shield, Sparkles, Heart, Brain, Droplets } from 'lucide-react'

const InfusionMenu = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const infusions = [
    {
      name: 'Energy Boost',
      icon: Zap,
      description: 'Revitalize your body and mind with our premium energy-enhancing blend.',
      duration: '45-60 min',
      price: '$150',
      ingredients: ['B-Complex Vitamins', 'Vitamin B12', 'Amino Acids', 'Magnesium'],
      benefits: ['Increased energy', 'Mental clarity', 'Reduced fatigue', 'Enhanced mood'],
      popular: true,
    },
    {
      name: 'Beauty Glow',
      icon: Sparkles,
      description: 'Achieve radiant skin and healthy hair with our beauty-focused formula.',
      duration: '45-60 min',
      price: '$175',
      ingredients: ['Vitamin C', 'Biotin', 'Glutathione', 'Collagen Peptides'],
      benefits: ['Glowing skin', 'Stronger hair', 'Anti-aging effects', 'Improved complexion'],
      popular: false,
    },
    {
      name: 'Immune Defense',
      icon: Shield,
      description: 'Strengthen your immune system with high-dose vitamins and antioxidants.',
      duration: '30-45 min',
      price: '$125',
      ingredients: ['Vitamin C', 'Zinc', 'Vitamin D', 'Selenium'],
      benefits: ['Immune support', 'Faster recovery', 'Antioxidant protection', 'Wellness boost'],
      popular: false,
    },
    {
      name: 'Hydration Plus',
      icon: Droplets,
      description: 'Ultimate hydration therapy for optimal cellular function and recovery.',
      duration: '30-45 min',
      price: '$100',
      ingredients: ['Electrolytes', 'Saline Solution', 'Minerals', 'B-Vitamins'],
      benefits: ['Deep hydration', 'Electrolyte balance', 'Recovery support', 'Detoxification'],
      popular: false,
    },
    {
      name: 'Mental Clarity',
      icon: Brain,
      description: 'Enhance cognitive function and mental performance with targeted nutrients.',
      duration: '45-60 min',
      price: '$160',
      ingredients: ['B-Complex', 'Magnesium', 'Taurine', 'Alpha-Lipoic Acid'],
      benefits: ['Improved focus', 'Mental clarity', 'Stress reduction', 'Brain health'],
      popular: false,
    },
    {
      name: 'Recovery & Wellness',
      icon: Heart,
      description: 'Comprehensive wellness blend for recovery and overall health optimization.',
      duration: '60-75 min',
      price: '$200',
      ingredients: ['Multi-Vitamins', 'Amino Acids', 'Antioxidants', 'Minerals'],
      benefits: ['Full body recovery', 'Wellness optimization', 'Energy restoration', 'Health boost'],
      popular: false,
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white" id="menu">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Infusion Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted vitamin infusion blends, each designed 
            to target specific health and wellness goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infusions.map((infusion, index) => (
            <motion.div
              key={infusion.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
                infusion.popular ? 'ring-2 ring-sage-400' : ''
              }`}
            >
              {infusion.popular && (
                <div className="absolute top-4 right-4 bg-sage-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                    <infusion.icon size={24} className="text-sage-500" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-gray-800">
                    {infusion.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {infusion.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock size={16} />
                    <span className="text-sm">{infusion.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign size={16} className="text-sage-500" />
                    <span className="text-lg font-semibold text-gray-800">{infusion.price}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Key Ingredients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {infusion.ingredients.map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="bg-sage-100 text-sage-700 text-xs px-2 py-1 rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {infusion.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-sage-400 rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/booking"
                  className="w-full btn-primary text-center block"
                >
                  Book This Infusion
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">
              Custom Infusions Available
            </h3>
            <p className="text-gray-600 mb-6">
              Not sure which infusion is right for you? Our medical team can create a personalized 
              blend based on your specific health goals and needs.
            </p>
            <Link href="/contact" className="btn-secondary">
              Consult Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InfusionMenu 