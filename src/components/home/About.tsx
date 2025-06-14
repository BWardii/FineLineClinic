'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Award, GraduationCap, Users, Heart, ArrowRight, Star } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const credentials = [
    {
      icon: GraduationCap,
      title: 'Medical Excellence',
      description: 'Board-certified doctors with years of specialised training'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning clinic with multiple certifications'
    },
    {
      icon: Users,
      title: '5000+ Patients',
      description: 'Successfully treated with outstanding results'
    },
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Personalized treatment plans for every individual'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-sage-50/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-sage-100 px-4 py-2 rounded-full mb-6"
              >
                <Star className="w-4 h-4 text-sage-600" />
                <span className="text-sage-700 font-medium text-sm">About FineLine Clinic</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                London's Premier <span className="text-sage-600">Aesthetic Clinic</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Located in the heart of London's prestigious medical district, FineLine Clinic has been 
                  setting the standard for aesthetic excellence for over a decade. Our team of board-certified 
                  practitioners combines medical expertise with artistic vision to deliver natural, 
                  beautiful results.
                </p>
                
                <p>
                  We believe that true beauty comes from feeling confident in your own skin. That's why 
                  we take a holistic approach to aesthetic medicine, focusing not just on treatments, 
                  but on understanding your unique goals and creating a personalized journey to help you 
                  achieve them.
                </p>
              </div>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-sage-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <credential.icon className="w-8 h-8 text-sage-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{credential.title}</h4>
                  <p className="text-sm text-gray-600">{credential.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80"
                alt="FineLine Clinic Interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-sage-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Award Winning</p>
                  <p className="text-sm text-gray-600">Best Aesthetic Clinic 2024</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 