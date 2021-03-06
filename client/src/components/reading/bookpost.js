import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { Zoom, Slide, Flip } from 'react-reveal';
import Fade from 'react-reveal/Fade';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
// Actions
import { deletePost } from '../../actions/posts';
import { createReadBook } from '../../actions/readposts';
import { useDispatch } from 'react-redux';
// components
import EditForm from './editform';
// CSS
import './bookpost.css';

const BookPost = ({ post, currentId, setCurrentId }) => {
  // Data for read Books
  const readBookData = {
    title: post.title,
    author: post.author,
    pageLength: post.pageLength,
    description: post.description,
    selectedFile: post.selectedFile,
  };
  const dispatch = useDispatch();
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

  // Submit function to send read bookdata to be sent to api/route
  const handleSubmit = () => {
    console.log(readBookData);
    dispatch(createReadBook(readBookData));
  };
  return (
    <Col xxl={2} xl={3} lg={4} sm={6} xs={12} className="book-card">
      <Zoom>
        <div className="inner-card">
          <div className="top-info">
            {/* <Button
              className="edit-button"
              onClick={() => {
                ToggleEdit();
                setCurrentId(post._id);
                console.log(post._id);
              }}
            >
              {BookEdit ? (
                <FaEdit size="20px" color="white" />
              ) : (
                <AiOutlineClose size="20px" color="white" />
              )}
            </Button> */}
            {/* Book edit container */}
            {/* <Fade opposite when={!BookEdit}>
              <div className={BookEdit ? 'blank' : 'edit-container'}>
                <h3>Edit book info!</h3>
                <EditForm currentId={currentId} />
              </div>
            </Fade> */}
            <h4>{post.title}</h4>
            <img className="post-image" src={post.selectedFile} alt="" />
          </div>
          <div className="bottom-info">
            <h3>Author: {post.author}</h3>
            <p className="pagecount-p">Page count: {post.pageLength}</p>
            <h3 className="description-h3">Description: </h3>
            <p className="description"> {post.description} </p>
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
            <Flip top oppposite when={!readBook}>
              <div className={readBook ? 'blank-delete' : 'done-reading-cont'}>
                <p>Finished reading?</p>
                <div className="delete-buttons">
                  <Button
                    className="yes-btn"
                    onClick={(e) => {
                      handleSubmit();
                      dispatch(deletePost(post._id));
                    }}
                  >
                    yes
                  </Button>
                  <Button className="no-btn" onClick={ToggleRead}>
                    no
                  </Button>
                </div>
              </div>
            </Flip>
            {/* Delete book modal */}
            <Flip top opposite when={!deleteBook}>
              <div
                className={
                  deleteBook ? 'blank-delete' : 'delete-book-container'
                }
              >
                <p>Delete book?</p>
                <div className="delete-buttons">
                  <Button
                    className="yes-btn"
                    onClick={() => {
                      dispatch(deletePost(post._id));
                    }}
                  >
                    yes
                  </Button>
                  <Button
                    className="no-btn"
                    onClick={() => {
                      ToggleDelete();
                    }}
                  >
                    no
                  </Button>
                </div>
              </div>
            </Flip>
            <p className="date-added">
              Book added {moment(post.createdAt).fromNow()}
            </p>
          </div>
        </div>
      </Zoom>
    </Col>
  );
};

export default BookPost;
