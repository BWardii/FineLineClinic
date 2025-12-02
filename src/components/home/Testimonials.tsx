'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'London',
      rating: 5,
      text: 'Dr. Ayaan and her team are absolutely amazing! The results look so natural, and I feel more confident than ever. The whole experience was comfortable and professional.',
      treatment: 'Anti-Wrinkle Injections & Dermal Fillers',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80',
    },
    {
      name: 'Emily Chen',
      age: 28,
      treatment: 'Lip Enhancement',
      rating: 5,
      text: 'I was nervous about getting lip fillers, but the team made me feel so comfortable. The results are exactly what I wanted - natural and beautiful!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80',
    },
    {
      name: 'Jessica Rodriguez',
      age: 42,
      treatment: 'Anti-Aging Package',
      rating: 5,
      text: 'The combination of treatments has taken years off my appearance. I look refreshed and feel amazing. The staff is incredibly knowledgeable and caring.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80',
    },
    {
      name: 'Amanda Thompson',
      age: 36,
      treatment: 'Vitamin Infusions',
      rating: 5,
      text: 'The vitamin infusions have completely changed my energy levels and skin appearance. I feel healthier and more vibrant than I have in years!',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80',
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-cream-50 to-sage-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            What Our <span className="text-sage-500">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real patients who have experienced the FineLine difference.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="text-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover shadow-md"
              />
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-gold-400 fill-current" size={20} />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="mb-8">
                <h4 className="text-xl font-poppins font-semibold text-gray-800">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">
                  Age {testimonials[currentIndex].age} • {testimonials[currentIndex].treatment}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-sage-50 transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-sage-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-sage-50 transition-colors"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 