import axios from "axios"

type SignupData = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export default async function mountDataSignup(signup:SignupData){
  const response = await axios.post("http://localhost:3000/api/v1/profile/signup",signup)
  localStorage.setItem("token",response.data.token);
}