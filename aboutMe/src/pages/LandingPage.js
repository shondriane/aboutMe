import AboutMeDetail from '../components/AboutMeDetail'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import LandingStylesheet from '../styles/LandingStylesheet.css'

const LandingPage=()=>{


    return(
        <div >
 <NavBar/>
        <AboutMeDetail/>
        <Portfolio/>
        <Contact/>
        <h1 className="thankYou">
        Thank you for dropping by!
     </h1>
        <Footer/>
        </div>
       
    )
}

export default LandingPage