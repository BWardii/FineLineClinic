'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Map = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-6">
            Find Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of downtown, our clinic is easily accessible with 
            convenient parking and public transportation options.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Placeholder for Google Maps */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">
                FineLine Clinic
              </h3>
              <p className="text-gray-600">Rachel House, 214-218 High Road, N15 4NP</p>
              <p className="text-gray-600 mb-4">London, United Kingdom</p>
              <a 
                href="https://maps.google.com/?q=Rachel+House+214-218+High+Road+N15+4NP+London"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 btn-primary inline-block"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </motion.div>

        {/* Location Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <div className="text-center">
            <h4 className="font-poppins font-semibold text-gray-800 mb-3">Parking</h4>
            <p className="text-gray-600 text-sm">
              Street parking available on High Road. Pay and display parking nearby.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-poppins font-semibold text-gray-800 mb-3">Public Transport</h4>
            <p className="text-gray-600 text-sm">
              Tottenham Hale Station nearby. Multiple bus routes along High Road.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-poppins font-semibold text-gray-800 mb-3">Accessibility</h4>
            <p className="text-gray-600 text-sm">
              Ground floor access available. Please contact us for accessibility requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Map 