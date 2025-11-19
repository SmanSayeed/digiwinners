'use client'

import { motion } from 'framer-motion'
import { Users, CheckCircle, Clock, Award } from 'lucide-react'

const stats = [
    { label: 'Projects Completed', value: '50+', icon: CheckCircle },
    { label: 'Happy Clients', value: '30+', icon: Users },
    { label: 'Success Rate', value: '95%', icon: Award },
    { label: 'Years Experience', value: '5+', icon: Clock },
]

export default function Stats() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center"
                        >
                            <div className="mb-4 flex justify-center">
                                <stat.icon className="w-10 h-10 opacity-80" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                            <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
