import React from 'react'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'
import './Home.css'
import {Link} from 'react-router-dom'
import AboutMeDetails from './AboutMeDetails'

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
          <h3 id="hoverEffect"> View Portfolio</h3>
          </Link>
          </button>
          <button>
          </button>
          <button>
          <a href=' https://docs.google.com/document/d/1dZLcqMcqplVCtCL5O3NA1UJ237PW0jJwfrMKSPfXPL0/export?format=pdf'>
          <h3 id="hoverEffect"> Resume</h3>
          </a>
          </button>
        </div>
     <Footer/>
      </main>
    </div>
     
    </>
  )
}

export default Home