import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "../navbar";
// styles
import "./profile.css";
function CurrentlyReading() {
  return (
    <div>
      <Nav />
      <Container fluid className="profile-main-cnt">
        <div className="profile-container"></div>
      </Container>
    </div>
  );
}

export default CurrentlyReading;