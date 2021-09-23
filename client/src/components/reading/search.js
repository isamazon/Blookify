import React from 'react';
import './profile.css';
import Slide from 'react-reveal/Slide';
import Bookmodal from './addbookmodal';
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
        </div>
        <Bookmodal />
      </div>
    </Slide>
  );
}

export default Search;
