'use client'

const steps = [
  { n: '01', title: 'Connect your stack', desc: 'Plug into GitHub, Slack and your tools in seconds.' },
  { n: '02', title: 'Shape the workflow', desc: 'Compose rituals that mirror how your team thinks.' },
  { n: '03', title: 'Ship with clarity', desc: 'Everyone sees what matters. Nothing in between.' },
]

export function HowItWorks() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">How it works</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            From signup to shipping in minutes.
          </h2>
        </div>

        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            className="hidden md:block absolute top-5 left-[16%] right-[16%] h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)' }}
          />
          {steps.map((s) => (
            <div key={s.n} className="relative text-center md:text-left">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-background text-sm font-mono text-muted-foreground">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto md:mx-0">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
