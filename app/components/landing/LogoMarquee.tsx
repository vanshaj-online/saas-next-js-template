'use client'

const logos = [
  'ACME', 'MERIDIAN', 'NORTHWIND', 'AURORA', 'FORMA', 'QUANTA', 'OBSIDIAN', 'HELIX', 'PARALLAX', 'VOYAGER',
]

export function LogoMarquee() {
  return (
    <section className="py-12m overflow-hidden my-16">
      <div
        className="flex"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <div className="animate-marquee flex shrink-0 items-center gap-20 pr-20">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="text-xs font-semibold tracking-[0.3em] text-muted-foreground/40 whitespace-nowrap hover:text-primary transition-colors duration-300 cursor-default"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
