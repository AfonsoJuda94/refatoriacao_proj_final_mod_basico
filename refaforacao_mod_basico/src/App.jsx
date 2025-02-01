import { useState } from 'react'
import './App.css'


import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Inicio from './Components/Incio'
import NotFound from './Components/NotFound'
import Livros from './Components/Livros'
import AudioLivros from './Components/AudioLivros'
import Forum from './Components/Forum'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app'>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/inicio' element = {<Inicio/>}/>
          <Route path='/livros' element ={<Livros/>}/>
          <Route path='audio' element ={<AudioLivros/>}/>
          <Route path='/forum' element = {<Forum/>} />
          <Route path='*' element = {<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
