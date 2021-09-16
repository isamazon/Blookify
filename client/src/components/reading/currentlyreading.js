import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Components
import Nav from '../navbar';
import Sidebar from './sidebar';
import BookPost from './bookpost';
import Emptybook from './emptybook';
// redux
import { useSelector } from 'react-redux';
// styles
import './profile.css';
import './bookpost.css';

const CurrentlyReading = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  // Ternary operator keeping page blank if no posts are there
  return !posts.length ? (
    // Component that has an empty box since no books have been posted
    <Emptybook />
  ) : (
    <Container fluid className="main-container">
      <Nav />
      <Row className="profile-row">
        {/* <h1>Currently reading:</h1> */}
        <Sidebar />
        <div className="reading-container">
          {posts.map((post) => (
            <BookPost key={post._id} post={post} />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default CurrentlyReading;
