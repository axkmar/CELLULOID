import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlreadySign from "../components/AlreadySign"
import InputBox from "../components/InputBox"
import SignTitle from "../components/SignTitle"
import Button from "../components/Button";
import mountData from "../assets/mountSignupData";

interface SigninData {
  username:string;
  firstname:string;
  lastname:string;
  email:string;
  password:string;
}

export default function Signin(){
   const [signin,setSignin] = useState<SigninData>({
    username:"",
    firstname:"",
    lastname:"",
    email:"",
    password:""
  })
  const navigate = useNavigate();

  return <div className="bg-gray-800 min-h-screen text-white inset-0 flex justify-center items-center">
    <div className="bg-gray-600 border border-gray-400 rounded-3xl p-4 flex flex-col items-center">
      <SignTitle title={"SIGN IN"}></SignTitle>
      <InputBox onChange={(e)=>setSignin({...signin,username:e.target.value})} title={"Username"} placeholder={"Tony Montana"}></InputBox>
      <InputBox onChange={(e)=>setSignin({...signin,password:e.target.value})}  title={"Password"} placeholder={"******"}></InputBox>

      <Button title={"SIGNIN"}
      onClick={()=>{mountData(signin); 
      navigate("/dashboard");}}></Button>

      <AlreadySign title={"Dont have an Account?"} link={"Sign Up!"}></AlreadySign>
    </div>
  </div>
}