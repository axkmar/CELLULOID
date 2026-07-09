import './App.css'
import { Routes,Route } from 'react-router-dom'
import Signup from './pages/SIgnup'

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin"></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
  )
}

export default App
