'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Shield, Sparkles, Heart, Brain, Droplets, Clock, Award } from 'lucide-react'

const Benefits = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Energy',
      description: 'Feel revitalized within minutes as nutrients are delivered directly to your bloodstream.',
    },
    {
      icon: Shield,
      title: 'Immune Support',
      description: 'Strengthen your body\'s natural defenses with high-dose vitamins and antioxidants.',
    },
    {
      icon: Sparkles,
      title: 'Radiant Skin',
      description: 'Achieve a healthy glow from within with beauty-enhancing vitamins and minerals.',
    },
    {
      icon: Brain,
      title: 'Mental Clarity',
      description: 'Enhance cognitive function and focus with brain-boosting nutrients.',
    },
    {
      icon: Heart,
      title: 'Faster Recovery',
      description: 'Accelerate healing and reduce inflammation for optimal wellness.',
    },
    {
      icon: Droplets,
      title: 'Deep Hydration',
      description: 'Achieve optimal hydration at the cellular level for improved performance.',
    },
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Medical Grade',
      description: 'Only the highest quality, pharmaceutical-grade vitamins and minerals.',
    },
    {
      icon: Clock,
      title: 'Quick & Convenient',
      description: 'Most treatments take 30-60 minutes in our comfortable, relaxing environment.',
    },
    {
      icon: Shield,
      title: 'Safe & Effective',
      description: 'Administered by licensed medical professionals with strict safety protocols.',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        {/* Main Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Why Choose IV Vitamin Therapy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of direct nutrient delivery for maximum absorption and immediate results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-200 transition-colors duration-300">
                <benefit.icon size={32} className="text-sage-500" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-sage-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
              The FineLine Difference
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the safest, most effective vitamin infusion therapy 
              in a luxurious, comfortable setting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <item.icon size={24} className="text-sage-500" />
                </div>
                <h4 className="text-lg font-poppins font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits 