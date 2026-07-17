import axios from "axios"

type SigninData = {
  username: string;
  password: string;
}

export default async function mountDataSignup(signin:SigninData){
  const response = await axios.post("http://localhost:3000/api/v1/profile/signup",signin)
  localStorage.setItem("token",response.data.token);
}