'use client'

import { useEffect, useState } from 'react'

const links = ['Features', 'Product', 'Pricing', 'Docs', 'Changelog']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-background/60 border-b border-hairline'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-foreground/95 grid place-items-center">
            <div className="h-2 w-2 rounded-sm bg-background" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">Elevate</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition">
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background text-sm font-medium px-4 h-9 hover:bg-foreground/90 transition"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  )
}
