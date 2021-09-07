import React, { useState } from "react";
import "./profile.css";
import Slide from "react-reveal/Slide";
function Search(props) {
  return (
    <Slide bottom>
      <div className="search-bar">
        <h1>Search for a new book:</h1>
        <div className="search-cont">
          <input
            value={props.value}
            type="text"
            className="book-search"
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
          {/* <input
          type="text"
          className="book-search"
          placeholder={props.placeholder2}
        /> */}
          {/* <input
          type="button"
          className="submit-btn"
          onClick={props.submit}
          value="search"
        /> */}
        </div>
      </div>
    </Slide>
  );
}

export default Search;
