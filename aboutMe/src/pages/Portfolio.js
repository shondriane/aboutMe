import React from 'react'
import NavBar from '../components/NavBar'
import './Portfolio.css'
import blackJack from '../assets/blackJack.jpeg'
import buddyUp from '../assets/Buddy_Up.jpeg'
import travel from '../assets/Travel_log.jpeg'
import gitHubIcon from "../assets/github.svg";
import arrow from "../assets/arrow.svg"
import Footer from '../components/Footer'


function Portfolio(){
   
    return(
        <div className="portfolioWrapper">
            <NavBar/>
       <div className="titleProjects">
            <h1 className="titleProjects">Recent Projects</h1>
           
    </div>
           
        

       
            <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h4>Featured Project</h4>
         <h3>Black Jack</h3>
     <img src={blackJack} alt="blackJack table" className="image"/> 
    <p>Created using HTML and CSS</p>
    <a href="https://github.com/shondriane/Connect-4" target="_blank" rel="noreferrer">
<img src={gitHubIcon} alt="github" className="icons"/>
</a>
<a href="https://shondrianesblackjack.surge.sh/" target="_blank" rel="noreferrer">
<img src={arrow} alt="site" className="icons"/>
</a>
        </div>
        <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h4>Featured Project</h4>
         <h3>Travel Log</h3>
    <img src={travel} alt="travel site" className="travel-image"/>
    <p>Created using Mern Stack</p>
    <a href= "https://github.com/shondriane/Travel-Log" target="_blank" rel="noreferrer">
<img src={gitHubIcon} alt="github" className="icons"/>
</a>
<img src={arrow} alt="site" className="icons"/>
        </div>
        <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h4>Featured Project</h4>
         <h3>Buddy Up</h3> 
    <img src={buddyUp} alt="blackJack table" className="image"/>
    <p>Created using Pern Stack</p>
    <a href="https://github.com/shondriane/buddy-up-backend"target="_blank" rel="noreferrer">
<img src={gitHubIcon} alt="github" className="icons"/>
</a>
<img src={arrow} alt="site" className="icons"/>
        </div>
        <Footer/>
       </div>
    )
}

export default Portfolio