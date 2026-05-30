'use client'

export function ProductPreview() {
  return (
    <section id="product" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">The product</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance max-w-3xl mx-auto">
          A window into how your team actually works.
        </h2>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 mt-20 [perspective:2000px]">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(167,139,250,0.35), transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="relative rounded-2xl border border-hairline bg-surface overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          style={{ transform: 'rotateX(8deg)' }}
        >
          {/* window chrome */}
          <div className="flex items-center gap-2 px-4 h-10 border-b border-hairline bg-surface-elevated/60">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="ml-4 text-xs text-muted-foreground">elevate — projects / atlas</span>
          </div>
          <div className="grid grid-cols-[200px_1fr] min-h-[420px]">
            {/* sidebar */}
            <aside className="border-r border-hairline p-4 space-y-1.5">
              {['Inbox', 'Projects', 'Atlas', 'Orbit', 'Specs', 'Roadmap', 'Settings'].map((s, i) => (
                <div
                  key={s}
                  className={`text-xs px-2.5 py-1.5 rounded-md ${i === 2 ? 'bg-white/5 text-foreground' : 'text-muted-foreground'
                    }`}
                >
                  {s}
                </div>
              ))}
            </aside>
            {/* main */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Project</div>
                  <div className="text-lg font-semibold mt-1">Atlas · Q2 release</div>
                </div>
                <div className="flex gap-2">
                  <div className="h-7 w-7 rounded-full bg-white/10" />
                  <div className="h-7 w-7 rounded-full bg-white/10" />
                  <div className="h-7 w-7 rounded-full bg-primary/40" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {['Backlog', 'In progress', 'In review'].map((col, ci) => (
                  <div key={col} className="rounded-lg border border-hairline p-3">
                    <div className="flex justify-between text-[11px] uppercase tracking-wider text-muted-foreground">
                      <span>{col}</span>
                      <span>{[8, 4, 3][ci]}</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-md bg-surface-elevated/80 border border-hairline p-2.5"
                        >
                          <div className="h-1.5 w-12 rounded-full bg-white/10" />
                          <div className="mt-2 h-2 w-3/4 rounded-full bg-white/10" />
                          <div className="mt-1.5 h-2 w-1/2 rounded-full bg-white/5" />
                          {ci === 1 && i === 0 && (
                            <div className="mt-2 inline-block h-1.5 w-8 rounded-full bg-primary/70" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
