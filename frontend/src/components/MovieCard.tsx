import { StarRating } from "./StarRating"

type Props ={
  title:string;
  poster_path:string;
  release_date: string;  
  overview: string;
  vote_average:number
  key:number;
  original_title:string;
};

export function MovieCard({ title,poster_path,release_date,overview,vote_average,original_title }:Props ) {
  return (
    <article className="group flex flex-col gap-2">
      <div className="relative aspect-[2/3] overflow-hidden rounded-md border border-border bg-secondary shadow-md transition-transform duration-200 group-hover:-translate-y-1 group-hover:ring-2 group-hover:ring-primary">
        <img
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="truncate text-sm font-semibold text-foreground" title={original_title}>
          {title}
        </h3>
        <div className="flex items-center justifyx-between">
          <StarRating rating={vote_average}/>
          <span className="font-mono text-xs text-muted-foreground">{release_date}</span>
        </div>
        <p className="mt-1 line-clamp-2 text-pretty text-xs leading-relaxed text-muted-foreground">{overview}</p>
      </div>
    </article>
  )
}
