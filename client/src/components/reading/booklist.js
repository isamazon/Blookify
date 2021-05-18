import React from "react";
import "./profile.css";

function Booklist(props) {
  return (
    <div className="booklist">
      <img src={props.imgurl} className="img" alt="" />
      <h1 className="h1">{props.title}</h1>
      <p>{props.synopsis}</p>
      <a href={props.link} target="_blank">
        {props.link}
      </a>
    </div>
  );
}

export default Booklist;
