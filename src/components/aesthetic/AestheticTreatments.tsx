'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Clock, Star, ArrowRight, Sparkles, Syringe, Heart, Droplets } from 'lucide-react'

const AestheticTreatments = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const aestheticTreatments = [
    {
      name: 'Anti-Wrinkle Injections',
      price: 'from £135',
      description: 'Doctor-led neuromodulator treatments to soften dynamic wrinkles and fine lines while keeping expression natural and balanced.',
      benefits: ['Wrinkle reduction', 'Preventative aging', 'Quick procedure', 'Minimal downtime'],
      duration: '15-30 minutes',
      icon: Syringe,
      color: 'from-sage-500 to-sage-600',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80',
      areas: ['Forehead lines', 'Crow\'s feet', 'Frown lines', 'Bunny lines'],
      results: 'Results visible in 3-7 days, lasting 3-4 months'
    },
    {
      name: 'Dermal Fillers',
      price: 'from £250',
      description: 'Premium hyaluronic acid fillers to restore volume, smooth fine lines, and enhance facial contours. We use only the highest quality products for safe, natural-looking results.',
      benefits: ['Volume restoration', 'Wrinkle reduction', 'Lip enhancement', 'Facial contouring'],
      duration: '30-45 minutes',
      icon: Droplets,
      color: 'from-sage-600 to-sage-700',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=500&q=80',
      areas: ['Nasolabial folds', 'Marionette lines', 'Lip enhancement', 'Cheek augmentation'],
      results: 'Immediate results, lasting 6-18 months depending on area'
    },
    {
      name: 'Microneedling with Polynucleotides',
      price: '£150',
      description: 'Advanced microneedling combined with polynucleotides for superior skin regeneration. This cutting-edge treatment stimulates collagen production while delivering powerful regenerative compounds.',
      benefits: ['Skin regeneration', 'Texture improvement', 'Collagen stimulation', 'Pore refinement'],
      duration: '60-90 minutes',
      icon: Star,
      color: 'from-gold-500 to-yellow-600',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      areas: ['Full face', 'Neck', 'Décolletage', 'Hands'],
      results: 'Progressive improvement over 4-6 weeks, lasting 6-12 months'
    },
    {
      name: 'Microneedling with Mesotherapy',
      price: '£150',
      description: 'Precision microneedling with targeted mesotherapy cocktails. This treatment combines mechanical stimulation with customised nutrient delivery for optimal skin rejuvenation.',
      benefits: ['Deep hydration', 'Skin rejuvenation', 'Fine line reduction', 'Improved elasticity'],
      duration: '60-90 minutes',
      icon: Sparkles,
      color: 'from-blue-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1616391182219-e080b5389863?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      areas: ['Face', 'Neck', 'Under eyes', 'Hands'],
      results: 'Visible improvement in 2-3 weeks, lasting 4-6 months'
    },
    {
      name: 'Polynucleotide Treatment',
      price: '£275',
      description: 'Revolutionary regenerative treatment using polynucleotides for advanced skin repair and rejuvenation. This innovative therapy promotes cellular regeneration and tissue healing.',
      benefits: ['Tissue regeneration', 'Deep hydration', 'Anti-aging effects', 'Skin quality improvement'],
      duration: '45-60 minutes',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80',
      areas: ['Under eyes', 'Face', 'Neck', 'Hands'],
      results: 'Progressive improvement over 4-8 weeks, lasting 6-12 months'
    },
    {
      name: 'Profhilo Treatment',
      price: '£250',
      description: 'Revolutionary bio-remodelling treatment for skin tightening and hydration. Profhilo stimulates collagen and elastin production while providing intense hydration.',
      benefits: ['Skin tightening', 'Deep hydration', 'Bio-remodelling', 'Improved skin quality'],
      duration: '30-45 minutes',
      icon: Droplets,
      color: 'from-rose-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=500&q=80',
      areas: ['Face', 'Neck', 'Hands', 'Décolletage'],
      results: 'Gradual improvement over 4 weeks, lasting 6-9 months'
    }
  ]

  return (
    <section id="treatments" ref={ref} className="section-padding bg-gradient-to-b from-white to-sage-50/30">
      <div className="container mx-auto">
        {/* Header - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-100 to-gold-200 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gold-600" />
            <span className="text-gold-700 font-medium text-sm sm:text-base">Aesthetic Treatments</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Advanced <span className="text-gold-600">Beauty Solutions</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Transform your appearance with our comprehensive range of aesthetic treatments. 
            Each procedure is performed by experienced practitioners using the latest techniques and premium products.
          </p>
        </motion.div>

        {/* Treatments Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {aestheticTreatments.map((treatment, index) => (
            <motion.div
              key={treatment.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold-200 hover:-translate-y-1 sm:hover:-translate-y-2 touch-manipulation"
            >
              {/* Image - Mobile Optimized */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Icon - Mobile Optimized */}
                <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${treatment.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                  <treatment.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                
                {/* Price - Mobile Optimized */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                  <span className="font-bold text-gold-600 text-sm sm:text-base">{treatment.price}</span>
                </div>
              </div>

              {/* Content - Mobile Optimized */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-gold-600 transition-colors">
                    {treatment.name}
                  </h3>
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    {treatment.duration}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {treatment.description}
                </p>

                {/* Benefits - Mobile Optimized */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Key Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {treatment.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${treatment.color} flex-shrink-0`}></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treatment Areas - Mobile Optimized */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Treatment Areas:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {treatment.areas.map((area, idx) => (
                      <span key={idx} className="bg-gold-50 text-gold-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results - Mobile Optimized */}
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-sage-50 rounded-lg sm:rounded-xl">
                  <h4 className="font-semibold text-sage-800 mb-1 sm:mb-2 text-sm sm:text-base">Expected Results:</h4>
                  <p className="text-sage-700 text-xs sm:text-sm">{treatment.results}</p>
                </div>

                {/* Action Button - Mobile Optimized */}
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-gold-600 hover:text-gold-700 font-semibold group-hover:gap-3 transition-all duration-300 bg-gold-50 hover:bg-gold-100 px-4 py-3 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base touch-manipulation"
                >
                  Book Treatment
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-gold-50 to-sage-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Ready to Begin Your Transformation?
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Book a complimentary consultation to discuss your aesthetic goals and create a personalised treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-colors duration-300 text-sm sm:text-base touch-manipulation"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-50 text-gold-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold border border-gold-200 transition-colors duration-300 text-sm sm:text-base touch-manipulation"
            >
              Ask Questions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AestheticTreatments 