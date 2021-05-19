import React from "react";
import "./profile.css";

function Booklist(props) {
  console.log(props.imgurl);
  return (
    <div className="booklist">
      <img
        src={props.imgurl ? props.imgurl["thumbnail"] : ""}
        className="img"
        alt={props.alt}
      />
      <h1 className="title-header">{props.title}</h1>
      <p className="author-p">Author: {props.author}</p>
      <a href={props.link}>link</a>
    </div>
  );
}

export default Booklist;
