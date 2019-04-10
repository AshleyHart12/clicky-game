import React from "react";



function NavBar({ message, score, topScore }) {
    return (
      <nav className="bg-nav fixed-top navbar nav-height nav-shadow p-0 tp-text">
        <ul className="row center list-inline m-0 nav-fill nav-height nav-width">
          <li
            
            className="col list-inline-item my-auto nav-calc-font m-0 p-0 text-center"
          >
            {message} <br/>
            BUT NOT THE SAME ONE TWICE!
          </li>
          <li className="col list-inline-item my-auto nav-calc-font p-0 m-0 text-center">
           TRY TO CLICK ALL 24 <br/>
            IMAGES TO WIN!
          </li>
          <li className="col list-inline-item my-auto nav-calc-font m-0 p-0 score-li-width text-center">
            SCORE: {score} | HIGH SCORE: {topScore}
          </li>
        </ul>
      </nav>
    );
  }

  export default NavBar;