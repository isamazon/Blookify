import React from 'react';
// CSS
import '../reading/profile.css';
// Dependencies
import { Col } from 'react-bootstrap';
function TbrPost() {
  return (
    <Col xl={2} className="tbr-book-post-cnt">
      <div className="tbr-book">
        <p className="title-p">Title of the book here</p>
        <div className="bookimg-cnt">
          <div className="inner-book-cnt">
            <img src="" alt="" className="book-img" />
          </div>
        </div>
      </div>
    </Col>
  );
}

export default TbrPost;
