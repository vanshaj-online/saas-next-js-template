const cols = [
  { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Integrations', 'Download'] },
  { title: 'Company', links: ['About', 'Customers', 'Careers', 'Press', 'Contact'] },
  { title: 'Resources', links: ['Docs', 'Guides', 'API', 'Community', 'Status'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'DPA', 'Cookies'] },
]

export function Footer() {
  return (
    <footer className="border-t border-border ">
      <div className="mx-auto max-w-6xl px-pad-sm py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <h3>[BrandName]</h3>
            </div>
            <p className="mt-4 text-sm font-semibold text-muted-foreground max-w-xs leading-relaxed">
              The operating system for modern product teams.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-foreground">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-muted-foreground/60">
          <span>© {new Date().getFullYear()} [BrandName] Labs, Inc.</span>
          <span>Crafted with intention.</span>
        </div>
      </div>
    </footer>
  )
}
