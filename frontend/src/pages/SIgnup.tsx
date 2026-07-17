import { useNavigate } from "react-router-dom"
import { useState } from "react"
import AlreadySign from "../components/AlreadySign"
import InputBox from "../components/InputBox"
import SignTitle from "../components/SignTitle"
import Button from "../components/Button"
import mountDataSignup from "../assets/mountSignupData"

interface SignupData {
  username:string;
  firstname:string;
  lastname:string;
  email:string;
  password:string;
}

export default function Signup(){
  const [signup,setSignup] = useState<SignupData>({
    username:"",
    firstname:"",
    lastname:"",
    email:"",
    password:""
  })
  const navigate = useNavigate();

  return <div className="bg-gray-800 min-h-screen text-white inset-0 flex justify-center items-center">
    <div className="bg-gray-600 border border-gray-400 rounded-3xl w-80 p-4 flex flex-col items-center">
      <SignTitle title={"SIGN UP"}></SignTitle>

      <InputBox onChange={(e)=>setSignup({...signup,username:e.target.value})} 
      title={"Username"} placeholder={"Tony Montana"}></InputBox>
      <InputBox onChange={(e)=>setSignup({...signup,firstname:e.target.value})} 
      title={"First Name"} placeholder={"Tony Montana"}></InputBox>
      <InputBox onChange={(e)=>setSignup({...signup,lastname:e.target.value})} 
      title={"Last Name"} placeholder={"Tony Montana"}></InputBox>
      <InputBox onChange={(e)=>setSignup({...signup,email:e.target.value})} 
      title={"Email"} placeholder={"scarface2@gmail.com"}></InputBox>
      <InputBox onChange={(e)=>setSignup({...signup,password:e.target.value})} 
      title={"Password"} placeholder={"******"}></InputBox>

      <Button title={"SIGNUP"} 
      onClick={()=>{mountDataSignup(signup); 
      navigate("/dashboard");}}></Button>

      <AlreadySign title={"Already Have An Account?"} link={"Sign In!"}></AlreadySign>
    </div>
  </div>
}