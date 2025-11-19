'use client'

import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { ContactModal } from '@/components/contact-modal'
import { ScrollAnimation } from '@/components/scroll-animation'
import caseStudiesData from '@/data/case-studies.json'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaArrowLeft, FaTimes, FaPlay } from 'react-icons/fa'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

export default function CaseStudyDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug as string
  
  const study = caseStudiesData.caseStudies.find((s) => s.slug === slug)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/case-studies" className="text-accent hover:underline">
            Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }

  const gallery = study.gallery || []

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactModal />
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="mb-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h1>
              {study.client && (
                <p className="text-lg text-accent mb-6 font-semibold">{study.client}</p>
              )}
              {study.summary && (
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {study.summary}
                </p>
              )}

              {/* Results */}
              {study.results && Object.keys(study.results).length > 0 && (
                <div className="bg-secondary rounded-xl p-6 mb-8 border border-border">
                  <h3 className="text-xl font-bold mb-4">Key Results</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-accent mb-1">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {study.features && study.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {study.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-xl p-6 border border-border sticky top-24">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  {study.client && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-semibold">{study.client}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Category</p>
                    <p className="font-semibold">{study.description}</p>
                  </div>
                  {study.results && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Status</p>
                      <p className="font-semibold text-accent">Completed</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Gallery Section */}
      {gallery.length > 0 && (
        <section className="py-20 px-4 md:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Project Gallery</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative group cursor-pointer overflow-hidden rounded-xl border border-border bg-background"
                    whileHover={{ y: -5 }}
                    onClick={() => {
                      if (item.type === 'image') {
                        setSelectedImageIndex(idx)
                      }
                    }}
                  >
                    {item.type === 'image' ? (
                      <>
                        <img
                          src={item.url}
                          alt={item.alt || `Gallery image ${idx + 1}`}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white font-semibold">Click to view</span>
                          </div>
                        </div>
                      </>
                    ) : item.type === 'video' && (item.videoUrl || item.url) ? (
                      <div className="relative w-full h-64 bg-black rounded-xl overflow-hidden group">
                        <iframe
                          src={item.videoUrl || item.url}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                          <FaPlay className="text-white text-4xl" />
                        </div>
                      </div>
                    ) : null}
                    {item.alt && (
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">{item.alt}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>
      )}

      {/* Image Modal */}
      {selectedImageIndex !== null && gallery[selectedImageIndex]?.type === 'image' && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImageIndex(null)}
        >
          <motion.button
            className="absolute top-4 right-4 text-white text-2xl z-10"
            onClick={() => setSelectedImageIndex(null)}
          >
            <FaTimes />
          </motion.button>
          <motion.img
            src={gallery[selectedImageIndex].url}
            alt={gallery[selectedImageIndex].alt || 'Gallery image'}
            className="max-w-full max-h-[90vh] object-contain"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      <Footer />
    </div>
  )
}

