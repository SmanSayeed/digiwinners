'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollAnimation } from './scroll-animation'
import caseStudiesData from '@/data/case-studies.json'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export function CaseStudiesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const caseStudies = caseStudiesData.caseStudies

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, caseStudies.length])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
    setIsAutoPlay(false)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
    setIsAutoPlay(false)
  }

  const currentStudy = caseStudies[currentIndex]

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          </div>
        </ScrollAnimation>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudy.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8 bg-secondary rounded-2xl overflow-hidden border border-border"
            >
              <div className="w-full md:w-1/2 h-64 md:h-96 relative flex-shrink-0">
                <motion.div
                  className="relative w-full h-full rounded-none md:rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={currentStudy.image || "/placeholder.svg"}
                    alt={currentStudy.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{currentStudy.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm md:text-base">
                    {currentStudy.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <p className="text-xs font-semibold mb-3 uppercase tracking-wide">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {currentStudy.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <Link
                  href={currentStudy.link}
                  className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm mt-6 w-fit"
                >
                  View Case Study
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {caseStudies.map((_, idx) => (
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
                className="p-3 bg-secondary border border-border rounded-lg hover:border-accent transition-colors"
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

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              {isAutoPlay ? 'Auto-playing' : 'Manual mode'} • Case Study {currentIndex + 1} of {caseStudies.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
