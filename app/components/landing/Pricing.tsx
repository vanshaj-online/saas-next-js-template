'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Free',
    monthly: 0,
    yearly: 0,
    desc: 'For individuals exploring the platform.',
    features: ['Up to 3 projects', 'Community support', '1 GB storage', 'Core integrations', 'Single workspace'],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Pro',
    monthly: 18,
    yearly: 15,
    desc: 'For growing teams that ship every week.',
    features: ['Unlimited projects', 'Priority support', '100 GB storage', 'Advanced integrations', 'Roles & permissions', 'Custom workflows'],
    cta: 'Start 14-day trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    monthly: null,
    yearly: null,
    desc: 'For organizations with serious requirements.',
    features: ['SAML SSO & SCIM', 'Dedicated CSM', 'Custom contracts', 'SOC 2 reports', 'Audit logs', '99.99% uptime SLA'],
    cta: 'Contact sales',
    featured: false,
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">Pricing</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Simple pricing. Honest scaling.
          </h2>

          <div className="mt-10 inline-flex items-center rounded-full border border-hairline bg-surface/60 p-1 text-sm relative">
            <span
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-foreground transition-all duration-300 ease-out"
              style={{ left: yearly ? 'calc(50% + 0px)' : '4px' }}
            />
            <button
              onClick={() => setYearly(false)}
              className={`relative z-10 px-5 h-8 rounded-full transition-colors ${!yearly ? 'text-background' : 'text-muted-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative z-10 px-5 h-8 rounded-full transition-colors ${yearly ? 'text-background' : 'text-muted-foreground'}`}
            >
              Yearly <span className="text-xs opacity-70">&minus;20%</span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                t.featured
                  ? 'border-primary/40 bg-surface'
                  : 'border-hairline bg-surface/30'
              }`}
            >
              {t.featured && (
                <span className="absolute -top-2.5 left-8 text-[10px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-2 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <div className="text-sm font-medium">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                {t.monthly === null ? (
                  <span className="text-4xl font-semibold tracking-tight">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-semibold tracking-tight">
                      ${yearly ? t.yearly : t.monthly}
                    </span>
                    <span className="text-sm text-muted-foreground">/mo</span>
                  </>
                )}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>

              <a
                href="#"
                className={`mt-8 inline-flex items-center justify-center rounded-full h-10 text-sm font-medium transition ${
                  t.featured
                    ? 'bg-foreground text-background hover:bg-foreground/90'
                    : 'border border-hairline hover:bg-surface'
                }`}
              >
                {t.cta}
              </a>

              <ul className="mt-8 space-y-3 border-t border-hairline pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="h-4 w-4 mt-0.5 text-primary stroke-[2]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
