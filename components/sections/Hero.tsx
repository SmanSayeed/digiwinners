'use client'

import { useTranslations } from 'next-intl'
import { useDispatch } from 'react-redux'
import { openContactModal } from '@/lib/slices/contact-slice'
import { motion } from 'framer-motion'
import HeroScene from '@/components/3d/HeroScene'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    const t = useTranslations('HomePage')
    const dispatch = useDispatch()

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-background via-background/80 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />

            <HeroScene />

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
                        {t('subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => dispatch(openContactModal())}
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2 group shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:scale-105"
                        >
                            {t('getBudget')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => dispatch(openContactModal())}
                            className="px-8 py-4 bg-secondary/80 backdrop-blur-sm text-secondary-foreground rounded-full font-bold text-lg hover:bg-secondary transition-all border border-border hover:scale-105"
                        >
                            {t('discuss')}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
