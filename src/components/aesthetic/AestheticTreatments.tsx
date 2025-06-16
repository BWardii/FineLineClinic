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
      name: 'Botox Treatment',
      price: 'from £135',
      description: 'FDA-approved botulinum toxin to reduce dynamic wrinkles and fine lines. Our expert practitioners deliver natural-looking results that enhance your features while maintaining facial expression.',
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-100 to-gold-200 px-6 py-3 rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5 text-gold-600" />
            <span className="text-gold-700 font-medium">Aesthetic Treatments</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced <span className="text-gold-600">Beauty Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your appearance with our comprehensive range of aesthetic treatments. 
            Each procedure is performed by experienced practitioners using the latest techniques and premium products.
          </p>
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {aestheticTreatments.map((treatment, index) => (
            <motion.div
              key={treatment.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold-200 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Icon */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${treatment.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <treatment.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Price */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-bold text-gold-600">{treatment.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gold-600 transition-colors">
                    {treatment.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {treatment.duration}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {treatment.description}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {treatment.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${treatment.color}`}></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treatment Areas */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Treatment Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {treatment.areas.map((area, idx) => (
                      <span key={idx} className="bg-gold-50 text-gold-700 px-3 py-1 rounded-full text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6 p-4 bg-sage-50 rounded-xl">
                  <h4 className="font-semibold text-sage-800 mb-2">Expected Results:</h4>
                  <p className="text-sage-700 text-sm">{treatment.results}</p>
                </div>

                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Book Treatment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sage-600 to-gold-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Enhance Your Natural Beauty?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book a complimentary consultation to discuss your aesthetic goals and create a personalised treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-white text-sage-600 px-8 py-4 rounded-2xl font-semibold hover:bg-sage-50 transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-sage-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Ask Questions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AestheticTreatments 