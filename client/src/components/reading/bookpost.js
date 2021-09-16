import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { Slide } from 'react-reveal';
import { FaCheck } from 'react-icons/fa';
// CSS
import './bookpost.css';
const BookPost = ({ post }) => {
  // Setting the edit container on/off
  const [BookEdit, setBookEdit] = useState('false');
  const ToggleEdit = () => {
    setBookEdit(!BookEdit);
  };
  return (
    <Col xl={3} lg={6} sm={6} xs={12} className="book-card">
      <div className="inner-card">
        <div className="top-info">
          <Button className="edit-button" onClick={ToggleEdit}>
            <MoreHorizon fontSize="large" />
          </Button>
          <Slide bottom cascade>
            <div className={BookEdit ? 'blank' : 'edit-container'}>
              <h3>Edit book info!</h3>
            </div>
          </Slide>
          <h4>{post.title}</h4>
          <img className="post-image" src={post.selectedFile} alt="" />
        </div>
        <div className="bottom-info">
          <h3>Author: {post.author}</h3>
          <p className="pagecount-p">Page count: {post.pageLength}</p>
          <div className="button-container">
            <Button className="done-button">
              <FaCheck size="20px" />
            </Button>
            <Button className="delete-button">
              <DeleteIcon fontSize="medium" />
            </Button>
          </div>

          <p className="date-added">
            Book added {moment(post.createdAt).fromNow()}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default BookPost;
