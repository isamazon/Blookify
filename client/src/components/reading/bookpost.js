import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { Zoom, Slide } from 'react-reveal';
import { FaCheck } from 'react-icons/fa';
// CSS
import './bookpost.css';
const BookPost = ({ post }) => {
  const [currentId, setCurrentId] = useState(null);
  // Setting the edit container on/off
  const [BookEdit, setBookEdit] = useState('false');
  const [deleteBook, setDeleteBook] = useState('false');
  const [readBook, setReadBook] = useState('false');
  const ToggleEdit = () => {
    setBookEdit(!BookEdit);
  };
  const ToggleDelete = () => {
    setDeleteBook(!deleteBook);
  };
  const ToggleRead = () => {
    setReadBook(!readBook);
  };
  return (
    <Col xl={3} lg={6} sm={6} xs={12} className="book-card">
      <div className="inner-card">
        <div className="top-info">
          <Button
            className="edit-button"
            onClick={() => {
              ToggleEdit();
            }}
          >
            <MoreHorizon fontSize="large" />
          </Button>
          {/* Book edit container */}
          <Zoom>
            <div className={BookEdit ? 'blank' : 'edit-container'}>
              <h3>Edit book info!</h3>
              <form className="update-form">
                <label className="update-title">Update title:</label>
                <input className="input" type="text" name="title" />
                <label className="update-title">Update author:</label>
                <input className="input" type="text" name="author" />
                <label className="update-title">Update Pg count:</label>
                <input className="input" type="text" name="author" />
                <button className="update-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </Zoom>
          <h4>{post.title}</h4>
          <img className="post-image" src={post.selectedFile} alt="" />
        </div>
        <div className="bottom-info">
          <h3>Author: {post.author}</h3>
          <p className="pagecount-p">Page count: {post.pageLength}</p>
          <div className="button-container">
            {/* Done reading button */}
            <Button className="done-button" onClick={ToggleRead}>
              <FaCheck size="20px" />
            </Button>
            {/* Delete book  */}
            <Button className="delete-button" onClick={ToggleDelete}>
              <DeleteIcon fontSize="medium" />
            </Button>
          </div>
          {/* Read container */}
          <Slide down>
            <div className={readBook ? 'blank-delete' : 'done-reading-cont'}>
              <p>Finished reading?</p>
              <div className="delete-buttons">
                <Button className="yes-btn">yes</Button>
                <Button className="no-btn" onClick={ToggleRead}>
                  no
                </Button>
              </div>
            </div>
          </Slide>
          {/* Delete book modal */}
          <Slide down>
            <div
              className={deleteBook ? 'blank-delete' : 'delete-book-container'}
            >
              <p>Delete book?</p>
              <div className="delete-buttons">
                <Button className="yes-btn">yes</Button>
                <Button className="no-btn" onClick={ToggleDelete}>
                  no
                </Button>
              </div>
            </div>
          </Slide>
          <p className="date-added">
            Book added {moment(post.createdAt).fromNow()}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default BookPost;
