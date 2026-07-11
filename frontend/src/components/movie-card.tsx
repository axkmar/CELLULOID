import { StarRating } from "./star-rating"

export function MovieCard({ film }:{film:string} ) {
  return (
    <article className="group flex flex-col gap-2">
      <div className="relative aspect-[2/3] overflow-hidden rounded-md border border-border bg-secondary shadow-md transition-transform duration-200 group-hover:-translate-y-1 group-hover:ring-2 group-hover:ring-primary">
        <img
          src={film}
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="truncate text-sm font-semibold text-foreground" title={"kanye"}>
          Someday
        </h3>
        <div className="flex items-center justify-between">
          <StarRating rating={332323}/>
          <span className="font-mono text-xs text-muted-foreground">2005</span>
        </div>
        <p className="mt-1 line-clamp-2 text-pretty text-xs leading-relaxed text-muted-foreground">GOODASSJOB</p>
      </div>
    </article>
  )
}
