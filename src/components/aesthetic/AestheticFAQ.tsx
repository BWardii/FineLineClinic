'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const AestheticFAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How long do anti-wrinkle injection results last?',
      answer: 'Anti-wrinkle injection results typically last 3-4 months. The duration can vary depending on individual factors such as metabolism, muscle strength, and lifestyle. Regular treatments can help maintain optimal results, and some clients find that results last longer with consistent treatment over time.'
    },
    {
      question: 'Are dermal fillers safe?',
      answer: 'Yes, when administered by qualified practitioners, dermal fillers are very safe. We use only FDA-approved hyaluronic acid fillers from reputable manufacturers. Side effects are typically mild and temporary, including slight swelling or bruising at injection sites. We conduct thorough consultations to ensure suitability for treatment.'
    },
    {
      question: 'What is the difference between microneedling with polynucleotides and mesotherapy?',
      answer: 'Both treatments use microneedling to deliver active ingredients, but they differ in the substances used. Polynucleotides are DNA fragments that promote tissue regeneration and healing, ideal for anti-aging and skin quality improvement. Mesotherapy uses customised vitamin and nutrient cocktails for hydration and rejuvenation. Your practitioner will recommend the best option based on your skin concerns.'
    },
    {
      question: 'How soon will I see results from aesthetic treatments?',
      answer: 'Results vary by treatment: anti-wrinkle injections show effects in 3-7 days with full results at 2 weeks. Dermal fillers provide immediate volume with final results after swelling subsides (1-2 weeks). Microneedling treatments show gradual improvement over 4-6 weeks as collagen production increases. Polynucleotide and Profhilo treatments show progressive results over 4-8 weeks.'
    },
    {
      question: 'Is there any downtime after aesthetic treatments?',
      answer: 'Most aesthetic treatments have minimal downtime. Anti-wrinkle injections and fillers may cause slight swelling or bruising for 1-3 days. Microneedling treatments may result in mild redness for 24-48 hours. We provide detailed aftercare instructions to minimise any side effects and optimise healing. Most clients return to normal activities immediately or within a day.'
    },
    {
      question: 'How do I know which treatment is right for me?',
      answer: 'During your complimentary consultation, we assess your skin condition, discuss your aesthetic goals, and review your medical history. Our experienced practitioners will recommend the most suitable treatments based on your individual needs, skin type, and desired outcomes. We believe in a personalised approach to achieve natural-looking results.'
    },
    {
      question: 'Can I combine different aesthetic treatments?',
      answer: 'Yes, many treatments can be combined for enhanced results. Popular combinations include anti-wrinkle injections with dermal fillers for comprehensive facial rejuvenation, or microneedling with polynucleotides for optimal skin regeneration. We create customised treatment plans that may include multiple procedures, properly spaced for safety and effectiveness.'
    },
    {
      question: 'What should I do to prepare for my treatment?',
      answer: 'Preparation varies by treatment but generally includes avoiding blood-thinning medications and supplements (aspirin, fish oil) for 1 week prior, avoiding alcohol 24 hours before, and arriving with clean skin. For microneedling treatments, avoid retinoids and exfoliating products for 3-5 days beforehand. Detailed pre-treatment instructions are provided during your consultation.'
    },
    {
      question: 'Are aesthetic treatments painful?',
      answer: 'Most treatments involve minimal discomfort. We use fine needles and topical anaesthetics when appropriate. Anti-wrinkle injections feel like small pinpricks, dermal fillers may cause slight pressure, and microneedling treatments use numbing cream for comfort. Our practitioners are skilled in techniques to minimise discomfort while ensuring effective treatment delivery.'
    },
    {
      question: 'How much do aesthetic treatments cost?',
      answer: 'Costs vary depending on the treatment type, area treated, and amount of product required. Anti-wrinkle injections start from £135, dermal fillers from £250, and microneedling treatments from £150. We provide detailed pricing during your consultation and offer package deals for multiple treatments.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-sage-50/30 to-white">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-sage-100 px-6 py-3 rounded-full mb-6"
          >
            <HelpCircle className="w-5 h-5 text-sage-600" />
            <span className="text-sage-700 font-medium">Frequently Asked Questions</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Questions <span className="text-sage-600">Answered</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get informed about our aesthetic treatments. If you have additional questions, 
            our team is always available to provide personalised guidance.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-sage-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-sage-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-sage-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-sage-600" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <div className="border-t border-sage-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-sage-100 to-gold-100 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experienced team is here to provide personalised advice and answer any specific 
              questions about your aesthetic treatment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                Contact Us
              </a>
              <a
                href="/booking"
                className="bg-white hover:bg-sage-50 text-sage-600 px-8 py-3 rounded-xl font-semibold border border-sage-200 transition-colors duration-300"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AestheticFAQ 