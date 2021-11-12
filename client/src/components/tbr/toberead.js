import React from 'react';
import './tbr.css';
import '../reading/profile.css';
// Depenencies
import { Row } from 'react-bootstrap';
// Components
import Nav from '../navbar';
import Sidebar from '../reading/sidebar';
function ToBeRead() {
  return (
    <div className="main-container">
      <Nav menuicon="menu-link-hidden" />
      <Row className="profile-row">
        <Sidebar />
      </Row>
    </div>
  );
}

export default ToBeRead;
