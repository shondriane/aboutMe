import React from "react";
import PropTypes from "prop-types";
import envelopeIcon from "../assets/envelope.svg";
import gitHubIcon from "../assets/github.svg";
import linkedInIcon from "../assets/linkedin.svg";

const Footer=()=>{
const siteProps={
    name: "Shondriane Mesa-Wise",
  title: "Software Engineer",
  email: "shondriane.mesa-wise@gmail.com",
  gitHub: "shondriane",
  linkedIn: "shondriane-mesa-wise",
  primaryColor: "#217c68"
}
    return (
        <div
          id="contact"
          style={{
           
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2.5rem",
            padding: "1rem 0 3rem",
            backgroundColor: siteProps.primaryColor,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {siteProps.email && (
              <a href={`mailto:${siteProps.email}`}>
                <img src={envelopeIcon} alt="email" className="socialIcon" />
              </a>
            )}
          
            {siteProps.gitHub && (
              <a href={`https://github.com/${siteProps.gitHub}`} target="_blank" rel="noopener noreferrer">
                <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
              </a>
            )}
            {siteProps.linkedIn && (
              <a
                href={`https://www.linkedin.com/in/${siteProps.linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
              </a>
            )}
        
          </div>
          <p className="small" style={{ marginTop: 0, color: "white" }}>
            Created by {siteProps.name}
          </p>
        </div>
      );
}

Footer.defaultProps = {
    name: "",
  };
  
  Footer.propTypes = {
   
    email: PropTypes.string,
    gitHub: PropTypes.string,
    linkedIn: PropTypes.string,
    name: PropTypes.string.isRequired,
    primaryColor: PropTypes.string,
  
  };

export default Footer