import axios from "axios"
import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import AlreadySign from "../components/AlreadySign"
import InputBox from "../components/InputBox"
import SignTitle from "../components/SignTitle"
import { moviesAtom } from '../atoms/movies.ts'

export default function Signin(){
  const setMovies = useSetRecoilState(moviesAtom)

  useEffect(()=>{ 
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6729bc3b7ae7ee3359bd4b411dc8a61b&language=en-US&page=1")
     .then(res=>{
      setMovies(res.data.results); 
    })
  },[setMovies])

  return <div className="bg-gray-800 min-h-screen text-white inset-0 flex justify-center items-center">
    <div className="bg-gray-600 border border-gray-400 rounded-3xl p-4 flex flex-col items-center">
      <SignTitle title={"SIGN IN"}></SignTitle>
      <InputBox title={"Username"} placeholder={"Tony Montana"}></InputBox>
      <InputBox title={"Password"} placeholder={"******"}></InputBox>
      <AlreadySign title={"Dont have an Account?"} link={"Sign Up!"}></AlreadySign>
    </div>
  </div>
}