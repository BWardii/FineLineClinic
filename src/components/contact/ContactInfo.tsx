'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from 'lucide-react'

const ContactInfo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactDetails = [
    {
      icon: MapPin,
      title: 'Visit Our Clinic',
      info: '123 Beauty Lane, Suite 200',
      subInfo: 'Downtown City, ST 12345',
      action: 'Get Directions',
      href: 'https://maps.google.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '(123) 456-7890',
      subInfo: 'Available during business hours',
      action: 'Call Now',
      href: 'tel:+1234567890',
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@finelineclinic.com',
      subInfo: 'We respond within 24 hours',
      action: 'Send Email',
      href: 'mailto:info@finelineclinic.com',
    },
  ]

  const hours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ]

  return (
    <section ref={ref} className="section-padding bg-sage-50">
      <div className="container-max max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-6">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600">
            We're here to help you on your aesthetic journey. Reach out to us through 
            any of the methods below.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="space-y-6 mb-12">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <contact.icon size={24} className="text-sage-500" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-gray-800 font-medium mb-1">{contact.info}</p>
                  <p className="text-gray-600 text-sm mb-4">{contact.subInfo}</p>
                  
                  <Link
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    className="inline-flex items-center text-sage-500 hover:text-sage-600 font-medium text-sm"
                  >
                    {contact.action} →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg p-6 shadow-md mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
              <Clock size={24} className="text-sage-500" />
            </div>
            <h3 className="text-lg font-poppins font-semibold text-gray-800">
              Business Hours
            </h3>
          </div>
          
          <div className="space-y-3">
            {hours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-700">{schedule.day}</span>
                <span className="text-gray-600 font-medium">{schedule.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <Link
            href="/booking"
            className="bg-sage-500 text-white rounded-lg p-4 text-center hover:bg-sage-600 transition-colors group"
          >
            <Calendar className="mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
            <p className="font-medium">Book Online</p>
            <p className="text-sm opacity-90">Schedule your consultation</p>
          </Link>
          
          <Link
            href="#"
            className="bg-gold-500 text-white rounded-lg p-4 text-center hover:bg-gold-600 transition-colors group"
          >
            <MessageCircle className="mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
            <p className="font-medium">Live Chat</p>
            <p className="text-sm opacity-90">Chat with our team</p>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo 