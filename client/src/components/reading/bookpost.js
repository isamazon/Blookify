import React from 'react';
import { Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
// CSS
import './bookpost.css';
const BookPost = ({ post }) => {
  return (
    <Col xl={3} lg={6} sm={6} xs={12} className="book-card">
      <div className="inner-card">
        <div className="top-info">
          <h4>{post.title}</h4>
          <img className="post-image" src={post.selectedFile} alt="" />
        </div>
        <div className="bottom-info">
          <h3>Author: {post.author}</h3>
          <p className="pagecount-p">Page count: {post.pageLength}</p>
          <Button className="delete-button">
            <DeleteIcon fontSize="large" />
          </Button>
          <p className="date-added">
            Book added {moment(post.createdAt).fromNow()}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default BookPost;
