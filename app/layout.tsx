import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { MotionConfig, LazyMotion, domAnimation } from 'motion/react'
import './globals.css'
import 'lenis/dist/lenis.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: '[BrandName] — Ship software, beautifully.',
  description: 'The operating system for modern product teams. Plan, build and ship with unmatched clarity.',
  openGraph: {
    title: '[BrandName] — Ship software, beautifully.',
    description: 'The operating system for modern product teams.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <LazyMotion features={domAnimation}>
          <MotionConfig reducedMotion="user">
            {children}
          </MotionConfig>
        </LazyMotion>
      </body>
    </html>
  )
}
