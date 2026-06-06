'use client'

import { m } from "motion/react"

const links = ['Features', 'Reviews', 'Pricing', 'Docs']

export function Navbar() {

  return (
    <m.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 bg-background`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-pad-sm py-pad-xs">
        <a href="#" className="text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          [BrandName]
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
        <div className="flex items-center gap-8">
          <a href="#" className="hidden sm:inline text-sm font-medium text-muted-foreground hover:text-primary transition duration-200">
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full btn-primary text-xs sm:text-sm font-medium px-4 h-9 hover:/80 transition shadow-sm active:scale-95 duration-200"
          >
            Get started
          </a>
        </div>
      </nav>
    </m.header>
  )
}
