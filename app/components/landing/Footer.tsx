const cols = [
  { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Integrations', 'Download'] },
  { title: 'Company', links: ['About', 'Customers', 'Careers', 'Press', 'Contact'] },
  { title: 'Resources', links: ['Docs', 'Guides', 'API', 'Community', 'Status'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'DPA', 'Cookies'] },
]

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-foreground grid place-items-center">
                <div className="h-2 w-2 rounded-sm bg-background" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight">elevate</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              The operating system for modern product teams.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground/80">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} elevate Labs, Inc.</span>
          <span>Crafted with intention.</span>
        </div>
      </div>
    </footer>
  )
}
