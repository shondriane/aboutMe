import './index.css'
import React from 'react'
import {Route,Routes} from 'react-router-dom'


import LandingPage from './pages/LandingPage'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'



function App() {

  const siteProps = {
    name: "Shondriane Mesa-Wise",
    title: "Software Engineer",
    email: "shondriane.mesawise@gmail.com",
    gitHub: "shondriane",
    linkedIn: "shondriane-mesa-wise",
   
  
  }
  const primaryColor= "#7c6821";

  return (
    <div>
      
      <Routes>
      <Route path="/" element={<LandingPage {...siteProps} primaryColor={primaryColor}/>} />
  
      <Route path="/portfolio" element={<Portfolio {...siteProps} primaryColor={primaryColor}/>}/>
      <Route path="/ContactMe" element={<Contact {...siteProps} primaryColor={primaryColor}/>}/>
     
      </Routes>
     
    </div>
  )
}

export default App
