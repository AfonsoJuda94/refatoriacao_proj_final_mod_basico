import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
