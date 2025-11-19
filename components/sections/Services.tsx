'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import servicesData from '@/data/services.json'
import { Link } from '@/i18n/routing'
import { ArrowRight } from 'lucide-react'

export default function Services() {
    const t = useTranslations('Services')
    const services = servicesData.services

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('title')}</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary/50"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
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
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                {service.description}
                            </p>
                            <Link
                                href={`/services/${service.slug}`}
                                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
                            >
                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
