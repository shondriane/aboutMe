import React from 'react'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import AboutMeDetails from '../pages/AboutMeDetails'
import './Home.css'

import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
      <main id="main">
        <NavBar />
        <div className="homePageTitle">
        <h1 id="homePageName">SHONDRIANE MESA-WISE</h1>
      <h2 id="homePageJobTitle">SOFTWARE ENGINEER</h2>
        </div>
        <div className="funFacts">
          <AboutMe/>
        </div>
        <hr className="page-break"></hr>
        <div className="work-container">
          <button>
          <Link to="/portfolio">
          <h3 id="hoverEffect"> View Recent Work</h3>
          </Link>
          </button>
        </div>
     
      </main>
    </div>
     
    </>
  )
}

export default Home