import React from "react";
import "./style.css";




function Title(props) {
    return (
      <div className="align-items-center jumbotron header-hgt header-pad head-mar-top nav-shadow text-center text-center">
       
        <h1 className="titleHead">
          Crossfit Throwdown
        </h1>
        <br></br>
        <h3>
        Current Score: {props.currentScore}
        <br></br>
        Best Score: {props.bestScore}
      </h3>
      </div>
    );
  }

// const Title = props => (
//   <div>
//     <ul>
//       <li>Current Score: {props.score}</li>
//       <li>Best Score: {props.besScore}</li>
//     </ul>
//   </div>
// )

export default Title;