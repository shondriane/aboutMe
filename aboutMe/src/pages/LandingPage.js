import AboutMeDetail from '../components/AboutMeDetail'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import LandingStylesheet from '../styles/LandingStylesheet.css'

const LandingPage=()=>{


    return(
        <div className="lpdiv" >
 <NavBar/>
        <AboutMeDetail/>
        <Portfolio/>
        <Contact/>
       
        <Footer/>
        </div>
       
    )
}

export default LandingPage