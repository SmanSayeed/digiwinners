'use client'

import { useTranslations } from 'next-intl'
import { motion, useMotionValue } from 'framer-motion'
import { ScrollAnimation } from '../scroll-animation'
import { useState, useEffect } from 'react'
import {
    Lightbulb,
    FileText,
    Palette,
    Code,
    Users,
    TestTube,
    Server,
    CheckCircle,
    Settings,
    Rocket
} from 'lucide-react'

const workflowStages = [
    { id: 1, icon: Lightbulb, titleKey: 'idea', angle: 0, color: '#f59e0b' },
    { id: 2, icon: FileText, titleKey: 'planning', angle: 40, color: '#3b82f6' },
    { id: 3, icon: Palette, titleKey: 'design', angle: 80, color: '#ec4899' },
    { id: 4, icon: Code, titleKey: 'development', angle: 120, color: '#10b981' },
    { id: 5, icon: Users, titleKey: 'dailyMeeting', angle: 160, color: '#6366f1' },
    { id: 6, icon: TestTube, titleKey: 'testing', angle: 200, color: '#ef4444' },
    { id: 7, icon: Server, titleKey: 'deployment', angle: 240, color: '#8b5cf6' },
    { id: 8, icon: CheckCircle, titleKey: 'uat', angle: 280, color: '#14b8a6' },
    { id: 9, icon: Settings, titleKey: 'maintenance', angle: 320, color: '#f97316' }
]

function WorkflowStage({ stage, index, radius }: { stage: typeof workflowStages[0], index: number, radius: number }) {
    const t = useTranslations('HowWeWork')
    const Icon = stage.icon
    const angleRad = (stage.angle * Math.PI) / 180

    const x = Math.cos(angleRad) * radius
    const y = Math.sin(angleRad) * radius

    return (
        <motion.div
            className="absolute group cursor-pointer"
            style={{
                left: '50%',
                top: '50%',
            }}
            initial={{
                x: 0,
                y: 0,
                scale: 0,
                opacity: 0
            }}
            animate={{
                x: x - 24,
                y: y - 24,
                scale: 1,
                opacity: 1
            }}
            transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{ scale: 1.15, zIndex: 20 }}
        >
            {/* Stage icon circle */}
            <div className="relative">
                <motion.div
                    className="w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-lg relative"
                    style={{
                        background: `linear-gradient(135deg, ${stage.color}20, ${stage.color}40)`,
                        border: `2px solid ${stage.color}60`,
                    }}
                    whileHover={{
                        boxShadow: `0 0 30px ${stage.color}80`,
                    }}
                >
                    {/* Stage number badge */}
                    <div
                        className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
                        style={{ backgroundColor: stage.color }}
                    >
                        {stage.id}
                    </div>

                    <Icon
                        className="w-6 h-6 md:w-9 md:h-9 lg:w-10 lg:h-10"
                        style={{ color: stage.color }}
                    />
                </motion.div>

                {/* Stage label */}
                <motion.div
                    className="absolute top-full mt-1 md:mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                >
                    <div className="bg-background/90 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-border shadow-md">
                        <p className="text-[10px] md:text-xs lg:text-sm font-semibold" style={{ color: stage.color }}>
                            {t(stage.titleKey)}
                        </p>
                    </div>
                </motion.div>

                {/* Tooltip on hover - desktop only */}
                <motion.div
                    className="hidden md:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ width: '200px' }}
                >
                    <div className="bg-background border border-border rounded-lg p-3 shadow-xl">
                        <p className="text-xs text-muted-foreground text-center">
                            {t(`${stage.titleKey}Desc`)}
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export function HowWeWork() {
    const t = useTranslations('HowWeWork')
    const [radius, setRadius] = useState(140)

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth >= 1024) {
                setRadius(300)
            } else if (window.innerWidth >= 768) {
                setRadius(250)
            } else {
                setRadius(140)
            }
        }

        updateRadius()
        window.addEventListener('resize', updateRadius)
        return () => window.removeEventListener('resize', updateRadius)
    }, [])

    return (
        <section className="py-20 px-4 md:px-8 bg-secondary/30 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto">
                <ScrollAnimation>
                    <div className="text-center mb-12 md:mb-16">
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {t('title')}
                        </motion.h2>
                        <motion.p
                            className="text-xl text-muted-foreground max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            {t('subtitle')}
                        </motion.p>
                    </div>
                </ScrollAnimation>

                {/* Circular Orbit Visualization */}
                <div className="relative flex items-center justify-center min-h-[450px] md:min-h-[700px]">
                    {/* Orbital circle path */}
                    <motion.div
                        className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-dashed border-accent/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />

                    {/* Center project icon */}
                    <motion.div
                        className="absolute z-10 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                    >
                        <Rocket className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
                    </motion.div>

                    {/* Center text */}
                    <motion.div
                        className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 translate-y-14 md:translate-y-20 lg:translate-y-24 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        <p className="text-xs md:text-sm lg:text-base font-semibold text-accent">Your Project</p>
                    </motion.div>

                    {/* Orbiting workflow stages */}
                    {workflowStages.map((stage, index) => (
                        <WorkflowStage
                            key={stage.id}
                            stage={stage}
                            index={index}
                            radius={radius}
                        />
                    ))}

                    {/* Rotating animation overlay */}
                    <motion.div
                        className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border border-accent/10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Bottom CTA */}
                <ScrollAnimation>
                    <div className="text-center mt-12 md:mt-16">
                        <motion.p
                            className="text-lg text-muted-foreground mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            {t('cta')}
                        </motion.p>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
