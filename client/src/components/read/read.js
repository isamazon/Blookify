import React, { useEffect } from 'react';
//
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// Components
import Nav from '../navbar';
import ReadPost from './readpost';
import Sidebar from '../reading/sidebar';
// CSS
import '../reading/profile.css';
import '../reading/bookpost.css';

const Read = () => {
  const readBooks = useSelector((state) => state.read);
  // console.log(readBooks);

  return (
    <Container fluid className="main-container">
      <Nav />
      <Row className="profile-row">
        <Sidebar />
        <div className="reading-container">
          {readBooks.map((post) => (
            <ReadPost
              key={post._id}
              post={post}
              // setCurrentId={setCurrentId}
              // // This is only from edit form component
              // currentId={currentId}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default Read;
