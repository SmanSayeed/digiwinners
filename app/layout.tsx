import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Providers } from '@/components/providers'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Digiwinners - Premium IT Solutions & Digital Transformation',
  description: 'Digiwinners is a leading IT agency specializing in SaaS development, eCommerce solutions, real-time applications, and enterprise architecture consulting.',
  keywords: 'IT agency, web development, SaaS, eCommerce, digital transformation, architecture',
  authors: [{ name: 'Digiwinners' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digiwinners.com',
    siteName: 'Digiwinners',
    title: 'Digiwinners - Premium IT Solutions',
    description: 'Leading IT agency for digital transformation',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digiwinners',
    description: 'Premium IT Solutions & Digital Transformation',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
