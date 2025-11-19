'use client'

import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { ContactModal } from '@/components/contact-modal'
import { ScrollAnimation } from '@/components/scroll-animation'
import servicesData from '@/data/services.json'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { openContactModal } from '@/lib/slices/contact-slice'

export default function ServicesPage() {
  const dispatch = useDispatch()

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
            className="absolute top-10 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
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
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive IT solutions tailored to your business needs
            </motion.p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.services.map((service, idx) => (
            <ScrollAnimation key={service.id} variant="fadeUp" delay={idx * 0.1}>
              <motion.div
                className="p-8 bg-secondary rounded-xl border border-border hover:border-accent transition-all group relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                id={service.slug}
              >
                {/* Hover gradient effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">
                    {service.icon === 'cloud' ? '☁️' : 
                     service.icon === 'shopping-cart' ? '🛒' : 
                     service.icon === 'zap' ? '⚡' : 
                     service.icon === 'layers' ? '🏗️' :
                     service.icon === 'book' ? '📚' :
                     service.icon === 'clipboard' ? '📋' :
                     service.icon === 'briefcase' ? '💼' :
                     service.icon === 'cash-register' ? '💰' :
                     service.icon === 'warehouse' ? '📦' :
                     service.icon === 'globe' ? '🌐' :
                     service.icon === 'palette' ? '🎨' : '🚀'}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-accent">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-accent px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-primary text-primary-foreground">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss which service fits your needs best
            </p>
            <motion.button
              onClick={() => dispatch(openContactModal())}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  )
}
