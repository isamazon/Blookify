import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgress } from "@material-ui/core";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Nav from "../navbar";
import Sidebar from "./sidebar";

function Emptybook() {
  return (
    <Container fluid className="main-container">
      <Nav />
      <Row className="profile-row">
        <Sidebar />
        <Fade>
          <div className="blank-reading-container">
            <p>No Books has been uploaded here yet!</p>
            <Link className="link-to-add" to="/Addbook">
              Add a book here!
            </Link>
          </div>
        </Fade>
      </Row>
    </Container>
  );
}

export default Emptybook;
