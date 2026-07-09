import InputBox from "../components/InputBox"

export default function Signup(){
  return <div className="bg-gray-800 min-h-screen text-white inset-0 flex justify-center items-center">
    <div className="bg-gray-600 border border-gray-400 rounded-xs">
      <h2>SIGNUP</h2>
      <InputBox title={"Username"} placeholder={"Tony Montana"}></InputBox>
    </div>
  </div>
}