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
    <section id="pricing" className="py-32 ">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Pricing</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            Simple pricing. Honest scaling.
          </h2>

          <div className="mt-10 inline-flex items-center rounded-full border border-border bg-white/5 p-1 text-sm relative">
            <span
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-foreground transition-all duration-300 ease-out"
              style={{ left: yearly ? 'calc(50% + 0px)' : '4px' }}
            />
            <button
              onClick={() => setYearly(false)}
              className={`relative z-10 px-5 py-2 rounded-full text-xs  transition-colors duration-200 ${!yearly ? 'text-black' : 'text-foreground hover:text-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative z-10 px-5 py-2 rounded-full text-xs  transition-colors duration-200 ${yearly ? 'text-black' : 'text-foreground hover:text-foreground'}`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 ${t.featured
                ? 'border-primary  shadow-[0_20px_40px_rgba(59,130,246,0.06)] scale-[1.02] z-10'
                : 'border-border  shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-muted-foreground/20'
                }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 text-[9px] uppercase font-bold tracking-[0.2em] bg-foreground text-background  px-3 py-1 rounded-full shadow-sm">
                  Most popular
                </span>
              )}

              <div>
                <div className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">{t.name}</div>
                <div className="mt-4 flex items-baseline gap-1">
                  {t.monthly === null ? (
                    <span className="text-4xl font-semibold tracking-tight text-foreground">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-semibold tracking-tight text-foreground">
                        ${yearly ? t.yearly : t.monthly}
                      </span>
                      <span className="text-sm font-semibold text-muted-foreground">/mo</span>
                    </>
                  )}
                </div>
                <p className="mt-3 text-sm font-medium text-muted-foreground leading-relaxed">{t.desc}</p>

                <a
                  href="#"
                  className={`mt-8 inline-flex items-center justify-center rounded-full h-11 text-xs font-bold transition-all duration-200 w-full active:scale-98 ${t.featured
                    ? 'bg-foreground text-background hover:bg-primary shadow-sm hover:shadow'
                    : 'border border-border text-foreground hover:bg-foreground hover:text-background  hover:bg-slate-50'
                    }`}
                >
                  {t.cta}
                </a>

                <ul className="mt-8 space-y-4 border-t border-border pt-6">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center p-0.5 shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
