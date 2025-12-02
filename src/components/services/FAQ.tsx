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
      question: 'How long do the results typically last?',
      answer: 'Results vary depending on the treatment. Anti-wrinkle injections typically last 3-4 months, dermal fillers can last 6-18 months, and vitamin infusions provide immediate benefits that can last several weeks. During your consultation, we\'ll discuss expected duration for your specific treatment plan.',
    },
    {
      question: 'Are the treatments painful?',
      answer: 'Most of our treatments involve minimal discomfort. We use topical numbing creams and the finest needles available to ensure your comfort. Many clients describe the sensation as a small pinch. For vitamin infusions, you\'ll feel a slight pinch when the IV is inserted, then just relaxation.',
    },
    {
      question: 'What should I expect during recovery?',
      answer: 'Recovery varies by treatment. Injectable treatments may cause minor swelling or bruising that resolves within a few days. Vitamin infusions have no downtime. We provide detailed aftercare instructions and are always available to answer questions during your recovery.',
    },
    {
      question: 'How do I know which treatment is right for me?',
      answer: 'During your consultation, Dr. Ayaan will assess your skin, discuss your goals, and recommend the best treatment plan for you. We consider your lifestyle, budget, and desired outcomes to create a personalised approach that delivers natural-looking results.',
    },
    {
      question: 'Are the treatments safe?',
      answer: 'Absolutely. We only use FDA-approved products and follow strict safety protocols. Dr. Ayaan is board-certified and has performed thousands of procedures. We conduct thorough medical histories and discuss any potential risks during your consultation.',
    },
    {
      question: 'Can I combine multiple treatments?',
      answer: 'Yes! Many clients benefit from combination treatments. For example, anti-wrinkle injections and dermal fillers work beautifully together, and vitamin infusions complement any aesthetic treatment. We\'ll create a comprehensive plan that addresses all your concerns safely and effectively.',
    },
    {
      question: 'What if I\'m not satisfied with my results?',
      answer: 'Your satisfaction is our priority. We offer complimentary follow-up appointments and will work with you to achieve your desired results. In the rare case that you\'re not satisfied, we\'ll discuss options to address your concerns at no additional cost.',
    },
    {
      question: 'How far in advance should I book my appointment?',
      answer: 'We recommend booking 1-2 weeks in advance for regular appointments. For special events, book 2-4 weeks ahead to allow time for any potential touch-ups. Emergency appointments may be available - please call us to discuss your needs.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="section-padding bg-sage-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our treatments and services. 
            Don't see your question? Contact us directly.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-poppins font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-sage-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-sage-500 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help! Contact us for personalized answers to your questions 
              or to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="tel:+1234567890" className="btn-secondary">
                Call (123) 456-7890
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 