'use client'

import { useDispatch, useSelector } from 'react-redux'
import { closeContactModal } from '@/lib/slices/contact-slice'
import { RootState } from '@/lib/store'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Mail, Facebook, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import servicesData from '@/data/services.json'
import { Link } from '@/i18n/routing'

export function ContactModal() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.contact.isModalOpen)
  const t = useTranslations('Contact')

  const handleClose = () => {
    dispatch(closeContactModal())
  }

  const services = servicesData.services

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl bg-background rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-accent/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Side - Contact Info */}
            <div className="w-full md:w-2/5 bg-secondary p-8 md:p-12 flex flex-col justify-between overflow-y-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('title')}</h2>
                <p className="text-muted-foreground mb-8">
                  {t('subtitle')}
                </p>

                <div className="space-y-6">
                  <a href="tel:+8801843932169" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
                    <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <p className="font-semibold">+880 1843-932169</p>
                    </div>
                  </a>

                  <a href="https://wa.me/8801843932169" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
                    <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-semibold">+880 1843-932169</p>
                    </div>
                  </a>

                  <a href="mailto:hello@digiwinners.com" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
                    <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="font-semibold">hello@digiwinners.com</p>
                    </div>
                  </a>

                  <a href="https://facebook.com/digiwinners" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
                    <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Facebook className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Follow Us</p>
                      <p className="font-semibold">Digiwinners</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Services List */}
            <div className="w-full md:w-3/5 p-8 md:p-12 bg-background overflow-y-auto">
              <h3 className="text-2xl font-bold mb-6">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={handleClose}
                      className="flex items-start gap-3 p-4 rounded-xl hover:bg-secondary transition-colors group h-full border border-border hover:border-accent/50"
                    >
                      <div className="text-2xl mt-1 group-hover:scale-110 transition-transform">
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
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
