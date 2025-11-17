'use client'

import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { ContactModal } from '@/components/contact-modal'
import { ScrollAnimation } from '@/components/scroll-animation'
import teamData from '@/data/team.json'
import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactModal />
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Digiwinners</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming businesses through innovative digital solutions since 2009
            </p>
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
                Founded in 2009, Digiwinners began as a small team of passionate developers with a mission to revolutionize digital transformation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Today, we're a 45+ person team of engineers, designers, and strategists working with Fortune 500 companies and innovative startups worldwide.
              </p>
              <p className="text-lg text-muted-foreground">
                Our commitment to excellence, innovation, and customer success has made us a trusted partner for digital transformation.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="slideRight">
            <motion.div
              className="relative h-96 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl border border-accent/30 flex items-center justify-center"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-6xl">💡</div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
              <p className="text-lg text-muted-foreground">
                Led by industry veterans with decades of experience
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.team.map((member, idx) => (
              <ScrollAnimation key={member.id} variant="fadeUp" delay={idx * 0.1}>
                <motion.div
                  className="bg-background rounded-xl border border-border p-6 text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3 justify-center">
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
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
