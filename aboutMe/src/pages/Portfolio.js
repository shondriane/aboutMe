import React from 'react'
import '../styles/Portfolio.css'
import blackJack from '../assets/blackJack.webp'
import buddyUp from '../assets/Buddy_Up.webp'
import travel from '../assets/Travel_log.webp'
import fx3shaday from '../assets/Home.webp'
import adrenaline from '../assets/adrenaline.webp'
import Connect from '../components/Connect'
function Portfolio(){
   
    return(
        <div    className="portfolioWrapper" >
         
     
            <h2  className="titleProjects" id="skills">Featured Projects</h2>
          
    
   
<div>
    <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h3 className="stack">Stack: PostgreSQL, Express, React, Node.js, and MUI</h3>
         <h4>FX3 Shaday</h4> 
    <img src={fx3shaday} alt="fx3shaday" className="image" loading="lazy"/>
    <p>Designed a user-friendly website for personal trainers to manage, schedule, and book client sessions by implementing third-party APIs and creating JWT Authentication with Node.js. Styled the application using Material UI.<br></br> </p>
    <div className="bottom-wrapper">
    <a className="portfolio-links"href="https://github.com/shondriane/fX3Shaday-frontend"target="_blank" rel="noreferrer" >
        Github

</a>
<a className="website" href="https://fx3shaday.herokuapp.com/">
    Website

</a>
</div>
        </div>
        <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h3 className="stack">Stack: PostgreSQL, Express, React, and Node.js</h3>
         <h4>Buddy Up</h4> 
    <img src={buddyUp} alt="blackJack table" className="image" loading="lazy"/>
    <p>The website is inspired by MeetUp, Facebook, and Tinder. Designed for users to post activities and match up with buddies who are also interested in attending the event.</p>
   
    <div className="bottom-wrapper">
    <a className="portfolio-links" href="https://github.com/shondriane/buddy-up-backend"target="_blank" rel="noreferrer" >
        Github

</a>
<a className="website"href="https://buddy-match-up.herokuapp.com/">
    Website

</a>
</div>

        </div>
        <div>
        <h2 className="portSubTitle"> Get In Touch</h2>
     <p className="helloSection"> Whether you have a question or just want to say hi, I'll like to hear from you. </p>
    
     <Connect/>
         
        </div>
      
           
    <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h3 className="stack">Stack: Mongoose, Express, React and Node.js</h3>
         <h4>Adrenaline Junkie</h4> 
    <img src={adrenaline} alt="blackJack table" className="image" loading="lazy"/>
    <p className= "portfolioDescription"> 2-day hackathon to design a full-stack website for amusement park rollercoaster reviews. Created user authentication with React hooks and conditional rendering for unique user URLs.</p>
    <div className="bottom-wrapper">
        
    <a className="portfolio-links"href="https://github.com/shondriane/Amusement-Park"target="_blank" rel="noreferrer" >
        Github

</a>
<a href="https://adrenaline-junkies.herokuapp.com/account/639c93cc603a523c0cf553f9/rides" className="website">
    Website

</a>
</div>
        </div>

       
            <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h3 className="stack">Stack: HTML and CSS</h3>
         <h4>Black Jack</h4>
     <img src={blackJack} alt="blackJack table" className="image" loading="lazy"/> 
    <p>The first application I built was a browser-based game utilizing HTML/CSS, Javascript Object Oriented Programming and Document Object Model (DOM) manipulation. </p>
    <div className="bottom-wrapper">
    <a href="https://github.com/shondriane/Connect-4" target="_blank" rel="noreferrer" className="portfolio-links">
       Github 

</a>
<a href="https://shondrianesblackjack.surge.sh/" target="_blank" rel="noreferrer" className="website">
    Website

</a>
</div>
        </div>
        <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h3 className="stack">Stack: Mongoose, Express, React, and Node.js</h3>
         <h4>Travel Log</h4>
    <img src={travel} alt="travel site" className="travel-image" />
    <p >Created travel application to share my travel itinerary with family and friends who also wanted to join. Made reusable component forms with a search bar to post and render activities. Currently under construction.</p>
    <div className="bottom-wrapper">
    <a href= "https://github.com/shondriane/Travel-Log" target="_blank" rel="noreferrer" className="portfolio-links">
        Github 

</a>
<a href="https://shondriane-travel.herokuapp.com/" target="_blank" rel="noreferrer" className="website">
    Website

</a>
</div>
        </div>
   
    
       
        </div>
       
       </div>
    )
}

export default Portfolio