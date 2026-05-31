'use client'

import { Zap, GitBranch, Shield, Layers, Compass, Workflow } from 'lucide-react'

const items = [
  { icon: Zap, title: 'Built for speed', desc: 'Sub-50ms interactions across every surface. Designed to feel native.' },
  { icon: GitBranch, title: 'Native git flow', desc: 'Branches, PRs and reviews wired directly into your roadmap.' },
  { icon: Shield, title: 'Secure by default', desc: 'SOC 2 Type II, SAML SSO, SCIM and granular role-based access.' },
  { icon: Layers, title: 'Composable surface', desc: 'A primitive system that bends to your team\'s exact shape.' },
  { icon: Compass, title: 'Opinionated defaults', desc: 'Best practices, baked in. Skip the setup, ship the product.' },
  { icon: Workflow, title: 'Automated rituals', desc: 'Standups, planning and retros that run themselves.' },
]

export function Features() {
  return (
    <section id="features" className="py-32 ">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Platform</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            Every primitive you need. Nothing you don&apos;t.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group border border-border p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:border-primary/20"
            >
              <div className="relative h-10 w-10 rounded-lg text-primary flex items-center justify-center transition-all duration-300 group-hover:text-white group-hover:bg-primary/5 backdrop-blur-sm">
                <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 blur-md transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(218,218,218,0.25),transparent_65%)]" />
                <Icon className="relative z-10 h-5 w-5 stroke-[1.8]" />
              </div>
              <h3 className="mt-6 text-base font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-medium">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
