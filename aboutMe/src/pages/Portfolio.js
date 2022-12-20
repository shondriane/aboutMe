import React from 'react'
import NavBar from '../components/NavBar'
import './Portfolio.css'
import blackJack from '../assets/blackJack.jpeg'
import buddyUp from '../assets/Buddy_Up.jpeg'
import travel from '../assets/Travel_log.jpeg'
import gitHubIcon from "../assets/github.svg";
import fx3shaday from '../assets/Home.png'
import adrenaline from '../assets/adrenaline.png'
import arrow from "../assets/arrow.svg"
import Footer from '../components/Footer'


function Portfolio(){
   
    return(
        <div className="portfolioWrapper">
            <NavBar/>
       <header>
            <h1 className="titleProjects">Recent Projects</h1>
           
    </header>

    <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h4 className="stack">PostgreSQL, Express, React, and Node.js Stack</h4>
         <h3>FX3 Shaday</h3> 
    <img src={fx3shaday} alt="fx3shaday" className="image"/>
    <p>Designed a user-friendly React website for personal trainers to manage, schedule, and book client sessions by implementing third-party APIs and creating JWT Authentication with Node.js. Styled the application using Material UI.<br></br> </p>
    <div className="bottom-wrapper">
    <a href="https://github.com/shondriane/fX3Shaday-frontend"target="_blank" rel="noreferrer" className="icons">
        View Github for Process

</a>
<a href="https://fx3shaday.herokuapp.com/" className="icons">
    View Live Site

</a>
</div>
        </div>
        <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h4 className="stack">PostgreSQL, Express, React, and Node.js Stack</h4>
         <h3>Buddy Up</h3> 
    <img src={buddyUp} alt="blackJack table" className="image"/>
    <p>Collaborated with three software engineers to plan and develop a full-stack react website with CRUD operations. The website is for users to post activities and match up with buddies who are also interested in attending the event. We established multiple Many-to-Many relationships, conditional rendering, and user authentication to perform functionality.</p>
   
    <div className="bottom-wrapper">
    <a href="https://github.com/shondriane/buddy-up-backend"target="_blank" rel="noreferrer" className="icons">
        View Github for Process

</a>
<a href="https://buddy-match-up.herokuapp.com/" className="icons">
    View LiveSite

</a>
</div>

        </div>
           
    <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h4 className="stack">Mongoose, Express, React and Node.js Stack</h4>
         <h3>Adrenaline Junkie</h3> 
    <img src={adrenaline} alt="blackJack table" className="image"/>
    <p>Participated in a team of three software engineers during a 2-day hackathon to design a full-stack website for amusement park rollercoaster reviews and created user authentication with React hooks and conditional rendering for unique user URLs. Styled mobile-friendly application using CSS grid and flexbox layouts.</p>
    <div className="bottom-wrapper">
    <a href="https://github.com/shondriane/Amusement-Park"target="_blank" rel="noreferrer" className="icons">
        View Github for Process

</a>
<a href="https://adrenaline-junkies.herokuapp.com/account/639c93cc603a523c0cf553f9/rides" className="icons">
    View Live Site

</a>
</div>
        </div>

       
            <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h4 className="stack">HTML and CSS</h4>
         <h3>Black Jack</h3>
     <img src={blackJack} alt="blackJack table" className="image"/> 
    <p>The first application I built was a browser-based game for computers and players utilizing HTML/CSS and Javascript Object Oriented Programming and Document Object Model (DOM) manipulation. </p>
    <div className="bottom-wrapper">
    <a href="https://github.com/shondriane/Connect-4" target="_blank" rel="noreferrer" className="icons">
       View Github for Process

</a>
<a href="https://shondrianesblackjack.surge.sh/" target="_blank" rel="noreferrer" className="icons">
    View Live Site

</a>
</div>
        </div>
        <div className="card">
           <div className='cardContainer'>
<div className="c"></div>
<div className="c"></div>
<div className="c"></div>

           </div>
         <h4 className="stack">Mongoose, Express, React, and Node.js Stack</h4>
         <h3>Travel Log</h3>
    <img src={travel} alt="travel site" className="travel-image"/>
    <p >Created travel application to share my travel itinerary with family and friends who also wanted to join. Made reusable component forms with a search bar to post and render activities based on activity type, destination, and date. Tested all backend routes using Insomnia. Future Features is authentication.</p>
    <div className="bottom-wrapper">
    <a href= "https://github.com/shondriane/Travel-Log" target="_blank" rel="noreferrer" className="icons">
        View Github for Process

</a>
<a href="https://shondriane-travel.herokuapp.com/" target="_blank" rel="noreferrer" className="icons">
    View Live Site

</a>
</div>
        </div>
     
        <Footer/>
       </div>
    )
}

export default Portfolio