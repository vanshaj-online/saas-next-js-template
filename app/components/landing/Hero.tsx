'use client'

import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 bg-dot-grid mask-radial-fade pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none" />
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[480px] w-[820px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(167,139,250,0.25), transparent 60%) ',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center h-full flex flex-col justify-between py-10">

        <span className='h-1 w-full invisible'></span>

        <div>

          <h1 className="animate-fadeUp mt-8 text-[44px] sm:text-6xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.02] text-balance">
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
            className="animate-fadeUp mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ animationDelay: '200ms' }}
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-5 h-11 hover:bg-foreground/90 transition"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 text-sm font-medium px-5 h-11 text-foreground hover:bg-surface transition"
            >
              Book a demo
            </a>

          </div>

        </div>

        <div
          className="animate-fadeUp mt-16 flex flex-col items-center gap-5 "
          style={{ animationDelay: '320ms' }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {['LINEAR', 'VERCEL', 'STRIPE', 'FRAMER', 'NOTION'].map((c) => (
              <span
                key={c}
                className="text-sm font-semibold tracking-[0.2em] text-muted-foreground"
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
