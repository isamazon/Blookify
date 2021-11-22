import React, { useState, useEffect } from 'react';

import '../reading/profile.css';
// Depenencies
import { Row } from 'react-bootstrap';
// Components
import Nav from '../navbar';
import Sidebar from '../reading/sidebar';
import TbrPost from './tbrpost';
import Zoom from 'react-reveal/Zoom';
// Actions
import { getTbrBook } from '../../actions/tbr';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function ToBeRead() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  // Retrieving post Data
  useEffect(() => {
    dispatch(getTbrBook());
  }, [currentId, dispatch]);

  const posts = useSelector((state) => state.tbr);
  return (
    <div className="main-container tbr">
      <Nav menuicon="menu-link-hidden" />
      <Row className="profile-row">
        <Sidebar />
        <div className="tbr-container">
          <h1 className="header-tbr">To be read:</h1>
          <div className="tbr-books-cnt">
            {posts.map((post) => (
              <TbrPost key={post._id} post={post} />
            ))}
          </div>
        </div>
      </Row>
    </div>
  );
}

export default ToBeRead;
