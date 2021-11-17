import React, { useState } from 'react';
// CSS
import '../reading/profile.css';
// Dependencies
import {
  FaCaretUp,
  FaCaretDown,
  FaWindowClose,
  FaBookmark,
} from 'react-icons/fa';
import { Col } from 'react-bootstrap';
// components
import TbrBookBg from './tbrbookbg';
function TbrPost({ post }) {
  // Data for the tbr books

  const [descModal, setDescModal] = useState(false);
  const ToggleDescModal = () => {
    setDescModal(!descModal);
  };
  const TurnOffDescModal = () => {
    setDescModal(false);
  };
  return (
    <div className="tbr-book-post-cnt">
      <TbrBookBg />
      <div className="tbr-book" onMouseLeave={TurnOffDescModal}>
        <div className="tbr-book-shadow-line"></div>
        <div className="tbr-book-shadow-line-right"></div>
        <p className="title-p">{post.title} </p>
        <div className="bookimg-cnt">
          <div className="inner-book-cnt">
            <img src={post.selectedFile} alt="" className="book-img" />
          </div>
        </div>
        <p className="pagecount-p">Page count: {post.pageLength} </p>
        <h1 className="author-header">{post.author}</h1>
        {descModal ? (
          <div className="description-p" onClick={ToggleDescModal}>
            <FaWindowClose className="desc-icons close" /> Close Description
            <FaWindowClose className="desc-icons close" />
          </div>
        ) : (
          <div className="description-p" onClick={ToggleDescModal}>
            <FaCaretDown className="desc-icons " /> Description
            <FaCaretDown className="desc-icons " />
          </div>
        )}
        <div
          className={descModal ? 'desc-box' : 'none'}
          //   onMouseLeave={ToggleDescModal}
        >
          <FaCaretDown className="desc-caret" />
          <p className="desc-p">{post.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TbrPost;
