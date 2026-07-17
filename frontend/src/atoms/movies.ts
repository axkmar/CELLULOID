import { selector } from 'recoil'
import axios from 'axios';

interface Movie {
  title:string;
  poster_path:string;
  release_date: string;  
  overview: string;
  vote_average:number
  id:number;
  original_title:string;
}

export const moviesSelector = selector<Movie[]>({
  key:"moviesSelector",
  get:async()=>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6729bc3b7ae7ee3359bd4b411dc8a61b&language=en-US&page=1")
    return res.data.results; 
  }
})