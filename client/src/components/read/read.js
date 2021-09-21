import React from 'react';
//
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
// Components
import Nav from '../navbar';
import BookPost from '../reading/bookpost';
import Sidebar from '../reading/sidebar';
import '../reading/profile.css';
import '../reading/bookpost.css';
function Read() {
  return (
    <Container fluid className="main-container">
      <Nav />
      <Row className="profile-row">
        <Sidebar />
      </Row>
    </Container>
  );
}

export default Read;
