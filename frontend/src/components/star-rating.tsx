import { Star, StarHalf } from "lucide-react"

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="relative inline-flex">
              <Star className="h-3.5 w-3.5 text-accent/40" />
              <StarHalf className="absolute inset-0 h-3.5 w-3.5 fill-accent text-accent" />
            </span>
          <Star className="h-3.5 w-3.5 text-accent/40" />
    </div>
  )
}
