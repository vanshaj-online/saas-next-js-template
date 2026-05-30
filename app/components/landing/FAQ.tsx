'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  { q: 'How is elevate different from other project tools?', a: 'elevate is built around a small set of opinionated primitives instead of dozens of disconnected features. The result feels quiet and intentional — less to configure, more to ship.' },
  { q: 'Can I migrate from Linear, Jira or Asana?', a: 'Yes. We offer one-click importers for Linear, Jira, Asana, Trello and GitHub Projects. Most teams are fully migrated in under an hour.' },
  { q: 'Do you offer a free plan?', a: 'The Free plan is generous and forever free for individuals and small teams up to 3 projects.' },
  { q: 'Is elevate secure?', a: 'We are SOC 2 Type II certified, support SAML SSO, SCIM, audit logs and offer regional data residency on Enterprise.' },
  { q: 'How does pricing scale with my team?', a: 'Pricing is per active member, per month. Inactive seats are never billed, and yearly billing comes with a 20% discount.' },
  { q: 'Can I self-host elevate?', a: 'Self-hosting is available on the Enterprise plan with dedicated support and a private deployment pipeline.' },
  { q: 'What\'s your refund policy?', a: 'If you\'re not satisfied within 30 days of purchase, we refund in full — no questions asked.' },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">FAQ</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Questions, answered.
          </h2>
        </div>

        <div className="mt-16 border-t border-hairline">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="border-b border-hairline">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-base font-medium text-foreground/95 pr-8">{f.q}</span>
                  <Plus
                    className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''
                      }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
