import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'elevate — Ship software, beautifully.',
  description: 'The operating system for modern product teams. Plan, build and ship with unmatched clarity.',
  openGraph: {
    title: 'elevate — Ship software, beautifully.',
    description: 'The operating system for modern product teams.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
