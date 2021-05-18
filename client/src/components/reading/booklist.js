import React from "react";
import "./profile.css";

function Booklist(props) {
  return (
    <div className="booklist">
      <ul>
        <li>
          <img src={props.imgurl} alt="" />
          <p>{props.title}</p>
        </li>
      </ul>
    </div>
  );
}

export default Booklist;
