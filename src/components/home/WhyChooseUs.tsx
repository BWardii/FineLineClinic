'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, Clock, Users, Star, Heart, Sparkles, CheckCircle } from 'lucide-react'

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const reasons = [
    {
      icon: Shield,
      title: 'FDA-Approved Products',
      description: 'We only use the highest quality, FDA-approved products for all treatments, ensuring your safety and optimal results.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Award-Winning Expertise',
      description: 'Our board-certified practitioners have won multiple industry awards for excellence in aesthetic medicine.',
      color: 'from-gold-500 to-yellow-600'
    },
    {
      icon: Clock,
      title: 'Minimal Downtime',
      description: 'Advanced techniques that deliver remarkable results with minimal recovery time, fitting into your busy lifestyle.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: '5000+ Happy Patients',
      description: 'Over 5,000 satisfied patients trust us with their aesthetic goals, with a 98% satisfaction rate.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Every treatment plan is customized to your unique needs, goals, and facial anatomy for natural-looking results.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Sparkles,
      title: 'Latest Technology',
      description: 'We invest in the latest aesthetic technology and techniques to provide you with cutting-edge treatments.',
      color: 'from-sage-500 to-sage-600'
    }
  ]

  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Patients' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Patient Support' }
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-sage-100 px-6 py-3 rounded-full mb-6"
          >
            <Star className="w-5 h-5 text-sage-600" />
            <span className="text-sage-700 font-medium">Why Choose FineLine Clinic</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            London's Most <span className="text-sage-600">Trusted</span> Aesthetic Clinic
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine medical excellence with artistic vision to deliver natural, beautiful results 
            that enhance your confidence and well-being.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-sage-200 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-sage-600 transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-sage-600 to-sage-700 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands Across London
            </h3>
            <p className="text-xl opacity-90">
              Our numbers speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-gold-300">
                  {stat.number}
                </div>
                <div className="text-lg font-medium opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8 text-lg">
            Certified and trusted by leading medical organizations
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">Care Quality Commission</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">BAAPS Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">GMC Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">BCAM Member</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs 