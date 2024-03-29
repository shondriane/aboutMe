import React from "react";


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
            
            <a href="#contactMe" aria-label="Contact Me">
        <i className="fa-sharp fa-solid fa-envelope fa-xl" id="footerIcon"></i>
        </a>
        <a href="https://linkedin.com/in/shondriane-mesa-wise" target='_blank' rel='noreferrer' aria-label="Visit my  LinkedIn profile">
        <i className="fa-brands fa-linkedin fa-xl" id="footerIcon" ></i>
        </a>
        <a href="https://github.com/shondriane" target='_blank' rel='noreferrer' aria-label="Visit my Github profile">
     <i className="fa-brands fa-github fa-xl" id="footerIcon"></i>
        </a>
        
          </div>
          <p className="small" style={{ marginTop: 0, color: "white" }}>
            Created by Shondriane Mesa-Wise
          </p>
         
        </div>
      );
}



export default Footer