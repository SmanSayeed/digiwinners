'use client'

import { useDispatch, useSelector } from 'react-redux'
import { closeContactModal } from '@/lib/slices/contact-slice'
import { RootState } from '@/lib/store'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Mail, Facebook, MessageCircle, Send, Sparkles, Zap, Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function ContactModal() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.contact.isModalOpen)
  const t = useTranslations('Contact')

  const handleClose = () => {
    dispatch(closeContactModal())
  }

  const contactMethods = [
    {
      icon: Phone,
      label: "Quick Call",
      value: "+880 1843-032160",
      href: "tel:+8801843032160",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      hoverColor: "hover:bg-blue-500/20"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Chat",
      value: "+880 1843-032160",
      href: "https://wa.me/8801843032160",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      hoverColor: "hover:bg-green-500/20"
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-background via-background to-secondary/30 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] z-10 border border-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>

            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-accent/20 transition-all border border-border hover:border-accent/50"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="relative p-8 md:p-12 overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Let's Connect</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Talk With Us
                </h2>

                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                  Get project budget ideas & technical consultancy
                </p>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
              >
                <motion.div
                  className="group relative overflow-hidden p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-500/20 rounded-xl">
                      <Zap className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Quick Budget</p>
                      <p className="text-xs text-muted-foreground">Get instant quote</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative overflow-hidden p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      <Rocket className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Tech Consult</p>
                      <p className="text-xs text-muted-foreground">Expert guidance</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                <p className="text-sm font-medium text-muted-foreground mb-4">Choose your preferred way to connect:</p>

                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <motion.a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className={`group flex items-center gap-4 p-4 ${method.bgColor} ${method.hoverColor} rounded-2xl transition-all border border-transparent hover:border-primary/20`}
                      whileHover={{ x: 4 }}
                    >
                      <div className={`p-3 bg-gradient-to-br ${method.color} rounded-xl shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {method.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {method.value}
                        </p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </motion.a>
                  )
                })}
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-6 border-t border-border/50 text-center"
              >
                <p className="text-sm text-muted-foreground">
                  Available 24/7 • Response within 1 hour
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
