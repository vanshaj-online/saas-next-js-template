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
    <section id="features" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">Platform</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Every primitive you need. Nothing you don&apos;t.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-background p-8 transition-colors hover:bg-surface/60"
            >
              <Icon className="h-5 w-5 text-foreground/80 stroke-[1.5]" />
              <h3 className="mt-6 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
