import React from 'react'
import NavBar from '../components/NavBar'
import './AboutMeDetails.css'
import picture from '../assets/Shondriane.jpeg'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'


function AboutMeDetails(){
  
    return(
        
  
        <div className="wrapper">
            
        <NavBar/>
        <div>
        
            <img src ={picture} alt="profilePicture" className='profilePicture'/>
          
          
</div>
        <div className = "aboutContent">
            <h2 className="title">Shondriane Mesa-Wise</h2>
            <h3 className="subTitle"> Full-Stack Software Engineer</h3>
<p className="text">
  I'm a Corporate Social Responsibility Global Account Manager turned Software Engineer. I specialize in frontend and backend development. I embrace challenges and love learning new processes, understanding how things work and making things more efficient. Curious how I can help you with your next project? Checkout my <Link to="/portfolio">portfolio</Link> and <a href=' https://docs.google.com/document/d/1dZLcqMcqplVCtCL5O3NA1UJ237PW0jJwfrMKSPfXPL0/export?format=pdf'>resume.</a>
</p>
<div >
    <hr/>
    <h3>Recent Technologies:</h3>
 <ul className="techSkills">
   
    <li className="skillsList">
    <i class="fa-brands fa-react"></i>
    React
    </li>
    <li className="skillsList">
    <i class="fa-brands fa-square-js"></i>
    Javascript
    </li>
    <li className="skillsList">
    <i class="fa-brands fa-node-js"></i>
    Node.js
    </li>
    <li className="skillsList">
    <i class="fa-brands fa-python"></i>
    Python
    </li>
 </ul>
   
  






            </div>
          
     
         </div>
         <Footer/>
         </div>

      
        
       
       
    )
}

export default AboutMeDetails