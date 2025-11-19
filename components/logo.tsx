'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      <motion.span
        className="font-bold text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        Digiwinners
      </motion.span>
    </Link>
  )
}

