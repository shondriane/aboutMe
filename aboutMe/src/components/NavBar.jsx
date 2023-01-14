import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <div className="navbar">
        <a  className="nav" href="#aboutMe">
        About Me
      </a>
    
      <a className ="nav" href="#skills">
       Projects
      </a>
      <a className="nav" href="#contactMe">
        Contact
      </a> 
    </div>
  )
}

export default NavBar
