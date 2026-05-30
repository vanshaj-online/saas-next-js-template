'use client'

const logos = [
  'ACME', 'MERIDIAN', 'NORTHWIND', 'AURORA', 'FORMA', 'QUANTA', 'OBSIDIAN', 'HELIX', 'PARALLAX', 'VOYAGER',
]

export function LogoMarquee() {
  return (
    <section className="py-16 border-y border-hairline overflow-hidden">
      <div
        className="flex"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="text-lg font-semibold tracking-[0.22em] text-muted-foreground/60 whitespace-nowrap"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
