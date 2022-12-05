import React from 'react'
import NavBar from '../components/NavBar'
import './AboutMeDetails.css'
import Portfolio from '../pages/Portfolio'
import picture from '../assets/Shondriane.jpeg'
import postgres from '../assets/Postgresql-02.jpg'




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
   A Corporate Social Responsibility Global Manager turned full-stack developer. I have always been a curious individual on a quest to figure out the root cause of a problem and how things function. I love analyzing data and finding solutions to make things better.
  
</p>
<p className="text">

  Embarking on this journey as a software engineer has allowed me to feed the part of me that wants to learn new things, solve problems, and make an impact while writting code. 

  
</p>
<p className="text">
With me on your team you are getting an innovative go getter with a growth mindset, who has a passion for helping and uplifting others. As a recent graduate from an intesive bootcamp I have the skills I need to help you see your vision to fruition, and learn complex languages, frameworks, and libraries quickly.

  
</p>


<a  href=' https://docs.google.com/document/d/1dZLcqMcqplVCtCL5O3NA1UJ237PW0jJwfrMKSPfXPL0/export?format=pdf'> Download My Resume </a>


            </div>
          
         <div className="skills">
            <h2 className= "titleSkills">
                Technical Skills:
            </h2>
            <div class="skill-images">
                
           <i class="fa-brands fa-square-js fa-4x"></i> <h1>Javascript</h1>
           </div>
           <div class="skill-images">
           <i class="fa-brands fa-node fa-4x"></i> 
           <h1>Node.js</h1>
           </div>
          <div class="skill-images">
          <i class="fa-brands fa-html5 fa-4x"></i> 
          <h1>HTML</h1>
          </div>
           <div class="skill-images">
           <i class="fa-brands fa-css3-alt fa-4x"></i> 
           <h1>CSS</h1>
           </div>
          <div class="skill-images">
          <i class="fa-brands fa-react fa-4x"></i>
          <h1>React</h1>
          </div>
          <div class="skill-images">
          <i class="fa-brands fa-python fa-4x"></i>
          <h1>Python</h1></div> 
          
           <div class="postgres">
           <img src={postgres} alt="postgresql"/>
        <h1> PostgreSQL</h1>
            </div>
            
            </div>
          
         </div>

      
        
       
       
    )
}

export default AboutMeDetails