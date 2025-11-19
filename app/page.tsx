'use client'

import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { ContactModal } from '@/components/contact-modal'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SkillsSection } from '@/components/skills-section'
import { CaseStudiesSlider } from '@/components/case-studies-slider'
import { ClientReviewsSlider } from '@/components/client-reviews-slider'
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
      <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation variant="slideLeft">
            <div className="relative z-10">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Digital <span className="text-accent">Excellence</span> for Your Business
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform your digital presence with our premium IT solutions. From SaaS to eCommerce, we build the future.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button
                  onClick={() => dispatch(openContactModal())}
                  className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-accent/20"
                >
                  Get Started
                </button>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-border rounded-lg font-semibold hover:bg-secondary transition-all hover:scale-105 text-center"
                >
                  View Work
                </Link>
              </motion.div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="slideRight">
            <motion.div
              className="relative h-[400px] md:h-[500px] lg:h-[600px] flex flex-col gap-2 md:gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Row 1: Two Rectangles */}
              <div className="flex gap-2 md:gap-3 h-[48%] md:h-[49%]">
                {/* Image 1: Rectangle (Left) - E-commerce */}
                <motion.div
                  className="group relative flex-1 rounded-lg md:rounded-xl overflow-hidden border-2 border-accent/30 shadow-xl cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.02, zIndex: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent z-10" />
                  <img
                    src="/Images/E-commerce.jpg"
                    alt="E-commerce Solutions"
                    className="w-full h-full object-cover object-left"
                    loading="eager"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {/* Default State: Bottom Text with 30% Black Opacity Background */}
                  <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-12">
                    <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl tracking-wide">
                      E-commerce
                    </h3>
                  </div>

                  {/* Hover State: Low Opacity Overlay with Centered Text */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide text-center px-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms] ease-out">
                      E-commerce
                    </h3>
                  </div>
                </motion.div>

                {/* Image 2: Rectangle (Right) - ERP */}
                <motion.div
                  className="group relative flex-1 rounded-lg md:rounded-xl overflow-hidden border-2 border-accent/30 shadow-xl cursor-pointer"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  whileHover={{ scale: 1.02, zIndex: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent z-10" />
                  <img
                    src="/Images/ERP.jpg"
                    alt="ERP Solutions"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{
                      x: ['100%', '-100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {/* Default State: Bottom Text with 30% Black Opacity Background */}
                  <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-12">
                    <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl tracking-wide">
                      ERP
                    </h3>
                  </div>

                  {/* Hover State: Low Opacity Overlay with Centered Text */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide text-center px-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms] ease-out">
                      ERP
                    </h3>
                  </div>
                </motion.div>
              </div>

              {/* Row 2: One Rectangle (Full Width) - Custom Website */}
              <motion.div
                className="group relative h-[48%] md:h-[49%] rounded-lg md:rounded-xl overflow-hidden border-2 border-accent/30 shadow-xl cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.01, zIndex: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent z-10" />
                <img
                  src="/Images/banner.jpg"
                  alt="Custom Website Solutions"
                  className="w-full h-full object-cover object-right"
                  loading="eager"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Default State: Bottom Text with 30% Black Opacity Background */}
                <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-12">
                  <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl tracking-wide">
                    Custom Website
                  </h3>
                </div>

                {/* Hover State: Low Opacity Overlay with Centered Text */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide text-center px-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms] ease-out">
                    Custom Website
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          </ScrollAnimation>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
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

      {/* Client Reviews Section */}
      <ClientReviewsSlider />

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
