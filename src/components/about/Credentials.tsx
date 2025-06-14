'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Shield, GraduationCap, Users } from 'lucide-react'

const Credentials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const credentials = [
    {
      category: 'Medical Education',
      items: [
        'Harvard Medical School - Doctor of Medicine',
        'Johns Hopkins Hospital - Dermatology Residency',
        'American Academy of Dermatology - Fellowship',
        'Continuing Medical Education - 50+ hours annually',
      ],
    },
    {
      category: 'Board Certifications',
      items: [
        'American Board of Dermatology',
        'American Board of Aesthetic Medicine',
        'International Association of Physicians in Aesthetic Medicine',
        'American Society of Plastic Surgeons - Associate Member',
      ],
    },
    {
      category: 'Professional Memberships',
      items: [
        'American Medical Association',
        'American Academy of Dermatology',
        'International Society of Aesthetic Plastic Surgery',
        'American Society for Aesthetic Plastic Surgery',
      ],
    },
    {
      category: 'Awards & Recognition',
      items: [
        'Top Doctor Award - City Magazine (2020-2023)',
        'Excellence in Patient Care - Medical Board',
        'Best Aesthetic Clinic - Local Business Awards',
        'Patient Choice Award - Healthcare Excellence',
      ],
    },
  ]

  const stats = [
    { icon: Users, label: 'Patients Treated', value: '5,000+' },
    { icon: Award, label: 'Years Experience', value: '8+' },
    { icon: Shield, label: 'Safety Record', value: '100%' },
    { icon: GraduationCap, label: 'Certifications', value: '12+' },
  ]

  return (
    <section ref={ref} className="section-padding bg-cream-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Credentials & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our extensive training, 
            certifications, and ongoing education in the latest aesthetic techniques.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
              <stat.icon className="text-sage-500 mx-auto mb-3" size={32} />
              <p className="font-poppins font-bold text-2xl text-gray-800 mb-1">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-6">
                {section.category}
              </h3>
              
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sage-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-md text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-gray-800 mb-6">
            Your Safety & Satisfaction Are Our Priority
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We maintain the highest standards of medical practice and continue to advance 
            our skills through ongoing education and training. When you choose FineLine Clinic, 
            you're choosing expertise you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 text-sage-600">
              <Shield size={20} />
              <span className="font-medium">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2 text-sage-600">
              <Award size={20} />
              <span className="font-medium">Board Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-sage-600">
              <Users size={20} />
              <span className="font-medium">5000+ Happy Patients</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Credentials 