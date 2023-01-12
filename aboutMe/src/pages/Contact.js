import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const KEY = process.env.REACT_APP_PUBLIC_KEY
const TEMPLATE = process.env.REACT_APP_TEMPLATE_ID
const SERVICE = process.env.REACT_APP_SERVICE_ID
const PHONE= process.env.REACT_APP_PHONE

const Contact = (siteProps) => {
  const form = useRef()

  let navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE, TEMPLATE, form.current, KEY).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    handleSubmit()
  }

  const handleSubmit = () => {
    navigate('/')
  }
  return (
    <div >
        <h1 className="heading"> Contact Me</h1>
        <section className= "contact">
        <div className="introContact">
            <p className="contactDescription"> Interested in hiring me for your next project or just want to say hi? You can fill out the email form below or call me <a href={`tel:${PHONE}`}>
            <FontAwesomeIcon icon={faPhone} /> 
          </a></p>
        </div>
        </section>
      
    <div className="style">
   

   
    <div className="contactWrapper">
      <NavBar />
   

      <form ref={form} onSubmit={sendEmail}>
        <h1 className="contactMeHeader">
          {' '}
          Email{' '}

        </h1>
        <label> Full Name</label>
        <input type="text" name="name" required></input>
        <label>Email</label>
        <input type="text" name="email" required></input>
        <label>Phone Number</label>
        <input type="text" name="phoneNumber" required></input>
        <label>Subject</label>
        <input type="text" name="subject" required></input>
        <label>Message</label>
        <textarea type="text" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>

      <Footer />
    </div>
    </div>
    </div>
  )
}
export default Contact
