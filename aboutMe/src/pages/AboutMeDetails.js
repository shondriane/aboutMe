import React from 'react'
import NavBar from '../components/NavBar'
import './AboutMeDetails.css'
import Portfolio from '../pages/Portfolio'
import picture from '../assets/Shondriane.jpeg'
import postgres from '../assets/Postgresql-02.jpg'
import Footer from '../components/Footer'



function AboutMeDetails(){
  
    return(
        
  
        <div className="wrapper">
            
        <NavBar/>
        <div>
        
            <img src ={picture} alt="profilePicture" className='profilePicture'/>
          
          
</div>
        <div className = "aboutContent">
            <h2 className="title">About Me:</h2>
<p className="text">
   A Corporate Social Responsibility Global Manager turned full-stack developer. I love analyzing data and finding solutions to make things better.
   <br></br><a  href=' https://docs.google.com/document/d/1dZLcqMcqplVCtCL5O3NA1UJ237PW0jJwfrMKSPfXPL0/export?format=pdf'> Download My Resume <br></br></a><a  href=' https://docs.google.com/document/d/1dZLcqMcqplVCtCL5O3NA1UJ237PW0jJwfrMKSPfXPL0'>  View My Resume </a>
  
</p>
<p className="text">

  Embarking on this journey as a software engineer has fueled my passion to learn new things, solve problems, and make an impact while writting code. 

  
</p>

<div >
    <hr/>
  
        

    
<p className="text">
With me on your team you are getting an innovative go getter with a growth mindset, who enjoys  helping and uplifting others. As a recent graduate from an intesive bootcamp I have the skills I need to help you see your vision to fruition, and learn complex languages, frameworks, and libraries quickly.

  
</p>





            </div>
          
     
         </div>
         <Footer/>
         </div>

      
        
       
       
    )
}

export default AboutMeDetails