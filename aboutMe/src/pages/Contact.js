
import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact=(siteProps)=>{

    let navigate=useNavigate()

const handleSubmit=()=>{
    navigate('/')
}
    return(
       
        <div className="contactWrapper">
            <NavBar/>
           
       <form>
       <h1 className="contactMeHeader"> Contact Me <a href={`tel:{steProps.phone}`}><FontAwesomeIcon icon={faPhone}/></a></h1>
        <label> Full Name</label>
        <input type="text" name="name"></input>
        <label>Email</label>
        <input type="text" name="name"></input>
        <label>Phone Number</label>
        <input type="text" name="phone number"></input>
        <label>Subject</label>
        <textarea type="text" name="subject"></textarea>
        <a href={`mailto:${siteProps.email}`}>
       <button type="submit" onChange={handleSubmit}>Submit</button>
    
              </a>
           
       </form>

           
            <Footer/>
            
            
              </div>
    )
}
export default Contact