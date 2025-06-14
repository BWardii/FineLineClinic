'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus, Info, Zap, Heart, Brain, Shield, Sparkles, Sun, Star, Beaker, Droplets, Clock, AlertTriangle } from 'lucide-react'

interface Vitamin {
  id: string
  name: string
  iconName: string
  color: string
  price: number
  benefits: string[]
  description: string
  category: 'energy' | 'beauty' | 'immunity' | 'wellness'
  contraindications?: string[]
  duration: string
  intensity: number
  keyBenefits: string[]
  ingredients: string[]
}

const VitaminConfigurator = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedVitamins, setSelectedVitamins] = useState<string[]>([])
  const [showSummary, setShowSummary] = useState(false)
  const [hoveredVitamin, setHoveredVitamin] = useState<string | null>(null)

  const iconComponents = {
    Droplets, Sparkles, Zap, Shield, Star, Heart, Sun, Brain, Beaker
  }

  const vitamins: Vitamin[] = [
    {
      id: 'multivitamin',
      name: 'Multivitamin Drip',
      iconName: 'Droplets',
      color: 'from-blue-500 to-cyan-500',
      price: 99,
      benefits: ['Energy boost', 'Immune support', 'Overall wellness', 'Nutrient replenishment'],
      description: 'A nourishing blend to support your overall health and vitality',
      category: 'wellness',
      duration: '45-60 minutes',
      intensity: 3,
      keyBenefits: ['Enhanced energy levels', 'Stronger immune system', 'Better overall health'],
      ingredients: ['Vitamin C', 'B Complex (B1, B2, B3, B5)', 'B12'],
      contraindications: ['Pregnancy', 'Kidney disease']
    },
    {
      id: 'detox',
      name: 'Detox Drip',
      iconName: 'Sparkles',
      color: 'from-green-500 to-emerald-500',
      price: 180,
      benefits: ['Detoxification', 'Antioxidant protection', 'Liver support', 'Heavy metal removal'],
      description: 'A powerful cleansing blend to eliminate toxins and rejuvenate your system',
      category: 'wellness',
      duration: '60-90 minutes',
      intensity: 5,
      keyBenefits: ['Deep cellular detox', 'Enhanced liver function', 'Antioxidant boost'],
      ingredients: ['Glutathione', 'Vitamin C', 'B Complex', 'Thioctic Acid', 'Magnesium', 'Zinc'],
      contraindications: ['Severe liver disease', 'G6PD deficiency']
    },
    {
      id: 'energy',
      name: 'The Energy Drip',
      iconName: 'Zap',
      color: 'from-orange-500 to-yellow-500',
      price: 130,
      benefits: ['Enhanced energy', 'Mental clarity', 'Physical performance', 'Fatigue relief'],
      description: 'A revitalizing blend to boost your energy and mental clarity',
      category: 'energy',
      duration: '45-60 minutes',
      intensity: 4,
      keyBenefits: ['Instant energy boost', 'Improved focus', 'Enhanced performance'],
      ingredients: ['Vitamin C', 'B Complex', 'B12', 'Magnesium', 'Zinc'],
      contraindications: ['Heart conditions', 'High blood pressure']
    },
    {
      id: 'immunity',
      name: 'Immunity Booster',
      iconName: 'Shield',
      color: 'from-purple-500 to-indigo-500',
      price: 150,
      benefits: ['Immune system support', 'Antioxidant protection', 'Disease prevention', 'Recovery acceleration'],
      description: 'A powerful blend to strengthen your immune system and protect against illness',
      category: 'immunity',
      duration: '60 minutes',
      intensity: 4,
      keyBenefits: ['Stronger immune response', 'Faster recovery', 'Antioxidant protection'],
      ingredients: ['Vitamin C', 'Zinc', 'B Complex (B1, B2, B3, B5, B6, B7, B9, B12)', 'Thioctic Acid'],
      contraindications: ['Autoimmune conditions', 'Active infections']
    },
    {
      id: 'brightglow',
      name: 'Bright & Glow Drip',
      iconName: 'Star',
      color: 'from-pink-500 to-rose-500',
      price: 130,
      benefits: ['Skin brightening', 'Collagen boost', 'Anti-aging', 'Pigmentation reduction'],
      description: 'Brightens skin, reduces pigmentation, and boosts collagen for a radiant glow',
      category: 'beauty',
      duration: '60 minutes',
      intensity: 3,
      keyBenefits: ['Brighter complexion', 'Reduced dark spots', 'Youthful glow'],
      ingredients: ['Glutathione', 'Vitamin C', 'Thioctic Acid'],
      contraindications: ['Pregnancy', 'Breastfeeding']
    },
    {
      id: 'skinny',
      name: 'Skinny Drip',
      iconName: 'Heart',
      color: 'from-teal-500 to-cyan-500',
      price: 150,
      benefits: ['Metabolism boost', 'Weight management', 'Energy enhancement', 'Fat burning'],
      description: 'Supports energy production and enhances metabolism for weight management',
      category: 'wellness',
      duration: '60-75 minutes',
      intensity: 4,
      keyBenefits: ['Boosted metabolism', 'Enhanced fat burning', 'Increased energy'],
      ingredients: ['L-Carnitine', 'Arginine', 'Thioctic Acid'],
      contraindications: ['Heart conditions', 'Pregnancy']
    }
  ]

  const toggleVitamin = (vitaminId: string) => {
    setSelectedVitamins(prev => 
      prev.includes(vitaminId) 
        ? prev.filter(id => id !== vitaminId)
        : [...prev, vitaminId]
    )
    setShowSummary(true)
  }

  const selectedVitaminDetails = vitamins.filter(v => selectedVitamins.includes(v.id))
  const totalPrice = selectedVitaminDetails.reduce((sum, v) => sum + v.price, 0)
  const totalDuration = selectedVitaminDetails.length > 0 
    ? `${Math.max(...selectedVitaminDetails.map(v => parseInt(v.duration.split('-')[0])))} - ${Math.max(...selectedVitaminDetails.map(v => parseInt(v.duration.split('-')[1] || v.duration.split('-')[0])))} minutes`
    : '0 minutes'

  const getIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents]
    return IconComponent || Droplets
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-sage-50 via-white to-cream-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-sage-200/20 to-gold-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative">
        {/* Main Title */}
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-sage-100 to-gold-100 px-8 py-4 rounded-full mb-8"
          >
            <Beaker className="w-6 h-6 text-sage-600" />
            <span className="text-sage-700 font-medium text-lg">Interactive Vitamin Mixer</span>
            <Sparkles className="w-6 h-6 text-gold-600" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            ✨ Create Your Perfect Blend ✨
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Mix and match our premium vitamin infusions to create your personalized wellness cocktail. 
            Select multiple treatments for the ultimate health and beauty experience.
          </p>
        </motion.div>

        {/* Vitamin Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vitamins.map((vitamin, index) => {
            const IconComponent = getIcon(vitamin.iconName)
            const isSelected = selectedVitamins.includes(vitamin.id)
            const isHovered = hoveredVitamin === vitamin.id

            return (
              <motion.div
                key={vitamin.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 cursor-pointer transition-all duration-500 border-2 group ${
                  isSelected 
                    ? 'border-sage-300 shadow-2xl ring-4 ring-sage-100 transform scale-105' 
                    : 'border-gray-200 shadow-lg hover:shadow-2xl hover:border-sage-200 hover:-translate-y-2'
                }`}
                onClick={() => toggleVitamin(vitamin.id)}
                onMouseEnter={() => setHoveredVitamin(vitamin.id)}
                onMouseLeave={() => setHoveredVitamin(null)}
                whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Selection Indicator */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -top-3 -right-3 w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center z-10"
                    >
                      <motion.div
                        initial={{ rotate: -90 }}
                        animate={{ rotate: 0 }}
                        className="text-white font-bold text-lg"
                      >
                        ✓
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Intensity Indicator */}
                <div className="absolute top-4 right-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < vitamin.intensity ? 'bg-sage-400' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Icon with animated background */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${vitamin.color} rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}
                  animate={isSelected ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.6, repeat: isSelected ? Infinity : 0, repeatDelay: 2 }}
                >
                  <motion.div
                    animate={isHovered ? { rotate: 360 } : {}}
                    transition={{ duration: 1 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.3 }}
                      className="absolute inset-0 bg-white rounded-2xl"
                    />
                  )}
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-2xl font-bold transition-colors ${
                      isSelected ? 'text-sage-600' : 'text-gray-900 group-hover:text-sage-600'
                    }`}>
                      {vitamin.name}
                    </h3>
                    <span className={`text-3xl font-bold px-4 py-2 rounded-xl transition-colors ${
                      isSelected 
                        ? 'text-white bg-sage-500' 
                        : 'text-sage-600 bg-sage-50 group-hover:bg-sage-100'
                    }`}>
                      £{vitamin.price}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {vitamin.description}
                  </p>

                  {/* Key Ingredients */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Beaker className="w-4 h-4" />
                      Key Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {vitamin.ingredients.map((ingredient, idx) => (
                        <span key={idx} className="text-sm bg-white px-3 py-1 rounded-full text-gray-600 border">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {vitamin.keyBenefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${vitamin.color}`}></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Duration & Category */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {vitamin.duration}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                      vitamin.category === 'energy' ? 'bg-orange-100 text-orange-600' :
                      vitamin.category === 'beauty' ? 'bg-pink-100 text-pink-600' :
                      vitamin.category === 'immunity' ? 'bg-purple-100 text-purple-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {vitamin.category}
                    </span>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-sage-500 text-white hover:bg-sage-600'
                        : 'bg-sage-50 text-sage-600 hover:bg-sage-100 border-2 border-sage-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSelected ? (
                      <>
                        <Minus className="w-5 h-5" />
                        Remove from Blend
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5" />
                        Add to Blend
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary Panel */}
        <AnimatePresence>
          {showSummary && selectedVitamins.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="sticky bottom-8 bg-gradient-to-r from-sage-600 via-sage-700 to-gold-600 rounded-3xl p-8 text-white shadow-2xl border border-sage-300"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Your Custom Blend ✨</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedVitaminDetails.map((vitamin) => (
                      <span key={vitamin.id} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                        {vitamin.name}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Duration: {totalDuration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Treatments: {selectedVitamins.length}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center lg:text-right">
                  <div className="text-4xl font-bold mb-2">£{totalPrice}</div>
                  <motion.button
                    className="bg-white text-sage-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-sage-50 transition-colors duration-300 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Your Blend
                    <Sparkles className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {selectedVitamins.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center gap-2 text-sage-600 bg-sage-50 px-6 py-3 rounded-full">
              <Info className="w-5 h-5" />
              <span className="font-medium">Select vitamins above to create your perfect blend</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default VitaminConfigurator 