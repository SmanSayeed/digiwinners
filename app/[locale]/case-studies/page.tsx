'use client'

import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { ContactModal } from '@/components/contact-modal'
import { ScrollAnimation } from '@/components/scroll-animation'
import caseStudiesData from '@/data/case-studies.json'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactModal />
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </div>

        <ScrollAnimation>
          <div className="text-center relative z-10">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Case Studies
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Real projects, real results, real impact
            </motion.p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              className="bg-secondary rounded-xl overflow-hidden border border-border hover:border-accent transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-80 bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-accent px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 4 && (
                    <span className="text-xs bg-primary/10 text-accent px-2 py-1 rounded">
                      +{study.technologies.length - 4}
                    </span>
                  )}
                </div>

                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  View Case Study
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
