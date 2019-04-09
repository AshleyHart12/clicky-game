import React from "react";
import "./style.css";


const FriendCard = props => (
    <div onClick = {() => props.setClicked(props.id)} className="card">
    <div className = "img-container">
    <img alt={props.name} src={props.image} />
    
    </div>
    </div>
);

// function FriendCard(props) {
//     return(
//         <div className="card">
//         <div className="img-container">
//             <img alt={props.name} src={props.image} />        
//         </div>
//         {/* Make on click functin inside span tag? */}
//         <span></span>
        
//   </div>

//     );
// }


export default FriendCard;