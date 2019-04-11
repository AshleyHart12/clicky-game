import React from "react";
import "./style.css";


function Title() {
    return (
      <div className="align-items-center jumbotron header-hgt header-pad head-mar-top nav-shadow text-center text-center">
       
        <h1 className="titleHead">
          Crossfit Throwdown
        </h1>
        <br></br>
        <h3>
        Current Score: 
        <br></br>
        Best Score: 
      </h3>
      </div>
    );
  }

export default Title;