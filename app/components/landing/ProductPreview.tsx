'use client'

export function ProductPreview() {
  return (
    <section id="product" className="relative py-32 overflow-hidden ">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">The product</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-3xl mx-auto">
          A window into how your team actually works.
        </h2>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 mt-20 ">
        {/* Soft elegant mesh behind mockup */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] rounded-full pointer-events-none opacity-[0.5]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(59,130,246,0.12), transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        <div
          className="relative rounded-2xl border border-border  overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
          style={{ transform: 'rotateX(8deg)' }}
        >
          {/* window chrome */}
          <div className="flex items-center gap-2 px-4 h-11 border-b border-border bg-neutral-800/80">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] opacity-90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] opacity-90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] opacity-90" />
            <span className="ml-4 text-xs font-medium text-muted-foreground/80">elevate — projects / atlas</span>
          </div>
          <div className="grid grid-cols-[200px_1fr] min-h-[460px]">
            {/* sidebar */}
            <aside className="border-r border-border bg-neutral-800/10 p-4 space-y-1">
              {['Inbox', 'Projects', 'Atlas', 'Orbit', 'Specs', 'Roadmap', 'Settings'].map((s, i) => (
                <div
                  key={s}
                  className={`text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer transition-all duration-150 ${i === 2
                    ? 'bg-primary/10 text-primary shadow-sm'
                    : 'text-muted-foreground hover:bg-neutral-800 hover:text-foreground'
                    }`}
                >
                  {s}
                </div>
              ))}
            </aside>
            {/* main content */}
            <div className="p-6  flex flex-col justify-between bg-neutral-800/10">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Project Workspace</div>
                    <div className="text-xl font-bold text-foreground mt-0.5">Atlas · Q2 Release</div>
                  </div>
                  {/* Avatars */}
                  <div className="flex -space-x-1.5">
                    <div className="h-7 w-7 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-600">MC</div>
                    <div className="h-7 w-7 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-purple-600">DV</div>
                    <div className="h-7 w-7 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-amber-600">SO</div>
                    <div className="h-7 w-7 rounded-full bg-primary text-white border-2 border-white flex items-center justify-center text-[9px] font-bold">+4</div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {['Backlog', 'In progress', 'In review'].map((col, ci) => (
                    <div key={col} className="rounded-xl border border-border bg-neutral-800/10 p-3">
                      <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 px-1">
                        <span>{col}</span>
                        <span className="bg-neutral-700 px-2 py-0.5 rounded-full text-[10px] text-muted-foreground font-mono">{[8, 4, 3][ci]}</span>
                      </div>
                      <div className="mt-4 space-y-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div
                            key={i}
                            className="rounded-lg  border border-border p-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-primary/20 transition-all duration-200 cursor-pointer"
                          >
                            <div className="h-2 w-12 rounded-full bg-neutral-700" />
                            <div className="mt-2.5 h-2 w-3/4 rounded-full bg-neutral-700" />
                            <div className="mt-1.5 h-2 w-1/2 rounded-full bg-neutral-700" />
                            {ci === 1 && i === 0 && (
                              <div className="mt-3.5 inline-flex items-center gap-1 px-2 py-0.5 rounded text-orange-400 font-bold text-[9px] uppercase tracking-wider">
                                <span className="h-1 w-1 rounded-full bg-orange-400" />
                                High Priority
                              </div>
                            )}
                            {ci === 2 && i === 1 && (
                              <div className="mt-3.5 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold text-[9px] uppercase tracking-wider">
                                <span className="h-1 w-1 rounded-full bg-amber-500" />
                                In Review
                              </div>
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
      </div>
    </section>
  )
}
