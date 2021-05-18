import React from "react";

function Bookrow(props) {
  return (
    <div className="row-cont">
      <img src={props.img} alt="" />
      <h1>{props.booktitle}</h1>
    </div>
  );
}

export default Bookrow;
