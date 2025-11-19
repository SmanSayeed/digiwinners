'use client'

import { useTranslations } from 'next-intl'
import { useDispatch } from 'react-redux'
import { openContactModal } from '@/lib/slices/contact-slice'
import { motion } from 'framer-motion'
import HeroScene from '@/components/3d/HeroScene'
import { ArrowRight, ChevronDown, Rocket } from 'lucide-react'
import { Link } from '@/i18n/routing'

// Animated SVG Shapes Component
function FloatingShapes() {
    const shapes = [
        { type: 'circle', color: '#4F46E5', size: 60, x: '10%', y: '20%', delay: 0 },
        { type: 'square', color: '#EC4899', size: 50, x: '85%', y: '15%', delay: 0.2 },
        { type: 'triangle', color: '#8B5CF6', size: 55, x: '15%', y: '70%', delay: 0.4 },
        { type: 'circle', color: '#06B6D4', size: 45, x: '90%', y: '65%', delay: 0.6 },
        { type: 'hexagon', color: '#F59E0B', size: 50, x: '5%', y: '45%', delay: 0.8 },
        { type: 'rocket', color: '#10B981', size: 48, x: '92%', y: '40%', delay: 1 },
        { type: 'diamond', color: '#EF4444', size: 52, x: '8%', y: '85%', delay: 1.2 },
        { type: 'pentagon', color: '#A855F7', size: 46, x: '88%', y: '85%', delay: 1.4 },
    ]

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={{ left: shape.x, top: shape.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 8,
                        delay: shape.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {shape.type === 'circle' && (
                        <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill={shape.color} opacity="0.6" />
                        </svg>
                    )}
                    {shape.type === 'square' && (
                        <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                            <rect x="10" y="10" width="80" height="80" fill={shape.color} opacity="0.6" />
                        </svg>
                    )}
                    {shape.type === 'triangle' && (
                        <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                            <polygon points="50,10 90,90 10,90" fill={shape.color} opacity="0.6" />
                        </svg>
                    )}
                    {shape.type === 'hexagon' && (
                        <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                            <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill={shape.color} opacity="0.6" />
                        </svg>
                    )}
                    {shape.type === 'rocket' && (
                        <Rocket
                            width={shape.size}
                            height={shape.size}
                            color={shape.color}
                            fill={shape.color}
                            fillOpacity={0.6}
                            strokeWidth={1.5}
                        />
                    )}
                    {shape.type === 'diamond' && (
                        <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                            <polygon points="50,10 90,50 50,90 10,50" fill={shape.color} opacity="0.6" />
                        </svg>
                    )}
                    {shape.type === 'pentagon' && (
                        <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                            <polygon points="50,10 90,40 75,85 25,85 10,40" fill={shape.color} opacity="0.6" />
                        </svg>
                    )}
                </motion.div>
            ))}
        </div>
    )
}

// Scroll Indicator Component
function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-sm text-muted-foreground font-medium">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
                <ChevronDown className="w-5 h-5 text-primary" />
            </motion.div>
        </motion.div>
    )
}

// Wave Border Component
function WaveBorder() {
    return (
        <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg
                className="w-full h-24 md:h-32"
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                    fill="url(#wave-gradient)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                    <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
                        <stop offset="25%" stopColor="#8B5CF6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#EC4899" stopOpacity="0.8" />
                        <stop offset="75%" stopColor="#06B6D4" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default function Hero() {
    const t = useTranslations('HomePage')
    const dispatch = useDispatch()

    // Function to highlight keywords in subtitle
    const renderSubtitle = () => {
        const subtitle = t('subtitle')
        const keywords = ['Premium', 'Web & App Solutions', 'Skyrocket', 'Business Growth', '3x Faster']

        let parts = [subtitle]
        keywords.forEach(keyword => {
            parts = parts.flatMap(part => {
                if (typeof part === 'string') {
                    const splitParts = part.split(keyword)
                    return splitParts.reduce((acc: any[], curr, i) => {
                        if (i === 0) return [curr]
                        return [...acc, <span key={`${keyword}-${i}`} className="text-primary font-bold">{keyword}</span>, curr]
                    }, [])
                }
                return part
            })
        })

        return parts
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-background via-background/80 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />

            <HeroScene />
            <FloatingShapes />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600 animate-gradient-x pb-2">
                        {t('title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        {renderSubtitle()}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            onClick={() => dispatch(openContactModal())}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2 group shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('getBudget')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <Link
                            href="/case-studies"
                            className="px-8 py-4 bg-secondary/80 backdrop-blur-sm text-secondary-foreground rounded-full font-bold text-lg hover:bg-secondary transition-all border border-border hover:scale-105 flex items-center gap-2 group"
                        >
                            Our Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            <ScrollIndicator />
            <WaveBorder />
        </section>
    )
}
