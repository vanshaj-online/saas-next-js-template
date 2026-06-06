'use client'

import { ArrowRight } from 'lucide-react'
import ProductMockup from './ProductMockup'
import { m } from 'motion/react'

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

        <div className="flex w-full justify-between flex-col md:flex-row">

          <div className=' '>

            <m.p
              className='px-1 mb-5 opacity-60 text-[10px] tracking-widest uppercase font-light'
              initial={{ opacity: 0, filter: 'blur(6px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.75 }}
            >
              400+ teams • 20k issues shipped • 98% retention
            </m.p>

            <m.h1
              className="text-[44px] sm:text-6xl  font-semibold tracking-[-0.04em] leading-[1.01] text-foreground"
              initial={{
                opacity: 0,
                filter: 'blur(6px)',
                y: 20
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                y: 0
              }}
              transition={{ duration: 0.75, delay: 0.25 }}
            >
              Ship software beautifully.
            </m.h1>

            <m.p
              className="mt-6 max-w-xl  text-sm sm:text-base text-muted-foreground leading-[1.3]"
              initial={{
                opacity: 0,
                filter: 'blur(6px)',
                y: 20
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                y: 0
              }}
              transition={{ duration: 0.75, delay: 0.5 }}
            >
              The operating system for modern product teams. Plan, build and ship with
              unmatched clarity.
            </m.p>
          </div>

          {/* CTA buttons */}

          <m.div
            className="mt-12 flex flex-col  justify-center gap-3"
            initial={{
              opacity: 0,
              filter: 'blur(6px)',
              y: 20
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              y: 0
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className='text-muted-foreground text-xs opacity-70 px-1'>No credit card required.</p>

            <a
              href="#product"
              className="group inline-flex items-center gap-2 rounded-full btn-primary text-xs sm:text-sm font-semibold px-6 py-3 hover:bg-primary/95 transition shadow-sm hover:shadow active:scale-98 duration-200 justify-center"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>


          </m.div>
        </div>

        <div>
          <ProductMockup />
        </div>

      </div>
    </section>
  )
}
