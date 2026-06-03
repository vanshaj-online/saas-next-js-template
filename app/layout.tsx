import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
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
        {children}
      </body>
    </html>
  )
}
