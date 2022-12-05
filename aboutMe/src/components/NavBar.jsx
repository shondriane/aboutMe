import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <div className="navbar">
      <Link className="nav" to="/">
        Home
      </Link>
      <Link className="nav" to="/Portfolio">
        Portolio
      </Link>
      <Link className="nav" to="/AboutMeDetails">
        About Me
      </Link>
    </div>
  )
}

export default NavBar
