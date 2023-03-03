import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <div className="navbar">
        <a  className="nav" href="#aboutMe" aria-label="Visit my About Me section">
        About Me
      </a>
    
      <a className ="nav" href="#skills" aria-label="Visit my  Skills section">
       Projects
      </a>
      <a className="nav" href="#contactMe" aria-label="Contact Me">
        Contact
      </a> 
    </div>
  )
}

export default NavBar
