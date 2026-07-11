import DP from '../assets/hero.png'

function StatItem({ label }: { label: string; }) {
  return (
    <div className="flex flex-col items-center px-4 py-1 sm:items-end">
      <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  )
}

export function ProfileHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-10">
        {/* Left: profile identity */}
        <div className="flex items-center gap-5">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/70 sm:h-24 sm:w-24">
            <img
              src={DP}
              sizes="96px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-pretty text-2xl font-bold leading-tight text-foreground sm:text-3xl">AKSHIT</h1>
              <span className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-foreground">
                Pro
              </span>
            </div>
            <p className="font-mono text-sm text-primary">akshit23</p>
            <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">someday we gon take this off</p>
          </div>
        </div>

        {/* Right: counters */}
        <div className="grid grid-cols-3 divide-x divide-border rounded-lg border border-border bg-card/40 sm:flex sm:divide-x">
          <StatItem label="Films"/>
          <StatItem label="This Year"/>
          <StatItem label="Reviews"/>
          <StatItem label="Lists"/>
          <StatItem label="Followers"/>
        </div>
      </div>
    </header>
  )
}
