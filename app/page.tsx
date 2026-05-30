import { Navbar } from './components/landing/Navbar'
import { Hero } from './components/landing/Hero'
import { LogoMarquee } from './components/landing/LogoMarquee'
import { Features } from './components/landing/Features'
import { ProductPreview } from './components/landing/ProductPreview'
import { HowItWorks } from './components/landing/HowItWorks'
import { Testimonials } from './components/landing/Testimonials'
import { Pricing } from './components/landing/Pricing'
import { FAQ } from './components/landing/FAQ'
import { FinalCTA } from './components/landing/FinalCTA'
import { Footer } from './components/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Features />
      <ProductPreview />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
