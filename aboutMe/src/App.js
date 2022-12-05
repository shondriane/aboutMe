import './index.css'
import React from 'react'
import {Route,Routes} from 'react-router-dom'

import Home from './pages/Home'
import AboutMeDetails from './pages/AboutMeDetails'
import Portfolio from './pages/Portfolio'


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path ="/aboutMeDetails" element={<AboutMeDetails/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      
      </Routes>
    </div>
  )
}

export default App
