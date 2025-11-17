'use client'

import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { ContactModal } from '@/components/contact-modal'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SkillsSection } from '@/components/skills-section'
import { CaseStudiesSlider } from '@/components/case-studies-slider'
import { useDispatch } from 'react-redux'
import { openContactModal } from '@/lib/slices/contact-slice'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaCode, FaLock, FaChartLine } from 'react-icons/fa'

export default function Home() {
  const dispatch = useDispatch()

  const stats = [
    { label: 'Projects Completed', value: '150+' },
    { label: 'Team Members', value: '45+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Years of Experience', value: '15+' },
  ]

  const features = [
    {
      icon: FaRocket,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance',
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Maintainable and scalable architecture',
    },
    {
      icon: FaLock,
      title: 'Secure',
      description: 'Enterprise-grade security standards',
    },
    {
      icon: FaChartLine,
      title: 'Scalable',
      description: 'Grows with your business needs',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactModal />
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation variant="slideLeft">
            <div>
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Digital <span className="text-accent">Excellence</span> for Your Business
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground mb-8 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform your digital presence with our premium IT solutions. From SaaS to eCommerce, we build the future.
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button
                  onClick={() => dispatch(openContactModal())}
                  className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started
                </button>
                <Link
                  href="/case-studies"
                  className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  View Work
                </Link>
              </motion.div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="slideRight">
            <motion.div
              className="relative h-96 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl border border-accent/30 flex items-center justify-center"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-6xl">🚀</div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <ScrollAnimation key={idx} variant="fadeUp" delay={idx * 0.1}>
                <div className="text-center">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-accent mb-2"
                    whileInView={{ count: parseFloat(stat.value) }}
                    transition={{ duration: 2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Digiwinners?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver premium digital solutions that drive growth and innovation
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <ScrollAnimation key={idx} variant="fadeUp" delay={idx * 0.1}>
                <motion.div
                  className="p-6 bg-secondary rounded-xl border border-border hover:border-accent transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <feature.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />

      <CaseStudiesSlider />

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-primary text-primary-foreground">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <motion.button
              onClick={() => dispatch(openContactModal())}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  )
}
