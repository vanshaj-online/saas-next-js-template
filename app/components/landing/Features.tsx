'use client'

import { useRef, useState, useEffect } from 'react'
import { m } from 'motion/react'
import { SectionHeader } from './SectionHeader'

const items = [
  { title: 'Built for speed', desc: 'Sub-50ms interactions across every surface. Designed to feel native.' },
  { title: 'Native git flow', desc: 'Branches, PRs and reviews wired directly into your roadmap.' },
  { title: 'Secure by default', desc: 'SOC 2 Type II, SAML SSO, SCIM and granular role-based access.' },
  { title: 'Composable surface', desc: 'A primitive system that bends to your team\'s exact shape.' },
]

interface FeatureCardProps {
  title: string
  desc: string
  mousePos: { x: number; y: number }
  index: number
}

function FeatureCard({ title, desc, mousePos, index }: FeatureCardProps) {
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

    <m.div
      ref={cardRef}
      className="group relative overflow-hidden border border-border p-8 rounded-2xl w-64 h-auto aspect-[4/4.5] flex items-start justify-between flex-col" style={{ isolation: 'isolate' }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: 'tween', duration: 0.5, delay: index * 0.15, ease: 'easeInOut' }}
    >

      {/* Proximity glow */}
      <m.div
        className={`pointer-events-none absolute inset-0 md:inline-block hidden`}
        animate={{
          opacity,
          background: `radial-gradient(350px circle at ${localPos.x}px ${localPos.y}px, rgba(255,255,255,0.1), transparent 70%)`,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Existing content — untouched */}

      <span className='opacity-50'>0{index + 1}</span>

      <div className='flex flex-col items-start'>

        <h3 className="mt-6 text-xl font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-primary ">

          {title}

        </h3>

        <p className="mt-2 text-muted-foreground mx-auto leading-relaxed font-light max-w-[200px]">{desc}</p>

      </div>

    </m.div>

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
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-max mx-auto"
        >

          {items.map(({ title, desc }, index) => (

            <FeatureCard
              key={title}
              title={title}
              desc={desc}
              index={index}
              mousePos={mousePos}
            />

          ))}

        </div>

      </div>

    </section>

  )

}