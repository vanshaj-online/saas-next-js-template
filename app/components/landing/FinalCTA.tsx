'use client'

import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-32 ">
      <div className="mx-auto max-w-6xl px-pad-sm">
        <div className="relative overflow-hidden rounded-3xl border border-border  py-24 px-pad-sm text-center shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full pointer-events-none opacity-[0.6]"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(59,130,246,0.08), transparent 65%)',
              filter: 'blur(50px)',
            }}
          />
          <div className="absolute inset-0 bg-dot-grid mask-radial-fade pointer-events-none opacity-40" />

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-balance text-foreground">
              Start building today.
            </h2>
            <p className="mt-5 text-base font-medium text-muted-foreground max-w-md mx-auto leading-relaxed">
              Join thousands of teams shipping faster with [BrandName]. Free for 14 days, no credit card required.
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-6 h-12 hover:bg-primary/95 transition shadow-sm hover:shadow active:scale-98 duration-200"
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
