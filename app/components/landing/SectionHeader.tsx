type SectionHeaderProps = {
  label: string
  heading: string | [string, string]
}

export function SectionHeader({ label, heading }: SectionHeaderProps) {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
        {label}
      </p>
      <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-center text-foreground">
        {Array.isArray(heading) ? (
          <>
            {heading[0]}
            <span className="md:hidden"> </span>
            <br className="hidden md:inline" />
            {heading[1]}
          </>
        ) : (
          heading
        )}
      </h2>
    </>
  )
}
