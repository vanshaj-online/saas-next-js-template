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
    <section className="py-32 ">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Loved by builders</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            Teams that ship, ship with elevate.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, idx) => {
            const initials = q.name.split(' ').map(n => n[0]).join('');
            const colorClasses = [
              'bg-blue-50 text-blue-600 border-blue-100',
              'bg-purple-50 text-purple-600 border-purple-100',
              'bg-amber-50 text-amber-600 border-amber-100'
            ][idx % 3];

            return (
              <figure
                key={q.name}
                className="rounded-2xl border border-border  p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:border-primary/20 cursor-default"
              >
                <blockquote className="text-[15px] leading-relaxed text-foreground/80 font-medium">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-full border flex items-center justify-center text-xs font-bold ${colorClasses}`}>
                    {initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{q.name}</div>
                    <div className="text-xs font-semibold text-muted-foreground">{q.role}</div>
                  </div>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
