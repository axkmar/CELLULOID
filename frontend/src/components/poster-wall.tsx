import film from '../assets/hero.png'
import { MovieCard } from './movie-card'

export function PosterWall() {
  return (
    <section aria-labelledby="recent-heading" className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-5 flex items-end justify-between border-b border-border pb-3">
        <h2 id="recent-heading" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Recent Activity
        </h2>
        <span className="font-mono text-xs text-primary">films</span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <MovieCard film={film} />
      </div>
    </section>
  )
}
