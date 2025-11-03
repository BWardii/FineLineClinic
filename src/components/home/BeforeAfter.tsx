'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BeforeAfter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const beforeAfterImages = [
    {
      treatment: 'Botox & Dermal Fillers',
      before: 'https://images.unsplash.com/photo-1594824804732-ca8db7d1457c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      after: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Natural enhancement with Botox and subtle filler placement'
    },
    {
      treatment: 'Lip Enhancement',
      before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      after: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Beautiful, natural-looking lip enhancement'
    },
    {
      treatment: 'Anti-Aging Treatment',
      before: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      after: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Comprehensive anti-aging approach with multiple treatments'
    }
  ]

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length)
  }

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Real Results from <span className="text-sage-500">Real Patients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the natural, beautiful transformations our patients have achieved with our expert treatments.
          </p>
        </motion.div>

        <div className="max-w-[90rem] px-4 md:px-8 mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-[2rem] p-8 md:p-12 lg:p-14 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
                {/* Before Image */}
                <div className="relative">
                  <div className="absolute -top-4 -left-4 bg-gray-800 text-white px-4 py-2 rounded-lg font-medium z-10">
                    Before
                  </div>
                  <img
                    src={beforeAfterImages[currentIndex].before}
                    alt="Before treatment"
                    className="w-full h-[22rem] md:h-[34rem] lg:h-[40rem] xl:h-[46rem] object-cover rounded-xl shadow-md"
                  />
                </div>

                {/* After Image */}
                <div className="relative">
                  <div className="absolute -top-4 -left-4 bg-sage-500 text-white px-4 py-2 rounded-lg font-medium z-10">
                    After
                  </div>
                  <img
                    src={beforeAfterImages[currentIndex].after}
                    alt="After treatment"
                    className="w-full h-[22rem] md:h-[34rem] lg:h-[40rem] xl:h-[46rem] object-cover rounded-xl shadow-md"
                  />
                </div>
              </div>

              <div className="text-center mt-8">
                <h3 className="text-2xl font-poppins font-semibold text-gray-800 mb-2">
                  {beforeAfterImages[currentIndex].treatment}
                </h3>
                <p className="text-gray-600 mb-6">
                  {beforeAfterImages[currentIndex].description}
                </p>

                {/* Navigation */}
                <div className="flex items-center justify-center space-x-6">
                  <button
                    onClick={prevImage}
                    className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-sage-50 transition-colors"
                  >
                    <ChevronLeft size={28} className="text-gray-600" />
                  </button>
                  
                  <div className="flex space-x-2.5">
                    {beforeAfterImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-sage-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextImage}
                    className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-sage-50 transition-colors"
                  >
                    <ChevronRight size={28} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-gray-500 mb-4">
              *Individual results may vary. Photos are of actual patients and used with permission.
            </p>
            <div className="bg-sage-50 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-gray-700 italic">
                "Every patient is unique, and we take pride in creating personalized treatment plans 
                that deliver natural, beautiful results that enhance your individual features."
              </p>
              <p className="text-sage-600 font-medium mt-2">- Dr. Ayaan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter 