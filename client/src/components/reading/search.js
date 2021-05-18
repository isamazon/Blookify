import React, { useState } from "react";
import "./profile.css";

function Search(props) {
  return (
    <div className="search-bar">
      <h1>Search for a new book:</h1>
      <div className="search-cont">
        <input
          value={props.title}
          type="text"
          name="booktitle"
          className="book-search"
          placeholder="book title"
        />
        <input
          value={props.author}
          type="text"
          name="booktitle"
          className="author-search"
          placeholder="Authors last name"
        />
        <input
          type="button"
          className="submit-btn"
          onClick={props.submit}
          value="search"
        />
      </div>
    </div>
  );
}

export default Search;
