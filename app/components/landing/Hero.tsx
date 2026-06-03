'use client'

import { ArrowRight } from 'lucide-react'
import ProductMockup from './ProductMockup'

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-pad-sm">
      <div className="absolute inset-0 bg-dot-grid mask-radial-fade pointer-events-none" />

      {/* ----------------------------- Premium ambient light mesh ----------------------------- */}

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

      {/* ----------------------------- Premium ambient light mesh ----------------------------- */}



      <div className="relative mx-auto max-w-7xl flex flex-col md:pt-[30vh] pt-[20vh] pb-12 w-full h-full">
        {/* <span className="md:h-1 w-full invisible h-1 pt-52"></span> */}

        <div className="flex w-full justify-between flex-col md:flex-row">

          <div className=' '>

            <p className='px-1 mb-5 opacity-60 text-[10px] tracking-widest uppercase font-light'>400+ teams • 20k issues shipped • 98% retention</p>

            <h1 className="animate-fadeUp text-[44px] sm:text-6xl  font-semibold tracking-[-0.04em] leading-[1.01] text-foreground">
              Ship software beautifully.
            </h1>

            <p
              className="animate-fadeUp mt-6 max-w-xl  text-sm sm:text-base text-muted-foreground leading-[1.3]"
              style={{ animationDelay: '120ms' }}
            >
              The operating system for modern product teams. Plan, build and ship with
              unmatched clarity.
            </p>
          </div>

          {/* CTA buttons */}

          <div
            className="animate-fadeUp mt-12 flex flex-col  justify-center gap-3"
            style={{ animationDelay: '200ms' }}
          >
            <p className='text-muted-foreground text-xs opacity-70 px-1'>No credit card required.</p>

            <a
              href="#product"
              className="group inline-flex items-center gap-2 rounded-full btn-primary text-xs sm:text-sm font-semibold px-6 py-3 hover:bg-primary/95 transition shadow-sm hover:shadow active:scale-98 duration-200 justify-center"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>


          </div>
        </div>

        {/* <div
          className="animate-fadeUp flex flex-col items-center gap-4 mt-20 md:mt-0"
          style={{ animationDelay: '320ms' }}
        >
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground/60">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-50">
            {['LINEAR', 'VERCEL', 'STRIPE', 'FRAMER'].map((c) => (
              <span
                key={c}
                className="text-xs tracking-[0.25em] text-foreground hover:opacity-100 transition-opacity duration-200"
              >
                {c}
              </span>
            ))}
          </div>
        </div> */}

        <div>
          <ProductMockup />
        </div>

      </div>
    </section>
  )
}
