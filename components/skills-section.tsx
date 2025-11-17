'use client'

import { motion } from 'framer-motion'
import { ScrollAnimation } from './scroll-animation'
import skillsData from '@/data/skills.json'
import * as SiIcons from 'react-icons/si'

export function SkillsSection() {
  const skills = skillsData.skills

  const displaySkills = [...skills, ...skills, ...skills]

  return (
    <section className="py-20 px-4 md:px-8 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with the latest and most reliable technologies
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 pb-8"
            animate={{ x: [-100, -1500] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {displaySkills.map((skill, idx) => {
              const IconComponent = SiIcons[skill.icon as keyof typeof SiIcons] as any

              return (
                <motion.div
                  key={`${skill.id}-${idx}`}
                  className="flex-shrink-0 w-40"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-6 bg-background rounded-xl border border-border hover:border-accent transition-all duration-300 group cursor-pointer h-40 flex flex-col items-center justify-center"
                    style={{
                      transform: `skewY(-3deg)`,
                    }}
                  >
                    {IconComponent ? (
                      <IconComponent className="w-12 h-12 text-accent mb-3 group-hover:scale-110 transition-transform" />
                    ) : (
                      <div className="w-12 h-12 bg-accent/20 rounded mb-3" />
                    )}
                    <span className="text-sm font-semibold text-center group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
