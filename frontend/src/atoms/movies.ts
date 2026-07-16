import { atom } from 'recoil'

interface Movie {
  title:string;
  poster_path:string;
  release_date: string;  
  overview: string;
  vote_average:number
  id:number;
  original_title:string;
}

export const moviesAtom = atom<Movie[]>({
  key:"moviesAtom",
  default:[]
})