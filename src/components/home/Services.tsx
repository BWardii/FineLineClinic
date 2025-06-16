'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Droplets, Sparkles, Syringe, Star } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: Droplets,
      title: 'IV Vitamin Therapy',
      description: 'Replenish and revitalize your body with our premium vitamin infusions for energy, immunity, and beauty.',
      features: ['Energy Boost', 'Immune Support', 'Beauty Enhancement', 'Detoxification'],
      price: 'From £99',
      image: '/images/1000163192.jpg',
      href: '/vitamin-infusions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Syringe,
      title: 'Anti-Aging Injectables',
      description: 'Expert Botox and dermal filler treatments to smooth wrinkles and restore youthful volume.',
      features: ['Botox Treatments', 'Dermal Fillers', 'Lip Enhancement', 'Facial Contouring'],
      price: 'From £135',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80',
      href: '/services',
      color: 'from-sage-500 to-sage-600'
    },
    {
      icon: Sparkles,
      title: 'Advanced Skin Treatments',
      description: 'Cutting-edge procedures to rejuvenate, tighten, and perfect your skin texture and tone.',
      features: ['Microneedling', 'Chemical Peels', 'Polynucleotides', 'Profhilo'],
      price: 'From £150',
      image: 'https://images.unsplash.com/photo-1616391182219-e080b5389863?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      href: '/services',
      color: 'from-gold-500 to-yellow-600'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-sage-50/30 to-white">
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
            className="inline-flex items-center gap-2 bg-sage-100 px-6 py-3 rounded-full mb-6"
          >
            <Star className="w-5 h-5 text-sage-600" />
            <span className="text-sage-700 font-medium">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium <span className="text-sage-600">Aesthetic Treatments</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From rejuvenating vitamin infusions to advanced anti-aging treatments, 
            we offer comprehensive solutions for your wellness and beauty goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-sage-200 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=500&q=80'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Icon */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Price */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-bold text-sage-600">{service.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sage-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Popular Treatments:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sage-600 to-sage-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book a complimentary consultation to discuss your goals and create a personalized treatment plan.
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
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-sage-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 