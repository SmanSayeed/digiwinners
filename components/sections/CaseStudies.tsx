'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollAnimation } from '../scroll-animation'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from '@/i18n/routing'
import caseStudiesData from '@/data/case-studies.json'

const categories = ['All', 'Web Development', 'Mobile App', 'UI/UX Design', 'Digital Marketing']

export function CaseStudies() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [visibleCount, setVisibleCount] = useState(6)

    const filteredProjects = caseStudiesData.caseStudies.filter(
        (project) => activeCategory === 'All' || project.category === activeCategory
    )

    const visibleProjects = filteredProjects.slice(0, visibleCount)

    return (
        <section className="py-20 px-4 md:px-8 bg-background" id="case-studies">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Recent Work</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                            Explore our portfolio of successful projects where we've helped businesses transform their digital presence.
                        </p>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2 rounded-full transition-all ${activeCategory === category
                                        ? 'bg-accent text-white shadow-lg scale-105'
                                        : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-secondary rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-colors"
                            >
                                {/* Image Container */}
                                <div className="relative h-80 overflow-hidden">
                                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-accent/10 transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                                        <Link
                                            href={`/case-studies/${project.slug}`}
                                            className="px-6 py-3 bg-accent text-white rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                        >
                                            View Case Study
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <span key={tech} className="text-xs px-2 py-1 bg-background rounded border border-border text-muted-foreground">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="text-xs px-2 py-1 bg-background rounded border border-border text-muted-foreground">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Show All Button */}
                <div className="text-center">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-primary/25"
                    >
                        View All Case Studies
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
