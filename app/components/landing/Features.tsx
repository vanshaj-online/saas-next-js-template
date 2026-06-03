'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Zap, GitBranch, Shield, Layers, Compass, Workflow, LucideIcon } from 'lucide-react'
import { SectionHeader } from './SectionHeader'

const items = [
  { icon: Zap, title: 'Built for speed', desc: 'Sub-50ms interactions across every surface. Designed to feel native.' },
  { icon: GitBranch, title: 'Native git flow', desc: 'Branches, PRs and reviews wired directly into your roadmap.' },
  { icon: Shield, title: 'Secure by default', desc: 'SOC 2 Type II, SAML SSO, SCIM and granular role-based access.' },
  { icon: Layers, title: 'Composable surface', desc: 'A primitive system that bends to your team\'s exact shape.' },
  { icon: Compass, title: 'Opinionated defaults', desc: 'Best practices, baked in. Skip the setup, ship the product.' },
  { icon: Workflow, title: 'Automated rituals', desc: 'Standups, planning and retros that run themselves.' },
]

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  desc: string
  mousePos: { x: number; y: number }
}

function FeatureCard({ icon: Icon, title, desc, mousePos }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [localPos, setLocalPos] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {

    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Cursor position relative to this card
    const localX = mousePos.x - rect.left
    const localY = mousePos.y - rect.top

    // Closest point on the card boundary to the cursor
    const clampedX = Math.max(0, Math.min(rect.width, localX))
    const clampedY = Math.max(0, Math.min(rect.height, localY))

    // Distance from cursor to nearest point on card
    const distX = localX - clampedX
    const distY = localY - clampedY
    const distance = Math.sqrt(distX * distX + distY * distY)

    // Fade radius — how far outside the card glow starts fading
    const fadeRadius = 200

    // 1 when inside card, fades to 0 at fadeRadius outside
    const newOpacity = distance === 0 ? 1 : Math.max(0, 1 - distance / fadeRadius)

    setOpacity(newOpacity)

    // Use real local pos inside card, clamp   to edge when outside
    setLocalPos({
      x: distance === 0 ? localX : clampedX,
      y: distance === 0 ? localY : clampedY,
    })

  }, [mousePos])

  return (

    <div
      ref={cardRef}
      className="group relative overflow-hidden border border-border p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)]"
      style={{ isolation: 'isolate' }}
    >

      {/* Proximity glow */}
      <motion.div
        className={`pointer-events-none absolute inset-0`}
        animate={{
          opacity,
          background: `radial-gradient(350px circle at ${localPos.x}px ${localPos.y}px, rgba(255,255,255,0.1), transparent 70%)`,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Existing content — untouched */}

      <div className="h-10 w-10 rounded-lg text-primary flex items-center justify-center transition-all duration-300 group-hover:text-white">

        <Icon className="h-5 w-5 stroke-[1.8]" />

      </div>

      <h3 className="mt-6 text-base font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-primary">

        {title}

      </h3>

      <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-medium">{desc}</p>

    </div>

  )

}

export function Features() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: window.innerWidth / 2, y: 9999 })
  }

  return (

    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="features" className="py-32">

      <div
        className="mx-auto max-w-7xl px-pad-sm">

        <div className="max-w-2xl flex flex-col items-center mx-auto">

          <SectionHeader
            label="Platform"
            heading={['Every primitive you need.', "Nothing you don't."]}
          />

        </div>

        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >

          {items.map(({ icon, title, desc }) => (

            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              desc={desc}
              mousePos={mousePos}
            />

          ))}

        </div>

      </div>

    </section>

  )

}