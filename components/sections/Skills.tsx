'use client'

import { motion } from 'framer-motion'

const skills = [
    { name: 'Node JS', level: 90 },
    { name: 'React JS', level: 95 },
    { name: 'Next JS', level: 92 },
    { name: 'Laravel', level: 85 },
    { name: 'Flutter', level: 80 },
    { name: 'AWS', level: 75 },
]

export default function Skills() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-secondary/50 rounded-xl p-6"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">{skill.name}</span>
                                <span className="text-primary">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-primary rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
