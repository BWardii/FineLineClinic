'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Clock, Star, ArrowRight, Zap, Sparkles, Shield, Heart, Droplets, Syringe } from 'lucide-react'

const ServicesList = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const vitaminInfusions = [
    {
      name: 'Multivitamin Drip',
      price: '£99.00',
      description: 'A nourishing blend: Vitamin C, B Complex (B1, B2, B3, B5), B12',
      benefits: ['Energy boost', 'Immune support', 'Overall wellness'],
      duration: '45-60 minutes',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-500',
      category: 'vitamin'
    },
    {
      name: 'Detox Drip',
      price: '£180.00',
      description: 'A cleansing blend: Glutathione, Vitamin C, B Complex, Thioctic Acid, Magnesium, Zinc',
      benefits: ['Detoxification', 'Antioxidant protection', 'Liver support'],
      duration: '60-90 minutes',
      icon: Sparkles,
      color: 'from-green-500 to-emerald-500',
      category: 'vitamin'
    },
    {
      name: 'The Energy Drip',
      price: '£130.00',
      description: 'A revitalizing blend: Vitamin C, B Complex, B12, Magnesium, Zinc',
      benefits: ['Enhanced energy', 'Mental clarity', 'Physical performance'],
      duration: '45-60 minutes',
      icon: Zap,
      color: 'from-orange-500 to-yellow-500',
      category: 'vitamin'
    },
    {
      name: 'Immunity Booster',
      price: '£150.00',
      description: 'A powerful blend: Vitamin C, Zinc, B Complex (B1, B2, B3, B5, B6, B7, B9, B12), and Thioctic Acid',
      benefits: ['Immune system support', 'Antioxidant protection', 'Disease prevention'],
      duration: '60 minutes',
      icon: Shield,
      color: 'from-purple-500 to-indigo-500',
      category: 'vitamin'
    },
    {
      name: 'Bright & Glow Drip',
      price: '£130.00',
      description: 'Brightens skin, reduces pigmentation; and boosts collagen; Glutathione, Vitamin C, Thioctic Acid',
      benefits: ['Skin brightening', 'Collagen boost', 'Anti-aging'],
      duration: '60 minutes',
      icon: Star,
      color: 'from-pink-500 to-rose-500',
      category: 'vitamin'
    },
    {
      name: 'Skinny Drip',
      price: '£150.00',
      description: 'Supports energy production; enhances rich antioxidant protection L-Carnitine, Arginine, Thioctic Acid',
      benefits: ['Metabolism boost', 'Weight management', 'Energy enhancement'],
      duration: '60-75 minutes',
      icon: Heart,
      color: 'from-teal-500 to-cyan-500',
      category: 'vitamin'
    }
  ]

  const aestheticTreatments = [
    {
      name: 'Dermal Filler',
      price: '£250',
      description: 'Premium hyaluronic acid fillers to restore volume and smooth fine lines',
      benefits: ['Volume restoration', 'Wrinkle reduction', 'Natural-looking results'],
      duration: '30-45 minutes',
      icon: Syringe,
      color: 'from-sage-500 to-sage-600',
      category: 'aesthetic'
    },
    {
      name: 'Botox Treatment',
      price: 'from £135',
      description: 'FDA-approved botulinum toxin to reduce dynamic wrinkles and fine lines',
      benefits: ['Wrinkle reduction', 'Preventative aging', 'Quick procedure'],
      duration: '15-30 minutes',
      icon: Sparkles,
      color: 'from-sage-600 to-sage-700',
      category: 'aesthetic'
    },
    {
      name: 'Microneedling with Polynucleotide',
      price: '£150',
      description: 'Advanced microneedling combined with polynucleotide for skin regeneration',
      benefits: ['Skin regeneration', 'Texture improvement', 'Collagen stimulation'],
      duration: '60-90 minutes',
      icon: Star,
      color: 'from-gold-500 to-yellow-600',
      category: 'aesthetic'
    },
    {
      name: 'Microneedling with Mesotherapy',
      price: '£150',
      description: 'Precision microneedling with targeted mesotherapy for optimal results',
      benefits: ['Deep hydration', 'Skin rejuvenation', 'Fine line reduction'],
      duration: '60-90 minutes',
      icon: Droplets,
      color: 'from-blue-500 to-indigo-500',
      category: 'aesthetic'
    },
    {
      name: 'Polynucleotide Treatment',
      price: '£275',
      description: 'Advanced regenerative treatment using polynucleotides for skin repair',
      benefits: ['Tissue regeneration', 'Hydration boost', 'Anti-aging effects'],
      duration: '45-60 minutes',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      category: 'aesthetic'
    },
    {
      name: 'Profhilo Treatment',
      price: '£250',
      description: 'Revolutionary bio-remodelling treatment for skin tightening and hydration',
      benefits: ['Skin tightening', 'Deep hydration', 'Bio-remodelling'],
      duration: '30-45 minutes',
      icon: Heart,
      color: 'from-rose-500 to-pink-600',
      category: 'aesthetic'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-sage-50/30">
      <div className="container mx-auto">
        {/* Vitamin IV Infusions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sage-100 to-sage-200 px-6 py-3 rounded-full mb-6"
            >
              <Droplets className="w-5 h-5 text-sage-600" />
              <span className="text-sage-700 font-medium">Vitamin IV Infusions</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Wellness & <span className="text-sage-600">Vitality</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Replenish, restore, and revitalize your body with our premium IV vitamin therapies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vitaminInfusions.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sage-100 hover:border-sage-200 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-sage-600">
                    {service.name}
                  </h3>
                  <span className="text-2xl font-bold text-sage-600 bg-sage-50 px-3 py-1 rounded-lg">
                    {service.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-sage-500 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <Link 
                    href="/booking"
                    className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Aesthetic Enhancements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-100 to-gold-200 px-6 py-3 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-gold-600" />
              <span className="text-gold-700 font-medium">Aesthetic Enhancements</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Beauty & <span className="text-gold-600">Enhancement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced aesthetic treatments to enhance your natural beauty with precision and care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aestheticTreatments.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold-100 hover:border-gold-200 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gold-600">
                    {service.name}
                  </h3>
                  <span className="text-2xl font-bold text-gold-600 bg-gold-50 px-3 py-1 rounded-lg">
                    {service.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <Link 
                    href="/booking"
                    className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-sage-600 to-gold-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Begin Your Transformation?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Book a consultation to discuss the perfect treatment plan for your needs
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 bg-white text-sage-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-sage-50 transition-colors duration-300 group"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesList 