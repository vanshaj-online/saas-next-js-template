'use client'

import { m } from "motion/react"

type SectionHeaderProps = {
  label: string
  heading: string | [string, string]
}

export function SectionHeader({ label, heading }: SectionHeaderProps) {
  return (
    <>
    
      <m.p
        initial={{ opacity: 0, y: 10, filter: 'blur(1px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-primary">

        {label}

      </m.p>

      <m.h2
        initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: 0.35 }}
        className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-center text-foreground">

        {Array.isArray(heading) ? (

          <>
            {heading[0]}
            <span className="md:hidden"> </span>
            <br className="hidden md:inline" />
            {heading[1]}
          </>

        ) : (

          heading

        )}

      </m.h2>

    </>
  )
}
