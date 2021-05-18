import React, { useState } from "react";
import "./profile.css";

function Search(props) {
  return (
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
        <input
          type="text"
          className="book-search"
          placeholder={props.placeholder2}
        />
        {/* <input
          type="button"
          className="submit-btn"
          onClick={props.submit}
          value="search"
        /> */}
      </div>
    </div>
  );
}

export default Search;
