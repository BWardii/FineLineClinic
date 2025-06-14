'use client'

import { motion } from 'framer-motion'
import { Award, Users, Calendar, Heart } from 'lucide-react'

const AboutHero = () => {
  const stats = [
    { icon: Users, label: 'Happy Patients', value: '5000+' },
    { icon: Calendar, label: 'Years Experience', value: '8+' },
    { icon: Award, label: 'Certifications', value: '12+' },
    { icon: Heart, label: 'Satisfaction Rate', value: '99%' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-cream-50 to-white">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
      </div>

      <div className="relative z-10 container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-poppins font-bold text-gray-800 mb-6 leading-tight"
            >
              About <span className="text-sage-500">FineLine Clinic</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Dedicated to enhancing your natural beauty with the highest standards of medical care, 
              safety, and personalized attention. Our experienced team combines artistry with science 
              to deliver exceptional results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="text-sage-500 mx-auto mb-2" size={32} />
                  <p className="font-poppins font-bold text-2xl text-gray-800 mb-1">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/api/placeholder/600/700"
                alt="FineLine Clinic"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-6 shadow-xl">
              <h3 className="font-poppins font-semibold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm">
                To help you look and feel your absolute best through safe, effective treatments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero 