'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, GraduationCap, Users, Calendar, Star, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Stethoscope } from 'lucide-react'

const Doctor = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: Users, label: 'Happy Patients', value: '5000+' },
    { icon: Award, label: 'Years Experience', value: '8+' },
    { icon: Star, label: 'Patient Rating', value: '4.9/5' },
    { icon: Shield, label: 'Board Certified', value: 'Yes' },
  ]

  return (
    <section ref={ref} className="section-padding bg-cream-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-sage-100 to-sage-200">
                <Image
                  src="/images/doctor-ayaan.jpg"
                  alt="Dr. Ayaan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sage-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">4.9/5</div>
                    <div className="text-sm text-gray-600">Patient Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Doctor Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Stethoscope className="w-4 h-4" />
                Board Certified Physician
              </div>
              
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Meet Dr. Ayaan
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Board-certified dermatologist with over 8 years of experience in aesthetic medicine.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Dr. Ayaan is passionate about helping patients achieve natural, beautiful results through
                the latest aesthetic treatments. With extensive training in dermatology and cosmetic procedures,
                she combines medical expertise with an artistic eye to deliver exceptional outcomes.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage-400 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  <strong>Education:</strong> Harvard Medical School, Johns Hopkins Dermatology Residency
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage-400 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  <strong>Specializations:</strong> Injectable treatments, laser therapy, skin rejuvenation
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage-400 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  <strong>Philosophy:</strong> Enhancing natural beauty while maintaining facial harmony
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-md text-center"
                >
                  <stat.icon className="text-sage-500 mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-800 text-lg">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/about" className="btn-primary">
                Learn More About Dr. Ayaan
              </Link>
              <Link href="/booking" className="btn-secondary">
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Doctor 