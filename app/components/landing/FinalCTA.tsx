'use client'

import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-hairline bg-surface/40 py-24 px-6 text-center">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(167,139,250,0.35), transparent 65%)',
              filter: 'blur(60px)',
            }}
          />
          <div className="absolute inset-0 bg-dot-grid mask-radial-fade pointer-events-none opacity-60" />

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-balance">
              Start building today.
            </h2>
            <p className="mt-5 text-base text-muted-foreground max-w-md mx-auto">
              Join thousands of teams shipping faster with elevate. Free for 14 days, no credit card required.
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-6 h-12 hover:bg-foreground/90 transition"
              >
                Get started — it&apos;s free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
