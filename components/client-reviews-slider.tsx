'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollAnimation } from './scroll-animation'
import reviewsData from '@/data/client-reviews.json'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export function ClientReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const reviews = reviewsData.reviews

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay, reviews.length])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
    setIsAutoPlay(false)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    setIsAutoPlay(false)
  }

  const currentReview = reviews[currentIndex]

  return (
    <section className="py-20 px-4 md:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl p-8 md:p-12 border border-border shadow-lg max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Client Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center overflow-hidden border-4 border-accent/30">
                    <img
                      src={currentReview.clientImage || "/placeholder-user.jpg"}
                      alt={currentReview.clientName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <FaQuoteLeft className="text-accent text-3xl mb-4 opacity-50" />
                  </div>
                  
                  <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                    {currentReview.review}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentReview.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Client Info */}
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">
                      {currentReview.clientName}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {currentReview.clientRole}
                    </p>
                    <p className="text-sm text-accent font-semibold">
                      {currentReview.clientCompany}
                    </p>
                    {currentReview.project && (
                      <p className="text-xs text-muted-foreground mt-2">
                        Project: {currentReview.project}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 max-w-4xl mx-auto">
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx)
                    setIsAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-accent w-8' : 'bg-border w-2'
                  }`}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex gap-4">
              <motion.button
                onClick={handlePrev}
                className="p-3 bg-background border border-border rounded-lg hover:border-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="p-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

