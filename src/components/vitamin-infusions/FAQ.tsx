'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long does a vitamin infusion take?',
      answer: 'Most vitamin infusions take between 30-90 minutes depending on the specific vitamins and dosages. Our team will provide you with an estimated time when you book your appointment.'
    },
    {
      question: 'Is vitamin infusion therapy safe?',
      answer: 'Yes, vitamin infusion therapy is very safe when administered by trained medical professionals. We use only pharmaceutical-grade vitamins and follow strict safety protocols. A consultation is required for first-time patients to ensure safety.'
    },
    {
      question: 'How often should I get vitamin infusions?',
      answer: 'The frequency depends on your individual needs and goals. Some patients benefit from weekly sessions, while others prefer monthly treatments. During your consultation, we\'ll create a personalized schedule that works best for you.'
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'Your first visit includes a comprehensive consultation to discuss your health goals, medical history, and any concerns. We\'ll then create a customized vitamin blend and administer your infusion in our comfortable treatment room.'
    },
    {
      question: 'Are there any side effects?',
      answer: 'Side effects are rare and typically mild, such as slight bruising at the injection site or a metallic taste during treatment. Our medical team monitors you throughout the process to ensure your comfort and safety.'
    },
    {
      question: 'Can I customize my vitamin blend?',
      answer: 'Absolutely! Our interactive configurator allows you to select specific vitamins based on your wellness goals. Our medical team will review your selections and may make recommendations based on your health profile.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Vitamin infusion therapy is typically considered elective and not covered by insurance. However, we offer flexible payment options and package deals to make treatments more affordable.'
    },
    {
      question: 'Who is not a candidate for vitamin infusions?',
      answer: 'Pregnant or breastfeeding women, individuals with certain kidney conditions, or those with specific allergies may not be suitable candidates. Our consultation process helps determine if vitamin infusion therapy is right for you.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
            Frequently Asked <span className="text-sage-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our vitamin infusion therapy.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-poppins font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-sage-500 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our medical team is here to help you understand how vitamin infusion therapy can benefit your health and wellness goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Schedule Consultation
                </button>
                <button className="btn-secondary">
                  Call (123) 456-7890
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ 