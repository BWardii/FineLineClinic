'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Droplets, Sparkles, Zap, Shield, Star, Heart, Syringe } from 'lucide-react'

const BookingForm = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    medicalHistory: '',
    allergies: '',
    currentMedications: ''
  })

  const services = [
    // Vitamin IV Infusions
    { 
      name: 'Multivitamin Drip', 
      price: '£99.00', 
      category: 'Vitamin IV Infusions',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Detox Drip', 
      price: '£180.00', 
      category: 'Vitamin IV Infusions',
      icon: Sparkles,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'The Energy Drip', 
      price: '£130.00', 
      category: 'Vitamin IV Infusions',
      icon: Zap,
      color: 'from-orange-500 to-yellow-500'
    },
    { 
      name: 'Immunity Booster', 
      price: '£150.00', 
      category: 'Vitamin IV Infusions',
      icon: Shield,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: 'Bright & Glow Drip', 
      price: '£130.00', 
      category: 'Vitamin IV Infusions',
      icon: Star,
      color: 'from-pink-500 to-rose-500'
    },
    { 
      name: 'Skinny Drip', 
      price: '£150.00', 
      category: 'Vitamin IV Infusions',
      icon: Heart,
      color: 'from-teal-500 to-cyan-500'
    },
    // Aesthetic Enhancements
    { 
      name: 'Dermal Filler', 
      price: '£250', 
      category: 'Aesthetic Enhancements',
      icon: Syringe,
      color: 'from-sage-500 to-sage-600'
    },
    { 
      name: 'Botox Treatment', 
      price: 'from £135', 
      category: 'Aesthetic Enhancements',
      icon: Sparkles,
      color: 'from-sage-600 to-sage-700'
    },
    { 
      name: 'Microneedling with Polynucleotide', 
      price: '£150', 
      category: 'Aesthetic Enhancements',
      icon: Star,
      color: 'from-gold-500 to-yellow-600'
    },
    { 
      name: 'Microneedling with Mesotherapy', 
      price: '£150', 
      category: 'Aesthetic Enhancements',
      icon: Droplets,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Polynucleotide Treatment', 
      price: '£275', 
      category: 'Aesthetic Enhancements',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Profhilo Treatment', 
      price: '£250', 
      category: 'Aesthetic Enhancements',
      icon: Heart,
      color: 'from-rose-500 to-pink-600'
    }
  ]

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = []
    }
    acc[service.category].push(service)
    return acc
  }, {} as Record<string, typeof services>)

  if (isSubmitted) {
    return (
      <section className="section-padding bg-gradient-to-br from-sage-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 shadow-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Booking Confirmed! ✨
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for choosing FineLine Clinic. We've received your booking request and will contact you shortly to confirm your appointment.
            </p>
            <div className="bg-sage-50 rounded-2xl p-6 text-left">
              <h3 className="font-semibold text-sage-800 mb-4">Appointment Details:</h3>
              <div className="space-y-2 text-sage-700">
                <p><strong>Service:</strong> {formData.service}</p>
                <p><strong>Date:</strong> {formData.date}</p>
                <p><strong>Time:</strong> {formData.time}</p>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-sage-50 to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your <span className="text-sage-600">Appointment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your consultation or treatment with our expert team at FineLine Clinic
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep ? 'bg-sage-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 md:w-32 h-1 mx-2 ${
                      step < currentStep ? 'bg-sage-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Service</span>
              <span>Date & Time</span>
              <span>Details</span>
              <span>Confirmation</span>
            </div>
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Your Service</h3>
                <div className="space-y-8">
                  {Object.entries(groupedServices).map(([category, categoryServices]) => (
                    <div key={category}>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        {category === 'Vitamin IV Infusions' ? (
                          <Droplets className="w-5 h-5 text-sage-600" />
                        ) : (
                          <Sparkles className="w-5 h-5 text-gold-600" />
                        )}
                        {category}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {categoryServices.map((service) => {
                          const IconComponent = service.icon
                          return (
                            <motion.div
                              key={service.name}
                              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                                formData.service === service.name
                                  ? 'border-sage-500 bg-sage-50 shadow-lg'
                                  : 'border-gray-200 hover:border-sage-300 hover:shadow-md'
                              }`}
                              onClick={() => handleInputChange('service', service.name)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                  <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-semibold text-gray-900">{service.name}</h5>
                                    <span className="text-lg font-bold text-sage-600">{service.price}</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Date & Time</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent text-lg"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Preferred Time
                    </label>
                    <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                            formData.time === time
                              ? 'bg-sage-600 text-white border-sage-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-sage-300'
                          }`}
                          onClick={() => handleInputChange('time', time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Personal Details */}
            {currentStep === 3 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Medical History
                    </label>
                    <textarea
                      value={formData.medicalHistory}
                      onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                      rows={3}
                      placeholder="Any relevant medical history..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Additional Notes
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                      rows={4}
                      placeholder="Any questions or special requests..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Confirm Your Booking</h3>
                <div className="bg-sage-50 rounded-2xl p-6 mb-6">
                  <h4 className="font-semibold text-sage-800 mb-4">Appointment Summary:</h4>
                  <div className="space-y-3 text-sage-700">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-medium">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="font-medium">{formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span className="font-medium">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phone:</span>
                      <span className="font-medium">{formData.phone}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Before Your Appointment:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Please arrive 15 minutes early for check-in</li>
                    <li>• Bring a valid ID and insurance card if applicable</li>
                    <li>• Eat a light meal before vitamin infusion treatments</li>
                    <li>• Avoid alcohol 24 hours before aesthetic treatments</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-3 text-sage-600 border border-sage-600 rounded-xl font-semibold hover:bg-sage-50 transition-colors"
                >
                  Previous
                </button>
              )}
              
              <div className="ml-auto">
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={
                      (currentStep === 1 && !formData.service) ||
                      (currentStep === 2 && (!formData.date || !formData.time)) ||
                      (currentStep === 3 && (!formData.name || !formData.email || !formData.phone))
                    }
                    className="px-8 py-3 bg-sage-600 text-white rounded-xl font-semibold hover:bg-sage-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-sage-600 text-white rounded-xl font-semibold hover:bg-sage-700 transition-colors flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Confirm Booking
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BookingForm 