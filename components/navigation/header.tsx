'use client'

import { useState, useEffect } from 'react'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '@/lib/slices/navigation-slice'
import { openContactModal } from '@/lib/slices/contact-slice'
import { RootState } from '@/lib/store'
import { Menu, X, Moon, Sun, ChevronDown, Globe } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import servicesData from '@/data/services.json'
import { Logo } from '@/components/logo'
import { useLocale } from 'next-intl'

export function Header() {
  const dispatch = useDispatch()
  const isDrawerOpen = useSelector((state: RootState) => state.navigation.isDrawerOpen)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
  ]

  const services = servicesData.services

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 relative group"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''
                    }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="p-2">
                      {services.map((service, idx) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            href={`/services#${service.slug}`}
                            className="block p-3 rounded-md hover:bg-secondary transition-colors group"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-2xl mt-1">
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
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: services.length * 0.05 }}
                        className="mt-2 pt-2 border-t border-border"
                      >
                        <Link
                          href="/services"
                          className="block p-3 rounded-md hover:bg-secondary transition-colors text-center font-semibold text-accent"
                          onClick={() => setServicesOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => dispatch(openContactModal())}
              className="px-4 py-2 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Let's Talk
            </button>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors flex items-center gap-1">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium uppercase">{locale}</span>
              </button>
              <div className="absolute right-0 top-full pt-2 w-24 hidden group-hover:block">
                <div className="bg-popover border border-border rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => switchLocale('en')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${locale === 'en' ? 'bg-secondary font-semibold' : ''}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => switchLocale('bn')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${locale === 'bn' ? 'bg-secondary font-semibold' : ''}`}
                  >
                    Bangla
                  </button>
                </div>
              </div>
            </div>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => dispatch(toggleDrawer())}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isDrawerOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-screen w-72 bg-background border-r border-border z-50 pt-20 overflow-y-auto"
            >
              <nav className="flex flex-col gap-2 p-4">
                {navigationItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => dispatch(toggleDrawer())}
                      className="block text-foreground hover:text-accent transition-colors py-3 px-4 rounded-lg hover:bg-secondary font-medium"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Services Dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 }}
                  className="border-t border-border pt-2 mt-2"
                >
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between text-foreground hover:text-accent transition-colors py-3 px-4 rounded-lg hover:bg-secondary font-medium"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services#${service.slug}`}
                              onClick={() => {
                                setMobileServicesOpen(false)
                                dispatch(toggleDrawer())
                              }}
                              className="block py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">
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
                                </span>
                                <div>
                                  <div className="font-medium text-sm">{service.title}</div>
                                  <div className="text-xs text-muted-foreground line-clamp-1">
                                    {service.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            onClick={() => {
                              setMobileServicesOpen(false)
                              dispatch(toggleDrawer())
                            }}
                            className="block py-2 px-4 rounded-lg hover:bg-secondary transition-colors font-semibold text-accent text-sm"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </nav>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => dispatch(toggleDrawer())}
            />
          </>
        )}
      </AnimatePresence>
    </>
  )
}
