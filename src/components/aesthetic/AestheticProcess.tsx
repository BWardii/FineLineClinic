'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, UserCheck, Zap, Heart, Shield, Star } from 'lucide-react'

const AestheticProcess = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const processSteps = [
    {
      icon: Calendar,
      title: 'Initial Consultation',
      description: 'Comprehensive assessment of your aesthetic goals, medical history, and treatment options.',
      details: [
        'Detailed facial analysis',
        'Discussion of expectations',
        'Treatment plan creation',
        'Cost breakdown provided'
      ],
      duration: '30-45 minutes',
      color: 'from-sage-500 to-sage-600'
    },
    {
      icon: UserCheck,
      title: 'Pre-Treatment Preparation',
      description: 'Personalised preparation guidelines to ensure optimal treatment results and safety.',
      details: [
        'Pre-treatment instructions',
        'Skin preparation advice',
        'Medication review',
        'Consent process'
      ],
      duration: '1-2 weeks before',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Treatment Session',
      description: 'Professional treatment delivery using advanced techniques and premium products.',
      details: [
        'Comfortable environment',
        'Precise technique application',
        'Real-time monitoring',
        'Immediate aftercare'
      ],
      duration: '15-90 minutes',
      color: 'from-gold-500 to-yellow-600'
    },
    {
      icon: Heart,
      title: 'Post-Treatment Care',
      description: 'Comprehensive aftercare support to maximise results and ensure proper healing.',
      details: [
        'Detailed aftercare instructions',
        'Follow-up appointments',
        'Progress monitoring',
        '24/7 support available'
      ],
      duration: 'Ongoing support',
      color: 'from-rose-500 to-pink-600'
    }
  ]

  const safetyFeatures = [
    {
      icon: Shield,
      title: 'FDA Approved Products',
      description: 'We only use premium, FDA-approved products from leading manufacturers.'
    },
    {
      icon: Star,
      title: 'Expert Practitioners',
      description: 'All treatments performed by qualified medical professionals with extensive experience.'
    },
    {
      icon: Heart,
      title: 'Personalised Approach',
      description: 'Every treatment is tailored to your unique facial anatomy and aesthetic goals.'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="text-sage-600">Treatment Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final results, we guide you through every step 
            of your aesthetic enhancement journey with care and expertise.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gradient-to-br from-sage-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-sage-100 hover:border-sage-200"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-sage-600 to-sage-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-sage-600 transition-colors">
                  {step.title}
                </h3>
                <div className="text-sm text-sage-600 font-medium mb-4 bg-sage-100 px-3 py-1 rounded-full inline-block">
                  {step.duration}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Details */}
              <div className="space-y-3">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety & Quality Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-sage-600 to-gold-600 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Safety & Quality First
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Your safety and satisfaction are our top priorities. We maintain the highest 
              standards in every aspect of our practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="opacity-90 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AestheticProcess 