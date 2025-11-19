'use client'

import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { ContactModal } from '@/components/contact-modal'
import { ScrollAnimation } from '@/components/scroll-animation'
import { motion } from 'framer-motion'

export default function AboutPage() {
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
              About Digiwinners
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming businesses through innovative digital solutions with years of expertise
            </motion.p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation variant="slideLeft">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our journey began in 2016 when our team lead started working in the IT industry with a vision to create exceptional digital solutions. Through years of dedication, learning, and delivering successful projects, the foundation was laid for what would become Digiwinners.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                After years of experience and building strong client relationships, Digiwinners was officially shaped as a company dedicated to transforming businesses through innovative technology solutions. We combine deep technical expertise with a client-first approach.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're a growing team of skilled engineers, designers, and strategists working with businesses of all sizes to bring their digital visions to life. Our commitment to excellence, innovation, and customer success drives everything we do.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="slideRight">
            <motion.div
              className="relative h-96 md:h-[500px] bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-2xl border border-accent/30 overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/20 to-transparent"
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(0, 217, 255, 0.3) 0%, rgba(0, 217, 255, 0.2) 50%, transparent 100%)',
                    'linear-gradient(135deg, rgba(0, 217, 255, 0.25) 0%, rgba(0, 217, 255, 0.3) 50%, transparent 100%)',
                    'linear-gradient(135deg, rgba(0, 217, 255, 0.3) 0%, rgba(0, 217, 255, 0.2) 50%, transparent 100%)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-8xl md:text-9xl">💡</div>
              </motion.div>

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent/40 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>



      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Excellence',
              description: 'We pursue excellence in every project, every day',
            },
            {
              title: 'Innovation',
              description: 'We embrace new technologies and bold ideas',
            },
            {
              title: 'Integrity',
              description: 'We operate with honesty and transparency',
            },
          ].map((value, idx) => (
            <ScrollAnimation key={idx} variant="fadeUp" delay={idx * 0.1}>
              <motion.div
                className="p-6 bg-secondary rounded-xl border border-border text-center"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
