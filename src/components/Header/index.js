import React from "react";
import "./style.css";

function Header(props) {
 return (
   <div className="header">
     <div className="title">{props.children}</div>
     <div className="message">Click an image to begin!</div>
     <div className="scores">
      Score: {props.score} | Topscore: {props.highscore}
     </div>
    </div>
 );
}
export default Header;
