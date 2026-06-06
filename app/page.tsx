import type { Metadata } from 'next'
import { Navbar } from './components/landing/Navbar'
import { Hero } from './components/landing/Hero'
import { LogoMarquee } from './components/landing/LogoMarquee'
import { Features } from './components/landing/Features'
import { HowItWorks } from './components/landing/HowItWorks'
import { Testimonials } from './components/landing/Testimonials'
import { Pricing } from './components/landing/Pricing'
import { FAQ } from './components/landing/FAQ'
import { FinalCTA } from './components/landing/FinalCTA'
import { Footer } from './components/landing/Footer'
import SmoothScrollWrapper from './components/landing/SmoothScrollWrapper'

export const metadata: Metadata = {
  title: 'Home | [BrandName]',
  description: 'The operating system for modern product teams. Plan, build and ship with unmatched clarity.',
}

export default function Home() {



  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <SmoothScrollWrapper>
        <Navbar />
        <Hero />
        <LogoMarquee />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </SmoothScrollWrapper>
    </main>
  )
}
