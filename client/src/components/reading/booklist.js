import React from "react";
import "./profile.css";
import { FaCheckSquare } from "react-icons/fa";
function Booklist(props) {
  return (
    <div onClick={props.onclick} className="booklist">
      <img
        src={props.imgurl ? props.imgurl["thumbnail"] : ""}
        className="img"
        alt={props.alt}
      />
      <h1 className="title-header">{props.title}</h1>
      <p className="author-p">Author: {props.author}</p>
      {/* <a href={props.link}>link</a> */}
      <p>Pg count: {props.pgcount} </p>
      <div className="add-book">
        <p>Click to add book to reading</p>
        <FaCheckSquare
          onClick={props.onclick2}
          className="check-mark"
          size="40px"
        />
      </div>
    </div>
  );
}

export default Booklist;
