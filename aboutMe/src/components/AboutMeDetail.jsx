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
  I'm a Corporate Social Responsibility Global Account Manager turned Software Engineer. I specialize in frontend and backend development. I'm a life long learner with a growth mindset. I embrace challenges and love learning new processes, understanding how things work and making things more efficient. Curious how I can help you with your next project? Checkout my <Link to="/portfolio">portfolio</Link> and <a href=' https://docs.google.com/document/d/1dZLcqMcqplVCtCL5O3NA1UJ237PW0jJwfrMKSPfXPL0/export?format=pdf'>resume.</a>
</p>
<div  id="skills" className="resumeContainer">
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
          
    
         </div>
      
         </div>

      
        
       
       
    )
}

export default AboutMeDetail