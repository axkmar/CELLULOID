import { MovieCard } from './MovieCard'
import { useRecoilValue } from 'recoil';
import { moviesAtom } from '../atoms/movies';

export function PosterWall() {
  const movies = useRecoilValue(moviesAtom);

  return (
    <section aria-labelledby="recent-heading" className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-5 flex items-end justify-between border-b border-border pb-3">
        <h2 id="recent-heading" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Activity
        </h2>
        <span className="font-mono text-xs text-primary">films</span>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie)=>{
          return <MovieCard 
          key={movie.id} 
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          overview={movie.overview}
          vote_average={movie.vote_average}
          original_title={movie.original_title}/>
        })}
      </div>
    </section>
  )
}
