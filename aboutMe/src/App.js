import './index.css'
import React from 'react'
import {Route,Routes} from 'react-router-dom'

import Home from './pages/Home'
import AboutMeDetails from './pages/AboutMeDetails'


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path ="/aboutMeDetails" element={<AboutMeDetails/>}/>
      
      </Routes>
    </div>
  )
}

export default App
