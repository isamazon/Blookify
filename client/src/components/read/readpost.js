import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { Zoom, Slide, Flip } from 'react-reveal';
import Fade from 'react-reveal/Fade';
import { FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteReadBook } from '../../actions/readposts';
// Actions

// components

// CSS
import '../reading/bookpost.css';

const ReadPost = ({ post }) => {
  const [deleteBook, setDeleteBook] = useState('false');
  const ToggleDelete = () => {
    setDeleteBook(!deleteBook);
  };
  const dispatch = useDispatch();
  return (
    <Col xxl={2} xl={3} lg={4} sm={6} xs={12} className="book-card">
      <Zoom>
        <div className="inner-card">
          <div className="top-info">
            <h4>{post.title}</h4>
            <img className="post-image" src={post.selectedFile} alt="" />
          </div>
          <div className="bottom-info">
            <h3>Author: {post.author}</h3>
            <p className="pagecount-p">Page count: {post.pageLength}</p>
            <h3 className="description-h3">Description: </h3>
            <p className="description"> {post.description} </p>
            <div className="button-container">
              {/* Delete book  */}
              <Button className="delete-button" onClick={ToggleDelete}>
                <DeleteIcon fontSize="medium" />
              </Button>
            </div>

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
                      dispatch(deleteReadBook(post._id));
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

export default ReadPost;
