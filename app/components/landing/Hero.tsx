'use client'

import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-dot-grid mask-radial-fade pointer-events-none" />

      {/* Premium ambient light mesh */}
      <div
        className="absolute left-[35%] top-[15%] -translate-x-1/2 h-[350px] w-[600px] rounded-full pointer-events-none mix-blend-multiply opacity-[1]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.08), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute left-[65%] top-[25%] -translate-x-1/2 h-[350px] w-[600px] rounded-full pointer-events-none mix-blend-multiply opacity-[0.6]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.06), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center h-full flex flex-col justify-between py-12 w-full">
        <span className="h-1 w-full invisible"></span>

        <div className="max-w-4xl mx-auto">

          <h1 className="animate-fadeUp text-[44px] sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[1.01] text-foreground text-balance">
            Ship software beautifully.
          </h1>

          <p
            className="animate-fadeUp mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: '120ms' }}
          >
            The operating system for modern product teams. Plan, build and ship with
            unmatched clarity.
          </p>

          <div
            className="animate-fadeUp mt-12 flex flex-col items-center justify-center gap-4"
            style={{ animationDelay: '200ms' }}
          >
            <div className='flex flex-col sm:flex-row gap-4'>
              <a
                href="#product"
                className="group inline-flex items-center gap-2 rounded-full btn-primary text-sm font-semibold px-6 h-12 hover:bg-primary/95 transition shadow-sm hover:shadow active:scale-98 duration-200"
              >
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-border text-sm font-semibold px-6 h-12 btn-secondary hover:bg-muted/50 transition active:scale-98 duration-200"
              >
                Book a demo
              </a>
            </div>

            <p className='text-muted-foreground text-xs opacity-70'>No credit card required.</p>

          </div>
        </div>

        <div
          className="animate-fadeUp flex flex-col items-center gap-8"
          style={{ animationDelay: '320ms' }}
        >
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground/60">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-50">
            {['LINEAR', 'VERCEL', 'STRIPE', 'FRAMER', 'NOTION'].map((c) => (
              <span
                key={c}
                className="text-xs tracking-[0.25em] text-foreground hover:opacity-100 transition-opacity duration-200"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
