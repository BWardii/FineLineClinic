'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const teamMembers = [
    {
      name: 'Dr. Ayaan',
      role: 'Lead Aesthetic Physician',
      image: '/images/doctor-ayaan.jpg',
      specialties: ['Botox', 'Dermal Fillers', 'Skin Rejuvenation'],
      bio: 'Board-certified physician with 8+ years in aesthetic medicine.',
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director',
      specialties: ['Botox & Fillers', 'Skin Treatments', 'Vitamin Infusions'],
      image: '/api/placeholder/300/400',
      bio: 'Board-certified physician with 15+ years in aesthetic medicine.',
    },
    {
      name: 'Emma Thompson',
      role: 'Senior Aesthetic Nurse',
      specialties: ['Injectable Treatments', 'Skin Care', 'Patient Care'],
      image: '/api/placeholder/300/400',
      bio: 'Certified aesthetic nurse with expertise in advanced injection techniques.',
    },
    {
      name: 'Michael Chen',
      role: 'Practice Manager',
      specialties: ['Operations', 'Patient Experience', 'Scheduling'],
      image: '/api/placeholder/300/400',
      bio: 'Ensures smooth operations and exceptional patient experience.',
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Patient Coordinator',
      specialties: ['Consultations', 'Treatment Planning', 'Follow-up Care'],
      image: '/api/placeholder/300/400',
      bio: 'Dedicated to guiding patients through their aesthetic journey.',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white" id="team">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team of medical professionals and support staff are 
            dedicated to providing you with the highest level of care and service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              
              <p className="text-sage-500 font-medium mb-3">{member.role}</p>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-700 mb-2">Specialties:</p>
                {member.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-sage-100 text-sage-700 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team 