'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, GraduationCap, Users, Heart } from 'lucide-react'
import Image from 'next/image'

const DoctorProfile = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const achievements = [
    { icon: GraduationCap, title: 'Medical Degree', desc: 'King\'s College London' },
    { icon: Award, title: 'Board Certified', desc: 'Dermatology & Aesthetics' },
    { icon: Users, title: '5000+ Patients', desc: 'Successfully Treated' },
    { icon: Heart, title: '99% Satisfaction', desc: 'Patient Rating' },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/doctor-ayaan.jpg"
                alt="Dr. Ayaan"
                width={500}
                height={600}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl">
              <div className="text-center">
                <p className="font-poppins font-bold text-2xl text-sage-500">8+</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl">
              <div className="text-center">
                <p className="font-poppins font-bold text-2xl text-gold-500">12+</p>
                <p className="text-gray-600 text-sm">Certifications</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
              Meet Dr. Ayaan
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Dr. Ayaan is a distinguished board-certified physician with over 8 years of specialised 
              experience in aesthetic medicine. Her journey began with a passion for combining medical 
              science with artistic vision to help patients achieve their most confident selves.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              After completing her medical degree at King's College London and her dermatology residency 
              at Guy's and St Thomas' Hospital, Dr. Ayaan pursued advanced training in aesthetic medicine 
              across Europe and the United States. She has mastered the latest techniques in non-surgical 
              facial rejuvenation, having performed over 8,000 procedures with a focus on natural-looking 
              results that enhance each patient's unique beauty.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Dr. Ayaan's expertise spans advanced injectables, dermal fillers, and innovative vitamin 
              infusion therapies. She is particularly renowned for her precision with anti-wrinkle injections 
              and her ability to create subtle, age-defying results that maintain facial expression and 
              character. Her patients appreciate her meticulous attention to detail and her commitment 
              to the highest standards of safety and care.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  className="text-center p-4 bg-sage-50 rounded-lg"
                >
                  <achievement.icon className="text-sage-500 mx-auto mb-2" size={24} />
                  <h4 className="font-poppins font-semibold text-gray-800 text-sm mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-xs">{achievement.desc}</p>
                </motion.div>
              ))}
            </div>

            <blockquote className="border-l-4 border-sage-400 pl-6 italic text-gray-600">
              "My philosophy centres on enhancing your natural beauty whilst maintaining the 
              highest standards of medical excellence. I believe every patient deserves personalised 
              care that celebrates their individuality and helps them feel truly confident."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DoctorProfile 