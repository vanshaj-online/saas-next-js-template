const quotes = [
  {
    quote: 'elevate changed how our team thinks about shipping. The clarity is unreal — we cut planning time in half.',
    name: 'Mira Chen',
    role: 'Head of Product, Northwind',
  },
  {
    quote: 'It\'s the first tool that doesn\'t get in the way. Quiet, fast, opinionated where it matters.',
    name: 'Daniel Voss',
    role: 'Engineering Lead, Meridian',
  },
  {
    quote: 'We replaced four tools with elevate. Onboarding the team took a single afternoon.',
    name: 'Sara Okafor',
    role: 'CTO, Aurora Labs',
  },
]

export function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">Loved by builders</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Teams that ship, ship with elevate.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-2xl border border-hairline bg-surface/40 p-7 flex flex-col"
            >
              <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-hairline flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-white/15 to-white/5" />
                <div>
                  <div className="text-sm font-medium">{q.name}</div>
                  <div className="text-xs text-muted-foreground">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
