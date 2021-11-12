import React from 'react';

import '../reading/profile.css';
// Depenencies
import { Row } from 'react-bootstrap';
// Components
import Nav from '../navbar';
import Sidebar from '../reading/sidebar';
import TbrPost from './tbrpost';
function ToBeRead() {
  return (
    <div className="main-container tbr">
      <Nav menuicon="menu-link-hidden" />
      <Row className="profile-row">
        <Sidebar />
        <div className="tbr-container">
          <h1 className="header-tbr">To be read:</h1>
          <div className="tbr-books-cnt">
            <TbrPost />
            <TbrPost />
            <TbrPost />
            <TbrPost />
            <TbrPost />
            <TbrPost />
            <TbrPost />
            <TbrPost />
            <TbrPost />
            <TbrPost />
            <TbrPost />
          </div>
        </div>
      </Row>
    </div>
  );
}

export default ToBeRead;
