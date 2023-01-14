import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../styles/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useRef,useState } from 'react'
import emailjs from '@emailjs/browser'
import contact from '../styles/contact.css'

const KEY = process.env.REACT_APP_PUBLIC_KEY
const TEMPLATE = process.env.REACT_APP_TEMPLATE_ID
const SERVICE = process.env.REACT_APP_SERVICE_ID
const PHONE = process.env.REACT_APP_PHONE

const Contact = (siteProps) => {
  const form = useRef()

  const initialFormValues={
name:"",
email:"",
phoneNumber:"",
subject:"",
message:""
  }
  const [formValues,setFormValues]= useState(initialFormValues)

  let navigate = useNavigate()

  const handleChange=(e)=>{
    setFormValues({...formValues,[e.target.name]: e.target.value})
  }
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
    setFormValues(initialFormValues)
    
  }
  return (
    <div className="contactForm">
      <h1 id="contactMe" className="heading">
        {' '}
        Contact Me
      </h1>
      <section className="contact">
        <div className="introContact">
          <p className="contactDescription">
            {' '}
            Interested in hiring me for your next project or just want to say
            hi? You can fill out the email form below or call me{' '}
            <a href={`tel:${PHONE}`}>
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </p>
        </div>
      </section>

      <div className="style">
        <div className="contactWrapper">
          <NavBar />

          <form ref={form} onSubmit={sendEmail}>
            <h1 className="contactMeHeader"> Email </h1>
            <label> Full Name</label>
            <input onChange={handleChange} value ={formValues.name}type="text" name="name" required></input>
            <label>Email</label>
            <input onChange={handleChange} value={formValues.email} type="text" name="email" required></input>
            <label>Phone Number</label>
            <input onChange={handleChange} value={formValues.phoneNumber}type="text" name="phoneNumber" required></input>
            <label>Subject</label>
            <input onChange={handleChange} value={formValues.subject}type="text" name="subject" required></input>
            <label>Message</label>
            <textarea onChange={handleChange} value={formValues.message}type="text" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
