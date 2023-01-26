import React from 'react'

import '../styles/AboutMeDetail.css'
import picture from '../assets/Shondriane.jpeg'
import {Link} from 'react-router-dom'

const AboutMeDetail=()=>{
  
    return(
        
  
        <div id="aboutMe" className="wrapper" >
     



        <div className = "aboutContent">
            <header>
            <h1 className="title">Shondriane Mesa-Wise</h1>
            </header>
           
            <div className="pic">
        
        <img src ={picture} alt="profilePicture" className='profilePicture'/>     
       
</div>
            <h2 className="subTitle">  Software Engineer</h2>
           
           
            
<p className="text">
I am a software engineer with a finance and corporate social responsibility background. My expertise includes frontend and backend development. When collaborating, I bring a unique perspective to problem-solving, building, and designing applications to enhance the user experience. As a lifelong learner, I embrace challenges and consistently seek to improve my skills and understanding of how things work to make things run more efficiently.
</p>
<p className="text">
How can I help you with your next project? Checkout my <a href="#skills">portfolio</a> and <a href=' https://docs.google.com/document/d/1dZLcqMcqplVCtCL5O3NA1UJ237PW0jJwfrMKSPfXPL0/export?format=pdf'>resume.</a>
</p>
<div  className="resumeContainer">
<a className ="resume" href="https://docs.google.com/document/d/1dZLcqMcqplVCtCL5O3NA1UJ237PW0jJwfrMKSPfXPL0/edit?usp=sharing" target="blank" rel="noreferrer">
View Resume
</a>

</div>
<div >
    <hr />
    
    <h2  >Recent Technologies</h2>
  
 <ul className="techSkills">
   
    <li className="skillsList">
    <i class="fa-brands fa-react fa-2xl"></i>
    React
    </li>
    <li className="skillsList">
    <i class="fa-brands fa-square-js fa-2xl"></i>
    Javascript
    </li>
    <li className="skillsList">
    <i class="fa-brands fa-vuejs fa-2xl"></i>
    Vue.js
    </li>
    <li className="skillsList">
    <i class="fa-brands fa-python fa-2xl"></i>
    Python
    </li>
 </ul>
   
            </div>
          <div class="update">
          <p class="updateP">  I am always looking to upskill and update the list periodically to stay current with industry trends. </p>
          </div>
    
         </div>
      
         </div>

      
        
       
       
    )
}

export default AboutMeDetail