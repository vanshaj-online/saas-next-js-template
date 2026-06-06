'use client'

import { SectionHeader } from './SectionHeader'
import { m } from 'motion/react'

const steps = [
  { id: 'connect', title: 'Connect your stack', desc: 'Plug into GitHub, Slack and your tools in seconds.' },
  { id: 'shape', title: 'Shape the workflow', desc: 'Compose rituals that mirror how your team thinks.' },
  { id: 'ship', title: 'Ship with clarity', desc: 'Everyone sees what matters. Nothing in between.' },
]

export function HowItWorks() {
  return (
    <section className="py-32 ">
      <div className="mx-auto max-w-7xl px-pad-sm">
        <div className="text-center max-w-2xl mx-auto">
          <SectionHeader
            label="How it works"
            heading={["From signup to", "shipping in minutes."]}
          />
        </div>

        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            className="hidden md:block absolute top-[22px] left-[16%] right-[16%] h-[1px]"
            style={{ background: 'linear-gradient(to right, transparent, var(--border) 20%, var(--border) 80%, transparent)' }}
          />
          {steps.map((s, i) => (
            <m.div
              initial={{ opacity: 0, y: 50 + (i * 20) }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.15, duration: 1, ease: 'easeOut' }}
              key={s.id} className="relative text-center md:text-left group flex items-center justify-center flex-col">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-background text-sm font-bold font-mono text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-background group-hover:scale-105">
                0{i + 1}
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-medium max-w-xs mx-auto md:mx-0 text-center">
                {s.desc}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
