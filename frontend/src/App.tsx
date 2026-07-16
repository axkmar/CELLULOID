import './App.css'
import { Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup.tsx'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import List from './pages/user/List'
import Reviews from './pages/user/Reviews'
import Profile from './pages/user/Profile'

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/list" element={<List/>}></Route>
      <Route path="/reviews" element={<Reviews/>}></Route>
    </Routes>
  )
}

export default App
