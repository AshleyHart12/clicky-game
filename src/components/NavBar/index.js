import React from "react";


function NavBar({
  message,
  score,
  topScore
}) {
  return ( <
    div className = "row" >

    <
    nav className = "bg-nav navbar nav-height nav-shadow p-0 tp-text" >
    <
    ul className = "row center list-inline m-0 nav-fill nav-height nav-width" >
    <
    div className = "col-sm-4" >
    <
    li

    className = "col list-inline-item my-auto nav-calc-font m-0 p-0 text-center" >
    {
      message
    } < br / >
    Try to click on all images only ONCE <
    /li> <
    /div> <
    div className = "col-sm-4" >
    <
    li className = "col list-inline-item my-auto nav-calc-font p-0 m-0 text-center" >
    Click the same one twice, start over!
    <
    /li> <
    /div> {
      /* <div className="col-sm-4">
                <li className="col list-inline-item my-auto nav-calc-font m-0 p-0 score-li-width text-right">
                  SCORE: {score} <br></br> HIGH SCORE: {topScore}
                </li>
                </div> */
    } <
    /ul> <
    /nav> <
    /div>
  );
}

export default NavBar;