import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Components
import Nav from "../navbar";
import Sidebar from "./sidebar";
import BookPost from "./bookpost";
import Emptybook from "./emptybook";
// redux
import { useSelector } from "react-redux";
// styles
import "./profile.css";

function CurrentlyReading() {
  const posts = useSelector((state) => state.posts);
  // Ternary operator keeping page blank if no posts are there
  return !posts.length ? (
    <Container fluid className="main-container">
      <Nav />
      <Row className="profile-row">
        <Sidebar />
        <div className="reading-container">
          <h1>Currently reading:</h1>
          <BookPost />
          <BookPost />
          <BookPost />
          <BookPost />
          <BookPost />
          <BookPost />
          {/* {posts.map((post) => (
            <BookPost />
          ))} */}
        </div>
      </Row>
    </Container>
  ) : (
    // Component that has an empty box since no books have been posted
    <Emptybook />
  );
}

export default CurrentlyReading;
