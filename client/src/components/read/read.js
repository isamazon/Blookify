import React, { useEffect } from 'react';
//
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// Components

import ReadPost from './readpost';
import Sidebar from '../reading/sidebar';
import Emptybook from '../reading/emptybook';
// CSS
import '../reading/profile.css';
import '../reading/bookpost.css';

const Read = () => {
  const readBooks = useSelector((state) => state.read);
  // console.log(readBooks);

  return !readBooks.length ? (
    <Emptybook
      emptybookp="You have no finished books here yet!"
      routeto="/currentlyreading"
      linktext="Go to reading page here"
    />
  ) : (
    <Container fluid className="main-container">
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
