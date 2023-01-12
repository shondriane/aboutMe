import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const PHONE= process.env.REACT_APP_PHONE
function ContactIntro(){
    return(
        <div>
            <div className="contact">
                <h1> Contact Me</h1>
          <p>Interested in hiring me for a project or just want to say hi? You can fill out the 
            contact form below or   <tr>
          <td>
          <a href={`tel:${PHONE}`}>
            <FontAwesomeIcon icon={faPhone} /> 
          </a>
          Call Me
          </td>
            </tr>
          </p>
            </div>
            </div>
       
    )

}

export default ContactIntro