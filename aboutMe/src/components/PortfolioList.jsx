import React from "react";
import {projects} from "../data"


function PortfolioList({projects}){
    console.log("test")
    return(
        <div>
            <div className="wrapper">
             <h4> Portfolio </h4>
            <div>
               {projects.map((item)=>(
                <Portfolio key={item.id}img={item.img} link={item.link}/>
               ))}
            </div>
            
            </div>
            </div>
       
    )

}

export default PortfolioList