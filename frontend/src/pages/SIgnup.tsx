import InputBox from "../components/InputBox"

export default function Signup(){
  return <div className="bg-gray-800 min-h-screen text-white inset-0 flex justify-center items-center">
    <div className="bg-gray-600 border border-gray-400 rounded-3xl p-4 flex flex-col items-center">
      <h2 className="text-2xl mb-5">SIGNUP</h2>
      <InputBox title={"Username"} placeholder={"Tony Montana"}></InputBox>
      <InputBox title={"Email"} placeholder={"scarface2@gmail.com"}></InputBox>
      <InputBox title={"Password"} placeholder={"******"}></InputBox>
    </div>
  </div>
}