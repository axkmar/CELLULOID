import './App.css'
import { Routes,Route } from 'react-router-dom'
import Signup from './pages/SIgnup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import List from './pages/List'

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/list" element={<List/>}></Route>
    </Routes>
  )
}

export default App
