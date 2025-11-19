'use client'

import { Link } from '@/i18n/routing'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Logo } from '@/components/logo'

export function Footer() {
  const t = useTranslations('Footer')

  const socialLinks = [
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
  ]

  const footerLinks = [
    { label: t('about'), href: '/about' },
    { label: t('services'), href: '/services' },
    { label: t('caseStudies'), href: '/case-studies' },
    { label: t('contact'), href: '/contact' },
    { label: t('privacy'), href: '/privacy' },
  ]

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground">
              Premium IT solutions and digital transformation
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('company')}</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t('services')}</h3>
            <nav className="flex flex-col gap-2">
              {['SaaS Development', 'eCommerce', 'Real-time Apps', 'Consulting'].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">{t('followUs')}</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Digiwinners. {t('rights')}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
