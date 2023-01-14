import React from "react";
import {Link} from 'react-router-dom'
import Connect from './Connect'

const Footer=()=>{
const siteProps={
  primaryColor: "#217c68"
}



    return (

     
        <div
          id="contact"
          style={{
           
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.50rem",
            padding: "0.03rem 0 0.03rem",
            backgroundColor: siteProps.primaryColor,
          }}
        >
         
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2.5rem",
              marginTop:"5px",
            }}
          >
            
            <Link to ="/ContactMe">
        <i class="fa-sharp fa-solid fa-envelope fa-xl" id="footerIcon"></i>
        </Link>
        <a href="https://linkedin.com/in/shondriane-mesa-wise" target='_blank' rel='noreferrer'>
        <i class="fa-brands fa-linkedin fa-xl" id="footerIcon" ></i>
        </a>
        <a href="https://github.com/shondriane" target='_blank' rel='noreferrer'>
     <i class="fa-brands fa-github fa-xl" id="footerIcon"></i>
        </a>
        
          </div>
          <p className="small" style={{ marginTop: 0, color: "white" }}>
            Created by Shondriane Mesa-Wise
          </p>
         
        </div>
      );
}



export default Footer