import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './booklist.css';
import { FaCheckSquare } from 'react-icons/fa';
//
import { createPost } from '../../actions/posts';
function Booklist(props) {
  const bookData = {
    title: props.title,
    author: props.author[0],
    pageLength: props.pgcount,
    selectedFile: props.imgurl ? props.imgurl['thumbnail'] : '',
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookData);
    dispatch(createPost(bookData));
  };

  return (
    <div className="booklist">
      <img
        value={props.imgvalue}
        src={props.imgurl ? props.imgurl['thumbnail'] : ''}
        className="img"
        alt={props.alt}
      />
      <h1 className="title-header" value={props.titleValue}>
        {props.title}
      </h1>
      <p className="author-p">Author: {props.author}</p>
      {/* <a href={props.link}>link</a> */}
      <p className="pg-count">Pg count: {props.pgcount} </p>
      <div className="add-book">
        <p>Click to add book to reading</p>
        <FaCheckSquare
          onClick={(e) => {
            handleSubmit(e);
            props.Toggle(e);
          }}
          className="check-mark"
          size="40px"
        />
      </div>
    </div>
  );
}

export default Booklist;
