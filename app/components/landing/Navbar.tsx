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
      className={`fixed backdrop-blur-xl top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-border' : ''}`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <a href="#" className="text-[15px] font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          Elevate
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors duration-200">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden sm:inline text-sm font-medium text-muted-foreground hover:text-primary transition duration-200">
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full btn-primary text-sm font-medium px-4 h-9 hover:/80 transition shadow-sm active:scale-95 duration-200"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  )
}
