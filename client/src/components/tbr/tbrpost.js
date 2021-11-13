import React from 'react';
// CSS
import '../reading/profile.css';
// Dependencies
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import { Col } from 'react-bootstrap';
function TbrPost() {
  return (
    <Col xl={2} className="tbr-book-post-cnt">
      <div className="tbr-book">
        <p className="title-p">Title of the book </p>
        <div className="bookimg-cnt">
          <div className="inner-book-cnt">
            <img src=" " alt="" className="book-img" />
          </div>
        </div>
        <p className="pagecount-p">Page count: </p>
        <h1 className="author-header">Author Name</h1>
        <div className="description-p">
          <FaCaretDown /> Description <FaCaretDown />
        </div>
      </div>
    </Col>
  );
}

export default TbrPost;
